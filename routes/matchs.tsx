import Tabla from "../components/Tabla.tsx";
import Marcador from "../components/Marcador.tsx";
import CardsIsland from "../islands/Teams.tsx";
import Layout from "../components/layout/index.tsx";
import { getGoalByTeam } from "../components/Functions/index.ts";
import { Matchs, teamNames, Teams } from "./index.tsx";

export default function Match() {

  return (
    <>
      <Layout>
        <div class="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid gap-2 anim">
          {Matchs.map((match, index) => {
            const goalsTeam1 = getGoalByTeam(match.team1, [match]);
         
               return <>
               {(index ) % 3 === 0?<div class="lg:col-span-3 md:col-span-2 col-span-1 text-center text-white"  style="--delay: .1s;">JORNADA {match.jornada}</div>:""}
               <Marcador
               date={match.date}
               team1={{...Teams[match.team1],goals:goalsTeam1.gf}}
               team2={{...Teams[match.team2], goals:goalsTeam1.gc}}
              jornada={match.jornada}
               time={match.time}
             />
               
               </>
          })}
        
        </div>
       
      </Layout>
    </>
  );

}
