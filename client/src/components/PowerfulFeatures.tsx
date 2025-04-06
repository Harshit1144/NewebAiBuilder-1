import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Globe, Server, Search, Shield, MousePointerClick } from "lucide-react";

export default function PowerfulFeatures() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Make website building effortless</h2>
            <p className="text-gray-600 mb-10">
              Create, manage, and scale your website with our AI-powered WordPress platform.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mr-5">
                  <Globe className="text-primary h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Free domain for the first year</h3>
                  <p className="text-gray-600 text-sm">
                    Every Neweb.ai plan includes a free domain for your first year, 
                    getting your business online with no additional costs.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mr-5">
                  <Server className="text-primary h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">High-speed managed hosting</h3>
                  <p className="text-gray-600 text-sm">
                    Our reliable, lightning-fast hosting ensures your website loads quickly 
                    and performs optimally, with no technical expertise required.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mr-5">
                  <Search className="text-primary h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">AI-powered SEO tools</h3>
                  <p className="text-gray-600 text-sm">
                    Let our AI optimize your content for search engines automatically, 
                    improving your visibility and helping you rank higher.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mr-5">
                  <Shield className="text-primary h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Built-in security features</h3>
                  <p className="text-gray-600 text-sm">
                    SSL certificates and comprehensive security measures come standard, 
                    protecting your site and your visitors' data.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Button
                className="bg-primary hover:bg-primary/90 text-white"
                size="lg"
              >
                Start building now →
              </Button>
            </div>
          </div>
          
          <div className="relative rounded-lg overflow-hidden shadow-lg border border-gray-200">
            <img 
              src="https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="WordPress Dashboard" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
