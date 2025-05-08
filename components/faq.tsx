import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { PlusIcon } from "lucide-react";

const faq = [
  {
    question: "Who are Fab-Minds?",
    answer:
      "Founded in 2020, FabMinds is a Deep tech company built upon software, hardware, and human creativity. Our vision is to empower users to unleash their creativity and learn new skills.",
  },
  {
    question: "What is WandDo?",
    answer:
      "WandDo is an ecosystem of a mobile/tablet application powered by AI features that enables users to design their products with no learning curve, a 3D printer that works as an enabler for the system, and a community platform that pumps an infinite number of 3D stories & models to the library.",
  },
  {
    question: "Who are the founders of Fab-Minds?",
    answer:
      "Meet Ahmad Haddara, CEO & Founder; Ahmed Hassan, VP of Design & Manufacturing & Co-Founder; Omar Rayan, VP of Engineering & Co-Founder.",
  },
  {
    question: "Where can I find more information about Fab-Minds?",
    answer:
      "Visit our website at https://fab-minds.com/about for more information about our company, products, and team.",
  },
];

const FAQ = () => {
  return (
    <div id="faq" className="w-full max-w-screen-xl mx-auto py-8 xs:py-16 px-6">
      <h2 className="md:text-center text-3xl xs:text-4xl md:text-5xl !leading-[1.15] font-bold tracking-tighter">
        Frequently Asked Questions
      </h2>
      <p className="mt-1.5 md:text-center xs:text-lg text-muted-foreground">
        Quick answers to common questions about our products and services.
      </p>

      <div className="min-h-[550px] md:min-h-[320px] xl:min-h-[300px]">
        <Accordion
          type="single"
          collapsible
          className="mt-8 space-y-4 gap-4"
        >
          {faq.map(({ question, answer }, index) => (
            <AccordionItem
              key={question}
              value={`question-${index}`}
              className="bg-accent py-1 px-4 rounded-xl border-none !mt-0 !mb-4 break-inside-avoid"
            >
              <AccordionPrimitive.Header className="flex">
                <AccordionPrimitive.Trigger
                  className={cn(
                    "flex flex-1 items-center justify-between py-4 font-semibold tracking-tight transition-all hover:underline [&[data-state=open]>svg]:rotate-45",
                    "text-start text-lg"
                  )}
                >
                  {question}
                  <PlusIcon className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200" />
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>
              <AccordionContent className="text-[15px]">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
