import { ReactNode } from "react"

interface ButtonProps {
	children: ReactNode;
}

export default function Button({children}: ButtonProps) {
	return (
		<button className="bg-amarelo px-4 md:px-8 py-2 rounded-md text-white font-body md:text-lg text-m">
			{children}
		</button>
	)	
}