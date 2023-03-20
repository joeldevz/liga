import CardPost from "../components/card/Post.tsx";

export default function BlogIsland({blogs}: {blogs: any[]}) {

  return (
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {blogs.map((blog) => (<CardPost name={blog.name} url={"/news"+blog.url}/>))}
    </div>
  );
}
