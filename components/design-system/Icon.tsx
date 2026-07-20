import type { SVGProps } from "react";
import { cn } from "@/lib/cn";

export type IconSize = "xs" | "sm" | "md" | "lg" | "xl";

const sizeClasses: Record<IconSize, string> = {
  xs: "h-3.5 w-3.5",
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
  xl: "h-8 w-8",
};

type IconProps = SVGProps<SVGSVGElement> & {
  size?: IconSize;
  title?: string;
};

function BaseIcon({
  size = "md",
  className,
  title,
  children,
  ...props
}: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : "presentation"}
      className={cn("shrink-0 stroke-current", sizeClasses[size], className)}
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
}

export function IconSearch(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </BaseIcon>
  );
}

export function IconMenu(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </BaseIcon>
  );
}

export function IconClose(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </BaseIcon>
  );
}

export function IconCheck(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="m5 12 4.5 4.5L19 7" />
    </BaseIcon>
  );
}

export function IconChevronRight(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="m9 6 6 6-6 6" />
    </BaseIcon>
  );
}

export function IconArrowRight(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </BaseIcon>
  );
}

export function IconBuilding(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M4 20h16M6 20V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14" />
      <path d="M9 8h.01M12 8h.01M15 8h.01M9 12h.01M12 12h.01M15 12h.01M9 16h.01M12 16h.01M15 16h.01" />
    </BaseIcon>
  );
}

export function IconBook(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 0-3 3V4Z" />
      <path d="M5 20a3 3 0 0 1 3-3h12" />
    </BaseIcon>
  );
}

export function IconShield(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" />
      <path d="m9.5 12 1.8 1.8L15 10" />
    </BaseIcon>
  );
}

export function IconPhone(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M7 3h3l2 5-2 1a12 12 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 5 5a2 2 0 0 1 2-2Z" />
    </BaseIcon>
  );
}

export function IconMail(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </BaseIcon>
  );
}

export function IconSun(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </BaseIcon>
  );
}

export function IconMoon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4 7 7 0 0 0 20 14.5Z" />
    </BaseIcon>
  );
}

export function IconAlert(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 9v4M12 17h.01" />
      <path d="M10.3 4.3 2.8 17a2 2 0 0 0 1.7 3h15a2 2 0 0 0 1.7-3L13.7 4.3a2 2 0 0 0-3.4 0Z" />
    </BaseIcon>
  );
}

export function IconInfo(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5M12 8h.01" />
    </BaseIcon>
  );
}

export function IconLoader(props: IconProps) {
  return (
    <BaseIcon className={cn("animate-spin-ds", props.className)} {...props}>
      <path d="M12 3a9 9 0 1 1-9 9" />
    </BaseIcon>
  );
}

export function IconSnowflake(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 3v18M5.6 6.6l12.8 10.8M18.4 6.6 5.6 17.4M4 12h16" />
      <path d="m9 5 3-2 3 2M9 19l3 2 3-2" />
    </BaseIcon>
  );
}

export function IconThermometer(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M10 14.5V6a2 2 0 1 1 4 0v8.5a3.5 3.5 0 1 1-4 0Z" />
      <path d="M12 16.5v1" />
    </BaseIcon>
  );
}

export function IconRecycleAir(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M7 8h8a3 3 0 1 1 0 6h-1" />
      <path d="m12 11 2 3-2 3" />
      <path d="M17 16H9a3 3 0 1 1 0-6h1" />
      <path d="m12 13-2-3 2-3" />
    </BaseIcon>
  );
}

export function IconWind(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M4 9h10a2.5 2.5 0 1 0-2.5-2.5" />
      <path d="M4 13h13a2.5 2.5 0 1 1-2.5 2.5" />
      <path d="M4 17h7a2 2 0 1 1-2 2" />
    </BaseIcon>
  );
}

export const icons = {
  search: IconSearch,
  menu: IconMenu,
  close: IconClose,
  check: IconCheck,
  chevronRight: IconChevronRight,
  arrowRight: IconArrowRight,
  building: IconBuilding,
  book: IconBook,
  shield: IconShield,
  phone: IconPhone,
  mail: IconMail,
  sun: IconSun,
  moon: IconMoon,
  alert: IconAlert,
  info: IconInfo,
  loader: IconLoader,
  snowflake: IconSnowflake,
  thermometer: IconThermometer,
  recycleAir: IconRecycleAir,
  wind: IconWind,
} as const;

export type IconName = keyof typeof icons;

type IconComponentProps = IconProps & {
  name: IconName;
};

/** Generic icon renderer for dynamic icon names. */
export function Icon({ name, ...props }: IconComponentProps) {
  const Cmp = icons[name];
  return <Cmp {...props} />;
}
