import type { SVGProps } from "react";

export function CSS3Icon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12 2L2 7v10l10 5 10-5V7L12 2z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M8 10h8M8 14h8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <text
        x="12"
        y="17"
        text-anchor="middle"
        font-size="6"
        font-weight="bold"
        fill="currentColor"
        font-family="system-ui, sans-serif"
      >
        3
      </text>
    </svg>
  );
}
