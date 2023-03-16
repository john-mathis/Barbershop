import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";

export default function Socials() {
  return (
    <section className="flex flex-col text-center">
      <p className="uppercase text-2xl">Socials</p>
      <div className="flex justify-center">
        <BsFacebook className="w-8 h-8 mx-2" />
        <AiFillInstagram className="w-8 h-8 mx-2" />
        <FaTiktok className="w-8 h-8 mx-2" />
        <BsYoutube className="w-8 h-8 mx-2" />
      </div>
    </section>
  );
}
