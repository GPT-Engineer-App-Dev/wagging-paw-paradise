import { Dog } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 flex flex-col justify-center items-center p-4">
      <Dog className="w-24 h-24 text-blue-600 mb-8" />
      <h1 className="text-4xl md:text-6xl font-bold text-blue-800 mb-4 text-center">Welcome to Pawsome Dogs</h1>
      <p className="text-xl md:text-2xl text-blue-600 mb-8 text-center max-w-2xl">Discover the joy of canine companionship with our adorable and loving dogs!</p>
      <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-lg">
        Find Your Perfect Pup
      </Button>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard icon={<Dog className="w-12 h-12 text-blue-600" />} title="Adoption" description="Find your new best friend from our rescue center" />
        <FeatureCard icon={<Dog className="w-12 h-12 text-blue-600" />} title="Training" description="Expert dog training services for all breeds" />
        <FeatureCard icon={<Dog className="w-12 h-12 text-blue-600" />} title="Grooming" description="Professional grooming to keep your pup looking their best" />
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-blue-800 mb-2">{title}</h3>
    <p className="text-blue-600">{description}</p>
  </div>
);

export default Index;
