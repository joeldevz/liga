import { useEffect, useRef } from "preact/hooks";

export default function IndexIsland() {
  useEffect(() => {
    const slider = document.querySelector("#slider");
    if (slider === null) return;
    function moveSlide() {
      const max = slider.scrollWidth - slider.clientWidth;
      const left = slider.clientWidth;

      if (max === slider.scrollLeft) {
        slider.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        slider.scrollBy({ left, behavior: "smooth" });
      }

      setTimeout(moveSlide, 2000);
    }
    moveSlide();
  });
  return (
    <>
      <div
        class="rounded-2xl w-full overflow-hidden flex flex-nowrap text-center anim"
        id="slider"
        style="--delay: .2s;"
      >
        <div class="bg-blue-600 text-white space-y-4 flex-none w-full flex flex-col items-center justify-center">
        <div class="w-11/12 md:w-full text-center">
            <h2 class="text-4xl max-w-md m-auto">React, Vue, and HTML</h2>
            <p class="max-w-md m-auto">
              Accessible, interactive examples for React and Vue powered by
              Headless UI, plus vanilla HTML if you’d rather write any necessary
              JS yourself.
            </p>
          </div>
        </div>
        <div class="relative flex-shrink-0 w-full overflow-hidden rounded-3xl bg-black anim">
          <img
            src="/banner-2.png"
            alt=""
            class="absolute inset-0 w-full h-full object-cover object-bottom bg-cover"
          />
          <div class="absolute inset-0 h-full w-full bg-gradient-to-br opacity-25 from-black">
          </div>
          <div class="relative h-96 w-full p-12 flex flex-col justify-between items-start text-center ">
            <div>
              <p class="font-medium  invisible text-white">
                Destinations
              </p>
              <h2 class="mt-3 w-2/3 text-3xl   invisible font-semibold tracking-tight text-white">
                Go to see the best sunsets in the world
              </h2>
            </div>
            <a
              href="https://forms.gle/8DN45xNyq7FkbLuZA"
              target="_blank"
              rel="noopener noreferrer"
              class="px-4 py-3 rounded-lg bg-white text-slate-900 text-sm mx-auto font-medium"
            >
              Registra tu Equipo
            </a>
          </div>
        </div>

        <div class="bg-pink-400 text-white space-y-4 flex-none w-full flex flex-col items-center justify-center">
        <div class="w-11/12 md:w-full text-center">
            <h2 class="text-4xl max-w-md m-auto">React, Vue, and HTML</h2>
            <p class="max-w-md m-auto">
              Accessible, interactive examples for React and Vue powered by
              Headless UI, plus vanilla HTML if you’d rather write any necessary
              JS yourself.
            </p>
          </div>
        </div>
        <div class="bg-teal-500 text-white space-y-4 flex-none w-full flex flex-col items-center justify-center">
          <div class="w-11/12 md:w-full text-center">
            <h2 class="text-4xl max-w-md m-auto">React, Vue, and HTML</h2>
            <p class="max-w-md m-auto">
              Accessible, interactive examples for React and Vue powered by
              Headless UI, plus vanilla HTML if you’d rather write any necessary
              JS yourself.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
