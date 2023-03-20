export default function CardPost({name, url}:{name:string, url:string}) {
    return (
        <div class="h-full rounded-xl  bg-gray-700 overflow-hidden">
        <img
          class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all  hover:scale-100"
          src="/team.png"
          alt="blog"
        />
        <div class="p-6 text-white">
          <h2 class="tracking-widest hidden text-xs title-font font-medium text-gray-400 mb-1">
            CATEGORY-1
          </h2>
          <h1 class="text-white text-lg font-medium text-center mb-3">
            {name}
          </h1>
          <p class="leading-relaxed mb-3 hidden">
            Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
            microdosing tousled waistcoat.
          </p>
          <div class="flex items-center flex-wrap ">
            <a href={url} class="m-auto bg-gradient-to-r from-blue-300 to-blue-400 hover:scale-105  px-4 py-1 rounded-lg">
             Leer más
            </a>
          </div>
        </div>
      </div>
  
    )
}