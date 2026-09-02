/*
 * Cloudflare Pages Function: POST /api/enquiry
 *
 * Delivers the site-assessment form to the RadarPro inbox via Resend.
 * Requires two environment variables on the Pages project:
 *   RESEND_API_KEY  - secret, from resend.com/api-keys
 *   ENQUIRY_TO      - plain var, defaults to info@radarproph.com
 *
 * The client falls back to a mailto: link if this endpoint is unavailable,
 * so a missing key degrades rather than silently swallowing a lead.
 */

const REQUIRED = ['name', 'phone', 'siteType', 'location']

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json' },
  })

export async function onRequestPost({ request, env }) {
  let data
  try {
    data = await request.json()
  } catch {
    return json({ error: 'Malformed request.' }, 400)
  }

  // Honeypot: real people never fill this in. Report success so bots stop retrying.
  if (data.website) return json({ ok: true })

  const missing = REQUIRED.filter((f) => !String(data[f] ?? '').trim())
  if (missing.length) {
    return json({ error: `Missing required field(s): ${missing.join(', ')}` }, 400)
  }

  if (!env.RESEND_API_KEY) {
    return json({ error: 'Mail delivery is not configured.' }, 503)
  }

  const line = (label, value) => `${label}: ${String(value || '').trim() || '(not given)'}`
  const text = [
    line('Name', data.name),
    line('Company or association', data.company),
    line('Mobile', data.phone),
    line('Email', data.email),
    line('Type of site', data.siteType),
    line('Site location', data.location),
    '',
    'What they are trying to protect:',
    String(data.message || '').trim() || '(not given)',
  ].join('\n')

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      authorization: `Bearer ${env.RESEND_API_KEY}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      from: 'RadarPro Website <website@radarproph.com>',
      to: [env.ENQUIRY_TO || 'info@radarproph.com'],
      // Lets the team hit Reply and reach the visitor directly.
      ...(String(data.email || '').trim() ? { reply_to: data.email.trim() } : {}),
      subject: `Site assessment request: ${data.name} (${data.location})`,
      text,
    }),
  })

  if (!res.ok) {
    return json({ error: 'Upstream mail provider rejected the message.' }, 502)
  }

  return json({ ok: true })
}
