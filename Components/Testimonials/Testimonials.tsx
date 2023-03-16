import TestimonialData from "../Testimonials/TestimonialData.json";
import { AiFillStar } from "react-icons/ai";

export default function Testimonials() {
  return (
    <>
      <p className="text-white text-4xl text-center mt-4">Testimonials</p>
      <section className="bg-black text-white relative flex flex-col m-auto items-center md:max-w-4xl lg:flex-row lg:max-w-5xl xl:max-w-6xl 2xl:7xl">
        {TestimonialData.map((info) => {
          return (
            <div
              className="my-4 border-2 p-8 w-3/4 lg:w-1/3 lg:my-8 lg:mx-2 lg:min-h-[27rem]"
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
