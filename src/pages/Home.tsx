import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Home = () => {
  return (
    <div>
      <Carousel
        className="mt-5 mx-3 "
        plugins={[
          Autoplay({
            delay: 5000, // 5 detik
            stopOnInteraction: false, // tetap jalan walau user interaksi
          }),
        ]}
      >
        <CarouselContent>
          <CarouselItem className="h-96 w-full ">
            <img
              src="/images/hero-image1.jpg"
              alt="Hero"
              className="w-full h-full object-cover object-center rounded-xl"
            />
          </CarouselItem>
          <CarouselItem className="h-96 w-full">
            <img
              src="/images/hero-image2.jpg"
              alt="Hero"
              className="w-full h-full object-cover object-center rounded-xl"
            />
          </CarouselItem>
          <CarouselItem className="h-96 w-full">
            <img
              src="/images/hero-image3.jpg"
              alt="Hero"
              className="w-full h-full object-cover object-center rounded-xl"
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Home;
