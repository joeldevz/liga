function Card(props: any) {
  const { variant, extra, children, name,style,  ...rest } = props;
  return (
    <a href={"#"||`/team/${name.toLowerCase()}`} >
    <div class="relative flex flex-col items-center rounded-[20px] w-full mx-auto p-4 bg-white bg-clip-border  hover:scale-105 mb-5  transition-all duration-150 cursor-pointer anim " style={style}>
      <div class="relative flex w-full justify-center rounded-xl bg-cover">
       
        <div class="absolute -bottom-12 flex h-[87px]  items-center justify-center rounded-full border-[4px] border-white bg-white ">
          <img
            class="h-full w-full rounded-full"
            src="/teams.png"
            alt=""
          />
        </div>
      </div>
      <div class="mt-16 flex flex-col items-center">
        <h4 class="text-xl font-bold text-white">
          {name}
        </h4>
      </div>
      <div class="mt-6 mb-3 flex gap-14 md:!gap-14">
      <p class="text-base font-normal text-white">Ver mas</p>
    {/*     <div class="flex flex-col items-center justify-center">
          <p class="text-2xl font-bold  text-white">{goals}</p>
          <p class="text-sm font-normal text-white">GOLES</p>
        </div>
        <div class="flex flex-col items-center justify-center">
          <p class="text-2xl font-bold  text-white">
            {PG}
          </p>
          <p class="text-sm font-normal text-white">PG</p>
        </div>
        <div class="flex flex-col items-center justify-center">
          <p class="text-2xl font-bold  text-white">
            {PP}
          </p>
          <p class="text-sm font-normal text-white">PP</p>
        </div>
       */}</div>
    </div>
    </a>
  );
}
export default Card;
