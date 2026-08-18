import type { SVGProps } from "react";

export function TypeScriptIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M2 12c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8a8 8 0 0 1-8-8z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <text
        x="12"
        y="16"
        text-anchor="middle"
        font-size="8"
        font-weight="bold"
        fill="currentColor"
        font-family="system-ui, sans-serif"
      >
        TS
      </text>
    </svg>
  );
}
