import Marcador from "../components/Marcador.tsx";
import Layout from "../components/layout/index.tsx";
import { getGoalByTeam } from "../components/Functions/index.ts";
import { Matchs,  Teams, TeamsInterface } from "./index.tsx";

export default function Match() {
  return (
    <>
      <Layout>
        <div class="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid gap-2 anim">
          {Matchs.map((match, index) => {
            const goalsTeam1 = getGoalByTeam(match.team1, [match]);
            console.log(goalsTeam1)
               return <>
               {(index ) % 3 === 0?<div class="lg:col-span-3 md:col-span-2 col-span-1 text-center text-white"  style="--delay: .1s;">JORNADA {match.jornada}</div>:""}
               <Marcador
               date={match.date}
               team1={{...Teams.find(v=>v.name===match.team1) as TeamsInterface,goals:goalsTeam1.gf}}
               team2={{...Teams.find(v=>v.name===match.team2) as TeamsInterface, goals:goalsTeam1.gc}}
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
