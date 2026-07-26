import clsx from "clsx";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import classes from "./Button.module.css";

type TVariant = "accent" | "outline";
type TSize = "md" | "lg" | "sm";

interface IBaseProps {
  variant?: TVariant;
  size?: TSize;
  className?: string;
  children: ReactNode;
}

type TButtonAsButton = IBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & { href?: undefined };

type TButtonAsLink = IBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children"> & { href: string };

export type TButtonProps = TButtonAsButton | TButtonAsLink;

const sizeClass: Record<TSize, string | undefined> = {
  md: undefined,
  lg: classes.lg,
  sm: classes.sm,
};

/** Shared pill button. Renders as <a> when `href` is provided, otherwise <button>. */
export function Button({ variant = "accent", size = "md", className, children, ...rest }: TButtonProps) {
  const cls = clsx(classes.btn, classes[variant], sizeClass[size], className);

  if ("href" in rest && rest.href !== undefined) {
    return (
      <a className={cls} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={cls} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
Button.displayName = "Button";
