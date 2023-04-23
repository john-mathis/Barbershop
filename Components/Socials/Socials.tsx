import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import Link from "next/link";

export default function Socials() {
  return (
    <section className="bg-black text-white flex flex-col text-center h-48 justify-center	 items-center">
      <p className="font-bold uppercase text-3xl mb-4">Socials</p>
      <div className="flex justify-center">
        <Link href="https://www.facebook.com/danifreerun14">
          <BsFacebook className="w-8 h-8 mx-3 cursor-pointer" />
        </Link>
        <Link href="https://instagram.com/_theprimecutz" target="_blank">
          <AiFillInstagram className="w-8 h-8 mx-3 cursor-pointer" />
        </Link>

        <FaTiktok className="w-8 h-8 mx-3 cursor-pointer" />
        <BsYoutube className="w-8 h-8 mx-3 cursor-pointer" />
      </div>
    </section>
  );
}
