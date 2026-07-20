import { cn } from "@/lib/cn";

type StarRatingProps = {
  value: number;
  max?: number;
  className?: string;
};

function Star({ filled, half }: { filled: boolean; half?: boolean }) {
  if (half) {
    return (
      <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" aria-hidden>
        <defs>
          <linearGradient id="half-star">
            <stop offset="50%" stopColor="currentColor" />
            <stop offset="50%" stopColor="currentColor" stopOpacity="0.25" />
          </linearGradient>
        </defs>
        <path
          fill="url(#half-star)"
          d="M10 1.5l2.4 4.9 5.4.8-3.9 3.8.9 5.4L10 14.2 5.2 16.4l.9-5.4L2.2 7.2l5.4-.8L10 1.5z"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" aria-hidden>
      <path
        fill="currentColor"
        opacity={filled ? 1 : 0.25}
        d="M10 1.5l2.4 4.9 5.4.8-3.9 3.8.9 5.4L10 14.2 5.2 16.4l.9-5.4L2.2 7.2l5.4-.8L10 1.5z"
      />
    </svg>
  );
}

/**
 * Reusable 5-star rating display.
 */
export function StarRating({ value, max = 5, className }: StarRatingProps) {
  const clamped = Math.min(Math.max(value, 0), max);
  const label = `${clamped.toFixed(1)} na ${max}`;

  return (
    <div
      className={cn("inline-flex items-center gap-1.5 text-amber-500", className)}
      role="img"
      aria-label={label}
    >
      <span className="inline-flex items-center gap-0.5">
        {Array.from({ length: max }, (_, index) => {
          const starValue = index + 1;
          const filled = clamped >= starValue;
          const half = !filled && clamped >= starValue - 0.5;
          return <Star key={starValue} filled={filled} half={half} />;
        })}
      </span>
      <span className="text-xs font-medium tabular-nums text-muted">
        {clamped.toFixed(1)}
      </span>
    </div>
  );
}
