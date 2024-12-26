import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";
import { useState } from "react";

export function ProductCarousel() {
  const images = [
    "/images/product-1.jpg",
    "/images/product-2.jpg",
    "/images/product-3.jpg",
    "/images/product-4.jpg",
  ];

  const [api, setApi] = useState<CarouselApi>();

  return (
    <div className="flex flex-col gap-4 max-w-md">
      <Carousel className="w-full" setApi={setApi}>
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className='border-transparent shadow-none'>
                  <CardContent className="flex aspect-square items-center justify-center p-0 overflow-hidden">
                    <img
                      src={image}
                      alt={`Product ${index + 1}`}
                      className="w-full block align-bottom"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="flex justify-center gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            className="w-16 h-16 rounded-lg overflow-hidden border-2 border-transparent hover:border-primary focus:border-primary transition-colors"
            onClick={() => api?.scrollTo(index)}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-full block align-bottom"
            />
          </button>
        ))}
      </div>
    </div>
  );
}