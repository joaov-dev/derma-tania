import { ReactNode } from "react"

interface ButtonProps {
	children: ReactNode;
}

export default function Button({children}: ButtonProps) {
	return (
		<button className="bg-amarelo px-8 py-2 rounded-md text-white font-body text-lg">
			{children}
		</button>
	)	
}