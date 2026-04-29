
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { useReducedMotion } from "framer-motion";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export const FeatureCard = ({ icon: Icon, title, description, index }: FeatureCardProps) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35, margin: "0px 0px -80px 0px" }}
      transition={shouldReduceMotion ? { duration: 0 } : { delay: index * 0.08, duration: 0.7, ease: [0.21, 0.45, 0.18, 0.96] }}
      whileHover={{ y: -6, boxShadow: "0 20px 40px -10px rgba(29, 185, 84, 0.15)" }}
      whileTap={{ scale: 0.98 }}
      className="p-0 transition-all duration-300"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center">
        <Icon className="h-6 w-6 text-[#1DB954]" />
      </div>
      <h3 className="mb-2 text-lg font-semibold tracking-tight text-white">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-white/70">{description}</p>
    </motion.div>
  );
};
