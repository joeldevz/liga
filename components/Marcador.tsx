interface Team{
    name:string;
	img?:string;
	goals:number;
}
interface TeamsMatch{
    team1:Team;
    team2:Team;
	jornada:number;
    date:string;
    time:string;
}
export default function Marcador(props:TeamsMatch) {
    return (
	<div class=" mb-2 anim p-3 mb-5 bg-gray-200 rounded-2xl" style="--delay: .1s;">
		<div class="match-content grid grid-cols-3 pt-3">
			<div >
                <div class="team">
					<div class="team-logo w-20 h-20">
					<img class="rounded-full" src={props.team1.img||"/teams.png"} />
					</div>
					<h2 class="team-name">{props.team1.name}</h2>
				</div>
			</div>
			<div >
				<div class="match-details">
				Jornada {props.jornada} 
					<div class="match-date">
						
						{props.date} <strong>{props.time}</strong>
					</div>
					<div class="match-score">
						<span class="match-score-number match-score-number--leading">{props.team1.goals}</span>
						<span class="match-score-divider">:</span>
						<span class="match-score-number">{props.team2.goals}</span>
					</div>
					
				</div>
			</div>
			<div>
				<div class="team ">
					<div class="team-logo w-20 h-20">
                    <img class="rounded-full" src={props.team2.img||"/teams.png"} />
					</div>
					<h2 class="team-name ">{props.team2.name}</h2>
				</div>
			</div>
		</div>
	</div>
    )

}