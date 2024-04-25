import Image from "next/image";
import Button from "./button";

import Link from "next/link";

export default function Header() {
	return (
		<header className="h-24 flex bg-laranja justify-between items-center px-10">
			<Link href="/"> 
				<Image src="/logo.png" alt="" width={96} height={96}/> 
			</Link>
			<div className="flex gap-32">
				<Link href="/aboutus" className="text-xl text-white font-title opacity-75 hover:opacity-100 transition ease-in-out delay-100">Sobre nós</Link>
				<Link href="/services" className="text-xl text-white font-title opacity-75 hover:opacity-100 transition ease-in-out delay-100">Serviços</Link>
				<Link href="/contact" className="text-xl text-white font-title opacity-75 hover:opacity-100 transition ease-in-out delay-100">Contato</Link>
			</div>
			<Link href="/login" className="hover:scale-105 transition ease-in-out delay-100">
				<Button>Entrar</Button>
			</Link>
			
		</header>
	)
}