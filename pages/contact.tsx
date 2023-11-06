import React from "react";
import { Poppins } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Image from "next/image";

import contactImage from "../public/kaleb-tapp-J59wWPn09BE-unsplash.jpg";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "500", "600", "400", "700", "800", "900"],
});

export default function contact() {
  return (
    <div className={`${poppins.className}`}>
      <Navbar />
      <h1 className="text-center text-2xl font-bold mt-10 md:text-3xl">
        Contact Me
      </h1>
      <p className="text-center text-sm mt-2 px-10 md:text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        deserunt repellat at! Cum!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-20 items-center p-10">
        <Image
        className="hidden md:block w-full"
        src={contactImage} alt="Contact Image" height={500} width={500}/>
        <form className="flex flex-col w-full gap-y-5 ">
          <div className="flex flex-col gap-y-1">
            <label className="text-sm">Name</label>
            <input
              className="px-3 py-2 bg-gray-200"
              type="text"
              name="Name"
              placeholder="John Doe"
              id=""
            />
          </div>
          <div className="flex flex-col gap-y-1">
            <label className="text-sm">Email</label>
            <input
              className="px-3 py-2 bg-gray-200"
              type="email"
              name="email"
              placeholder="john@gmail.com"
              id=""
            />
          </div>
          <div className="flex flex-col gap-y-1">
            <label className="text-sm">Message</label>
            <textarea
              className="px-3 py-2 h-48 bg-gray-200"
              name="message"
              id=""
              placeholder="Enter a short message here 😁"
            ></textarea>
          </div>
          <button className="bg-[#FF3A3E] text-white py-3" type="submit">Send</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
