import { NavLink as Nav, NavLinkProps } from "react-router-dom"

export function NavLink(props: Readonly<NavLinkProps>) {
  return (
    <Nav
      {...props}
      className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground aria-[current=page]:text-foreground"
    />
  )
}
