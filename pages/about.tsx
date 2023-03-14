import Link from "next/link";
import Danny from "../assets/danny.jpg";
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
            eveniet, provident dolorum vero aliquid odio deleniti iste sapiente
            quisquam reprehenderit libero, laborum voluptatem natus assumenda
            enim atque at dicta deserunt? Ducimus fugiat culpa, maiores numquam
            doloremque, minima nisi quisquam aut, optio perferendis
            reprehenderit voluptatum maxime porro excepturi eveniet sunt. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Et, eveniet,
            provident dolorum vero aliquid odio deleniti iste sapiente quisquam
            reprehenderit libero, laborum voluptatem natus assumenda enim atque
            at dicta deserunt? Ducimus fugiat culpa, maiores numquam doloremque,
            minima nisi quisquam aut, optio perferendis reprehenderit voluptatum
            maxime porro excepturi eveniet sunt.
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
