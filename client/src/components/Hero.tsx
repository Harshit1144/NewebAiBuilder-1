import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-32 pb-16 tech-grid-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-bold leading-tight mb-6 text-gray-900">
              The most comprehensive<br />
              <span className="gradient-text">AI-powered WordPress</span> Platform
            </h1>
          </motion.div>
          
          <motion.p 
            className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Need more than just a sign-in box? Neweb.ai is a complete suite of embeddable UIs,
            flexible APIs, and admin dashboards to build and manage WordPress websites.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-white"
              size="lg"
            >
              <a href="https://app.neweb.ai/">
                Start building for free
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-gray-300 hover:border-primary/30 text-gray-700"
              size="lg"
            >
              <a href="#" className="flex items-center gap-2">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="h-4 w-4"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="10 8 16 12 10 16 10 8" />
                </svg>
                Watch demo
              </a>
            </Button>
          </motion.div>
          
          <motion.div 
            className="text-center text-sm text-gray-500 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Quickstart guides for your SDK
          </motion.div>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-6 items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a href="#" className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors">
              <span className="bg-gray-100 p-1 rounded">WP</span>
              <span>WordPress</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </a>
            <a href="#" className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors">
              <span className="bg-gray-100 p-1 rounded">JS</span>
              <span>JavaScript</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </a>
            <a href="#" className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors">
              <span className="bg-gray-100 p-1 rounded">PHP</span>
              <span>PHP</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </a>
            <a href="#" className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors">
              <span className="bg-gray-100 p-1 rounded">SDK</span>
              <span>Explore all SDKs</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </a>
          </motion.div>
        </div>
        
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <div className="relative max-w-4xl">
            {/* Dashboard screenshot */}
            <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" 
                alt="AI Website Builder Dashboard" 
                className="w-full"
              />
            </div>
            
            {/* Feature badges */}
            <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-md p-3 border border-gray-100">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center bg-green-100 text-green-800 h-6 w-6 rounded-full">
                  <CheckCircle className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium">AI Content Generator</span>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-md p-3 border border-gray-100">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center bg-blue-100 text-blue-800 h-6 w-6 rounded-full">
                  <CheckCircle className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium">WordPress Ready</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
