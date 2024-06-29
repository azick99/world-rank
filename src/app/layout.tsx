import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Image from 'next/image' // Import from next/image

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'World ranks',
  description: 'World Ranks project',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=" w-full h-[19rem] bg-no-repeat bg-contain brightness-125  flex items-center justify-center relative">
          <Image
            src="/hero-image-wr.jpg"
            alt="logo"
            className="absolute h-full -z-30"
            fill // Use `fill` instead of `layout="fill"`
            objectFit="cover"
            priority={true}
          />
          <Image
            src="/logo.svg"
            alt="logo"
            width={180}
            height={180}
            className="mb-12"
          />
        </div>
        {children}
      </body>
    </html>
  )
}
