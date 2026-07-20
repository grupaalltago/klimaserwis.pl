import Link from "next/link";
import { siteConfig } from "@/lib/content/site";
import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  onClick?: () => void;
};

export function Logo({ className, onClick }: LogoProps) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className={cn(
        "font-display text-lg font-bold tracking-tight text-foreground sm:text-xl",
        className,
      )}
    >
      {siteConfig.name}
    </Link>
  );
}
