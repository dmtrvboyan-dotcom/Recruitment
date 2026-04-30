import { 
  Factory, Leaf, Truck, UtensilsCrossed, Store, 
  Film, Scale, Banknote, BookOpen, Layers, type LucideIcon 
} from "lucide-react"

export const TAG_ICON_MAP: Record<string, { icon: LucideIcon }> = {
  "Manufacturing (IT-focused)": { icon: Factory },
  "Renewable Energy": { icon: Leaf },
  "Logistics & Supply Chain": { icon: Truck },
  "Hospitality": { icon: UtensilsCrossed },
  "Retail": { icon: Store },
  "Media & Entertainment": { icon: Film },
  "Legal (LegalTech)": { icon: Scale },
  "Banking Tech": { icon: Banknote },
  "EdTech": { icon: BookOpen },
  _fallback: { icon: Layers },
}