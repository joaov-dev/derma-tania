import Header from "../components/header";
import Link from "next/link";

export default function Services() {
  return (
    <div className="h-screen flex flex-col">
      <Header />

			<main className="flex justify-center h-full">
        <div className="flex w-5/6 h-full">
          <div className="flex justify-center items-center py-5 px-8 w-1/2">
            <div className="h-1/2 w-full bg-cinza rounded-lg flex items-center justify-center">
              <form action="" className="w-3/4">
                <div className="mb-6">
                  <p className="text-body mb-2">E-mail:</p>
                  <input type="email" className="rounded-md w-full"/>
                </div>
                <div className="mb-6">
                  <p className="text-body mb-2">Senha:</p>
                  <input type="password" className="rounded-md w-full"/>
                </div>
								<div className="mb-6 flex gap-2.5 items-center">
                  <input type="checkbox" id="check"/>
									<label htmlFor="check">
										<p className="text-body">Lembrar de mim?</p>
									</label>
                </div>
                
                
                <div className="w-full flex justify-center mb-4 mt-6">
									<button className="bg-amarelo px-8 py-2 w-1/2 rounded-md text-white font-body text-lg">
										Entrar!
									</button>
                </div>
								<div className="w-full flex justify-center">
                  <Link href="/register" className="w-full flex justify-center">
                    <button className="bg-white px-8 py-2 w-1/2 rounded-md font-body text-lg">
                      Criar uma conta
                    </button>
                  </Link>
									
                </div>
                
              </form>
            </div>
          </div>
					<div className="flex items-center justify-center w-1/2">
            <div className="flex flex-col">
              <span className="text-7xl font-title font-bold">ACESSE SUA</span>
              <span className="text-8xl font-title font-bold">CONTA!</span>
            </div>
          </div>
        </div>
      </main>
    </div>
		

    
  );
}