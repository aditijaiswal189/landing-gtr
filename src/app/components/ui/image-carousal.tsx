import { useEffect, useState } from "react";

const images = [
  "/images/2.png",
  "/images/3.png",
  "/images/4.png",
  "/images/5.png",
  "/images/6.png",
  "/images/7.jpeg",
  "/images/10.jpeg",
  "/images/11.png",
];

export const ImageCarousal: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-red-100 to-orange-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover Our <span className="text-red-600">Stunning Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the beauty and craftsmanship that defines our work
            through this curated collection
          </p>
        </div>

        <div className="relative h-[300px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentImage ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          ))}

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImage
                    ? "bg-red-600"
                    : "bg-white/50 hover:bg-white/75"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
