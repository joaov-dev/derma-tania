import Button from "../components/button";
import Header from "../components/header";
import Link from "next/link";

export default function Services() {
  return (
    <div className="h-screen flex flex-col">
      <Header />

			<main className="grid h-full md:grid-cols-2 w-full">
        <div className="flex items-center justify-center">
          <div className="flex flex-col">
            <span className="text-6xl md:text-5xl lg:text-7xl font-title font-bold">ACESSE SUA</span>
            <span className="text-7xl md:text-6xl lg:text-8xl font-title font-bold">CONTA!</span>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="py-8 w-3/4 bg-cinza rounded-lg flex items-center justify-center">
            <form action="" className="w-3/4">
              <div className="mb-6 mt-3">
                <p className="text-body mb-2">E-mail:</p>
                <input type="email" className="rounded-md w-full"/>
              </div>
              <div className="mb-6">
                <p className="text-body mb-2">Telefone (DDD):</p>
                <input type="text" className="rounded-md w-full"/>
              </div>

              <div className="flex mt-6">
                <div className="w-full flex justify-center">
                  <Link href="/cliente" className="w-full flex justify-center">
                    <Button>Sou Paciente</Button>
                  </Link>
                </div>
                <div className="w-full flex justify-center">
                  <Link href="/colaborador" className="w-full flex justify-center">
                    <Button>Sou Colaborador</Button>
                  </Link>
                </div>
              </div>

              <div className="w-full flex justify-center mt-6">
                <Link href="/register" className="w-full flex justify-center">
                  <Button>Crie sua conta</Button>
                </Link>
              </div>

            </form>
          </div>
        </div>  
      </main>
    </div>
		

    
  );
}