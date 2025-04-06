import { motion } from "framer-motion";
import { Sparkles, BrainCircuit, MessageSquareText, PenTool, Palette, Cpu } from "lucide-react";
import ThreeScene from "./ThreeScene";

export default function AICapabilities() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h6 className="text-primary font-semibold text-sm uppercase mb-2">
            <span className="flex items-center justify-center">
              <Sparkles className="h-4 w-4 mr-2" />
              AI-POWERED TECHNOLOGY
            </span>
          </h6>
          <h2 className="text-3xl font-bold mb-4">Advanced AI creates beautiful websites</h2>
          <p className="text-gray-600 text-lg">
            Our cutting-edge AI technology transforms your ideas into stunning, functional websites
          </p>
        </motion.div>
        
        {/* Main AI Visualization */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="bg-gray-900 rounded-2xl p-8 text-white overflow-hidden relative">
            <div className="grid md:grid-cols-5 gap-8 relative z-10">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <BrainCircuit className="mr-2 text-primary" />
                  AI-Powered WordPress Builder
                </h3>
                <p className="text-gray-300 mb-6">
                  Our advanced AI engine understands your requirements and builds complete WordPress websites by analyzing millions of high-converting designs and content patterns.
                </p>
                
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm border border-white/5 mb-6">
                  <code className="text-xs text-gray-300 font-mono">
                    <span className="text-blue-400">{">"}</span> Create a professional business website for my digital marketing agency with case studies and testimonial sections
                  </code>
                  <div className="mt-3 h-2 w-full max-w-[80%] bg-primary/30 rounded-full animate-pulse"></div>
                </div>
                
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start">
                    <Sparkles className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>From simple text prompts to complete websites</span>
                  </li>
                  <li className="flex items-start">
                    <Sparkles className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Trained on successful website patterns and conversions</span>
                  </li>
                  <li className="flex items-start">
                    <Sparkles className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Continuously learning and improving designs</span>
                  </li>
                </ul>
              </div>
              
              <div className="md:col-span-3 h-80">
                <ThreeScene type="ai-grid" className="rounded-lg" />
              </div>
            </div>
            
            {/* Background gradient effect */}
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-primary/20 to-purple-900/20 mix-blend-overlay"></div>
          </div>
        </motion.div>
        
        {/* AI Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Content Generation */}
          <motion.div
            className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <MessageSquareText className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-3">AI Content Generation</h3>
            <p className="text-gray-600 mb-4">
              Generate professional, SEO-optimized content for your entire website with a few simple prompts.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start">
                <Sparkles className="h-4 w-4 text-primary mr-2 mt-0.5" />
                <span>Industry-specific content</span>
              </li>
              <li className="flex items-start">
                <Sparkles className="h-4 w-4 text-primary mr-2 mt-0.5" />
                <span>Multiple tone options</span>
              </li>
              <li className="flex items-start">
                <Sparkles className="h-4 w-4 text-primary mr-2 mt-0.5" />
                <span>Keyword optimization</span>
              </li>
            </ul>
          </motion.div>
          
          {/* Image Generation */}
          <motion.div
            className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <PenTool className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-3">AI Image Creation</h3>
            <p className="text-gray-600 mb-4">
              Create custom images, illustrations, and graphics that perfectly match your brand and content.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start">
                <Sparkles className="h-4 w-4 text-primary mr-2 mt-0.5" />
                <span>Brand-consistent visuals</span>
              </li>
              <li className="flex items-start">
                <Sparkles className="h-4 w-4 text-primary mr-2 mt-0.5" />
                <span>Multiple style options</span>
              </li>
              <li className="flex items-start">
                <Sparkles className="h-4 w-4 text-primary mr-2 mt-0.5" />
                <span>Web-optimized formats</span>
              </li>
            </ul>
          </motion.div>
          
          {/* Layout Design */}
          <motion.div
            className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <Palette className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-3">AI Layout Design</h3>
            <p className="text-gray-600 mb-4">
              Our AI analyzes top-performing websites to create layouts optimized for user engagement and conversions.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start">
                <Sparkles className="h-4 w-4 text-primary mr-2 mt-0.5" />
                <span>Conversion-optimized design</span>
              </li>
              <li className="flex items-start">
                <Sparkles className="h-4 w-4 text-primary mr-2 mt-0.5" />
                <span>Industry-specific templates</span>
              </li>
              <li className="flex items-start">
                <Sparkles className="h-4 w-4 text-primary mr-2 mt-0.5" />
                <span>Mobile-first approach</span>
              </li>
            </ul>
          </motion.div>
          
          {/* SEO Optimization */}
          <motion.div
            className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12" y2="8" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-3">AI SEO Optimization</h3>
            <p className="text-gray-600 mb-4">
              Automatically optimize your content for search engines to improve visibility and drive more traffic.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start">
                <Sparkles className="h-4 w-4 text-primary mr-2 mt-0.5" />
                <span>Keyword analysis</span>
              </li>
              <li className="flex items-start">
                <Sparkles className="h-4 w-4 text-primary mr-2 mt-0.5" />
                <span>Meta tag generation</span>
              </li>
              <li className="flex items-start">
                <Sparkles className="h-4 w-4 text-primary mr-2 mt-0.5" />
                <span>Content structure optimization</span>
              </li>
            </ul>
          </motion.div>
          
          {/* Performance Optimization */}
          <motion.div
            className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <Cpu className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-3">AI Performance Tuning</h3>
            <p className="text-gray-600 mb-4">
              Automatically optimize your website's performance for faster loading and better user experience.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start">
                <Sparkles className="h-4 w-4 text-primary mr-2 mt-0.5" />
                <span>Image optimization</span>
              </li>
              <li className="flex items-start">
                <Sparkles className="h-4 w-4 text-primary mr-2 mt-0.5" />
                <span>Code minification</span>
              </li>
              <li className="flex items-start">
                <Sparkles className="h-4 w-4 text-primary mr-2 mt-0.5" />
                <span>Advanced caching</span>
              </li>
            </ul>
          </motion.div>
          
          {/* Analytics & Insights */}
          <motion.div
            className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 3v18h18" />
                <path d="M18 17V9" />
                <path d="M13 17V5" />
                <path d="M8 17v-3" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-3">AI Analytics & Insights</h3>
            <p className="text-gray-600 mb-4">
              Get intelligent insights into your website's performance and visitor behavior.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start">
                <Sparkles className="h-4 w-4 text-primary mr-2 mt-0.5" />
                <span>User behavior analysis</span>
              </li>
              <li className="flex items-start">
                <Sparkles className="h-4 w-4 text-primary mr-2 mt-0.5" />
                <span>Conversion optimization</span>
              </li>
              <li className="flex items-start">
                <Sparkles className="h-4 w-4 text-primary mr-2 mt-0.5" />
                <span>Actionable recommendations</span>
              </li>
            </ul>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <a 
            href="https://app.neweb.ai/" 
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
          >
            <Sparkles className="h-5 w-5 mr-2" />
            Create your AI-powered website
          </a>
        </motion.div>
      </div>
    </section>
  );
}