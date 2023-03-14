import Slider from "../Components/Slider/Slider";
import slides from "../Components/Slider/sliderData.json";

export default function gallery() {
  return <Slider slides={slides} />;
}
