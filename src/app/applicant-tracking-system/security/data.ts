import type { Metadata } from "next"
import type { LucideIcon } from "lucide-react"
import {
  Shield,
  Lock,
  BadgeCheck,
  ArchiveRestore
} from "lucide-react"


export const securityData = {
  tagline: "SECURITY & COMPLIANCE",
  title: "Enterprise-Grade Security",
  items: [
    {
      icon: Shield,
      title: "GDPR Compliant",
      description: "Full compliance with European data protection regulations.",
    },
    {
      icon: Lock,
      title: "Data Encryption",
      description: "256-bit encryption for all data in transit and at rest.",
    },
    {
      icon: BadgeCheck,
      title: "SOC 2 Type II",
      description: "Independently audited security controls and practices.",
    },
    {
      icon: ArchiveRestore,
      title: "Regular Backups",
      description: "Automated daily backups with disaster recovery protocols.",
    },
  ],
}