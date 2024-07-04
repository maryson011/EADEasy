import ListaAulas from "@/components/aulas/ListaAulas";
import Titulo from "@/components/shered/Titulo";
import { IconVideo } from "@tabler/icons-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 p-10 h-screen">
      <Titulo 
        icone={IconVideo}
        principal="Lista de Aulas"
        secundario="Aqui você encontra todas as aulas disponivéis"
      />

      <ListaAulas />
    </div>
  );
}
