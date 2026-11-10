import type { ReactNode } from "react";

export type Tone = "white" | "light" | "dark" | "brand" | "accent";

export function Section({
  id,
  tone,
  className = "",
  children,
  ...rest
}: { id?: string; tone: Tone; className?: string; children?: ReactNode } & Omit<React.HTMLAttributes<HTMLElement>, "id">) {
  return (
    <section id={id} className={`lp-section lp-tone-${tone} ${className}`.trim()} {...rest}>
      {children}
    </section>
  );
}

export function Container({ className = "", children }: { className?: string; children?: ReactNode }) {
  return <div className={`lp-container ${className}`.trim()}>{children}</div>;
}
