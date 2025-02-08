
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
      className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700"
    >
      <div className="w-12 h-12 bg-gradient-to-br from-blue-500/10 to-pink-500/10 rounded-lg flex items-center justify-center mb-4 border border-gray-700">
        <Icon className="h-6 w-6 text-blue-400" />
      </div>
      <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-400">
        {title}
      </h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
};
