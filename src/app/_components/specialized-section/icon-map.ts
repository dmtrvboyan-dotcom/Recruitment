import {
  Code2,
  Cloud,
  ShieldCheck,
  Database,
  BrainCircuit,
  PenTool,
  Smartphone,
  Crown,
} from "lucide-react"

// All icons use navy color + light gray bg to match the reference design
export const ICON_MAP: Record<
  string,
  { icon: React.ComponentType<{ className?: string }>; color: string; bg: string }
> = {
  "code-2": {
    icon: Code2,
    color: "text-brand-navy",
    bg: "bg-gray-100",
  },
  "cloud": {
    icon: Cloud,
    color: "text-brand-navy",
    bg: "bg-gray-100",
  },
  "shield-check": {
    icon: ShieldCheck,
    color: "text-brand-navy",
    bg: "bg-gray-100",
  },
  "database": {
    icon: Database,
    color: "text-brand-navy",
    bg: "bg-gray-100",
  },
  "brain-circuit": {
    icon: BrainCircuit,
    color: "text-brand-navy",
    bg: "bg-gray-100",
  },
  "pen-tool": {
    icon: PenTool,
    color: "text-brand-navy",
    bg: "bg-gray-100",
  },
  "smartphone": {
    icon: Smartphone,
    color: "text-brand-navy",
    bg: "bg-gray-100",
  },
  "crown": {
    icon: Crown,
    color: "text-brand-navy",
    bg: "bg-gray-100",
  },
}
