export default function Footer() {
  return (
    <section className="bg-black text-gray-400 relative p-10 ">
      <div className="flex flex-col md:flex-row">
        <div className="my-4 md:my-0 md:w-2/4 px-6">
          <p className="text-xl font-bold mb-2 text-white">The Prime Cutz</p>
          <p className="mb-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
            accusantium. Ex repudiandae totam ea quaerat voluptatem.
            Voluptatibus culpa similique itaque mollitia. Autem, quae rerum sit,
            amet provident quisquam ullam non consequuntur quos dolorem ea ab
            dolorum accusamus, ipsum fugit omnis quidem alias corrupti!
            Voluptatem tempora, voluptas odio eius esse molestias.
          </p>

          <p className="mb-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
            accusantium. Ex repudiandae totam ea quaerat voluptatem.
          </p>
        </div>
        <div className="my-4 md:my-0 md:w-2/4 px-6">
          <p className="text-xl font-bold mb-2 text-white">Contact Us</p>
          <p>Address: 87 Main Steet, Hartford, Connecticut, 06106 </p>
          <p>Phone: 860-221-4233 </p>
          <p>Email: info@example.com </p>
          <ul className="mt-4">
            <li className="text-white text-xl font-bold mb-1">Hours</li>
            <li className="mb-1">Monday: 9:00am-7:00pm</li>
            <li className="mb-1">Tuesday: 9:00am-7:00pm</li>
            <li className="mb-1">Wednesday: 9:00am-7:00pm</li>
            <li className="mb-1">Thursday: 9:00am-7:00pm</li>
            <li className="mb-1">Friday: 9:00am-4:00pm</li>
            <li className="mb-1">Satuday: 9:00am-7:00pm</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
