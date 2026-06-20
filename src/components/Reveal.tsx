import { useEffect, useRef, useState, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** delay in ms before the reveal transition starts */
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "span";
}

/**
 * Lightweight scroll-reveal wrapper using IntersectionObserver.
 * No animation dependency; respects prefers-reduced-motion via CSS (.reveal).
 */
const Reveal = ({ children, delay = 0, className = "", as = "div" }: RevealProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const Tag = as as keyof JSX.IntrinsicElements;

  return (
    <Tag
      // @ts-expect-error — ref typing across union of intrinsic elements
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
