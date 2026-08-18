import type { SVGProps } from "react";

export function PostgreSQLIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <ellipse cx="12" cy="12" rx="6" ry="3" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M6 12c0-2 2.7-3 6-3s6 1 6 3M6 12c0 2 2.7 3 6 3s0-6 0-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M12 9v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}
