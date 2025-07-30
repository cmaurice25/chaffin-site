


export const getLinkClasses = (href: string, pathname: string) =>
  `relative text-lg font-semibold pb-1 tracking-wide
   text-[var(--navbar-text)] hover:text-green-600
   after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-green-800
   after:w-0 hover:after:w-full after:transition-[width] after:duration-300
   ${pathname === href ? "text-green-300 after:w-full" : ""}`;

export const getMobileLinkClasses = (href: string, pathname: string) =>
  `text-lg font-medium ${
    pathname === href
      ? "text-green-300"
      : "text-[var(--navbar-text)] hover:text-green-400"
  }`;