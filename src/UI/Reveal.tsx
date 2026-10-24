"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

interface RevealProps {
  as?: React.ElementType;
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function Reveal({
  as: Component = "div",
  children,
  delay = 0,
  className,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (!window.IntersectionObserver || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { rootMargin: "-60px" });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return (
    <Component
      ref={ref}
      className={`scroll-reveal ${className ?? ""}`}
      data-visible={visible}
      style={{ "--reveal-delay": `${delay}s` } as CSSProperties}
    >
      {children}
    </Component>
  );
}
