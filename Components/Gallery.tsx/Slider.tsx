import GalleryData from "./galleryData.json";

export default function Slider() {
  return (
    <section className="m-auto grid grid-cols-1 gap-4 my-12 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl">
      {GalleryData.map((img) => {
        return (
          <div key={img.image}>
            <img src={img.image} alt="clients" className="m-auto max-w-xs" />
          </div>
        );
      })}
    </section>
  );
}
