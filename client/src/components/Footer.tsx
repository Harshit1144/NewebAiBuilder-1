import { motion } from "framer-motion";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Github,
  ArrowRight,
  Globe,
  Mail
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 border-t border-gray-200">
      {/* Newsletter subscription */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 md:p-12 shadow-sm border border-primary/20 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute right-0 bottom-0 opacity-10 w-64 h-64">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="8" className="text-primary" />
                <path d="M30 50L45 65L70 35" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" className="text-primary" />
              </svg>
            </div>
            
            <div className="md:flex justify-between items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-3">Build your website in minutes, not months</h2>
                <p className="text-gray-600">
                  Join thousands of businesses using our no-code WordPress builder with free domains.
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-2 flex">
                  <Input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="border-0 focus-visible:ring-0 text-base" 
                  />
                  <Button className="bg-primary hover:bg-primary/90 ml-2">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <p className="text-sm text-gray-500 mt-3">
                  Free 7-day trial. No credit card required.
                </p>
              </div>
            </div>
          </motion.div>
          
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-12">
            <motion.div 
              className="col-span-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center mb-6">
                <div className="bg-gray-900 rounded-full p-2 mr-3">
                  <img 
                    src="https://neweb.ai/wp-content/uploads/2023/10/ai-logo.svg" 
                    alt="Neweb.ai Logo" 
                    className="h-6 w-6"
                  />
                </div>
                <span className="text-xl font-bold text-gray-900">neweb.ai</span>
              </div>
              <p className="text-gray-600 mb-6 pr-4">
                AI-powered WordPress website builder. Create stunning sites in under 2 minutes with free domains included.
              </p>
              <div className="flex space-x-4 mb-6">
                <motion.a 
                  href="#" 
                  whileHover={{ scale: 1.1 }}
                  className="bg-gray-100 p-2 rounded-full text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </motion.a>
                <motion.a 
                  href="#" 
                  whileHover={{ scale: 1.1 }}
                  className="bg-gray-100 p-2 rounded-full text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </motion.a>
                <motion.a 
                  href="#" 
                  whileHover={{ scale: 1.1 }}
                  className="bg-gray-100 p-2 rounded-full text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </motion.a>
                <motion.a 
                  href="#" 
                  whileHover={{ scale: 1.1 }}
                  className="bg-gray-100 p-2 rounded-full text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors"
                >
                  <Github className="h-5 w-5" />
                </motion.a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h3 className="font-bold text-gray-900 mb-4">Product</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#features" className="text-gray-500 hover:text-primary transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-gray-500 hover:text-primary transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                    WordPress Themes
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                    Integrations
                  </a>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <h3 className="font-bold text-gray-900 mb-4">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                    Guides
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                    Examples
                  </a>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <h3 className="font-bold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                    Partners
                  </a>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="col-span-2 md:col-span-1"
            >
              <h3 className="font-bold text-gray-900 mb-4">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Mail className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                  <a href="mailto:info@neweb.ai" className="text-gray-500 hover:text-primary transition-colors">
                    info@neweb.ai
                  </a>
                </li>
                <li className="flex items-start">
                  <Globe className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                  <a href="https://neweb.ai" className="text-gray-500 hover:text-primary transition-colors">
                    neweb.ai
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Bottom bar */}
      <div className="border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Neweb.ai. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-gray-500">
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Cookie Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
