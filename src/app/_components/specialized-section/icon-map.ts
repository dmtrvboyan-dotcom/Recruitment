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

export const ICON_MAP: Record<
  string,
  { icon: React.ComponentType<{ className?: string }>; color: string; bg: string }
> = {
  "code-2": {
    icon: Code2,
    color: "text-[#D85A30]",
    bg: "bg-[#1A1A2E]/5"
  },
  "cloud": {
    icon: Cloud,
    color: "text-[#D85A30]",
    bg: "bg-[#1A1A2E]/5"
  },
  "shield-check": {
    icon: ShieldCheck,
    color: "text-[#D85A30]",
    bg: "bg-[#1A1A2E]/5"
  },
  "database": {
    icon: Database,
    color: "text-[#D85A30]",
    bg: "bg-[#1A1A2E]/5"
  },
  "brain-circuit": {
    icon: BrainCircuit,
    color: "text-[#D85A30]",
    bg: "bg-[#1A1A2E]/5"
  },
  "pen-tool": {
    icon: PenTool,
    color: "text-[#D85A30]",
    bg: "bg-[#1A1A2E]/5"
  },
  "smartphone": {
    icon: Smartphone,
    color: "text-[#D85A30]",
    bg: "bg-[#1A1A2E]/5"
  },
  "crown": {
    icon: Crown,
    color: "text-[#D85A30]",
    bg: "bg-[#1A1A2E]/5"
  },
}