import { FlipText } from "@/components/magicui/flip-text";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TextAnimate } from "./magicui/text-animate";
import Bulut from "./Bulut";

export function AccordionDemo() {
  return (
    <div className="my-[250px] relative">
      <div className="absolute inset-0 z-0 top-10">
        <Bulut />
      </div>

      <div className="relative z-10">
        <Accordion
          type="single"
          collapsible
          className="w-[1000px] mt-[50px] mx-auto"
        >
          <TextAnimate
            animation="blurInUp"
            by="character"
            duration={1}
            className="text-[34px] font-bold text-black tracking-wide text-center"
          >
            Top 3 savollar
          </TextAnimate>
          <AccordionItem value="item-1">
            <AccordionTrigger className="cursor-pointer text-[18px]">
              Sayohat nimalarni o‘z ichiga oladi?
            </AccordionTrigger>
            <AccordionContent className="text-[16px]">
              ✔️ Aviabilet, mehmonxona, transport, ekskursiya va ovqatlanish.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="cursor-pointer text-[18px]">
              Viza olish uchun nima kerak?
            </AccordionTrigger>
            <AccordionContent className="text-[16px]">
              ✔️ Pasport, fotosurat, bank hujjati va anketa.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="cursor-pointer text-[18px]">
              Sayohatni bekor qilsam, to‘lov qaytariladimi?
            </AccordionTrigger>
            <AccordionContent className="text-[16px]">
              ✔️ Shartnomaga bog‘liq, ba’zi holatlarda to‘liq qaytariladi.
              Ba'zan esa qisman qaytariladi.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
