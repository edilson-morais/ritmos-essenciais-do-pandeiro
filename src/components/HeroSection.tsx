import { Button } from "@/components/ui/button";
const heroBackground = "/lovable-uploads/7b88e8cb-6fcf-4d13-8a0a-23b84ca1feb9.png";
export const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-bg">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" style={{
      backgroundImage: `url(${heroBackground})`
    }} />
      <div className="absolute inset-0 bg-gradient-hero" />
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Coluna da esquerda - Textos */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-wide text-primary font-medium">



7 RITMOS ESSENCIAIS DO PANDEIRO</p>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Cansado de apenas </span>
                <span className="text-primary">ouvir o pandeiro</span>
                <span className="text-foreground">, enquanto sonha em tocar?</span>
              </h1>
              
            </div>
            
            <div className="space-y-6">
              <h2 className="text-xl md:text-3xl lg:text-4xl font-bold leading-tight">
                <span className="text-foreground">Chegou a hora de </span>
                <span className="text-primary">encontrar seu ritmo</span>
                <span className="text-foreground"> e fazer parte da música.</span>
              </h2>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">Se você já se sentiu intimidado por aquele amigo que domina o pandeiro, ou simplesmente não sabe por onde começar, este é o guia perfeito. Em apenas 7 dias, você terá em suas mãos os 7 ritmos essenciais para tocar suas primeiras músicas com confiança.</p>
            </div>
            
            <div className="pt-8">
              <Button variant="hero" size="xl" className="mb-8" asChild>
                <a href="https://sun.eduzz.com/50027?utm_source=suzano+express&utm_id=pv">QUERO COMEÇAR AGORA POR R$ 27,00</a>
              </Button>
            </div>
          </div>

          {/* Coluna da direita - Vídeo */}
          <div className="flex justify-center">
            <div className="w-full max-w-lg aspect-video rounded-lg overflow-hidden shadow-2xl">
              <iframe src="https://www.youtube.com/embed/ip7hZxiFIyE" title="Curso de Pandeiro Suzano Express" className="w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
          </div>
        </div>
      </div>
    </section>;
};