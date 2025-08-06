import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
export const PricingSection = () => {
  const features = ["Técnica exclusiva", "Coordenação entre mão direita e esquerda", "7 sons essenciais do pandeiro", "Ritmos como samba, frevo, baião e mais", "Fluidez, controle e criatividade na sua forma de tocar"];
  return <section id="oferta" className="py-12 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-8 lg:space-y-16">
          
          
          <div className="text-center space-y-6 lg:space-y-8 mb-8 lg:mb-16">
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto px-4">
              Este curso não é apenas sobre aprender a tocar. É sobre transformar a sua relação com a música. E hoje, estamos tornando isso possível por um preço que não é desculpa para adiar seu sonho.
            </p>
          </div>
          
          <div className="flex justify-center px-4">
            {/* Plano Anual */}
            <Card className="p-6 lg:p-8 space-y-6 lg:space-y-8 border-primary bg-gradient-primary/5 relative overflow-hidden max-w-md w-full">
              <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs">
                O MAIS ESCOLHIDO
              </Badge>
              
              <div className="space-y-3 lg:space-y-4">
                <h3 className="text-lg lg:text-xl font-semibold">Acelere seu sonho musical</h3>
                
                <div className="space-y-2">
                  <p className="text-base lg:text-lg">
                    De <span className="line-through text-muted-foreground">R$ 97,00</span> por apenas:
                  </p>
                  
                  <div className="space-y-1">
                    <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">R$ 27,00</div>
                    <p className="text-base lg:text-lg text-muted-foreground">à vista</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3 lg:space-y-4">
                {features.map((feature, index) => <div key={index} className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary-foreground text-xs font-bold">✓</span>
                    </div>
                    <p className="font-medium text-sm lg:text-base leading-relaxed">{feature}</p>
                  </div>)}
              </div>
              
              <Button variant="hero" size="xl" className="w-full text-sm sm:text-base" asChild>
                <a href="https://sun.eduzz.com/1W3ZRKAPW2?utm_source=7+ritmos+essenciais+do+pandeiro+pv&utm_id=7rep_pv">QUERO MEU ACESSO AGORA POR R$ 27,00</a>
              </Button>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
                <div className="flex -space-x-2">
                  {[...Array(8)].map((_, i) => <div key={i} className="w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-gradient-primary border-2 border-background flex items-center justify-center text-primary-foreground font-bold text-xs">
                      {String.fromCharCode(65 + i)}
                    </div>)}
                </div>
                <div className="text-center sm:text-left text-xs lg:text-sm">
                  <p className="font-bold">
                    + <span className="text-primary">de 2.000</span> alunos <span className="font-bold">dominando o PANDEIRO</span>
                    <span className="block">e <span className="font-bold">tocando cada vez mais ainda!</span></span>
                  </p>
                </div>
              </div>
            </Card>
            
            {/* Plano Mensal */}
            
          </div>
          
          <div className="text-center space-y-6 lg:space-y-8">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="w-16 h-16 lg:w-20 lg:h-20">
                <img src="/lovable-uploads/52284b2f-9e6a-4d05-be77-c13d69be6f28.png" alt="Garantia incondicional de 15 dias" className="w-full h-full object-contain" />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-xl lg:text-2xl font-bold">Garantia incondicional de 15 dias</h3>
              </div>
            </div>
            
            <div className="space-y-4 lg:space-y-6 max-w-4xl mx-auto px-4">
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">Confiamos tanto neste método que oferecemos uma garantia incondicional de 15 dias. Se você não estiver tocando pandeiro e sentindo a emoção de fazer parte da música, devolvemos cada centavo.</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};