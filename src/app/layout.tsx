'use client'
import type { Metadata } from 'next'
import { Francois_One, Inter, Source_Code_Pro, Varela_Round } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ThemeProvider, createTheme, Theme } from '@mui/material/styles';

const francois = Francois_One({
  subsets: ['latin'],
  weight: ['400'],
  variable: "--font-francois",

})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const theme = createTheme({
  typography: {
    fontFamily: francois.style.fontFamily
  }

})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >

      <body >
        <ThemeProvider theme={theme}>
            <Navbar />
          
          {children}

          <footer>
            <Footer />
          </footer>
        </ThemeProvider>
      </body>

    </html>
  )
}
