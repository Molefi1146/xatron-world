
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Wallet, CreditCard, Plus, Calendar, List } from "lucide-react";
import { Button } from "@/components/ui/button";

const Features = () => {
  const features = [
    {
      icon: MapPin,
      title: "Smart Trip Marketplace",
      description: "Discover personalized trip recommendations based on your location. Our intelligent algorithm suggests adventures that start from your area, making it easier to find and join group travels that match your preferences.",
      details: [
        "Location-based trip suggestions",
        "Personalized recommendations",
        "Real-time availability updates",
        "Group travel opportunities"
      ]
    },
    {
      icon: Wallet,
      title: "Secure Wallet System",
      description: "Manage your travel finances with our built-in wallet system. Safely store funds, track expenses, and handle group payments all in one place.",
      details: [
        "Multiple payment methods",
        "Group expense tracking",
        "Transparent transaction history",
        "Secure payment processing"
      ]
    },
    {
      icon: Plus,
      title: "Create & Customize Trips",
      description: "Build your perfect trip from scratch. Our comprehensive trip creation tools help you plan every detail, from itinerary to budget management.",
      details: [
        "Detailed itinerary planning",
        "Budget management tools",
        "Group size optimization",
        "Custom activity scheduling"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center mb-16">
          <Link to="/">
            <img 
              src="/lovable-uploads/6b03ec34-6136-4245-a3f5-2c91230c4f53.png" 
              alt="Xatron World"
              className="w-16 h-16"
            />
          </Link>
          <Link to="/">
            <Button variant="ghost" className="text-white hover:text-blue-400">
              Back to Home
            </Button>
          </Link>
        </nav>
        
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-400">
            Powerful Features for Modern Group Travel
          </h1>
          <p className="text-xl text-gray-300">
            Everything you need to plan, manage, and enjoy group travel experiences
          </p>
        </div>
      </header>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col md:flex-row gap-8 items-center"
            >
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-4">
                  <feature.icon className="w-8 h-8 text-blue-400" />
                  <h2 className="text-3xl font-bold">{feature.title}</h2>
                </div>
                <p className="text-gray-300 text-lg">{feature.description}</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {feature.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full" />
                      <span className="text-gray-300">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1">
                <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-lg border border-gray-700">
                  {/* Placeholder for feature illustration/mockup */}
                  <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-16 h-16 text-blue-400 opacity-50" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="container mx-auto px-4 py-16 text-center"
      >
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold">Ready to Start Your Journey?</h2>
          <p className="text-gray-300">
            Join our community and experience the future of group travel planning
          </p>
          <Link to="/">
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
              Get Started Now
            </Button>
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default Features;
