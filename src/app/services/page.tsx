import Header from "../components/header";
import Image from "next/image";

export default function Services() {
  return (
		<div className="h-screen flex flex-col">
			<Header />

			<main className="flex h-full">
				<div className="flex flex-col w-1/2 px-10 items-center justify-center gap-24">
					<Image src="/service1.png" alt="" width={540} height={360}/>
					<div className="flex flex-col items-center justify-center gap-10">
						<span className="text-7xl font-title">Estética:</span>
						<p className="w-3/4 text-2xl font-body">Na Clínica DermaTania, sua beleza e autoestima estão em nossas mãos! Oferecemos uma ampla gama de serviços estéticos para realçar sua beleza natural, combatendo os sinais do tempo e proporcionando uma pele radiante e rejuvenescida.</p>
					</div>
				</div>

				<div className="flex flex-col w-1/2 px-10 items-center justify-center gap-24">
					<div className="flex flex-col items-center justify-center gap-10">
						<span className="text-7xl font-title">Saúde:</span>
						<p className="w-3/4 text-2xl font-body">Sua saúde dermatológica é nossa prioridade! Oferecemos uma gama completa de serviços para prevenir, diagnosticar e tratar as mais diversas doenças da pele, garantindo o seu bem-estar e a beleza natural do seu rosto e corpo.</p>
					</div>
					<Image src="/service2.png" alt="" width={540} height={360}/>
				</div>
			</main>

		</div>
  );
}