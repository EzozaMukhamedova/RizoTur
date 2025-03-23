// import ProductCard from "@/components/Card";
import Bulut from "@/components/Bulut";
import Card, { BlurFadeDemo } from "@/components/Card";
import Samolyot from "@/components/Samolyot";
import { AccordionDemo } from "@/components/Savol";
import TopRatedExperiences from "@/components/TopRatedExperiences";
import Footer from "@/pages/footer/page";
import Navbar from "@/pages/header/page";
import GreenShopBanner from "@/pages/swiper/page";
import Newsletter from "@/pages/topFooter/page";
import TopFooter from "@/pages/topFooter/page";
// import ProductCard from "../components/ProductCard";

export default function Home({ posts }) {
  return (
    <div className="w-[1440px] h-full  m-auto font-[family-name:var(--font-geist-sans)] border bg-[#E2D3CE] text-black">
      <Navbar />

      {/* pt-[70px] */}
      <GreenShopBanner />
      <TopRatedExperiences />
      <BlurFadeDemo />
      <Bulut />
      <div className="">
        <AccordionDemo />
        <TopFooter />
        {/* <Newsletter /> */}
      </div>

      <Samolyot />

      <Footer />
      {/* <ProductCard /> */}
      {/* <div>
        {posts.map((post) => (
          <ProductCard key={post.id} product={post} />
        ))}
      </div> */}
    </div>
  );
}
