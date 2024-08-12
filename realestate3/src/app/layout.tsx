import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { StoreProvider } from './redux/StoreProvider'
import Header from '@/components/header/Header'
import Menu from '@/components/menu/Menu'
import Footer from '@/components/footer/Footer'
import ContactPopup from '@/components/contactPopup/contactPopup'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'AGENT TSEHENKO',
    description: 'your agent in real estate world',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <StoreProvider>
            <html lang="en">
                <body className={montserrat.className}>
                    <Header />
                    <Menu />
                    <ContactPopup />
                    {children}
                    <Footer />
                </body>
            </html>
        </StoreProvider>
    )
}
