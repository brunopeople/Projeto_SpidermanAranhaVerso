import './globals.css'
import { Inter } from 'next/font/google'
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Aranhaverse',
  description: "Aplicação Front-end desenvolvido pelo framework Next.js de um carrousel super interativo e baseado no filme do Homem Aranha",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <header>
          <Image
            src="/icons/menu.svg"
            alt="Menu options"
            width={36}
            height={25}
            priority
          />

          <Link href="/">
            <Image
            src="/spider-logo.svg"
            alt="Spiderman"
            width={260}
            height={70}
            priority
            />
          </Link>
          <Image
            src="/icons/user.svg"
            alt="Login"
            width={36}
            height={36}
            priority
          />
        </header>
      </body>
    </html>
  );
}
