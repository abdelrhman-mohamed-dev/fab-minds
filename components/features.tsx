import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Network,
  Clock,
  Users,
  RadioTower,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: Users,
    title: "Endless Game Library",
    description:
      "Access our vast collection of 3D printable games, from classic favorites to exclusive FabMinds originals. New games added regularly!",
    image: "/feat-1.jpg"
  },
  {
    icon: Network,
    title: "AI Game Creator",
    description:
      "Transform your ideas into playable games with our AI-powered design tool. Sketch, customize, and bring your game concepts to life!",
    image: "/feat-2.jpg"
  },
  {
    icon: Clock,
    title: "Instant Printing",
    description:
      "Start playing in no time with WandDo's plug-and-play 3D printer. Auto-calibration and smart features ensure perfect prints every time.",
    image: "/feat-3.jpg"
  },
  {
    icon: RadioTower,
    title: "Smart Connectivity",
    description:
      "Control your WandDo printer from anywhere with our mobile app. Monitor prints, queue games, and receive notifications seamlessly.",
    image: "/feat-4.jpg"
  },
  {
    icon: ShieldCheck,
    title: "Family Safe",
    description:
      "Engineered with safety in mind, featuring auto-shutoff, child-lock, and eco-friendly materials. Perfect for family game nights!",
    image: "/feat-5.jpg"
  },
  {
    icon: Users,
    title: "Social Gaming Hub",
    description:
      "Join our growing community of game creators and players. Share designs, organize tournaments, and make friends worldwide!",
    image: "/feat-6.jpg"
  },
];


const Features = () => {
  return (
    <div
      id="features"
      className="max-w-screen-xl mx-auto w-full py-12 xs:py-20 px-6"
    >
      <h2 className="text-3xl xs:text-4xl md:text-5xl md:leading-[3.5rem] font-bold tracking-tight sm:max-w-xl sm:text-center sm:mx-auto">
        Discover the <span className="text-[#F15B22]">WandDo</span> Experience
      </h2>
      <div className="mt-8 xs:mt-14 w-full mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
        {features.map((feature) => (
          <Card
            key={feature.title}
            className="flex flex-col border rounded-xl overflow-hidden shadow-none"
          >
            <CardHeader>
              <feature.icon className="text-[#F15B22]" />
              <h4 className="!mt-3 text-xl font-bold tracking-tight">
                {feature.title}
              </h4>
              <p className="mt-1 text-muted-foreground text-sm xs:text-[17px]">
                {feature.description}
              </p>
            </CardHeader>
            <CardContent className="mt-auto px-0 pb-0">
              {feature.image && (
                <Image
                  src={feature.image}
                  alt={feature.title}
                  className="h-52 ml-6 rounded-tl-xl object-cover"
                  width={350}
                  height={144}
                />
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Features;
