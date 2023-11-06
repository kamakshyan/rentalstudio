import { Poppins } from "next/font/google";
import Navbar from "./components/Navbar";
import Image from "next/image";

import eatingImage from "../public/eiliv-aceron-NnIWIPdxbPg-unsplash.jpg";
import Footer from "./components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "500", "600", "400", "700", "800", "900"],
});

export default function eating() {
  return (
    <>
      <div className={`${poppins.className}`}>
        <Navbar />
        <div className="flex flex-col p-10">
          <h1 className="text-3xl md:text-4xl font-bold text-center">
          The Ultimate Guide to Healthy Eating on a Budget
          </h1>
          <span className="mt-2 text-xs md:text-sm text-center">-Kamakshya Nanda</span>
          <div className="flex flex-col md:flex-row gap-x-24 items-center">
          <Image
            className="mt-10"
            src={eatingImage}
            height={500}
            width={500}
            alt="Meditation"
          />
          <p className="text-justify mt-10 text-lg md:text-xl">
          Eating healthy doesn't have to break the bank. In fact, making nutritious choices can actually save you money in the long run, as you'll likely spend less on healthcare costs. Here's how to eat well without overspending:
<br /><br />
Start by planning your meals for the week. This allows you to create a shopping list based on what you need and reduces impulse purchases. When possible, purchase non-perishable items like rice, beans, and pasta in bulk. This can significantly lower the cost per serving.
<br /><br />
Shop seasonal and local. Fruits and vegetables in season are often more affordable and tastier. Additionally, buying locally can help you save on transportation costs.
<br /><br />
Cook at home. Eating out can quickly add up. Cooking at home allows you to control your ingredients, portion sizes, and save money.
<br /><br />
Limit processed foods. Processed foods are not only less healthy but can also be more expensive per serving. Opt for whole, unprocessed ingredients.
<br /><br />
Use leftovers creatively. Get creative with using leftovers to reduce food waste. Turn last night's roasted vegetables into a tasty frittata or stir-fry.
<br /><br />
Grow your own. If you have space and time, consider growing some of your own produce. Even a small herb garden can save you money on seasonings.
<br /><br />
Take advantage of sales and coupons. Keep an eye out for sales and use coupons when available, but be cautious not to buy items you don't need.
          </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
