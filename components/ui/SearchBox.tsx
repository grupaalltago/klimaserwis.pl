import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

type SearchBoxProps = {
  action?: string;
  method?: "get" | "post";
  name?: string;
  placeholder?: string;
  submitLabel?: string;
  className?: string;
};

/**
 * Single-field search — Apple-inspired, no decorative chrome.
 */
export function SearchBox({
  action = "/firmy",
  method = "get",
  name = "q",
  placeholder = "Miasto lub nazwa firmy",
  submitLabel = "Szukaj",
  className,
}: SearchBoxProps) {
  return (
    <form
      action={action}
      method={method}
      className={cn(
        "flex w-full flex-col gap-2 rounded-2xl border border-black/8 bg-white p-2 shadow-none sm:flex-row sm:items-center dark:border-border dark:bg-surface",
        className,
      )}
      role="search"
    >
      <label className="sr-only" htmlFor="hero-search">
        Szukaj
      </label>
      <input
        id="hero-search"
        name={name}
        type="search"
        placeholder={placeholder}
        autoComplete="off"
        className="min-h-12 w-full flex-1 rounded-xl bg-transparent px-4 text-[15px] text-foreground outline-none placeholder:text-subtle"
      />
      <Button type="submit" className="w-full shrink-0 sm:w-auto">
        {submitLabel}
      </Button>
    </form>
  );
}
