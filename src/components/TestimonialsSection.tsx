export const TestimonialsSection = () => {
  const videoIds = [
    "8lXgS2xZxv8",
    "lJCwvkgSUVY", 
    "a5Fkulj2SIY",
    "ZnkHaKyEJ4A"
  ];

  return (
    <section className="py-12 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center space-y-8 lg:space-y-12">
          <div className="space-y-4 lg:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              Eles decidiram aplicar.
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary">
              E colheram os frutos.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            {videoIds.map((videoId, index) => (
              <div key={index} className="aspect-video rounded-lg overflow-hidden shadow-lg hover:shadow-glow-cyan transition-smooth">
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={`Depoimento ${index + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};