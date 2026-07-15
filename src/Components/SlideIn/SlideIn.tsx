import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import clsx from "clsx";
import classes from "./SlideIn.module.css";

type TDirection = "top" | "bottom" | "left" | "right";

interface ISlideInProps {
  direction?: TDirection;
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
}

const directionClass: Record<TDirection, string> = {
  top: classes.top,
  bottom: classes.bottom,
  left: classes.left,
  right: classes.right,
};

/**
 * Declarative scroll-reveal wrapper. Replaces the old global
 * IntersectionObserver + `.nd-anim` / `.nd-anim--visible` mechanism.
 */
export function SlideIn({
  direction = "bottom",
  children,
  delay = 0,
  duration = 700,
  className,
  threshold = 0.12,
}: ISlideInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const style: CSSProperties = {
    animationDuration: `${duration}ms`,
    animationDelay: `${delay}ms`,
  };

  return (
    <div
      ref={ref}
      className={clsx(classes.root, directionClass[direction], isVisible && classes.visible, className)}
      style={style}
    >
      {children}
    </div>
  );
}
SlideIn.displayName = "SlideIn";
