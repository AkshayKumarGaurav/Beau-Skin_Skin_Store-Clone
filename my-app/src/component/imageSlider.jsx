import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
 
const images = [
    { url: "https://static.thcdn.com/images/xlarge/webp/widgets/121-us/26/1180x450-034426.jpg" },
          { url: "https://static.thcdn.com/images/xlarge/webp/widgets/121-us/06/original-1180x450-060406.jpg" },
         
  ];

function ImageSlider() {
  return (
    <div className="box">
      <Carousel showThumbs={false} autoPlay={true} interval={2000} infiniteLoop={true}>
        {images.map((URL, index) => (
          <div className="slide">
            <img alt="sample_file" key={index} src={URL.url}   />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
export default ImageSlider;