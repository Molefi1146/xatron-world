
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export const FeatureCard = ({ icon: Icon, title, description, index }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      whileHover={{ y: -6, boxShadow: "0 20px 40px -10px rgba(29, 185, 84, 0.15)" }}
      whileTap={{ scale: 0.98 }}
      className="p-6 rounded-2xl bg-gradient-to-br from-black/40 to-black/20 backdrop-blur shadow-lg transition-all duration-300"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-black/40">
        <Icon className="h-6 w-6 text-[#1DB954]" />
      </div>
      <h3 className="mb-2 text-lg font-semibold tracking-tight text-white">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-white/70">{description}</p>
    </motion.div>
  );
};
