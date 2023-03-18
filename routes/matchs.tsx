import Tabla from "../components/Tabla.tsx";
import Marcador from "../components/Marcador.tsx";
import CardsIsland from "../islands/Teams.tsx";
import Layout from "../components/layout/index.tsx";
import { getGoalByTeam } from "../components/Functions/index.ts";
import { Matchs, teamNames, Teams } from "./index.tsx";

export default function Match() {
  const Jornadas = [
    "13-03-23/19-03-23",
    "20-03-23/26-03-23",
    "27-03-23/02-04-23",
    "03-04-23/09-04-23",
    "10-04-23/16-04-23",
    "17-04-23/23-04-23",
    "24-04-23/30-04-23",
    "01-05-23/07-05-23",
    "08-05-23/14-05-23",
    "15-05-23/21-05-23",
  ];

  return (
    <>
      <Layout>
        <div class="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid gap-2">
          {Matchs.map((match) => {
            const goalsTeam1 = getGoalByTeam(match.team1, [match]);
               return <Marcador
               date={match.date}
               team1={{...Teams[match.team1],goals:goalsTeam1.gf}}
               team2={{...Teams[match.team2], goals:goalsTeam1.gc}}
              jornada={match.jornada}
               time={match.time}
             />
          })}
        
        </div>
       
      </Layout>
    </>
  );
}
