import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
export const LearningSection = () => {
  const learningPoints = ["Método comprovado: mais de 800 alunos no Japão e mais de 2.000 alunos no Brasil", "3 vídeos por ritmo: execução, explicação e câmera lenta", "Técnica Invertida: marca registrada de Suzano", "Grupos exclusivos no WhatsApp por nível", "Acesso 24h por 2 anos, sem precisar ler partitura"];
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              A Realização de um Sonho Musical em 7 Dias.
            </h2>
          </div>
          
          <div className="space-y-8 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p>
              Você já se pegou em uma roda de samba, em uma festa de família ou até mesmo sozinho, apenas com uma colher na mão, tentando imitar aquele som mágico do pandeiro? É uma sensação que todos nós conhecemos: a vontade de fazer parte da melodia, de criar a batida, mas a frustração de não saber por onde começar. Aquele pandeiro guardado no armário, que você comprou cheio de esperança, hoje acumula poeira.
            </p>
            
            <p>
              Nós entendemos essa frustração. E é por isso que o mestre Marcos Suzano, com sua técnica revolucionária, criou o curso '7 Ritmos Essenciais do Pandeiro' para mudar isso para sempre. Em vez de anos de estudo e teoria complexa, você vai direto ao que importa. Em 7 dias, você vai desbloquear os fundamentos que farão você ir de ouvinte a tocador.
            </p>
          </div>
          
          <div className="space-y-6">
            
            
            <Button variant="cta" size="xl" asChild>
              <a href="https://sun.eduzz.com/50027?utm_source=suzano+express&utm_id=pv">QUERO COMEÇAR AGORA POR R$ 27,00</a>
            </Button>
          </div>
        </div>
      </div>
    </section>;
};