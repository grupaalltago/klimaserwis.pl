import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardFooter } from "@/components/ui/Card";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { StarRating } from "@/components/ui/StarRating";
import type { Company } from "@/types/Company";

export type CompanyCardProps = {
  company: Company;
  className?: string;
};

/**
 * Reusable company card for listings and homepage sections.
 */
export function CompanyCard({ company, className }: CompanyCardProps) {
  const profileHref = `/firma/${company.slug}`;

  return (
    <Card className={className} as="article">
      <div className="flex items-start gap-3">
        <div
          aria-hidden
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#f5f5f7] font-display text-sm font-semibold text-foreground dark:bg-surface-muted"
        >
          {company.logoInitials}
        </div>
        <div className="min-w-0 flex-1">
          <Heading variant="h4" as="h3" className="truncate">
            {company.name}
          </Heading>
          <Text variant="small" className="mt-0.5 text-muted">
            {company.city}
          </Text>
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

      <Text variant="small" className="mt-3 line-clamp-2 flex-1 text-muted">
        {company.description}
      </Text>

      <CardFooter>
        <Button href={profileHref} variant="secondary" className="w-full">
          Zobacz profil
        </Button>
      </CardFooter>
    </Card>
  );
}
