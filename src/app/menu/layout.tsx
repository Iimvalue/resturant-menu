import { Francois_One } from "@next/font/google";
const francois = Francois_One({
  subsets: ["latin"],
  weight: ["400"],
});
export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className={francois.className}>{children}</section>;
}
