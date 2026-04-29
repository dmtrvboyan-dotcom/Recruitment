import {
  Factory,
  Leaf,
  Truck,
  UtensilsCrossed,
  Store,
  Film,
  Scale,
  BookOpen,
  Banknote,
  Layers,
} from "lucide-react"

export const TAG_ICON_MAP: Record<string, React.ElementType> = {
  "Manufacturing (IT-focused)": Factory,
  "Renewable Energy": Leaf,
  "Logistics & Supply Chain": Truck,
  "Hospitality": UtensilsCrossed,
  "Retail": Store,
  "Media & Entertainment": Film,
  "Legal (LegalTech)": Scale,
  "Banking Tech": Banknote,
  "EdTech": BookOpen,
  _fallback: Layers,
}
