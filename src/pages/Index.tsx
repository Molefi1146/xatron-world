import { motion } from "framer-motion";
import { Users, Plane, CreditCard, Heart, MapPin, Wallet, Plus, List } from "lucide-react";
import { WaitlistDialog } from "@/components/waitlist/WaitlistDialog";
import { FeatureCard } from "@/components/features/FeatureCard";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Lottie from "lottie-react";
import { useEffect, useRef } from "react";
import mapAnimation from "@/components/Animation/map animation.json";
import statsAnimation from "@/components/Animation/stats.json";
import listingsAnimation from "@/components/Animation/listings.json";
import bookingsAnimation from "@/components/Animation/Untitled file (1).json";
import communityAnimation from "@/components/Animation/community.json";
import creatorVideo from "@/components/Animation/project-97371f16-02f4-487c-9df1-d62159016262.webm";

const Index = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.currentTime = 0;
            video.play().catch((err) => console.log('Video play error:', err));
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(section);

    const handleTimeUpdate = () => {
      if (video.currentTime >= 4) {
        video.pause();
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      observer.disconnect();
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  const quickFeatures = [
    {
      icon: Users,
      title: "Creator-first marketplace",
      description: "Designed for tour operators to list, sell, and manage experiences in one place."
    },
    {
      icon: CreditCard,
      title: "Bookings & payments",
      description: "Turn discovery into paid bookings with a clear checkout and status tracking."
    },
    {
      icon: Heart,
      title: "Trust & retention",
      description: "Messaging, notifications, and community features that keep travelers coming back."
    },
    {
      icon: Plane,
      title: "Discover local tours",
      description: "Help travelers find the right experiences faster with curated, South Africa-first listings."
    }
  ];

  const detailedFeatures = [
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

      <header className="container mx-auto px-4 pt-6">
        <nav className="flex items-center justify-between rounded-2xl border border-white/10 bg-gradient-to-r from-black/40 to-black/20 px-6 py-4 backdrop-blur-md shadow-lg">
          <div className="flex items-center gap-4">
            <img
              src="/Frame%201by1.svg"
              alt="Xatron"
              className="h-28 w-28 rounded-3xl"
            />
          </div>
          <div className="hidden items-center gap-10 text-sm font-medium text-white/60 md:flex">
            <a href="#features" className="hover:text-white hover:scale-105 transition-all duration-200">Features</a>
            <a href="#about" className="hover:text-white hover:scale-105 transition-all duration-200">About</a>
          </div>
          <div className="flex items-center gap-3">
            <WaitlistDialog />
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 pt-16 pb-20"
      >
        <div className="grid items-center gap-12 lg:gap-16 md:grid-cols-2">
          <div className="text-left">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-1.5 text-xs font-medium text-white/70"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#1DB954]" />
              BETA · 2026
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.8 }}
              className="mt-8 text-5xl font-semibold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl"
            >
              Turn Your Tours into a
              <span className="text-[#1DB954]"> Digital Business</span>.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.8 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-white/70 md:text-xl"
            >
              The marketplace built for South African tour creators. List in minutes, manage bookings, and get paid—while travelers discover and book experiences with confidence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <WaitlistDialog />
              <a href="#features">
                <Button
                  variant="outline"
                  className="rounded-full border-white/15 bg-transparent text-white/80 hover:bg-white/5 hover:text-white hover:scale-105 transition-all duration-200"
                >
                  See how it works
                </Button>
              </a>
            </motion.div>

            <div className="mt-10 flex items-center gap-8 text-xs font-medium text-white/40">
              <span>Creators</span>
              <span className="text-white/20">·</span>
              <span>Travelers</span>
              <span className="text-white/20">·</span>
              <span>Operators</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 rounded-[32px] bg-[radial-gradient(circle_at_30%_20%,rgba(29,185,84,0.25),rgba(0,0,0,0)_60%)] blur-2xl" />
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: [0, -8, 0] }}
              transition={{ opacity: { duration: 0.8 }, y: { duration: 8, repeat: Infinity, ease: "easeInOut" } }}
              className="relative overflow-hidden rounded-[28px] border border-white/10 bg-black/40 p-5 backdrop-blur shadow-2xl"
            >
              <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gradient-to-b from-white/10 to-black/60">
                <img
                  src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80"
                  alt="South African landscape"
                  className="h-full w-full object-cover opacity-80"
                />
              </div>
              <div className="mt-5 grid gap-3">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.15 }}
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-black/40 px-5 py-3.5"
                >
                  <div className="text-sm text-white/80">This week</div>
                  <div className="text-sm font-semibold text-[#1DB954]">R 24,580</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.15 }}
                  className="rounded-xl border border-white/10 bg-black/40 px-5 py-3.5"
                >
                  <div className="text-sm font-medium text-white/85">New booking · Kruger Safari</div>
                  <div className="mt-1 text-xs text-white/50">Just now · +R 3,200</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {quickFeatures.map((feature, index) => (
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

      <div id="about" />

      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-24"
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1400&q=80"
                alt="How Xatron works"
                className="rounded-2xl shadow-2xl border border-white/10"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-semibold tracking-tight">
                From discovery to paid booking—end to end.
              </h2>
              <p className="text-lg text-white/70 leading-relaxed">
                Travelers discover trips and tours, compare options, and save favorites.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                Book directly from the listing and track payment status and confirmations in one place.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                Messaging and updates reduce manual coordination, improve trust, and cut support load.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        ref={sectionRef}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-24 border-t border-white/10"
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-semibold tracking-tight">
                Built for creators: list, optimize, and grow.
              </h2>
              <p className="text-lg text-white/70 leading-relaxed">
                Create listings fast, manage availability, and control your inventory without spreadsheets.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                Use promo codes and performance insights to increase conversion and fill off-peak dates.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                Track the funnel from views to bookings to payments and double down on what works.
              </p>
            </div>
            <div>
              <video
                ref={videoRef}
                src={creatorVideo}
                muted
                playsInline
                className="rounded-2xl shadow-2xl border border-white/10 w-full"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Detailed Features Section */}
      <div id="features" />
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Features that power a real travel marketplace
          </h2>
          <p className="text-lg md:text-xl text-white/70">
            Built for travelers to book with confidence and for creators to run operations, inventory, and payments in one place.
          </p>
        </motion.div>
        <div className="grid gap-16">
          {detailedFeatures.map((feature, index) => (
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
                  <h3 className="text-3xl font-semibold tracking-tight">{feature.title}</h3>
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

export default Index;
