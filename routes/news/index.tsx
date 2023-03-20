import Layout from "../../components/layout/index.tsx";
import BlogIsland from "../../islands/Blog.tsx";

export default function News() {
  return (
    <>
      <Layout>
        <div class="gap-2 w-full text-white anim" style="--delay: .3s">
          {<BlogIsland blogs={[{name:"Comunicado 1 de la Liga de Powerskill", url:"/comunicado-1"}]}/>}
</div>
      </Layout>
    </>
  );
}
