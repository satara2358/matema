import { Button } from "@/components/ui/button";
import { ClerkLoaded, ClerkLoading, SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import { AppProps } from "next/app";
import Image from "next/image";

export const Header = ({ Component, pageProps }: AppProps) => {
  return (
    <header className="h-20 w-full border-b-2 border-slate-200 px-4">
      <div className="lg:max-w-screen-lg max-auto flex items-center justify-between h-full">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image
            src="/logo.svg"
            alt="Logo Inicial"
            width="30"
            height="30"
          />
          <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
            Mage-MATICAS
          </h1>
        </div>
        <ClerkLoading>
          <Loader className="h-20 w-20 text-muted-foreground animate-spin"/>
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <UserButton/>
          </SignedIn>
          <SignedOut>
            <SignInButton
              mode="modal"
              
            >
              {/* <Component {...pageProps}/> */}
              <Button variant={"danger"}>
                Aprender
              </Button>
            </SignInButton>
          </SignedOut>
        </ClerkLoaded>
      </div>
    </header>
    );
}
