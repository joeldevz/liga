export default function Tabla  ()  {
    const teams =Array.from({length: 5}, (_, i) => i + 1)
    return <table class=" rounded-3xl  w-full   text-gray-200 h-full anim " style="--delay: .2s; background:#31abbd" >
        
    <thead  class="border-b border-gray-600 rounded-2xl ">
        <tr class="text-left  ">
      <th style="background:#2a8795" class="px-4 py-3  rounded-tl-2xl ">#</th>
      <th style="background:#2a8795" class="px-4 py-3 bg-red-500  sticky left-0">Team</th>
      <th style="background:#2a8795" class="px-4 py-3">PJ</th>
      <th style="background:#2a8795" class="px-4 py-3">PG</th>
      <th style="background:#2a8795" class="px-4 py-3">PE</th>
      <th style="background:#2a8795" class="px-4 py-3">PP</th>
      <th style="background:#2a8795" class="px-4 py-3">GF</th>
      <th style="background:#2a8795" class="px-4 py-3">GC</th>
      <th style="background:#2a8795" class="px-4 py-3">+/-</th>
      <th style="background:#2a8795" class="px-4 py-3  rounded-tr-2xl">PTS</th>

    </tr>
        </thead>
  {teams.map((team, index) => {
    return ( <tr class=" border-b border-gray-600">
    <td class="px-4 py-3 " style=" background:#2a8795">{index+1}</td>
    <td class="px-4 py-3 sticky left-0 border-r-1 border-gray-600" style=" background:#2a8795">Disponible</td>
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