import Layout from "../../components/layout/index.tsx";
import { loadPost } from "../../utils/post.ts";



export const handler =  {
    async GET(req: any, context: any) {
      const {id}= context.params;
      const post = await loadPost(id)
      if(!post) {
        return  context.renderNotFound();
      }
      return context.render({post:post})
    }
};
export default function PagePost(PageProps: any){
    const {post} = PageProps?.data;
    const title =post.split("\n").slice(0,1)
    const date =post.split("\n").slice(1,2)
    const body = post.split("\n").slice(2,post.split("\n").length)
return (<>
    <Layout>
 
   
          <div class="w-11/12 md:w-11/12 lg:w-6/12 m-auto text-white text-justify text-lg mt-2 font-normal anim" style="--delay: .2s ">
            <img src="/banner.webp" width="100%"/>
          <h1 class="text-center text-white text-5xl underline mb-10">
           {title}
          </h1>
          <h4 class="font-bold mb-10">Día de publicación: <span class="text-blue-400">{date}</span></h4>
         {body.map((line) => (<p class="mb-2">{line}</p>))}
          </div>
         
    
    </Layout>
    </>)
}