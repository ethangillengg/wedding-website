import { Link } from "preact-router/match";

export const NavLink = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLAnchorElement>) => {
  return (
    <Link
      {...props}
      class="visited:text-zinc-900 no-underline"
      activeClassName="!text-gum-500 !underline"
    >
      {children}
    </Link>
  );
};
