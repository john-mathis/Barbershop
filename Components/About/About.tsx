import Link from "next/link";
import Danny from "../../public/assets/danny.jpg";
import Image from "next/image";

export interface IAbout {
  src: string;
  className: string;
}

export default function About() {
  return (
    <>
      <h1 className="text-3xl text-center my-4 mt-8 ">About Prime</h1>
      <div className="relative px-16 py-16 m-auto lg:flex lg:justify-center xl:max-w-[76rem] xl:justify-between 2xl:max-w-[80rem]">
        <div>
          <Image
            className="w-[18rem] mt-8 m-auto sm:w-[22rem] md:w-[25rem] md:my-0 md:mb-0 lg:max-w-[20rem]"
            alt="danny cutting hair"
            src={Danny}
            priority
          />
        </div>
        <div>
          <p className="max-w-[95%] mx-auto text-lg text-center lg:text-left mt-8 md:h-120 md:max-w-[45rem] lg:ml-8 lg:mt-0">
            Growing up in Hartford, CT was a unique experience, as it is a city
            with a rich history and diverse population. The city has many
            different neighborhoods, each with its own personality and culture.
            Growing up in Hartford, CT means being exposed to a variety of
            different ethnicities, languages, and lifestyles, which can provide
            a valuable experience in diversity and cultural awareness.
          </p>
          <p className="max-w-[95%] mx-auto text-lg text-center lg:text-left mt-8 md:h-120 md:max-w-[45rem] lg:ml-8 lg:mt-6 ">
            Being a passionate barber means much more than simply cutting hair.
            It's about creating an experience for every customer that walks
            through the door. I take pride in my work and strive to exceed my
            clients' expectations with every cut. Through attention to the
            details, taking the time to understand my client's hair type,
            preferences, and lifestyle, I offer personalized recommendations to
            ensure they leave the chair looking and feeling their best.
          </p>
          <p className="max-w-[95%] mx-auto text-lg text-center lg:text-left mt-8 md:h-120 md:max-w-[45rem] lg:ml-8 lg:mt-6 ">
            I wholeheartedly understand the transformative power of a good
            haircut, and the confidence it can give someone. I'm learning and
            staying up-to-date with the latest trends and techniques to continue
            delivering exceptional service to my clients. Being a passionate
            barber is not just a job, it's a way of life
          </p>
        </div>
      </div>
    </>
  );
}
