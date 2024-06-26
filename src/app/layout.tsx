'use client'
import { Francois_One} from 'next/font/google'
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer'
import { ThemeProvider, createTheme } from '@mui/material/styles';


const francois = Francois_One({
  subsets: ['latin'],
  weight: ['400'],
  variable: "--font-francois",

})

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
            <Header />
          
          {children}

          <footer>
            <Footer />
          </footer>
        </ThemeProvider>
      </body>

    </html>
  )
}
