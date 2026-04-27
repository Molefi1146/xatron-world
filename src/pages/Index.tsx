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
            <Link to="/features" className="hover:text-white hover:scale-105 transition-all duration-200">Features</Link>
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
              <Link to="/features">
                <Button
                  variant="outline"
                  className="rounded-full border-white/15 bg-transparent text-white/80 hover:bg-white/5 hover:text-white hover:scale-105 transition-all duration-200"
                >
                  See how it works
                </Button>
              </Link>
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
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=80"
                alt="Creator tools"
                className="rounded-2xl shadow-2xl border border-white/10"
              />
            </div>
          </div>
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
