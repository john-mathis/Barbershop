export default function Map() {
  return (
    <iframe
      className="max-w-full w-full h-[40vh]"
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
      src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJl96xvm1T5okRG3QDbKsgv9I&key=AIzaSyCliwA4JAoo2P0B0RawEZvssbH4F99hT9k"
    ></iframe>
  );
}
