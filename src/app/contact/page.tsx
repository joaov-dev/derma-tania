import Header from "../components/header";
import Button from "../components/button";

export default function Services() {
  return (
    <div className="h-screen flex flex-col">
      <Header />

      <main className="flex justify-center h-full">
        <div className="flex w-5/6 h-full">
          <div className="flex items-center justify-center w-1/2">
            <div className="flex flex-col">
              <span className="text-7xl font-title font-bold">TIRE SUAS</span>
              <span className="text-8xl font-title font-bold">DUVIDAS!</span>
            </div>
          </div>
          <div className="flex justify-center items-center py-5 px-8 w-1/2">
            <div className="h-3/4 w-full bg-cinza rounded-lg flex items-center justify-center">
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
                  <p className="text-body mb-2">Telefone (DDD):</p>
                  <input type="text" className="rounded-md w-full"/>
                </div>
                <div className="mb-6">
                  <p className="text-body mb-2">Mensagem:</p>
                  <textarea className="w-full resize-none rounded-md"></textarea>
                </div>
                
                <p className="text-body mb-2">Gostaria de receber promoções e avisos?</p>
                
                <ul className="flex justify-around items-center gap-10 w-full mb-6">
                  <li className="w-full">
                    <input type="radio" name="promo" id="sim" value="yes" className="hidden peer" required/>
                    <label htmlFor="sim" className="inline-flex items-center justify-center w-full py-2 bg-white rounded-md peer-checked:bg-amarelo peer-checked:text-white">
                      <p>Sim</p>
                    </label>
                  </li>

                  <li className="w-full">
                    <input type="radio" name="promo" id="nao" value="no" className="hidden peer"/>
                    <label htmlFor="nao" className="inline-flex items-center justify-center w-full py-2 bg-white rounded-md peer-checked:bg-amarelo peer-checked:text-white">
                      <p>Não</p>
                    </label>
                  </li>
                </ul>
                <div className="w-full flex justify-center">
                  <Button>Enviar!</Button>
                </div>
                
              </form>
            </div>
          </div>
        </div>
        </main>
    </div>
		

    
  );
}