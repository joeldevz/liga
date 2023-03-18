import { Head } from "$fresh/runtime.ts";
    import SideBar from "../../components/SideBar.tsx";
export default function Layout({children}:{children:any}) {
  const menu = [
    { name: "HOME", link: "/" },
    { name: "PARTIDOS", link: "/matchs" },
    { name: "NOTICIAS", link: "/news" },
  ]
      return (
        <>
          <Head>
            <title>POWER_SKILL</title>
            <link rel="stylesheet" href="/main.css" />
          </Head>
    
          <>
            <div class="container">
              <SideBar />
              <div class="wrapper">
                <div class="main-container">
                  <div class="main-header anim  " style="--delay: 0s">
                    <a href="#">
                      <img
                        src="/logo.png"
                        alt=""
                        class="md:w-2/5 lg:w-1/5 p-2 m-auto"
                        srcset=""
                      />
                    </a>
                    <div class="w-full p-2 mb-5 anim" style="--delay: 0.1s">
                    <div class="mx-auto text-center text-lg text-white">
                     
                     {menu.map((item) => (
                       <a href={item.link} class="hover:underline hover:scale-110 duration-100 ml-3">{item.name}</a>
                     ))}
                      
                    </div>
                  </div>
                  </div>

                    {children}
                </div>
              </div>
            </div>
          </>
        </>
      );
    
    
}