import { useState } from "https://esm.sh/v107/preact@10.11.0/hooks/src/index"
import Card from "../components/card/index.tsx"

export interface DetailsTeam{
    name:string;
    goals:number;
}
export interface TeamsProps {
    teams: DetailsTeam[];
  }
  
export default function CardsIsland(props:TeamsProps){
/*     const [cards, setCards]=useState(props.start)
 */    return (
        <>
            {props.teams.map((card, index) => 
                <Card name={card.name} goals={card.goals} style={`--delay: .${4+index}s;background-image: linear-gradient(15deg, #13547a 0%, #80d0c7 100%); `}/>
            )}
        </>
    )
}