import {
  Bookmark,
  Brain,
  Briefcase,
  Car,
  Cloud,
  Code2,
  Database,
  Gamepad2,
  HeartPulse,
  HelpCircle,
  Infinity as InfinityIcon,
  Landmark,
  MoreHorizontal,
  Palette,
  Phone,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Star,
  Users,
  type LucideIcon,
} from "lucide-react"

/**
 * Maps the `icon` string values used in `lib/constants/navigation.ts`
 * to their actual Lucide icon components. Keep keys in sync with
 * the navigation config.
 */
export const ICON_MAP: Record<string, LucideIcon> = {
  Bookmark,
  Brain,
  Briefcase,
  Car,
  Cloud,
  Code2,
  Database,
  Gamepad2,
  HeartPulse,
  HelpCircle,
  Infinity: InfinityIcon,
  Landmark,
  MoreHorizontal,
  Palette,
  Phone,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Star,
  Users,
}
