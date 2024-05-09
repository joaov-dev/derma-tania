import Header from "../components/header";
import Button from "../components/button";
import Link from "next/link";

export default function Services() {
  return (
    <div className="h-screen flex flex-col">
      <Header />

      <main className="h-full m-8 gap-2 rounded-lg p-4 flex flex-col">
        <div className="flex justify-between h-3/4">
          <div className="mt-8 flex flex-col py-4 px-8 bg-cinza rounded-lg justify-between h-full">
            <div className="flex flex-col gap-8">
              <span>Histórico de consultas</span>
              <span className="text-gray-600">Resultados de exames</span>
              <span className="text-gray-600">Relatórios médicos</span>       
            </div>

            <Link href="/">
							<span className="underline underline-offset-2">Sair</span>
						</Link>
          </div>
          
          <div className="mt-8 h-full mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 justify-between px-24 py-4 bg-cinza rounded-lg">
              <div className="flex">
                  <span>Data:</span>
              </div>
              <div className="flex">
                  <span>Procedimentos:</span>
              </div>
              <div className="flex pl-2">
                  <span>Profissional:</span>
              </div>
            </div>

            <div className="grid grid-cols-3 justify-between px-24 pb-8 bg-cinza rounded-lg mt-4">
              <div className="flex flex-col">
                <span className="pt-8">02/04/24</span>
                <span className="pt-4">17/05/24</span>
                <span className="pt-4">12/08/24</span>
                <span className="pt-4">25/12/24</span>
              </div>
              <div className="flex flex-col">
                <span className="pt-8">Botox e preenchimento labial</span>
                <span className="pt-4">Depilação a laser</span>
                <span className="pt-4">Verificação de pintas preocupantes</span>
                <span className="pt-4">Análise de manchas suspeitas</span>
              </div>
              <div className="flex flex-col pl-2">
                <span className="pt-8">Dra. Tania</span>
                <span className="pt-4">Dra. Carla</span>
                <span className="pt-4">Dra. Alice</span>
                <span className="pt-4">Dr. Marcos</span>
              </div>
            </div>
          </div>
        </div>
        
        

      </main>
    </div>
    

  );
}