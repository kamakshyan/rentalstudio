import { Poppins } from "next/font/google";
import Navbar from "./components/Navbar";
import Image from "next/image";

import mindfulImage from "../public/motoki-tonn-ezOKZhYJAFo-unsplash.jpg";
import Footer from "./components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "500", "600", "400", "700", "800", "900"],
});

export default function mindful() {
  return (
    <>
      <div className={`${poppins.className}`}>
        <Navbar />
        <div className="flex flex-col p-10">
          <h1 className="text-3xl md:text-4xl font-bold text-center">
            The Art of Mindful Living
          </h1>
          <span className="mt-2 text-xs md:text-sm text-center">-Kamakshya Nanda</span>
          <div className="flex flex-col md:flex-row gap-x-24 items-center">
          <Image
            className="mt-10"
            src={mindfulImage}
            height={500}
            width={500}
            alt="Meditation"
          />
          <p className="text-justify mt-10 text-lg md:text-xl">
            In today's fast-paced world, many of us find ourselves constantly
            rushing from one task to another, often feeling overwhelmed and
            stressed. But what if there was a way to slow down and truly savor
            each moment?
            <br />
            <br />
            Mindful living is about being fully present and engaged in the here
            and now. It's a practice that allows you to appreciate the beauty of
            each moment, whether it's sipping your morning coffee, taking a
            leisurely walk in the park, or spending quality time with loved
            ones.
            <br />
            <br />
            To get started with mindful living, consider incorporating simple
            mindfulness exercises into your daily routine. These exercises can
            help you become more aware of your thoughts, emotions, and physical
            sensations. For example, you can try mindful breathing, where you
            focus on your breath and let go of any distracting thoughts. Another
            helpful exercise is body scanning, where you pay close attention to
            the sensations in each part of your body.
            <br />
            <br />
            In addition to exercises, it's important to create a mindful
            environment. This might mean reducing distractions, such as turning
            off your phone or finding a quiet place to meditate.
            <br />
            <br />
            By practicing mindfulness, you can reduce stress, enhance your
            well-being, and improve your relationships. The art of mindful
            living is a journey, and with time and patience, you can experience
            its transformative power in your life.
          </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
