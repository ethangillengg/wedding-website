import { LinkButton } from "../components/LinkButton";
import ringImgUrl from "../img/ring.png";

export const Home = () => {
  return (
    <div class="flex flex-col w-min text-gum-500 items-center mb-4 justify-center">
      <img src={ringImgUrl} class="max-h-32 pb-4" />
      <h1 class="font-bold italic text-4xl sm:text-5xl md:text-6xl mb-2">
        Diara&nbsp;
        <span class="font-normal text-3xl sm:text-4xl md:text-5xl">&</span>
        &nbsp;Ethan
      </h1>
      <span class="bold italic text-2xl sm:text-3xl md:text-4xl mb-8">
        Aug. 10th
      </span>

      <div class="flex flex-col gap-4 text-2xl sm:text-3xl md:text-4xl">
        <LinkButton href="https://forms.gle/7jqXUvQzjxSxhbvq6">RSVP</LinkButton>
        <LinkButton href="https://www.amazon.ca/wedding/share/diara-and-ethan">
          Registry
        </LinkButton>
      </div>
    </div>
  );
};
