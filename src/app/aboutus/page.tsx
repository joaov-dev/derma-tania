import Image from "next/image";
import Header from "../components/header";

export default function AboutUs() {
  return (
		<div className="h-screen flex flex-col">
			<Header />

			<main className="flex h-full">
				<div className="flex flex-col w-1/2 px-10 items-center justify-center gap-24">
					<div className="flex flex-col items-center justify-center gap-10">
						<span className="text-7xl font-title">Quem Somos?</span>
						<p className="w-3/4 text-2xl font-body">Somos a Clínica Dermatológica DermaTania, um espaço acolhedor dedicado à saúde e beleza da sua pele. Com uma equipe de profissionais experientes e apaixonados por dermatologia, oferecemos atendimento personalizado e de alta qualidade para atender às suas necessidades individuais.</p>
					</div>
					<Image src="/equipe.png" alt="" width={540} height={360}/>
				</div>

				<div className="flex flex-col w-1/2 px-10 items-center justify-center gap-24">
					<Image src="/tania2.png" alt="" width={315} height={350}/>
					<div className="flex flex-col items-center justify-center gap-10">
						<span className="text-7xl font-title">Valores:</span>
						<p className="w-3/4 text-2xl font-body">Na Clínica Dermatológica DermaTania, acreditamos que a beleza da pele começa com a saúde. Por isso, oferecemos um atendimento personalizado e de alta qualidade, pautado por valores como, Cuidado Individualizado, Excelência Profissional e Ética e Transparência, que garantem a sua satisfação</p>
					</div>
				</div>
			</main>

		</div>
  );
}
