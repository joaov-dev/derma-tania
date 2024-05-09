import Header from "../components/header";
import Image from "next/image";

export default function Services() {
  return (
		<div className="h-screen flex flex-col">
			<Header />

			<main className="grid h-full md:grid-cols-2 w-full">
				<div className="flex flex-col px-10 items-center justify-center gap-12 mt-8">
					<Image src="/service1.png" alt="" width={540} height={360}/>
					<div className="flex flex-col items-center justify-center gap-10">
						<span className="text-7xl font-title">Estética:</span>
						<p className="w-3/4 text-2xl font-body">Na Clínica DermaTania, sua beleza e autoestima estão em nossas mãos! Oferecemos uma ampla gama de serviços estéticos para realçar sua beleza natural, combatendo os sinais do tempo e proporcionando uma pele radiante e rejuvenescida.</p>
					</div>
				</div>

				<div className="flex flex-col px-10 items-center justify-center gap-12 mt-8">
					<div className="flex flex-col items-center justify-center gap-10">
						<span className="text-7xl font-title">Saúde:</span>
						<p className="w-3/4 text-2xl font-body">Sua saúde dermatológica é nossa prioridade! Oferecemos uma gama completa de serviços para prevenir, diagnosticar e tratar as mais diversas doenças da pele, garantindo o seu bem-estar e a beleza natural do seu rosto e corpo.</p>
					</div>
					<Image src="/service2.png" alt="" width={540} height={360}/>
				</div>
			</main>

		</div>
		// <div className="h-screen flex flex-col">
		// 	<Header />

		// 	<main className="grid h-full mt-8 md:grid-cols-2 w-full">
		// 		<div className="flex flex-col px-10 items-center justify-center gap-12">
		// 			<div className="flex flex-col items-center justify-center gap-10">
		// 				<span className="text-7xl font-title">Quem Somos?</span>
		// 				<p className="w-3/4 text-2xl font-body">Somos a Clínica Dermatológica DermaTania, um espaço acolhedor dedicado à saúde e beleza da sua pele. Com uma equipe de profissionais experientes e apaixonados por dermatologia, oferecemos atendimento personalizado e de alta qualidade para atender às suas necessidades individuais.</p>
		// 			</div>
		// 			<Image src="/equipe.png" alt="" width={540} height={360}/>
		// 		</div>

		// 		<div className="flex flex-col	 px-10 items-center justify-center gap-12">
		// 			<Image src="/tania2.png" alt="" width={315} height={350}/>
		// 			<div className="flex flex-col items-center justify-center gap-10">
		// 				<span className="text-7xl font-title">Valores:</span>
		// 				<p className="w-3/4 text-2xl font-body">Na Clínica Dermatológica DermaTania, acreditamos que a beleza da pele começa com a saúde. Por isso, oferecemos um atendimento personalizado e de alta qualidade, pautado por valores como, Cuidado Individualizado, Excelência Profissional e Ética e Transparência, que garantem a sua satisfação</p>
		// 			</div>
		// 		</div>
		// 	</main>

		// </div>
  );
}