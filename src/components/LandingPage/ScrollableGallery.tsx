"use client";

import Autoplay from "embla-carousel-autoplay";
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
                        <CarouselItem key={index} className="basis-1/2 md:basis-1/3 px-6">
                            <div className="flex flex-col items-center text-center">
                                <img src={item.src} alt={item.heading} className="w-full" />
                                <h3 className="mt-3 text-lg font-semibold">{item.heading}</h3>
                                <p className="text-sm text-gray-500">{item.date}</p>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="flex justify-center mt-4 gap-4">
                    <CarouselPrevious />
                    <CarouselNext />
                </div>
            </Carousel>
        </div>
    );
}
