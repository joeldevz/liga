import { TeamsProps } from "../islands/Teams.tsx"
import { ordenarEquipos } from "./Functions/index.ts"

export default function Tabla  (props:TeamsProps)  {
  
    return <table class=" rounded-3xl  w-full   text-gray-200 h-full anim " style="--delay: .3s; background-image: linear-gradient(15deg, #13547a 0%, #13547a 100%);" >
    <thead  class="border-b-2 border-black rounded-2xl ">
        <tr class="text-left  ">
      <th  class="px-4 py-3  rounded-tl-2xl ">#</th>
      <th  class="px-4 py-3">Team</th>
      <th  class="px-4 py-3">PJ</th>
      <th  class="px-4 py-3">PG</th>
      <th  class="px-4 py-3">PE</th>
      <th  class="px-4 py-3">PP</th>
      <th  class="px-4 py-3">GF</th>
      <th  class="px-4 py-3">GC</th>
      <th  class="px-4 py-3">+/-</th>
      <th  class="px-4 py-3  rounded-tr-2xl">PTS</th>

    </tr>
        </thead>
  {ordenarEquipos(props.teams).map((team, index) => {
    return ( <tr class="  border-b-2 border-black">
    <td class="px-4 py-3 " >{index+1}</td>
    <td class="px-4 py-3 border-r-2 border-black font-bold" >{team.name}</td>
    <td class="px-4 py-3">{team.pj}</td>
    <td class="px-4 py-3">{team.pg}</td>
    <td class="px-4 py-3">{team.pe}</td>
    <td class="px-4 py-3">{team.pp}</td>
    <td class="px-4 py-3">{team.gf}</td>
    <td class="px-4 py-3">{team.gc}</td>
    <td class="px-4 py-3">{team["+/-"]}</td>
    <td class="px-4 py-3">{team.pts}</td>
  </tr> )})
  }
    
  </table>
  
}