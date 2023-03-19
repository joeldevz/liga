import Tabla from "../components/Tabla.tsx";
import Marcador from "../components/Marcador.tsx";
import CardsIsland from "../islands/Teams.tsx";
import Layout from "../components/layout/index.tsx";
import { getGoalByTeam } from "../components/Functions/index.ts";
export enum teamNames {
  "X-FORCE" = 0,
  "Shalke Temeto" = 1,
  "All Stars" = 2,
  "La Tropa" = 3,
  "Los Fans de Jose" = 4,
  "LECHONES FC" = 5,
}
export interface Match {
  date: string;
  team1: teamNames;
  team2: teamNames;
  goals: {
    team: teamNames;
    player: string;
    goal: number;
  }[];
}
[];
export const Matchs = [
  {
    jornada:1,
    date: "17-03-23",
    time: "21:00",
    team1: teamNames["La Tropa"],
    team2: teamNames["All Stars"],
    goals: [{
      team: teamNames["La Tropa"],
      player: "Pier",
      goal: 1,
    }, {
      team: teamNames["La Tropa"],
      player: "Matias",
      goal: 1,
    }, {
      team: teamNames["All Stars"],
      player: "Damian",
      goal: 1,
    }, {
      team: teamNames["All Stars"],
      player: "Claudio",
      goal: 1,
    }],
  },
  {
    jornada:1,
    time: "21:40",
    date: "17-03-23",
    team1: teamNames["LECHONES FC"],
    team2: teamNames["Shalke Temeto"],
    goals: [{
      team: teamNames["LECHONES FC"],
      player: "Marvin",
      goal: 2,
    }, {
      team: teamNames["Shalke Temeto"],
      player: "Samu",
      goal: 4,
    }, {
      team: teamNames["Shalke Temeto"],
      player: "Gianpi",
      goal: 2,
    }, {
      team: teamNames["Shalke Temeto"],
      player: "Juan",
      goal: 1,
    }, {
      team: teamNames["Shalke Temeto"],
      player: "Chris",
      goal: 1,
    }, {
      team: teamNames["Shalke Temeto"],
      player: "Tito",
      goal: 1,
    }],
  },
  {
    jornada:1,
    time: "22:15",
    date: "17-03-23",
    team1: teamNames["Los Fans de Jose"],
    team2: teamNames["X-FORCE"],
    goals: [{
      team: teamNames["Los Fans de Jose"],
      player: "Morales",
      goal: 1,
    }, {
      team: teamNames["Los Fans de Jose"],
      player: "Diego",
      goal: 1,
    }, {
      team: teamNames["Los Fans de Jose"],
      player: "Edu",
      goal: 1,
    }, {
      team: teamNames["X-FORCE"],
      player: "Sergio",
      goal: 4,
    }, {
      team: teamNames["X-FORCE"],
      player: "Andrei",
      goal: 2,
    }, {
      team: teamNames["X-FORCE"],
      player: "Javier",
      goal: 2,
    }, {
      team: teamNames["X-FORCE"],
      player: "Carlos",
      goal: 1,
    }],
  },
  {
    jornada:2,
    time: "22:15",
    date: "24-03-23 (Confirmar)",
    team1: teamNames["Shalke Temeto"],
    team2: teamNames["La Tropa"],
    goals: [],
  },
  {
    jornada:2,
    time: "22:15",
    date: "24-03-23 (Confirmar)",
    team1: teamNames["X-FORCE"],
    team2: teamNames["All Stars"],
    goals: [],
  },
  {
    jornada:2,
    time: "22:15",
    date: "24-03-23 (Confirmar)",
    team1: teamNames["Los Fans de Jose"],
    team2: teamNames["LECHONES FC"],
    goals: [],
  },
  

  {
    jornada:3,
    time: "22:15",
    date: "31-03-23 (Confirmar)",
    team1: teamNames["Shalke Temeto"],
    team2: teamNames["Los Fans de Jose"],
    goals: [],
  },
  {
    jornada:3,
    time: "22:15",
    date: "31-03-23 (Confirmar)",
    team1: teamNames["X-FORCE"],
    team2: teamNames["La Tropa"],
    goals: [],
  },
  {
    jornada:3,
    time: "22:15",
    date: "31-03-23 (Confirmar)",
    team1: teamNames["Los Fans de Jose"],
    team2: teamNames["All Stars"],
    goals: [],
  },


  {
    jornada:4,
    time: "22:15",
    date: "07-04-23 (Confirmar)",
    team1: teamNames["La Tropa"],
    team2: teamNames["Los Fans de Jose"],
    goals: [],
  },
  {
    jornada:4,
    time: "22:15 ",
    date: "07-04-23 (Confirmar)",
    team1: teamNames["X-FORCE"],
    team2: teamNames["LECHONES FC"],
    goals: [],
  },
  {
    jornada:4,
    time: "22:15",
    date: "07-04-23 (Confirmar)",
    team1: teamNames["All Stars"],
    team2: teamNames["Shalke Temeto"],
    goals: [],
  },

  {
    jornada:5,
    time: "22:15",
    date: "14-04-23 (Confirmar)",
    team1: teamNames["X-FORCE"],
    team2: teamNames["Shalke Temeto"],
    goals: [],
  },
  {
    jornada:5,
    time: "22:15",
    date: "14-04-23 (Confirmar)",
    team1: teamNames["All Stars"],
    team2: teamNames["Los Fans de Jose"],
    goals: [],
  },
  {
    jornada:5,
    time: "22:15",
    date: "14-04-23 (Confirmar)",
    team1: teamNames["La Tropa"],
    team2: teamNames["LECHONES FC"],
    goals: [],
  },
];
export const Teams = [{
  name: "X-FORCE",
  img:"/teams/x-force.jpg",
  ...getGoalByTeam(teamNames["X-FORCE"], Matchs),
}, {
  name: "Shalke Temeto",
  img:"/teams/shalke-temeto.jpg",
  ...getGoalByTeam(teamNames["Shalke Temeto"], Matchs),
}, {
  name: "All Stars",
  img:"/teams/all-stars.jpg",
  ...getGoalByTeam(teamNames["All Stars"], Matchs),
}, {
  name: "La Tropa",
  img:"/teams/la-tropa.png",
  ...getGoalByTeam(teamNames["La Tropa"], Matchs),
}, {
  name: "Los Fans de Jose",
  img:"/teams/los-fans-de-jose.jpg",
  ...getGoalByTeam(teamNames["Los Fans de Jose"], Matchs),
}, {
  name: "LECHONES FC",
  img:"/teams/lechones-fc.jpg",
  ...getGoalByTeam(teamNames["LECHONES FC"], Matchs),
}];
export default function Index() {


  return (
    <>
      <Layout>
        <div class="grid-cols-1 md:grid-cols-2 grid gap-2">
          <div
            class="relative flex-shrink-0 max-w-[95vw] overflow-hidden rounded-3xl bg-black anim"
            style="--delay: .2s;"
          >
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
          <div class="w-full overflow-y-auto rounded-3xl ">
            <Tabla teams={Teams} />
          </div>
        </div>
        <div class="small-header anim" style="--delay: .3s">
          Teams
        </div>
        <div class="videos">
          <CardsIsland teams={Teams} />
        </div>
      </Layout>
    </>
  );
}
