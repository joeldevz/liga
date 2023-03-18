import Tabla from "../components/Tabla.tsx";
import Marcador from "../components/Marcador.tsx";
import CardsIsland from "../islands/Teams.tsx";
import Layout from "../components/layout/index.tsx";
import { getGoalByTeam } from "../components/Functions/index.ts";
import { Matchs, teamNames, Teams } from "./index.tsx";

export default function News() {
  return (
    <>
      <Layout>
        <div class="gap-2 w-full text-white anim" style="--delay: .3s">
          <h1 class="text-center text-white">
            ESTAMOS TRABAJANDO EN ESTE APARTADO
          </h1>
          <h2 class="text-center">
            Pero puedes leer este COMUNICADO que es IMPORTANTE
          </h2>
          <div class="w-11/12 md:w-6/12 lg:w-6/12 m-auto text-white text-justify text-lg mt-2 font-normal">
            <p>
              <strong>Estimados participantes de la Liga de Powerskill,</strong>
            </p>
            <p>
              En primer lugar, quisiera expresar mi más sincera gratitud por su
              participación en nuestra Liga de Powerskill. Ha sido emocionante
              ver a todos ustedes competir con tanta pasión y habilidad en cada
              partido. 
            </p>
            <p>
              Sin embargo, también quiero disculparme por los conflictos que han
              surgido durante algunos de los partidos, y los malentendidos que
              pudieron haber ocurrido. Reconocemos que la organización no estuvo
              a la altura de sus expectativas, y que hubo algunos huecos que
              necesitamos cubrir para mejorar en la siguiente etapa de la Liga.
            </p>
            <p>
              También reconocemos que puede haber habido algunas decisiones
              arbitrales cuestionables durante los partidos, lo cual puede haber
              generado más tensión y controversia. Por esta razón, nos
              comprometemos a mejorar nuestro sistema de arbitraje, y
              asegurarnos de que haya al menos <strong>2-3 árbitros</strong>
              {" "}
              para cubrir cualquier punto ciego que el árbitro principal pueda
              haber pasado por alto. Además, quería añadir que estaremos
              implementando <strong>cámaras en los partidos</strong>{" "}
              para tener una mejor visión de lo que está sucediendo en la
              cancha.
            </p>
            <p>
              Creemos que esto es una medida importante para garantizar la{" "}
              <strong>transparencia y la justicia</strong>{" "}
              en la Liga de Powerskill, y esperamos que esto proporcione una
              mayor tranquilidad para todos los participantes. Agradecemos su
              comprensión y paciencia, y queremos asegurarles que estamos
              trabajando arduamente para mejorar cada aspecto de la Liga de
              Powerskill. Haremos todo lo posible para garantizar que la próxima
              etapa sea organizada y justa para todos los participantes. Gracias
              de nuevo por su participación, y esperamos verlos de nuevo en la
              cancha pronto.
            </p>
            <p>Atentamente,</p>
            <p>
              <strong>LA DIRECTIVA</strong>
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
}
