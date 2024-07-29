import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Footer = () => {
  return ( 
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-400 p-2 bg-green-100">
      <div className="max-w-screen-lg mx-auto flex items-center justify-between h-full">
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/set.png"
            alt="Conjuntos"
            height={32}
            width={38}
            className="mr-4 rounded-md"
          />
          Conjuntos
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/123.png"
            alt="Numeros"
            height={32}
            width={38}
            className="mr-4 rounded-md"
          />
          Números
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/suma.png"
            alt="Suma"
            height={32}
            width={38}
            className="mr-4 rounded-md"
          />
          Suma
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/resta.png"
            alt="Resta"
            height={32}
            width={38}
            className="mr-4 rounded-md"
          />
          Resta
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/multiplicacion.png"
            alt="Multiplicación"
            height={32}
            width={38}
            className="mr-4 rounded-md"
          />
          Multiplicación
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/division.png"
            alt="Division"
            height={32}
            width={38}
            className="mr-4 rounded-md"
          />
          Division
        </Button>
      </div>
    </footer>
   );
}
