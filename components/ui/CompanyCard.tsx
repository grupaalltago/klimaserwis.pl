import { Badge, Button } from "@/components/design-system";
import { StarRating } from "@/components/ui/StarRating";
import type { MockCompany } from "@/lib/content/companies";
import { cn } from "@/lib/cn";

export type CompanyCardProps = {
  company: MockCompany;
  className?: string;
};

/**
 * Reusable company card for listings and homepage sections.
 */
export function CompanyCard({ company, className }: CompanyCardProps) {
  const profileHref = `/firmy/${company.slug}`;

  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-2xl border border-black/8 bg-white p-5 dark:border-border dark:bg-surface",
        className,
      )}
    >
      <div className="flex items-start gap-3">
        <div
          aria-hidden
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#f5f5f7] font-display text-sm font-semibold text-foreground dark:bg-surface-muted"
        >
          {company.logoInitials}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="truncate font-display text-lg font-semibold tracking-tight text-foreground">
            {company.name}
          </h3>
          <p className="mt-0.5 text-sm text-muted">{company.city}</p>
        </div>
      </div>

      <div className="mt-3">
        <StarRating value={company.rating} />
      </div>

      <ul className="mt-3 flex flex-wrap gap-1.5">
        {company.categories.map((category) => (
          <li key={category}>
            <Badge tone="brand">{category}</Badge>
          </li>
        ))}
      </ul>

      <p className="mt-3 line-clamp-2 flex-1 text-sm leading-relaxed text-muted">
        {company.description}
      </p>

      <div className="mt-5">
        <Button href={profileHref} variant="secondary" className="w-full">
          Zobacz profil
        </Button>
      </div>
    </article>
  );
}
