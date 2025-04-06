import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Check, Wand2, Palette, Rocket } from "lucide-react";
import { FaWordpress } from "react-icons/fa";

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Build your flawless website</h2>
          <p className="text-gray-600 text-lg">
            We combine everything required to build websites. This allows you to reach more customers, save time and money, and boost sales.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <motion.div 
            className="feature-card bg-white rounded-xl shadow-lg p-8 border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-blue-100 rounded-xl p-4 inline-block mb-6">
              <Wand2 className="h-6 w-6 text-primary" />
            </div>
            <h6 className="text-sm text-primary font-semibold uppercase mb-2">Site Builder</h6>
            <h3 className="text-xl font-bold mb-4">Effortlessly Build a Complete Website with Just Text</h3>
            <p className="text-gray-600 mb-6">Our powerful features can streamline your website-building process.</p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <Check className="text-primary h-5 w-5 mt-1 mr-2 flex-shrink-0" />
                <span>Create a professional website, no coding needed.</span>
              </li>
              <li className="flex items-start">
                <Check className="text-primary h-5 w-5 mt-1 mr-2 flex-shrink-0" />
                <span>Boost conversions with AI-driven optimization.</span>
              </li>
              <li className="flex items-start">
                <Check className="text-primary h-5 w-5 mt-1 mr-2 flex-shrink-0" />
                <span>24/7 support whenever you need it.</span>
              </li>
              <li className="flex items-start">
                <Check className="text-primary h-5 w-5 mt-1 mr-2 flex-shrink-0" />
                <span>Tailor your website to fit your unique business goals.</span>
              </li>
            </ul>
            <Button asChild variant="link" className="text-primary font-medium p-0">
              <a href="https://app.neweb.ai/" className="flex items-center">
                Get Started 
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
            </Button>
          </motion.div>
          
          {/* Feature 2 */}
          <motion.div 
            className="feature-card bg-white rounded-xl shadow-lg p-8 border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-indigo-100 rounded-xl p-4 inline-block mb-6">
              <Palette className="h-6 w-6 text-indigo-600" />
            </div>
            <h6 className="text-sm text-indigo-600 font-semibold uppercase mb-2">Website Customization</h6>
            <h3 className="text-xl font-bold mb-4">Your digital playground</h3>
            <p className="text-gray-600 mb-6">Easily customize every part of your website with our simple tools to build a unique online presence.</p>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Website Customization Interface" 
                className="rounded-lg w-full h-48 object-cover"
              />
            </div>
            <Button asChild variant="link" className="text-indigo-600 font-medium p-0">
              <a href="https://app.neweb.ai/" className="flex items-center">
                Explore Tools
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
            </Button>
          </motion.div>
          
          {/* Feature 3 */}
          <motion.div 
            className="feature-card bg-white rounded-xl shadow-lg p-8 border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-orange-100 rounded-xl p-4 inline-block mb-6">
              <FaWordpress className="h-6 w-6 text-orange-600" />
            </div>
            <h6 className="text-sm text-orange-600 font-semibold uppercase mb-2">Reliable</h6>
            <h3 className="text-xl font-bold mb-4">Powered by WordPress</h3>
            <p className="text-gray-600 mb-6">Generate captivating content and images quickly, all in one intuitive platform.</p>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <img 
                src="https://images.unsplash.com/photo-1616469829941-c7200edec809?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="WordPress Platform" 
                className="rounded-lg w-full h-48 object-cover"
              />
            </div>
            <Button asChild variant="link" className="text-orange-600 font-medium p-0">
              <a href="https://app.neweb.ai/" className="flex items-center">
                Learn More
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
