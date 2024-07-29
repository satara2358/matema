import { Button } from "@/components/ui/button";
import { ClerkLoaded, ClerkLoading, SignInButton, SignUpButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="max-w-[998px] max-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2">
        <div className="relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0">
          <Image
            src="/rompecabezas.png"
            fill
            alt="Hero"
          />
        </div>
          <div className="flex flex-col items-center gap-y-8">
          <h1 className="text-xl lg:text-3xl font-bold text-neutral-100 max-w-[480px] text-center">
            Modelos de Neurociencia para aprender Matemáticas
          </h1>
            <div className="flex flex-col items-center gap-y-2 max-w-[330px] w-full">
              <ClerkLoading>
                <Loader className="h-5 w-5 text-muted-foreground animate-ping"/>
              </ClerkLoading>
              <ClerkLoaded>
                <SignedOut>
                  <SignUpButton
                    mode="modal"
                  >
                    <Button size="lg" variant='primary' className="w-full pt-1">
                      Comencemos a aprender
                    </Button>
                  </SignUpButton>
                  <SignInButton
                    mode="modal"
                  >
                    <Button size="lg" variant='primaryOutline' className="w-full">
                      Estamos Listos
                    </Button>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                  <Button size="lg" variant="primary" className="w-full" asChild>
                    <Link href="/learn">
                      Continuemos divirtiéndonos
                    </Link>
                  </Button>
                </SignedIn>
              </ClerkLoaded>
            </div>
          </div>
      </div>
      <div></div>
    </>
  );
}
