"use client";
import Link from "next/link";
import serviceData from "../Services/serviceListData.json";
export default function services() {
  return (
    <section className="max-w-7xl m-auto my-8">
      <h1 className="text-center text-4xl">Services</h1>
      {serviceData.map((data) => {
        return (
          <div
            className="flex flex-row justify-between items-center p-4 border-b-2	"
            key={data.service}
          >
            <p>{data.service}</p>
            <div className="flex flex-row items-center ">
              <p>{data.price}</p>
              <Link
                target="_blank"
                className="bg-green-500 rounded-lg ml-8 px-4 py-2 flex place-self-center pointer hover:bg-slate-700"
                href="https://booksy.com/en-us/615281_danny-theprimecutz_barber-shop_15320_hartford"
              >
                Book
              </Link>
            </div>
          </div>
        );
      })}
    </section>
  );
}
