import { LinkButton } from "../components/LinkButton";
import ringImgUrl from "../img/ring.png";

export const Home = () => {
  return (
    <div class="flex flex-col w-min items-center">
      <img src={ringImgUrl} class="h-24 sm:h-32 pb-4" />
      <h1 class="mb-2">
        Diara&nbsp;
        <span class="font-normal text-3xl sm:text-4xl md:text-5xl">&</span>
        &nbsp;Ethan
      </h1>
      <h2 class="mb-4 sm:mb-8">Aug. 10th</h2>

      <div class="flex flex-col gap-4 text-2xl sm:text-3xl md:text-4xl">
        <LinkButton href="https://forms.gle/7jqXUvQzjxSxhbvq6">RSVP</LinkButton>
      </div>
    </div>
  );
};
