import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
export const WhyJoinSection = () => {
  const reasons = [{
    icon: "😔",
    text: "Se sente intimidado por não saber tocar em uma roda de amigos."
  }, {
    icon: "🥁",
    text: "Comprou um pandeiro e ele está parado em um canto."
  }, {
    icon: "🎧",
    text: "Adora ouvir música, mas quer ter a emoção de criá-la."
  }, {
    icon: "❓",
    text: "Não sabe por onde começar e precisa de um método simples e eficaz."
  }];
  const targetAudience = [
    "Quer aprender na prática, sem enrolação ou termos técnicos confusos",
    "É músico profissional ou amador, que já toca Percussão ou Pandeiro, porém ainda se sente um pouco limitado na parte técnica ou dos grooves",
    "Quer aumentar — e muito — o seu repertório de grooves, ou quer aprender pandeiro para tocar com os amigos ou na igreja",
    "É iniciante mas se compromete a estudar e quer aprender o método adequado desde o início"
  ];
  return <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold">Este curso foi feito para você, que...</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => <Card key={index} className="p-6 space-y-4 border-l-4 border-l-primary hover:shadow-glow-cyan transition-smooth">
                <div className="text-4xl">{reason.icon}</div>
                <div className="text-lg leading-relaxed">{reason.text}</div>
              </Card>)}
          </div>
        </div>
      </div>
    </section>;
};