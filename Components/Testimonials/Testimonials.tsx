import TestimonialData from "../Testimonials/TestimonialData.json";
import { AiFillStar } from "react-icons/ai";

export default function Testimonials() {
  return (
    <>
      <p className="text-4xl text-center mt-8">Testimonials</p>
      <section className="py-8 px-4 relative flex flex-col m-auto items-center md:max-w-4xl lg:grid lg:grid-cols-2 lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl 2xl:grid-cols-4">
        {TestimonialData.map((info) => {
          return (
            <div
              className="my-4 border-2 p-6 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-sm 4 lg:my-8 lg:mx-auto lg:h-[18rem] xl:mx-auto xl:h-[23rem] 2xl:mx-2"
              key={info.name}
            >
              <div className="flex items-center mb-4">
                <img
                  className="w-12 h-12 rounded-full mr-4"
                  src={info.image}
                  alt="clients"
                />
                <div className="flex flex-col">
                  <p>{info.name}</p>
                  <div className="flex">
                    <AiFillStar className="text-amber-400" />
                    <AiFillStar className="text-amber-400" />
                    <AiFillStar className="text-amber-400" />
                    <AiFillStar className="text-amber-400" />
                    <AiFillStar className="text-amber-400" />
                  </div>
                </div>
              </div>
              <p>{info.quote}</p>
            </div>
          );
        })}
      </section>
    </>
  );
}
