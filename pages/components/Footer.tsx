import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "500", "600", "400", "700", "800", "900"],
  });

export default function Footer() {
  return (
    <div className={`${poppins.className} p-10 text-sm text-center border-t border-slate-400`}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, consectetur.
    </div>
  )
}
