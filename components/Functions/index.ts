import { DetailsTeam } from "../../islands/Teams.tsx";
import { Match, teamNames } from "../../routes/index.tsx";

export function ordenarEquipos(equipos: DetailsTeam[]) {
  equipos.sort((a, b) => {
    // Ordenar por puntos
    if (b.pts !== a.pts) {
      return b.pts - a.pts;
    }
    // Si hay empate en puntos, ordenar por goles a favor
    if (b.gf !== a.gf) {
      return b.gf - a.gf;
    }
    // Si hay empate en goles a favor, ordenar por goles en contra (menor es mejor)
    return a.gc - b.gc;
  });
  return equipos;
}
export const getGoalByTeam = (findTeam: teamNames, match: Match[]) => {
  let gf = 0;
  let gc = 0;
  let pj = 0;
  let pts = 0;
  let pg = 0;
  let pp = 0;
  let pe = 0;
  match.map((item) => {
    let goalFMatch = 0;
    let goalCMatch = 0;
    if (item.team1 === findTeam) {
      pj++;
      item.goals.forEach((go) => {
        if (go.team === findTeam) {
          gf = gf + go.goal;
          goalFMatch = goalFMatch + go.goal;
        }
        if (go.team === item.team2) {
          gc = gc + go.goal;
          goalCMatch = goalCMatch + go.goal;
        }
      });
      if (goalFMatch > goalCMatch) {
        pts = pts + 3;
        pg = pg + 1;
      } else if (goalFMatch === goalCMatch) {
        pts = pts + 1;
        pe = pe + 1;
      } else {
        pp = pp + 1;
      }
    }
    if (item.team2 === findTeam) {
      pj++;
      item.goals.forEach((go) => {
        if (go.team === findTeam) {
          gf = gf + go.goal;
          goalFMatch = goalFMatch + go.goal;
        }
        if (go.team === item.team1) {
          gc = gc + go.goal;
          goalCMatch = goalCMatch + go.goal;
        }
      });
      if (goalFMatch > goalCMatch) {
        pts = pts + 3;
        pg = pg + 1;
      } else if (goalFMatch === goalCMatch) {
        pts = pts + 1;
        pe = pe + 1;
      } else {
        pp = pp + 1;
      }
    }
  });
  return {
    gf: gf,
    gc: gc,
    pj: pj,
    pts: pts,
    pg: pg,
    pp: pp,
    pe: pe,
    "+/-": gf - gc,
  };
};
