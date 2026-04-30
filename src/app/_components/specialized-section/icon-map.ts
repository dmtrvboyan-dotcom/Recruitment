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
    color: "text-blue-600", 
    bg: "bg-blue-50" 
  },
  "cloud": { 
    icon: Cloud, 
    color: "text-cyan-600", 
    bg: "bg-cyan-50" 
  },
  "shield-check": { 
    icon: ShieldCheck, 
    color: "text-orange-600", 
    bg: "bg-orange-50" 
  },
  "database": { 
    icon: Database, 
    color: "text-indigo-600", 
    bg: "bg-indigo-50" 
  },
  "brain-circuit": { 
    icon: BrainCircuit, 
    color: "text-emerald-600", 
    bg: "bg-emerald-50" 
  },
  "pen-tool": { 
    icon: PenTool, 
    color: "text-pink-600", 
    bg: "bg-pink-50" 
  },
  "smartphone": { 
    icon: Smartphone, 
    color: "text-purple-600", 
    bg: "bg-purple-50" 
  },
  "crown": { 
    icon: Crown, 
    color: "text-amber-600", 
    bg: "bg-amber-50" 
  },
}