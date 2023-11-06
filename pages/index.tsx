import { Poppins } from "next/font/google";
import Navbar from "./components/Navbar";
import Image from "next/image";
import eatingImage from "../public/eiliv-aceron-NnIWIPdxbPg-unsplash.jpg";
import scienceImage from "../public/marcos-paulo-prado-tcyW6Im5Uug-unsplash.jpg";
import mindfulImage from "../public/motoki-tonn-ezOKZhYJAFo-unsplash.jpg";
import Card from "./components/Card";
import Footer from "./components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "500", "600", "400", "700", "800", "900"],
});

export default function Home() {
  const blogs = [
    {
      title: "The Ultimate Guide to Healthy Eating on a Budget",
      image: eatingImage,
      link: "/eating",
    },
    {
      title: "The Science Behind Setting and Achieving Goals",
      image: scienceImage,
      link: "/science",
    },
    {
      title: "The Art of Mindful & Peaceful Living",
      image: mindfulImage,
      link: "/mindful",
    },
  ];
  return (
    <>
      <div className={`${poppins.className}`}>
        <Navbar />
        <h1 className="text-center text-2xl font-bold mt-10 md:text-3xl">
          Published Blogs
        </h1>
        <p className="text-center text-sm mt-2 px-10 md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          deserunt repellat at! Cum!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-10 p-10">
          {blogs.map((blog, index) => {
            return (
              <Card
                key={index}
                title={blog.title}
                img={blog.image}
                link={blog.link}
              />
            );
          })}
        </div>
        <Footer />
      </div>
    </>
  );
}
