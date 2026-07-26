import clsx from "clsx";
import type { ReactNode } from "react";
import classes from "./SectionHead.module.css";

interface ISectionHeadProps {
  label?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  className?: string;
}

/** Shared centered section header: label pill + title + subtitle. */
export function SectionHead({ label, title, subtitle, className }: ISectionHeadProps) {
  return (
    <div className={clsx(classes.head, className)}>
      {label && <span className={classes.label}>{label}</span>}
      <h2 className={classes.title}>{title}</h2>
      {subtitle && <p className={classes.subtitle}>{subtitle}</p>}
    </div>
  );
}
SectionHead.displayName = "SectionHead";
