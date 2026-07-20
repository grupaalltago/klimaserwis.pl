import Link from "next/link";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { cn } from "@/lib/cn";

export type FooterLinkItem = {
  href: string;
  label: string;
};

type FooterLinkGroupProps = {
  title: string;
  links: readonly FooterLinkItem[];
  className?: string;
};

export function FooterLinkGroup({
  title,
  links,
  className,
}: FooterLinkGroupProps) {
  return (
    <div className={cn("min-w-0", className)}>
      <Heading variant="h4" as="h2" className="text-[12px] sm:text-[12px]">
        {title}
      </Heading>
      <ul className="mt-3 space-y-2">
        {links.map((item) => (
          <li key={`${item.href}-${item.label}`}>
            <Link
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              <Text variant="small" as="span" className="text-[12px] text-muted">
                {item.label}
              </Text>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
