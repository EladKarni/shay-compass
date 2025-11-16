import Image from 'next/image';

interface PropertyImageGalleryProps {
  images: string[];
  propertyName: string;
}

export default function PropertyImageGallery({ images, propertyName }: PropertyImageGalleryProps) {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Property Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="group bg-white/90 backdrop-blur-sm border border-gray-300 hover:border-gray-500 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <div className="relative w-full h-auto bg-gradient-to-br from-gray-50 to-gray-100">
              <Image
                src={image}
                alt={`${propertyName} - Image ${index + 1}`}
                width={800}
                height={600}
                className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
