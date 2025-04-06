import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Globe, Server, Search, Shield } from "lucide-react";

export default function PowerfulFeatures() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid lg:grid-cols-2 gap-16 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4">Make website building effortless</h2>
              <p className="text-gray-600 text-lg">
                Create, manage, and scale your website with our AI-powered WordPress platform.
              </p>
            </div>
            
            <div className="space-y-6">
              <motion.div 
                className="flex gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="flex-shrink-0 bg-primary/10 rounded-lg p-3 h-fit">
                  <Globe className="text-primary h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Free domain for the first year</h3>
                  <p className="text-gray-600">
                    Every Neweb.ai plan includes a free domain for your first year, 
                    getting your business online with no additional costs.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex-shrink-0 bg-primary/10 rounded-lg p-3 h-fit">
                  <Server className="text-primary h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">High-speed managed hosting</h3>
                  <p className="text-gray-600">
                    Our reliable, lightning-fast hosting ensures your website loads quickly 
                    and performs optimally, with no technical expertise required.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="flex-shrink-0 bg-primary/10 rounded-lg p-3 h-fit">
                  <Search className="text-primary h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">AI-powered SEO tools</h3>
                  <p className="text-gray-600">
                    Let our AI optimize your content for search engines automatically, 
                    improving your visibility and helping you rank higher.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="flex-shrink-0 bg-primary/10 rounded-lg p-3 h-fit">
                  <Shield className="text-primary h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Built-in security features</h3>
                  <p className="text-gray-600">
                    SSL certificates and comprehensive security measures come standard, 
                    protecting your site and your visitors' data.
                  </p>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-white"
              >
                <a href="https://app.neweb.ai/">Start building now →</a>
              </Button>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-lg shadow-lg overflow-hidden border border-gray-200 bg-white">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Website Dashboard" 
                className="w-full"
              />
            </div>
            
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-sm">
              <img 
                src="https://neweb.ai/wp-content/uploads/2023/10/ai-logo.svg" 
                alt="Neweb.ai Logo" 
                className="w-20 mx-auto mb-4"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
