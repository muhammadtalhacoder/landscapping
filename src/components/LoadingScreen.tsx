import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-forest-dark flex items-center justify-center"
    >
      <div className="flex flex-col items-center gap-6">
        {/* Animated Logo */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            duration: 0.8, 
            ease: "easeOut",
            type: "spring",
            stiffness: 100
          }}
          className="relative"
        >
          <motion.div
            animate={{ 
              boxShadow: [
                "0 0 0 0 hsl(95 45% 45% / 0.4)",
                "0 0 0 30px hsl(95 45% 45% / 0)",
              ]
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-24 h-24 bg-primary rounded-full flex items-center justify-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Leaf className="h-12 w-12 text-primary-foreground" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Brand Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center"
        >
          <h1 className="font-heading text-3xl md:text-4xl text-primary-foreground font-bold">
            GreenScape
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-primary-foreground/60 mt-2"
          >
            Creating Beautiful Spaces
          </motion.p>
        </motion.div>

        {/* Loading Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="w-48 h-1 bg-primary-foreground/20 rounded-full overflow-hidden"
        >
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ 
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="h-full w-1/2 bg-gradient-to-r from-transparent via-leaf to-transparent"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
