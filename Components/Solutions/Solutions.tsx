import { MdOutlineCleanHands } from "react-icons/md";
import { MdComputer } from "react-icons/md";
import { AiFillClockCircle } from "react-icons/ai";

export default function Solutions() {
  return (
    <>
      <section className="m-auto py-12 px-4 max-w-6xl md:text-center">
        <div className="max-w-8xl m-auto flex flex-col md:flex-row">
          <div className="h-96 px-4 py-8 w-full m-auto">
            <p className="text-center text-2xl font-bold uppercase">Cleanly</p>
            <MdOutlineCleanHands className="h-12 w-12 mx-auto my-4 " />
            <p className="max-w-[25rem] sm:max-w-[30rem] m-auto">
              All tools and equipment that will come into contact with clients
              are thoroughly cleaned and sanitized before each and every
              appontment. Disposable items such as razors, towels, and capes are
              utilized to avoid the risk of cross-contamination.
            </p>
          </div>

          <div className="h-96 px-4 py-8 w-full m-auto">
            <p className="text-center text-2xl font-bold uppercase">
              Serviceable
            </p>
            <MdComputer className="h-12 w-12 mx-auto my-4 " />
            <p className="max-w-[25rem] sm:max-w-[30rem] m-auto">
              By understanding your wants and needs, delivering in a timely and
              efficient manner, I ensure that clients are satisfied with their
              experience. Save time and money by minimizing waste and maximizing
              resources.
            </p>
          </div>

          <div className="h-96 px-4 py-8 w-full m-auto">
            <p className="text-center text-2xl font-bold uppercase">Punctual</p>
            <AiFillClockCircle className="h-12 w-12 mx-auto my-4 " />
            <p className="max-w-[25rem] sm:max-w-[30rem] m-auto">
              Effortlessly schedule services that are convenient and avoid
              conflicts with other commitments. Eliminate the need to wait in
              long lines for an available barber.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
