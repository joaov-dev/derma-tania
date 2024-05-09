import Image from "next/image";
import Header from "./components/header";
import Button from "./components/button";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      
      <main className="h-screen flex flex-col">
        <div className="h-fit bg-cinza flex justify-around px-4">
          <div className="flex flex-col justify-center items-start">
            <span className="md:text-5xl text-2xl font-title">DermaTania</span>
            <span className="md:text-4xl text-xl font-title">Clinica Dermatologica</span>
          </div>
          <div className="flex items-end">
            <Image src="/tania.png" alt="" width={413} height={255} className=""/>
          </div>
        </div>

        <div className="h-fit flex items-center justify-center py-8 bg-offwhite">
            <Button>Agende sua consulta!</Button>
        </div>

        <div className="h-full bg-offwhite flex flex-col gap">
          <div className="h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center justify-center gap-2.5 hover:scale-105 transition ease-in-out delay-50 pt-4">
              <Image src="/procedimento.png" alt="" width={200} height={200}/>
              <p className="font-body text-lg">Tratamentos Faciais</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2.5 hover:scale-105 transition ease-in-out delay-50 pt-4">
              <Image src="/procedimento2.png" alt="" width={200} height={200}/>
              <p className="font-body text-lg">Atendimento personalizado</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2.5 hover:scale-105 transition ease-in-out delay-50 pt-4">
              <Image src="/procedimento3.png" alt="" width={200} height={200}/>
              <p className="font-body text-lg">Equipe especializada</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2.5 hover:scale-105 transition ease-in-out delay-50 pt-4">
              <Image src="/procedimento4.png" alt="" width={200} height={200}/>
              <p className="font-body text-lg">Tratamentos corporais</p>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}
