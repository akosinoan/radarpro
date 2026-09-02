export default function VideoPlayer({ src, poster, title, className = '', ...rest }) {
  return (
    <video
      src={src}
      poster={poster}
      title={title}
      controls
      muted
      playsInline
      preload="none"
      className={`h-full w-full rounded-2xl bg-navy-950 ${className}`}
      {...rest}
    >
      Your browser does not support embedded video.
    </video>
  )
}
