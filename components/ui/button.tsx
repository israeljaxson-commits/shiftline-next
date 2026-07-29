"use client";

import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type SharedProps = {
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
};

type ButtonProps = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "children">;

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-[linear-gradient(145deg,#151812,#0f130f)] text-paper hover:bg-[linear-gradient(145deg,#114b34,#0e3f2d)] hover:-translate-y-0.5 shadow-[0_18px_44px_-18px_rgba(18,20,15,0.62)]",
  secondary: "border border-charcoal/80 bg-white/78 text-charcoal hover:bg-charcoal hover:text-paper hover:-translate-y-0.5",
  ghost: "border border-white/30 bg-white/[0.02] text-white hover:bg-white hover:text-charcoal hover:-translate-y-0.5",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-4 text-sm",
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const baseClasses = cn(
    "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-bright focus-visible:ring-offset-2 focus-visible:ring-offset-paper",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={baseClasses} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={baseClasses} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
