
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Wallet, CreditCard, Plus, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WaitlistDialog } from "@/components/waitlist/WaitlistDialog";
import Lottie from "lottie-react";
import mapAnimation from "@/components/Animation/map animation.json";
import statsAnimation from "@/components/Animation/stats.json";
import listingsAnimation from "@/components/Animation/listings.json";
import bookingsAnimation from "@/components/Animation/Untitled file (1).json";
import communityAnimation from "@/components/Animation/community.json";

const Features = () => {
  const features = [
    {
      icon: MapPin,
      title: "Discovery that converts",
      description: "Help travelers find the right tours faster with curated, South Africa-first listings and clear trip/tour detail pages.",
      details: [
        "Curated discovery and browsing",
        "Detail pages built for decision-making",
        "Wishlist-ready experiences",
        "Host messaging before booking"
      ],
      useLottie: true,
      lottieAnimation: mapAnimation
    },
    {
      icon: Wallet,
      title: "Creator operations",
      description: "Tools for tour creators to run a real business: inventory, scheduling, and simple day-to-day operations.",
      details: [
        "Availability and capacity management",
        "Structured bookings (no spreadsheets)",
        "Promo codes and conversion levers",
        "Performance insights"
      ],
      useLottie: true,
      lottieAnimation: statsAnimation
    },
    {
      icon: Plus,
      title: "Frictionless listings",
      description: "Create and publish tours quickly with guided flows that reduce time-to-first-listing for new providers.",
      details: [
        "Fast listing creation",
        "Images, itinerary, and pricing support",
        "Publish and update anytime",
        "Built to scale your inventory"
      ],
      useLottie: true,
      lottieAnimation: listingsAnimation
    },
    {
      icon: CreditCard,
      title: "Bookings & payments",
      description: "A clear end-to-end booking flow with payment initiation, status tracking, and confirmations.",
      details: [
        "Secure payment initiation",
        "Payment status visibility",
        "Confirmation experience",
        "Centralized booking management"
      ],
      useLottie: true,
      lottieAnimation: bookingsAnimation
    },
    {
      icon: List,
      title: "Trust, retention, community",
      description: "Messaging, updates, and community features that increase confidence and bring travelers back.",
      details: [
        "Direct traveler ↔ host communication",
        "Notifications and updates",
        "Community layer for retention",
        "Reduced support workload"
      ],
      useLottie: true,
      lottieAnimation: communityAnimation
    }
  ];

  return (
    <div className="min-h-screen bg-[#0b0f0d] text-white">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,197,94,0.18),rgba(0,0,0,0)_55%)]"
          animate={{ opacity: [0.7, 1, 0.75], scale: [1, 1.03, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(16,185,129,0.10),rgba(0,0,0,0)_50%)]"
          animate={{ opacity: [0.6, 0.95, 0.65], scale: [1, 1.02, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Header */}
      <header className="container mx-auto px-4 py-8">
        <nav className="flex items-center justify-between rounded-2xl border border-white/10 bg-gradient-to-r from-black/40 to-black/20 px-6 py-4 backdrop-blur-md shadow-lg mb-16">
          <Link to="/" className="flex items-center gap-4">
            <img
              src="/Frame%201by1.svg"
              alt="Xatron"
              className="h-28 w-28 rounded-3xl"
            />
          </Link>
          <Link to="/">
            <Button variant="ghost" className="text-white/80 hover:text-white hover:scale-105 transition-all duration-200">
              Back to Home
            </Button>
          </Link>
        </nav>
        
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Features that power a real travel marketplace
          </h1>
          <p className="text-lg md:text-xl text-white/70">
            Built for travelers to book with confidence and for creators to run operations, inventory, and payments in one place.
          </p>
        </motion.div>
      </header>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid gap-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col md:flex-row gap-12 items-center"
            >
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-4">
                  <feature.icon className="w-10 h-10 text-[#1DB954]" />
                  <h2 className="text-3xl font-semibold tracking-tight">{feature.title}</h2>
                </div>
                <p className="text-lg text-white/70 leading-relaxed">{feature.description}</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {feature.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#1DB954] rounded-full" />
                      <span className="text-white/70">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1">
                <motion.div
                  whileHover={{ y: -6, boxShadow: "0 20px 40px -10px rgba(29, 185, 84, 0.15)" }}
                  transition={{ duration: 0.18 }}
                  className="bg-gradient-to-br from-black/40 to-black/20 p-8 rounded-2xl border border-white/10 backdrop-blur shadow-lg"
                >
                  {feature.useLottie ? (
                    <div className="aspect-video bg-black/40 rounded-2xl border border-white/10 flex items-center justify-center">
                      <Lottie animationData={feature.lottieAnimation} />
                    </div>
                  ) : (
                    <div className="aspect-video bg-black/40 rounded-2xl border border-white/10 flex items-center justify-center">
                      <feature.icon className="w-16 h-16 text-[#1DB954] opacity-40" />
                    </div>
                  )}
                </motion.div>
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
        className="container mx-auto px-4 py-24 text-center"
      >
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-4xl font-semibold tracking-tight">Get early access</h2>
          <p className="text-lg text-white/70 leading-relaxed">
            Join the beta and be first in line when Xatron opens to travelers and creators.
          </p>
          <WaitlistDialog />
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-16 border-t border-white/10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <img
            src="/footer.svg"
            alt="Xatron"
            className="h-16 w-auto"
          />
          <div className="text-sm font-medium text-white/50">
            Since 2025
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Features;
