import { ReactNode } from "preact/compat";
import ringImgUrl from "./img/ring.png";
import petalsLeft from "./img/petals_left.png";
import petalsRight from "./img/petals_right.png";

export function App() {
  return (
    <>
      <img src={petalsLeft} class="max-h-screen absolute" />
      <img src={petalsRight} class="max-h-screen absolute right-0 bottom-0" />

      <div class="flex mx-auto px-32 justify-center h-screen">
        <div class="flex flex-col w-min text-gum-500 items-center mb-4 justify-center">
          <img src={ringImgUrl} class="max-h-32 pb-4" />
          <h1 class="font-bold text-4xl sm:text-5xl md:text-6xl mb-2">
            Diara
            <em class="font-normal text-2xl sm:text-3xl md:text-4xl">
              &nbsp;and&nbsp;
            </em>
            Ethan
          </h1>
          <span class="font-normal text-2xl sm:text-3xl md:text-4xl mb-8">
            Wedding Party
          </span>

          <div class="flex flex-col gap-4 text-2xl sm:text-3xl md:text-4xl">
            <Link href="https://forms.gle/7jqXUvQzjxSxhbvq6">RSVP Form</Link>
            <Link href="https://www.amazon.ca/wedding/share/diara-and-ethan">
              Registry
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

interface LinkProps {
  href: string;
  children: ReactNode;
}

const Link = ({ href, children }: LinkProps) => {
  return (
    <a
      class="text-gum-500 text-center transition transition-all border-2 border-gum-500 px-4 py-2 hover:text-white hover:bg-gum-500 hover:border-transparent"
      href={href}
    >
      {children}
    </a>
  );
};
