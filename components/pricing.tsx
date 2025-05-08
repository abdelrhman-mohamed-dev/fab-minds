import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { CircleCheck } from "lucide-react";

const plans = [
  // {
  //   name: "Toffee",
  //   price: 0,
  //   description:
  //     "Start your 3D printing journey with access to our free game libraries.",
  //   features: [
  //     "Access to all free libraries",
  //     "Access to all free library assets",
  //   ],
  //   buttonText: "Get Started Free",
  // },
  {
    name: "Popcorn",
    price: 10,
    isRecommended: true,
    description:
      "Perfect for casual gamers who want to explore premium content.",
    features: [
      "Access to all free content",
      "Unlock up to 5 premium libraries",
      "10% Discount on select libraries",
      "15% off on our range of filaments",
    ],
    buttonText: "Choose Popcorn",
    isPopular: false,
  },
  {
    name: "Lollipop",
    price: 15,
    description:
      "Ideal for enthusiasts who want more premium content and bigger savings.",
    features: [
      "Access to all free content",
      "Unlock up to 15 premium libraries",
      "20% Discount on select libraries",
      "25% off on our range of filaments",
    ],
    buttonText: "Choose Lollipop",
    isPopular: true,
  },
  {
    name: "Gummy Bear",
    price: 25,
    description:
      "The ultimate package for serious gamers and collectors.",
    features: [
      "Access to all free content",
      "Unlock up to 35 premium libraries",
      "30% Discount on select libraries",
      "35% off on our range of filaments",
    ],
    buttonText: "Choose Gummy Bear",
  },
];

const Pricing = () => {
  return (
    <div id="pricing" className="max-w-screen-lg mx-auto py-12 xs:py-20 px-6">
      <h1 className="text-4xl xs:text-5xl font-bold text-center tracking-tight">
        Pricing
      </h1>
      <div className="mt-8 xs:mt-14 grid grid-cols-1 lg:grid-cols-3 items-center gap-8 lg:gap-0">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={cn(
              "relative bg-accent/50 border p-7 rounded-xl lg:rounded-none lg:first:rounded-l-xl lg:last:rounded-r-xl",
              {
                "bg-background border-[2px] border-primary py-12 !rounded-xl":
                  plan.isPopular,
              }
            )}
          >
            {plan.isPopular && (
              <Badge className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2">
                Most Popular
              </Badge>
            )}
            <h3 className="text-lg font-medium">{plan.name}</h3>
            <p className="mt-2 text-4xl font-bold">
              {plan.price ? `$${plan.price}` : "Custom Pricing"}
            </p>
            <p className="mt-4 font-medium text-muted-foreground">
              {plan.description}
            </p>
            <Separator className="my-6" />
            <ul className="space-y-2">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <CircleCheck className="h-4 w-4 mt-1 text-green-600" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button
              variant={plan.isPopular ? "default" : "outline"}
              size="lg"
              className="w-full mt-6 rounded-full"
            >
              {plan.buttonText}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
