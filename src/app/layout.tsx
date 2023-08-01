import './globals.scss'
import { Poppins } from 'next/font/google'
import { Footer } from './componentes/footer/footer'

const inter = Poppins({
   subsets: ['latin'],
    weight: ['300', '400', '500', '600'] 
})

export const metadata = {
  title: 'Roberto Falcão',
  description: 'Roberto Falcão é um devenvolvedor front-end',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
