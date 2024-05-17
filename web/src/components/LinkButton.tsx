import { ReactNode } from "preact/compat";

export interface LinkProps {
  href: string;
  children: ReactNode;
}

export const LinkButton = ({ href, children }: LinkProps) => {
  return (
    <a
      class="text-gum-500 text-center transition transition-all border-2 border-gum-500 px-4 py-2 hover:text-white hover:bg-gum-500 hover:border-transparent"
      href={href}
    >
      {children}
    </a>
  );
};
