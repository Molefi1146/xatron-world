
import { useState } from "react";
import { motion } from "framer-motion";
import { Users, Plane, CreditCard, Heart, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Please enter your email",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Thanks for joining!",
      description: "We'll notify you when we launch.",
    });
    setEmail("");
  };

  const features = [
    {
      icon: Users,
      title: "Build Your Travel Community",
      description: "Connect with like-minded travelers and create lasting friendships"
    },
    {
      icon: CreditCard,
      title: "Flexible Trip Installments",
      description: "Travel now, pay later with easy monthly payments"
    },
    {
      icon: Heart,
      title: "Travel with Loved Ones",
      description: "Create memorable experiences with family and friends"
    },
    {
      icon: Plane,
      title: "Curated Experiences",
      description: "Discover unique destinations and authentic local experiences"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 pt-12 pb-16 text-center"
      >
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <img 
            src="/lovable-uploads/42f1d055-a57c-41e8-bb0f-0369115a85f0.png" 
            alt="Xatron World"
            className="w-32 h-32 mx-auto"
          />
        </motion.div>

        <span className="inline-block px-3 py-1 mb-6 text-sm font-medium bg-gradient-to-r from-blue-500/20 to-pink-500/20 text-white rounded-full border border-blue-500/30">
          Coming Soon
        </span>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-400">
          Travel Together, Create Stories
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Join a community of passionate travelers. Plan trips, split costs, and create unforgettable memories with friends and family.
        </p>
        
        {/* Email Signup Form */}
        <motion.form 
          onSubmit={handleSubmit}
          className="max-w-md mx-auto flex gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-gray-800/50 border-gray-700"
          />
          <Button type="submit" className="bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 text-white">
            <Mail className="mr-2 h-4 w-4" />
            Join Waitlist
          </Button>
        </motion.form>
      </motion.section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500/10 to-pink-500/10 rounded-lg flex items-center justify-center mb-4 border border-gray-700">
                <feature.icon className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-400">
                {feature.title}
              </h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
