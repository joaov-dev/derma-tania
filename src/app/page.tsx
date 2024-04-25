import Image from "next/image";
import Header from "./components/header";
import Button from "./components/button";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      
      <main className="h-screen flex flex-col">
        <div className="h-1/2 bg-cinza flex justify-around">
          <div className="flex flex-col justify-center items-center">
            <span className="text-6xl font-title">DermaTania</span>
            <span className="text-5xl font-title">Clinica Dermatologica</span>
          </div>
          <div className="flex items-end">
            <Image src="/tania.png" alt="" width={485} height={300}/>
          </div>
        </div>

        <div className="h-1/2 bg-offwhite flex flex-col">
          <div className="h-3/4 flex items-center justify-center gap-32 px-28">
            <div className="flex flex-col items-center justify-center gap-2.5 hover:scale-105 transition ease-in-out delay-50">
              <Image src="/procedimento.png" alt="" width={300} height={300}/>
              <p className="font-body text-lg">Tratamentos Faciais</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2.5 hover:scale-105 transition ease-in-out delay-50">
              <Image src="/procedimento2.png" alt="" width={300} height={300}/>
              <p className="font-body text-lg">Atendimento personalizado</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2.5 hover:scale-105 transition ease-in-out delay-50">
              <Image src="/procedimento3.png" alt="" width={300} height={300}/>
              <p className="font-body text-lg">Equipe especializada</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2.5 hover:scale-105 transition ease-in-out delay-50">
              <Image src="/procedimento4.png" alt="" width={300} height={300}/>
              <p className="font-body text-lg">Tratamentos corporais</p>
            </div>
          </div>
          
          <div className="h-1/4 bg-offwhite flex items-center justify-center py-5">
            <Button>Agende sua consulta!</Button>
          </div>
        </div>
      </main>

    </div>
  );
}
