"use client";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ImageItem {
  src: string;
  heading: string;
  date: string;
}

interface MyCarouselProps {
  images: ImageItem[];
}

export default function MyCarousel({ images }: MyCarouselProps) {
  return (
    <div className="w-full px-0 py-10 flex flex-col gap-10">
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="px-10 -ml-40 -mr-40">
          {images.map((item, index) => (
            <CarouselItem key={index} className="basis-1/2 md:basis-1/3 px-12">
              <div className="flex flex-col items-center text-center">
                <div className="w-full relative aspect-[4/3]">
                  <Image
                    src={item.src}
                    alt={item.heading}
                    fill
                    className="object-cover rounded-md"
                    sizes="(max-width: 700px) 85vw, 25vw"
                  />
                </div>
                <h3 className="mt-3 text-lg font-semibold">{item.heading}</h3>
                <p className="text-xl text-tertiary">{item.date}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="flex justify-center pr-12 mt-6">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
}
