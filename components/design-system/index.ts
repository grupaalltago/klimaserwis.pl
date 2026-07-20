/**
 * Klimaserwis design system — theme, layout helpers, icons.
 * UI primitives live in `@/components/ui`.
 */

export { ThemeProvider, useTheme } from "@/components/design-system/ThemeProvider";
export type { ThemeMode } from "@/components/design-system/ThemeProvider";
export { ThemeToggle } from "@/components/design-system/ThemeToggle";

export {
  Heading,
  Text,
  Eyebrow,
  Lead,
  Caption,
} from "@/components/design-system/Typography";

export { Stack, Inline, Spacer } from "@/components/design-system/Stack";
export { Grid, GridItem } from "@/components/design-system/Grid";
export type { GridCols } from "@/components/design-system/Grid";

export { Container } from "@/components/ui/Container";
export type { ContainerSize } from "@/components/ui/Container";

export { Button } from "@/components/ui/Button";
export type {
  ButtonProps,
  ButtonSize,
  ButtonVariant,
} from "@/components/ui/Button";

export {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@/components/ui/Card";
export type { CardVariant } from "@/components/ui/Card";

export { Badge } from "@/components/ui/Badge";
export type { BadgeTone } from "@/components/ui/Badge";

export { Alert } from "@/components/design-system/Alert";
export type { AlertTone } from "@/components/design-system/Alert";

export { Spinner, Skeleton, EmptyState } from "@/components/design-system/States";

export {
  Icon,
  icons,
  IconSearch,
  IconMenu,
  IconClose,
  IconCheck,
  IconChevronRight,
  IconArrowRight,
  IconBuilding,
  IconBook,
  IconShield,
  IconPhone,
  IconMail,
  IconSun,
  IconMoon,
  IconAlert,
  IconInfo,
  IconLoader,
  IconSnowflake,
  IconThermometer,
  IconRecycleAir,
  IconWind,
} from "@/components/design-system/Icon";
export type { IconName, IconSize } from "@/components/design-system/Icon";

export { dsSpacing, dsTextSize } from "@/components/design-system/tokens";
export type { DsSpacing, DsTextSize } from "@/components/design-system/tokens";

export {
  Section,
  PageHeader,
  Divider,
  Input,
  Select,
  Textarea,
} from "@/components/ui";
