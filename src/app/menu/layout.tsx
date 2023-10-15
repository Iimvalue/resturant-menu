import { Francois_One, Inter} from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

const francois = Francois_One({
    subsets: ['latin'],
    weight: ['400']
})




export default function MenuLayout(
    { children }: { children: React.ReactNode }
) {
    return (
        <section className={francois.className}>
                {children}           
        </section>
    )
}
