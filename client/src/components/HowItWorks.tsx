import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h6 className="text-primary font-semibold text-sm uppercase mb-2">How it works</h6>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple steps, limitless possibilities</h2>
          <p className="text-gray-600 text-lg">
            With a thoughtful design process, we meticulously refine every detail to align with your vision and objectives.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-xl shadow-lg p-8 h-full border-t-4 border-primary">
              <div className="absolute -top-5 -left-5 bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">1</div>
              <h3 className="text-xl font-bold mb-4">Create a free account</h3>
              <p className="text-gray-600 mb-6">Create your account with your email address.</p>
              <img 
                src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Create Account" 
                className="rounded-lg w-full h-40 object-cover mb-4"
              />
              <Button asChild variant="link" className="text-primary font-medium p-0">
                <a href="https://app.neweb.ai/" className="flex items-center">
                  Get Started
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </Button>
            </div>
            <div className="hidden md:block absolute top-1/2 -right-4 transform translate-x-full">
              <svg width="40" height="12" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M39.5303 6.53033C39.8232 6.23744 39.8232 5.76256 39.5303 5.46967L34.7574 0.696699C34.4645 0.403806 33.9896 0.403806 33.6967 0.696699C33.4038 0.989593 33.4038 1.46447 33.6967 1.75736L37.9393 6L33.6967 10.2426C33.4038 10.5355 33.4038 11.0104 33.6967 11.3033C33.9896 11.5962 34.4645 11.5962 34.7574 11.3033L39.5303 6.53033ZM0 6.75H39V5.25H0V6.75Z" fill="currentColor" className="text-primary"/>
              </svg>
            </div>
          </motion.div>
          
          {/* Step 2 */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-xl shadow-lg p-8 h-full border-t-4 border-indigo-500">
              <div className="absolute -top-5 -left-5 bg-indigo-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">2</div>
              <h3 className="text-xl font-bold mb-4">Provide your details and preferences</h3>
              <p className="text-gray-600 mb-6">Share your business details, design preferences, and desired style to create a personalized website.</p>
              <img 
                src="https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Provide Details" 
                className="rounded-lg w-full h-40 object-cover mb-4"
              />
              <Button asChild variant="link" className="text-indigo-600 font-medium p-0">
                <a href="#" className="flex items-center">
                  Learn More
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </Button>
            </div>
            <div className="hidden md:block absolute top-1/2 -right-4 transform translate-x-full">
              <svg width="40" height="12" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M39.5303 6.53033C39.8232 6.23744 39.8232 5.76256 39.5303 5.46967L34.7574 0.696699C34.4645 0.403806 33.9896 0.403806 33.6967 0.696699C33.4038 0.989593 33.4038 1.46447 33.6967 1.75736L37.9393 6L33.6967 10.2426C33.4038 10.5355 33.4038 11.0104 33.6967 11.3033C33.9896 11.5962 34.4645 11.5962 34.7574 11.3033L39.5303 6.53033ZM0 6.75H39V5.25H0V6.75Z" fill="#8b5cf6"/>
              </svg>
            </div>
          </motion.div>
          
          {/* Step 3 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white rounded-xl shadow-lg p-8 h-full border-t-4 border-orange-500 relative">
              <div className="absolute -top-5 -left-5 bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">3</div>
              <h3 className="text-xl font-bold mb-4">Grow your business fast</h3>
              <p className="text-gray-600 mb-6">Go live and experience the thrill of seeing your vision materialize into a stunning digital masterpiece.</p>
              <img 
                src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Business Growth" 
                className="rounded-lg w-full h-40 object-cover mb-4"
              />
              <Button asChild variant="link" className="text-orange-600 font-medium p-0">
                <a href="#" className="flex items-center">
                  Success Stories
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
