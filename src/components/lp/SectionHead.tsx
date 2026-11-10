import type { ReactNode } from "react";

export function SectionHead({
  label,
  title,
  lead,
  align = "center",
  as: As = "h2",
  id,
}: {
  label?: ReactNode;
  title: ReactNode;
  lead?: ReactNode;
  align?: "center" | "left";
  as?: "h1" | "h2";
  id?: string;
}) {
  return (
    <div className={`lp-head${align === "left" ? " lp-head--left" : ""}`}>
      {label ? <div className="lp-pill">{label}</div> : null}
      <As id={id}>{title}</As>
      {lead ? <p className="lp-lead">{lead}</p> : null}
    </div>
  );
}
