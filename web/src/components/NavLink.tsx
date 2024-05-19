import { Link } from "preact-router/match";

export const NavLink = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLAnchorElement>) => {
  return (
    <Link
      {...props}
      class="text-zinc-900 visited:text-zinc-900 no-underline"
      activeClassName="!text-gum-500 !underline"
    >
      {children}
    </Link>
  );
};
