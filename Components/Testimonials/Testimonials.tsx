import TestimonialData from "../Testimonials/TestimonialData.json";
import { AiFillStar } from "react-icons/ai";

export default function Testimonials() {
  return (
    <>
      <section className="bg-black text-white flex flex-col max-w-full md:flex-row">
        {TestimonialData.map((info) => {
          return (
            <div className="border-2 p-8 md:w-1/3" key={info.name}>
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
