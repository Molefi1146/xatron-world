
import { motion } from "framer-motion";
import { Users, Plane, CreditCard, Heart } from "lucide-react";
import { WaitlistDialog } from "@/components/waitlist/WaitlistDialog";
import { FeatureCard } from "@/components/features/FeatureCard";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
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
            src="/lovable-uploads/6b03ec34-6136-4245-a3f5-2c91230c4f53.png" 
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
        
        {/* Waitlist Dialog and Features Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex justify-center gap-4"
        >
          <WaitlistDialog />
          <Link to="/features">
            <Button variant="outline" className="text-white border-blue-500 hover:bg-blue-500/20">
              View Features
            </Button>
          </Link>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* South African Travel Story Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-16"
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027"
                alt="South African landscape"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-400">
                Revolutionizing Stokvel Travel in South Africa
              </h2>
              <p className="text-gray-300">
                In South Africa, stokvels have long been a powerful community savings tool. Now, we're bringing this trusted tradition into the world of travel, making group adventures more accessible than ever.
              </p>
              <p className="text-gray-300">
                Our platform enables stokvel travel groups to collectively save, plan, and book trips together. Whether you're dreaming of exploring the Kruger National Park, experiencing the vibrant culture of Cape Town, or venturing beyond borders, we make it easier to turn those dreams into reality.
              </p>
              <p className="text-gray-300">
                With features designed specifically for South African travelers, including ZAR currency support and local payment methods, we're making group travel planning seamless and inclusive.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Student Travel Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-16 border-t border-gray-800"
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-400">
                Making Student Travel More Accessible
              </h2>
              <p className="text-gray-300">
                Educational trips and student adventures shouldn't be limited by financial constraints. Our platform is revolutionizing how students plan and fund their travel experiences, whether it's a school excursion, university field trip, or an independent adventure.
              </p>
              <p className="text-gray-300">
                Students can create their own travel groups, pool resources, and split costs fairly. From organizing class tours to planning weekend getaways with classmates, we make it simple to coordinate and manage group travel finances.
              </p>
              <p className="text-gray-300">
                With features like installment payments, group discounts, and transparent expense tracking, we're making educational and recreational travel more affordable and accessible for students across South Africa.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                alt="Students planning a trip"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Index;
