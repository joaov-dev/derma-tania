import Header from "../components/header";
import Link from "next/link";

export default function Services() {
  return (
    <div className="h-screen flex flex-col">
      <Header />

			<main className="flex justify-center h-full">
        <div className="flex w-5/6 h-full">
					<div className="flex items-center justify-center w-1/2">
            <div className="flex flex-col">
              <span className="text-7xl font-title font-bold">ACESSE SUA</span>
              <span className="text-8xl font-title font-bold">CONTA!</span>
            </div>
          </div>
          <div className="flex justify-center items-center py-5 px-8 w-1/2">
            <div className="h-4/6 w-full bg-cinza rounded-lg flex items-center justify-center">
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
                
                <div className="w-full flex justify-center mb-4 mt-16">
									<Link href="/login" className="w-full flex justify-center">
                    <button className="bg-amarelo text-white px-8 py-2 w-1/2 rounded-md font-body text-lg">
                      Crie sua conta!
                    </button>
                  </Link>
                </div>
                
              </form>
            </div>
          </div>
        </div>
			</main>
    </div>
		

    
  );
}