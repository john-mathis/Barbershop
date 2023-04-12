export default function Footer() {
  return (
    <section className="bg-black text-gray-400 relative p-10 ">
      <div className="flex flex-col md:flex-row">
        <div className="my-4 md:my-0 md:w-2/4 px-6">
          <p className="text-xl font-bold mb-2 text-white">The Prime Cutz</p>
          <p className="mb-4">
            Ready for a fresh new look? Our barbershop offers expert haircuts
            and grooming services that will leave you looking and feeling your
            best. Our skilled barbers use the latest techniques and top-quality
            products to deliver the perfect cut for your hair type and style.
            From classic cuts to trendy styles, we've got you covered. Don't
            settle for an average haircut – visit our barbershop today and
            experience the difference. Walk-ins are always welcome!
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
