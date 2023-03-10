import { TeamsProps } from "../islands/Teams.tsx"

export default function Tabla  (props:TeamsProps)  {
    return <table class=" rounded-3xl  w-full   text-gray-200 h-full anim " style="--delay: .3s; background-image: linear-gradient(15deg, #13547a 0%, #80d0c7 100%);" >
    <thead  class="border-b-2 border-black rounded-2xl ">
        <tr class="text-left  ">
      <th /* style="background:#2a8795" */ class="px-4 py-3  rounded-tl-2xl ">#</th>
      <th /* style="background:#2a8795" */ class="px-4 py-3">Team</th>
      <th /* style="background:#2a8795" */ class="px-4 py-3">PJ</th>
      <th /* style="background:#2a8795" */ class="px-4 py-3">PG</th>
      <th /* style="background:#2a8795" */ class="px-4 py-3">PE</th>
      <th /* style="background:#2a8795" */ class="px-4 py-3">PP</th>
      <th /* style="background:#2a8795" */ class="px-4 py-3">GF</th>
      <th /* style="background:#2a8795" */ class="px-4 py-3">GC</th>
      <th /* style="background:#2a8795" */ class="px-4 py-3">+/-</th>
      <th /* style="background:#2a8795" */ class="px-4 py-3  rounded-tr-2xl">PTS</th>

    </tr>
        </thead>
  {props.teams.map((team, index) => {
    return ( <tr class="  border-b-2 border-black">
    <td class="px-4 py-3 " >{index+1}</td>
    <td class="px-4 py-3 border-r-2 border-black font-bold" >{team.name}</td>
    <td class="px-4 py-3">0</td>
    <td class="px-4 py-3">0</td>
    <td class="px-4 py-3">0</td>
    <td class="px-4 py-3">0</td>
    <td class="px-4 py-3">0</td>
    <td class="px-4 py-3">0</td>
    <td class="px-4 py-3">0</td>
    <td class="px-4 py-3">0</td>
  </tr> )})
  }
    
  </table>
  
}