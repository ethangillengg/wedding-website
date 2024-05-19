import React from "preact/compat";

export const LinkButton = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a
      {...props}
      class="text-gum-500 visited:text-gum-500 no-underline text-center transition transition-all border-2 border-gum-500 px-4 py-2 hover:text-white hover:bg-gum-500 hover:border-transparent"
    >
      {children}
    </a>
  );
};
