import Image from "next/image";
import Button from "./button";

import Link from "next/link";

export default function Header() {
	return (
		<header className="flex bg-laranja justify-between items-center w-full px-2">
			<Link href="/"> 
				<Image src="/logo.png" alt="" width={96} height={96}/> 
			</Link>
			<div className="flex w-full justify-center px-8 gap-8 md:gap-32">
				<Link href="/aboutus" className="md:text-xl text-m text-white font-title opacity-75 hover:opacity-100 transition ease-in-out delay-100">Sobre nós</Link>
				<Link href="/services" className="md:text-xl text-m text-white font-title opacity-75 hover:opacity-100 transition ease-in-out delay-100">Serviços</Link>
				<Link href="/contact" className="md:text-xl text-m text-white font-title opacity-75 hover:opacity-100 transition ease-in-out delay-100">Contato</Link>
			</div>
			<Link href="/login" className="hover:scale-105 transition ease-in-out delay-100">
				<Button>Entrar</Button>
			</Link>
			
		</header>
	)
}