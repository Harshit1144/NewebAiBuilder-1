import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-28 pb-20 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Build <span className="gradient-text">stunning professional</span> websites easily
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Craft stunning websites in seconds, complete with captivating content and images powered by AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  asChild
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg h-auto"
                  size="lg"
                >
                  <a 
                    href="https://app.neweb.ai/"
                    className="transition-transform hover:scale-105"
                  >
                    Start Now
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-gray-300 hover:border-primary/30 text-gray-700 px-8 py-6 text-lg h-auto"
                  size="lg"
                >
                  <a href="https://app.neweb.ai/Billing">
                    View Plans & Pricing
                  </a>
                </Button>
              </div>
              <div className="flex flex-wrap gap-6 items-center text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-primary h-5 w-5" />
                  <span>Free Domain For 1 Year</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-primary h-5 w-5" />
                  <span>Cancel Anytime</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-1/2 float-animation"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="AI Website Builder Interface" 
                className="rounded-xl shadow-2xl w-full"
              />
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-green-500 rounded-full w-3 h-3"></div>
                  <span className="text-sm font-semibold">AI Powered</span>
                </div>
              </motion.div>
              <motion.div 
                className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-4" 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, delay: 1 }}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-primary rounded-full w-3 h-3"></div>
                  <span className="text-sm font-semibold">WordPress Ready</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
