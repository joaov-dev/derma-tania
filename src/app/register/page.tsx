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
              <span className="text-7xl font-title font-bold">CRIE UMA</span>
              <span className="text-8xl font-title font-bold">CONTA!</span>
            </div>
          </div>

          <div className="flex justify-center items-center py-5 px-8">
            <div className="py-8 w-3/4 bg-cinza rounded-lg flex items-center justify-center">
              <form action="" className="w-3/4">
								<div className="mb-6">
                  <p className="text-body mb-2">Nome:</p>
                  <input type="text" className="rounded-md w-full"/>
                </div>
                <div className="mb-6">
                  <p className="text-body mb-2">E-mail:</p>
                  <input type="email" className="rounded-md w-full"/>
                </div>
                <div className="mb-6">
                  <p className="text-body mb-2">Senha:</p>
                  <input type="password" className="rounded-md w-full"/>
                </div>
								<div className="mb-6">
                  <p className="text-body mb-2">Confirme sua Senha:</p>
                  <input type="password" className="rounded-md w-full"/>
                </div>
                
                <div className="w-full flex justify-center mt-6">
                  <Link href="/login" className="w-full flex justify-center">
                    <Button>Criar conta</Button>
                  </Link>
                </div>
                
              </form>
            </div>
          </div>
			</main>
    </div>
		

    
  );
}