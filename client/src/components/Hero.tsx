import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Sparkles, Bot, Wand2, PenTool, Globe, Server } from "lucide-react";
import ThreeScene from "./ThreeScene";

export default function Hero() {
  return (
    <section className="pt-32 pb-16 tech-grid-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4 mr-2" />
              <span>AI-Powered WordPress Builder</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900">
              Create stunning <span className="gradient-text">WordPress sites</span> with AI
            </h1>
            
            <p className="text-lg text-gray-600 mb-8">
              Build professional WordPress websites in minutes, not months. Just describe what you want, and our AI creates complete, customized websites with beautiful designs and compelling content.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-white"
                size="lg"
              >
                <a href="https://app.neweb.ai/" className="flex items-center">
                  <Bot className="h-5 w-5 mr-2" />
                  Start building with AI
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-gray-300 hover:border-primary/30 text-gray-700"
                size="lg"
              >
                <a href="#how-it-works" className="flex items-center">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="h-4 w-4 mr-2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="10 8 16 12 10 16 10 8" />
                  </svg>
                  See how it works
                </a>
              </Button>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="flex items-center">
                <Wand2 className="h-5 w-5 text-primary mr-2" />
                <span className="text-sm text-gray-700">AI Content</span>
              </div>
              <div className="flex items-center">
                <PenTool className="h-5 w-5 text-primary mr-2" />
                <span className="text-sm text-gray-700">Custom Designs</span>
              </div>
              <div className="flex items-center">
                <Globe className="h-5 w-5 text-primary mr-2" />
                <span className="text-sm text-gray-700">WordPress Ready</span>
              </div>
              <div className="flex items-center">
                <Server className="h-5 w-5 text-primary mr-2" />
                <span className="text-sm text-gray-700">Grade A Servers</span>
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 text-primary mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 16v-4"></path>
                  <path d="M12 8h.01"></path>
                </svg>
                <span className="text-sm text-gray-700">24/7 Support</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-1 md:order-2"
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 shadow-xl border border-gray-700 relative overflow-hidden">
              {/* AI Command Interface */}
              <div className="bg-gray-800/70 backdrop-blur-sm rounded-lg p-4 border border-gray-700 mb-6 relative z-10">
                <div className="flex items-center mb-2">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs text-gray-400 ml-3">AI Website Generator</div>
                </div>
                
                <div className="font-mono text-sm text-white">
                  <div className="flex items-center text-gray-400">
                    <span className="mr-2">$</span>
                    <span className="text-green-400">create-website</span>
                    <span className="ml-2 text-primary">--type=business</span>
                  </div>
                  <div className="mt-2 text-gray-300">
                    <span className="text-primary">AI:</span> What kind of business website do you want to create?
                  </div>
                  <div className="mt-1">
                    <span className="text-blue-400">User:</span> A digital marketing agency website with portfolio, services, and testimonials sections
                  </div>
                  <div className="mt-2 text-gray-300">
                    <span className="text-primary">AI:</span> Generating your digital marketing agency website...
                  </div>
                  <div className="h-2 w-full max-w-[60%] bg-primary/40 rounded-full mt-2 animate-pulse"></div>
                </div>
              </div>
              
              {/* 3D AI Visualization */}
              <div className="h-60 rounded-lg overflow-hidden">
                <ThreeScene type="ai-grid" />
              </div>
              
              {/* Floating badges */}
              <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                <div className="flex items-center text-xs text-white">
                  <span className="inline-block h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                  <span>AI processing</span>
                </div>
              </div>
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-60 mix-blend-overlay"></div>
            </div>
            
            {/* Glow effect */}
            <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2 -z-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
        
        {/* Logos section */}
        <motion.div
          className="mt-20 border-t border-gray-100 pt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-center text-sm text-gray-500 mb-8">Trusted by businesses worldwide</p>
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-70">
            <div className="h-6 w-24 bg-gray-300 rounded-md"></div>
            <div className="h-8 w-20 bg-gray-300 rounded-md"></div>
            <div className="h-7 w-28 bg-gray-300 rounded-md"></div>
            <div className="h-8 w-24 bg-gray-300 rounded-md"></div>
            <div className="h-6 w-20 bg-gray-300 rounded-md"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
