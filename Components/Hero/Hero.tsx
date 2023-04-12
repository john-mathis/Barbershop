export default function Hero() {
  return (
    <header className="flex items-center justify-center w-full h-[100vh] relative bg-[url('https://images.squarespace-cdn.com/content/v1/5ae7a6e2e2ccd1343b0b1878/50b35e6c-a4d2-4da2-8166-fd9d39d30dbd/hero.jpg?format=1500w')] bg-cover bg-center">
      <div className="w-full absolute inset-0 backdrop-brightness-50 "></div>

      <div className="flex flex-col items-center mb-32">
        <h1 className="text-center text-4xl	text-white font-bold drop-shadow-lg max-w-xs sm:max-w-2xl">
          WELCOME TO
          <span className="text-amber-500"> THE PRIME CUTZ</span>
        </h1>
        <p className="z-[1]	mt-2 text-center text-lg text-white">
          Home of the top rated barber in Hartford.
        </p>
        <a
          className="mt-8 px-12 py-3 bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-600 hover:to-red-700 text-xl text-white font-semibold drop-shadow-lg rounded-full"
          href="/services"
        >
          BOOK NOW
        </a>
      </div>
    </header>
  );
}
