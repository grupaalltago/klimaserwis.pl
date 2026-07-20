import Link from "next/link";
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
      <h2 className="text-[12px] font-semibold tracking-tight text-foreground">
        {title}
      </h2>
      <ul className="mt-3 space-y-2">
        {links.map((item) => (
          <li key={`${item.href}-${item.label}`}>
            <Link
              href={item.href}
              className="text-[12px] leading-relaxed text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
