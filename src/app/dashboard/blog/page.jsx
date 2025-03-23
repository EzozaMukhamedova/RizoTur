import Footer from "@/pages/footer/page";
import Navbar from "@/pages/header/page";
import TopFooter from "@/pages/topFooter/page";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ConfettiButton } from "@/components/magicui/confetti";
// import { ConfettiButton } from "@/registry/magicui/confetti";

export default function Blog() {
  return (
    <>
    <h1>BLOG</h1>
      <div className="w-[1165px] h-[80px] m-auto">
        <Navbar />
        <main className="text-center items-center mx-auto h-[500px] justify-center mt-[100px]">
          <h2 className="text-[54px] font-bold">
            Monetize your content <br /> with{" "}
            <span className="text-green-600">GreenShop</span>
          </h2>
          <span className="text-[24px]">
            Greenshop - a platform for buying and selling, publishing and
            monetizing all types of flowers: <br /> acrticles, notes, video,
            photos, podcasts or songs.
          </span>
          <div className="">
            <Button className="mb-[50px]">Click me</Button>
            <div className="relative">
              <ConfettiButton>Confetti 🎉</ConfettiButton>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is it styled?</AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that matches the other
                  components&apos; aesthetic.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                  Yes. It's animated by default, but you can disable it if you
                  prefer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </main>
        <TopFooter />
        <Footer />
      </div>
    </>
  );
}
