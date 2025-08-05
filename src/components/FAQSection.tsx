import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "Preciso ter experiência musical?",
      answer: "Não. Este curso foi desenhado do zero para quem nunca tocou um pandeiro na vida. Você vai aprender a base para começar a tocar imediatamente."
    },
    {
      question: "O que o curso inclui?",
      answer: "Você terá acesso a aulas em vídeo, detalhadas e diretas, com o mestre Marcos Suzano, ensinando os 7 ritmos essenciais para começar a tocar."
    },
    {
      question: "Por que o curso é tão barato?",
      answer: "O valor baixo é nossa forma de mostrar que é possível aprender a tocar pandeiro de forma simples. Nossa meta é que você realize seu sonho e, quem sabe, siga para o nosso método completo."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold">
              Suas Dúvidas, Nossas Respostas
            </h2>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-primary/20 rounded-lg px-6 data-[state=open]:bg-gradient-primary/5"
              >
                <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};