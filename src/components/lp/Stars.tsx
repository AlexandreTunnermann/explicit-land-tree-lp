export function StarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path d="M12 2.5l2.9 6.2 6.8.7-5.1 4.6 1.4 6.7L12 17.3l-5.9 3.4 1.4-6.7-5.1-4.6 6.8-.7z" />
    </svg>
  );
}

export function Stars({ count = 5, label }: { count?: number; label?: string }) {
  return (
    <span className="lp-stars" role={label ? "img" : undefined} aria-label={label} aria-hidden={label ? undefined : true}>
      {Array.from({ length: count }).map((_, i) => (
        <StarIcon key={i} />
      ))}
    </span>
  );
}
