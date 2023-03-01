import { Head } from "$fresh/runtime.ts";
import { useEffect, useState } from "https://esm.sh/v107/preact@10.11.0/hooks/src/index";
import Tabla from "../components/Tabla.tsx";
import Counter from "../islands/Counter.tsx";
import IndexIsland from "../islands/index.tsx";

export default function Home() {
  
  return (<IndexIsland/>)
}

