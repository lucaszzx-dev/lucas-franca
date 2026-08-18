export { ReactIcon } from "./ReactIcon";
export { JavaScriptIcon } from "./JavaScriptIcon";
export { NodeJsIcon } from "./NodeJsIcon";
export { HTML5Icon } from "./HTML5Icon";
export { CSS3Icon } from "./CSS3Icon";
export { GitIcon } from "./GitIcon";
export { GitHubIcon } from "./GitHubIcon";
export { TypeScriptIcon } from "./TypeScriptIcon";
export { PostgreSQLIcon } from "./PostgreSQLIcon";
export { DrizzleIcon } from "./DrizzleIcon";
export { NextJsIcon } from "./NextJsIcon";

import { ReactIcon } from "./ReactIcon";
import { JavaScriptIcon } from "./JavaScriptIcon";
import { NodeJsIcon } from "./NodeJsIcon";
import { HTML5Icon } from "./HTML5Icon";
import { CSS3Icon } from "./CSS3Icon";
import { GitIcon } from "./GitIcon";
import { GitHubIcon } from "./GitHubIcon";
import { TypeScriptIcon } from "./TypeScriptIcon";
import { PostgreSQLIcon } from "./PostgreSQLIcon";
import { DrizzleIcon } from "./DrizzleIcon";
import { NextJsIcon } from "./NextJsIcon";

export const stackIcons = {
  React: ReactIcon,
  JavaScript: JavaScriptIcon,
  "Node.js": NodeJsIcon,
  HTML5: HTML5Icon,
  CSS: CSS3Icon,
  Git: GitIcon,
  GitHub: GitHubIcon,
  TypeScript: TypeScriptIcon,
  PostgreSQL: PostgreSQLIcon,
  "Drizzle ORM": DrizzleIcon,
  "Next.js": NextJsIcon,
} as const;

export type StackIconName = keyof typeof stackIcons;
