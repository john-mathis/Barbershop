import Link from "next/link";
import Danny from "../public/assets/danny.jpg";
import Image from "next/image";

export interface IAbout {
  src: string;
  className: string;
}

export default function about<IAbout>() {
  return (
    <>
      <h1 className="text-3xl text-center my-4 md:my-6">About Prime</h1>
      <div className="relative px-16 md:flex md:h-4">
        <div>
          <Image
            className="w-[18rem] mt-8 m-auto sm:w-[22rem] md:w-[25rem] md:my-0 md:mb-0"
            alt="danny cutting hair"
            src={Danny}
            priority
          />
        </div>
        <div>
          <p className="max-w-[90%] mx-auto text-lg mt-8 md:flex md:order-1 md:mt-0 md:ml-8 md:h-120 md:max-w-[45rem] ">
            Being a passionate barber means much more than simply cutting hair.
            It's about creating an experience for every customer that walks
            through the door. I take pride in my work and strive to exceed my
            clients' expectations with every cut. Through attention to the
            details, taking the time to understand my client's hair type,
            preferences, and lifestyle, I offer personalized recommendations to
            ensure they leave the chair looking and feeling their best.
          </p>
          <p className="flex justify-center	">
            <a
              target="_blank"
              className="bg-green-500 text-lg text-center	rounded-md p-2 my-8 w-fit"
              href="https://booksy.com/en-us/615281_danny-theprimecutz_barber-shop_15320_hartford"
            >
              Book with Prime
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
