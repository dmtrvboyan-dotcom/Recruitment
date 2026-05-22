// components/ui/app-button.tsx
import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import { ArrowRight, Upload } from "lucide-react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2.5 min-w-[300px] px-8 py-4 text-xs font-semibold tracking-widest uppercase rounded-3xl transition-colors duration-200 cursor-pointer",
  {
    variants: {
      variant: {
        primary: "bg-brand-coral hover:bg-brand-coral-hover text-brand-white border border-brand-coral",
        outline: "border border-white bg-transparent text-brand-white hover:bg-brand-white hover:text-brand-navy",
        navy: "bg-brand-white text-brand-navy border-2 border-brand-navy hover:bg-brand-navy hover:text-brand-white",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

type BaseProps = VariantProps<typeof buttonVariants> & {
  children: React.ReactNode;
  className?: string;
  icon?: "arrow" | "upload";
  ping?: boolean;
} & { "aria-label"?: string };

type AppButtonProps =
  | (BaseProps & { href: string; onClick?: never })
  | (BaseProps & { onClick: () => void; href?: never });

export function AppButton({ href, onClick, variant, icon, ping, className, children, "aria-label": ariaLabel }: AppButtonProps) {
  const classes = cn(buttonVariants({ variant }), className);

  const inner = (
    <>
      {ping && (
        <span className="absolute inset-0 rounded-3xl animate-ping-slow bg-brand-coral opacity-30 pointer-events-none" />
      )}
      {icon === "upload" && <Upload className="w-4 h-4" />}
      {children}
      {icon === "arrow" && (
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
      )}
    </>
  );

  if (href) {
    return <Link href={href} className={cn("group", classes)} aria-label={ariaLabel}>{inner}</Link>;
  }

  return <button onClick={onClick} className={cn("group", classes)} aria-label={ariaLabel}>{inner}</button>;
}