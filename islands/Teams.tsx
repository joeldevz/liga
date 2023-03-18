import { useState } from "https://esm.sh/v107/preact@10.11.0/hooks/src/index"
import Card from "../components/card/index.tsx"

export interface DetailsTeam{
    name:string;
    pj: number,
    pg: number,
    pe: number,
    pp: number,
    gf: number,
    gc: number,
    "+/-": number,
    pts: number,
}
export interface TeamsProps {
    teams: DetailsTeam[];
  }
  
export default function CardsIsland(props:TeamsProps){
    return (
        <>
            {props.teams.map((card, index) => 
                <Card name={card.name}   style={`--delay: .${4+index}s;background-image: linear-gradient(15deg, #13547a 0%, #80d0c7 100%); `}/>
            )}
        </>
    )
}