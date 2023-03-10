import { Head } from "$fresh/runtime.ts";
import { useState } from "https://esm.sh/v107/preact@10.11.0/hooks/src/index";
import Tabla from "../components/Tabla.tsx";
import { asset } from "$fresh/runtime.ts";
import SideBar from "../components/SideBar.tsx";
import Card from "../components/card/index.tsx";
import Marcador from "../components/Marcador.tsx";
import CardsIsland from "./Teams.tsx";

export default function IndexIsland() {
  const teams = [{
    name: "X-FORCE",
    goals: 0,
  }, {
    name: "Shalke Temeto",
    goals: 0,
  }, {
    name: "All Stars",
    goals: 0,
  }, {
    name: "La Tropa",
    goals: 0,
  }, {
    name: "---",
    goals: 0,
  }, {
    name: "---",
    goals: 0,
  }];
  return (
    <>
      <Head>
        <title>Fresh App</title>
        <link rel="stylesheet" href="/main.css" />
      </Head>

      <>
        <div class="container">
          <SideBar />
          <div class="wrapper">
            <div class="main-container">
              <div class="main-header anim  " style="--delay: 0s">
                <a href="#">
                  <img
                    src="/logo.png"
                    alt=""
                    class="md:w-2/5 lg:w-1/5 p-2 m-auto"
                    srcset=""
                  />
                </a>
              </div>
              <div class="grid-cols-1 md:grid-cols-2 grid gap-2">
                <Marcador
                  date="26-02-23"
                  team1={{ goals: 0, name: "---" }}
                  team2={{ goals: 0, name: "---" }}
                  time={"20:00"}
                />
                <Marcador
                  date="26-02-23"
                  team1={{ goals: 0, name: "---" }}
                  team2={{ goals: 0, name: "---" }}
                  time={"20:00"}
                />
                <div class="relative flex-shrink-0 max-w-[95vw] overflow-hidden rounded-3xl bg-black anim" style='--delay: .2s;'>
                  <img
                    src="/banner-2.png"
                    alt=""
                    class="absolute inset-0 w-full h-full object-cover object-bottom bg-cover"
                  />
                  <div class="absolute inset-0 h-full w-full bg-gradient-to-br opacity-25 from-black">
                  </div>
                  <div class="relative h-96 w-full p-12 flex flex-col justify-between items-start text-center " >
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
                      target="_blank" rel="noopener noreferrer"
                      class="px-4 py-3 rounded-lg bg-white text-slate-900 text-sm mx-auto font-medium"
                    >
                      Registra tu Equipo
                    </a>
                    
                  </div>
                </div>
                <div class="w-full overflow-y-auto rounded-3xl ">
                  <Tabla teams={teams} />
                </div>
              </div>
              <div class="small-header anim" style="--delay: .3s">
                Teams
              </div>
              <div class="videos">
                <CardsIsland teams={teams} />
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
