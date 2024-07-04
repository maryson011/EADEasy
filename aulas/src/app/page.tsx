'use client'
import FiltrarStatus from "@/components/aulas/FiltrarStatus";
import ListaAulas from "@/components/aulas/ListaAulas";
import Titulo from "@/components/shared/Titulo";
import Aula from "@/data/model/Aula";
import { IconClock, IconVideo } from "@tabler/icons-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import listaDeAulas from '@/data/constants/Aulas'
import Estatistica from "@/components/shared/Estatistica";
import Duracao from "@/data/utils/Duracao";

export default function Home() {
  const [duracaoTotal, setDuracaoTotal] = useState<number>(0)
  const [aulas, setAulas] = useState<Aula[]>(listaDeAulas)

  function filtrarAulas(status: string | null) {
    const aulasFiltradas: Aula[] = listaDeAulas.filter(aula => aula.status === status || !status)
    setAulas(aulasFiltradas)
  }

  useEffect(() => {
    calcularDuracaoTotal(aulas)
  }, [aulas])

  function calcularDuracaoTotal(aulas: Aula[]) {
    const duracaoTotal = aulas.reduce((acc, aula) => acc + aula.duracao, 0)
    setDuracaoTotal(duracaoTotal)
  }

  return (
    <div className="flex flex-col gap-10 p-10 h-screen">
      <div>  
        <Titulo 
          icone={IconVideo}
          principal="Lista de Aulas"
          secundario="Aqui você encontra todas as aulas disponivéis"
        />

        <FiltrarStatus filtroMudou={filtrarAulas}/>
      </div>

      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-3">
          <Estatistica icone={IconClock} valor={Duracao.formatar(duracaoTotal)} iconeCor='text-green-500' texto={`Duração Total`} />
        </div>
        <ListaAulas aulas={aulas}/>
      </div>
    </div>
  );
}
