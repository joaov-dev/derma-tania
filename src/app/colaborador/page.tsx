import Header from "../components/header";
import Button from "../components/button";
import Link from "next/link";

export default function Services() {
  return (
    <div className="h-screen flex flex-col">
      <Header />

      <main className="h-full m-8 gap-2 rounded-lg p-4 flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-3 justify-between gap-16 px-24 py-4 bg-cinza rounded-lg">
          <div className="flex gap-2">
            <span>Seu cargo é:</span>
            <span className="underline underline-offset-2">Médico Jr.</span>
          </div>
          <div className="flex gap-2">
            <span>Nota da avaliação::</span>
            <span className="underline underline-offset-2">6 / 10</span>
          </div>
          <div className="flex gap-2">
            <span>Horas trabalhadas:</span>
            <span className="underline underline-offset-2">893 / 1814h</span>
          </div>
        </div>
        <div className="flex justify-between h-3/4">
          <div className="mt-8 flex flex-col py-4 px-8 bg-cinza rounded-lg justify-between h-full">
            <div className="flex flex-col gap-8">
              <span>Gerenciar consultas</span>
              <span className="text-gray-600">Listagem de pacientes</span>
              <span className="text-gray-600">Gerar relatório médico</span>
							<span className="text-gray-600">Publicar exames</span>       
            </div>

						<Link href="/">
							<span className="underline underline-offset-2">Sair</span>
						</Link>
            
          </div>
          
          <div className="mt-8 h-full bg-cinza rounded-lg">
            <div className="grid grid-cols-1 justify-between px-24 py-4 bg-cinza rounded-lg">
              <div className="flex">
                  <span className="text-2xl">Futuras consultas:</span>
              </div>
            </div>

            <div className="grid grid-cols-3 justify-between px-24 pb-8 bg-cinza rounded-lg mt-4">
              <div className="flex flex-col">
                <span className="pt-8">Julia M - 02/04/24</span>
                <span className="pt-4">Antonio - 17/05/24</span>
                <span className="pt-4">Leonard - 12/08/24</span>
                <span className="pt-4">Marcela - 25/12/24</span>
              </div>
              <div className="flex flex-col">
                <span className="pt-8">Botox e preenchimento labial</span>
                <span className="pt-4">Depilação a laser</span>
                <span className="pt-4">Verificação de pintas preocupantes</span>
                <span className="pt-4">Análise de manchas suspeitas</span>
              </div>
              <div className="flex flex-col pl-16">
                <button className="pt-8 underline underline-offset-2">Remarcar consulta</button>
                <button className="pt-4 underline underline-offset-2">Remarcar consulta</button>
                <button className="pt-4 underline underline-offset-2">Remarcar consulta</button>
                <button className="pt-4 underline underline-offset-2">Remarcar consulta</button>
              </div>
            </div>

						<div className="grid grid-cols-1 justify-between px-24 py-4 bg-cinza rounded-lg">
              <div className="flex">
                  <span className="text-2xl">Pendencias:</span>
              </div>
            </div>

            <div className="grid grid-cols-3 justify-between px-24 pb-8 bg-cinza rounded-lg mt-4">
              <div className="flex flex-col">
                <span className="pt-8">Julia M - 02/04/24</span>
                <span className="pt-4">Antonio - 17/05/24</span>
              </div>
              <div className="flex flex-col">
                <span className="pt-8">Botox e preenchimento labial</span>
                <span className="pt-4">Depilação a laser</span>
              </div>
              <div className="flex flex-col pl-16">
                <button className="pt-8 underline underline-offset-2">Marcar como feito</button>
                <button className="pt-4 underline underline-offset-2">Marcar como feito</button>
              </div>
            </div>
          </div>
        </div>
        
        

      </main>
    </div>
    

  );
}