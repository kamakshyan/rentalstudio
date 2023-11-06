import { Poppins } from "next/font/google";
import Navbar from "./components/Navbar";
import Image from "next/image";

import scienceImage from "../public/marcos-paulo-prado-tcyW6Im5Uug-unsplash.jpg";
import Footer from "./components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "500", "600", "400", "700", "800", "900"],
});

export default function science() {
  return (
    <>
      <div className={`${poppins.className}`}>
        <Navbar />
        <div className="flex flex-col p-10">
          <h1 className="text-3xl md:text-4xl font-bold text-center">
          The Science Behind Setting and Achieving Goals
          </h1>
          <span className="mt-2 text-xs md:text-sm text-center">-Kamakshya Nanda</span>
          <div className="flex flex-col md:flex-row gap-x-24 items-center">
          <Image
            className="mt-10"
            src={scienceImage}
            height={500}
            width={500}
            alt="Meditation"
          />
          <p className="text-justify mt-10 text-lg md:text-xl">
          Setting and achieving goals is a complex process influenced by various psychological and motivational factors. Understanding the science behind it can significantly increase your chances of success.
<br /><br />
Motivation is a central component of goal achievement. It can be intrinsic (coming from within) or extrinsic (coming from external rewards or pressure). Intrinsic motivation tends to be more sustainable and effective in the long run.
<br /><br />
SMART Goals: Setting SMART goals means making them Specific, Measurable, Achievable, Relevant, and Time-bound. This framework provides clarity and direction for your goals.
<br /><br />
Visualization: Visualizing your goals can activate the brain's reward center, making it more likely that you'll work towards achieving them. Imagine the outcomes, the process, and how you'll feel when you succeed.
<br /><br />
Persistence and Resilience: Achieving goals often involves overcoming obstacles and setbacks. Building resilience and persisting through challenges is crucial. Remember, failure is a natural part of the journey.
<br /><br />
Accountability: Sharing your goals with a friend, mentor, or coach can increase your commitment and hold you accountable for progress.
<br /><br />
Habit Formation: Creating positive habits that align with your goals can make it easier to stay on track. Consistency is key.
          </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
