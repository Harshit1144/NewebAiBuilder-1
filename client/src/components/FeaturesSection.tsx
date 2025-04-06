import { Check, Clock, Globe, Code, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10">
          {/* 2-Minute Creation */}
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
              <Clock className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">2-Minute Creation</h3>
            <p className="text-gray-600 text-sm">
              From idea to live site in under 2 minutes. No more waiting weeks for your website.
            </p>
          </div>
          
          {/* Free Domain Included */}
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
              <Globe className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Free Domain Included</h3>
            <p className="text-gray-600 text-sm">
              Every website comes with a free domain name. Launch your online presence without additional costs.
            </p>
          </div>
          
          {/* No Code Required */}
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
              <Code className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">No Code Required</h3>
            <p className="text-gray-600 text-sm">
              Zero technical skills needed. Our AI handles all the design and development work for you.
            </p>
          </div>
        </div>
        
        {/* Second Row of Features */}
        <div className="grid md:grid-cols-3 gap-10 mt-16">
          {/* Free Domain */}
          <div className="flex">
            <div className="flex-shrink-0 mt-1">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                <Globe className="h-5 w-5 text-primary" />
              </div>
            </div>
            <div className="ml-5">
              <h3 className="text-lg font-semibold mb-2">Free Domain Included</h3>
              <p className="text-gray-600 text-sm">
                Every website comes with a free domain name. Launch your online presence without additional costs.
              </p>
            </div>
          </div>
          
          {/* WordPress Integration */}
          <div className="flex">
            <div className="flex-shrink-0 mt-1">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                <div className="text-primary font-bold">W</div>
              </div>
            </div>
            <div className="ml-5">
              <h3 className="text-lg font-semibold mb-2">WordPress Integration</h3>
              <p className="text-gray-600 text-sm">
                Built on WordPress for unlimited flexibility. Access the world's largest ecosystem of plugins and themes.
              </p>
            </div>
          </div>
          
          {/* Instant Deployment */}
          <div className="flex">
            <div className="flex-shrink-0 mt-1">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                <Zap className="h-5 w-5 text-primary" />
              </div>
            </div>
            <div className="ml-5">
              <h3 className="text-lg font-semibold mb-2">Instant Deployment</h3>
              <p className="text-gray-600 text-sm">
                One-click publishing to get your site live instantly. No complicated deployment processes or wait times.
              </p>
            </div>
          </div>
        </div>
        
        {/* Website Creation Reimagined */}
        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Website creation reimagined</h2>
            <p className="text-gray-600 mb-8">
              Describe your business, and watch as neweb.ai builds your complete website with stunning design and professional features in minutes.
            </p>
            
            <div className="bg-gray-900 rounded-lg overflow-hidden mb-8 shadow-lg border border-gray-800 relative">
              <div className="flex px-3 py-2 bg-gray-800 border-b border-gray-700">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-gray-400 text-xs mx-auto">Terminal</div>
              </div>
              <div className="p-5 text-green-400 font-mono text-sm flex items-center space-x-2">
                <span className="text-white">$</span>
                <div className="flex-1">
                  <div className="flex items-center">
                    <span>generating website...</span>
                    <div className="ml-2 animate-pulse text-white bg-white/10 px-2 py-0.5 rounded text-xs">
                      98% complete
                    </div>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-1.5 mt-3">
                    <div className="h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-primary" style={{ width: "98%" }}></div>
                  </div>
                </div>
              </div>
              
              <div className="p-5 pt-0 pb-3 text-gray-300 font-mono text-xs flex flex-col space-y-1.5">
                <div className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Analyzing business requirements</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Generating responsive layout</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Building website structure</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Creating visual elements</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-400 animate-pulse mr-2">⟳</span>
                  <span>Finalizing website configuration...</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start bg-blue-50 p-3 rounded-lg border border-blue-100 transform transition-transform hover:scale-105">
                <div className="flex-shrink-0 bg-primary rounded-full p-2 mr-3">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <p className="text-gray-700 font-medium">From concept to live site in less than 2 minutes</p>
              </div>
              <div className="flex items-start bg-green-50 p-3 rounded-lg border border-green-100 transform transition-transform hover:scale-105">
                <div className="flex-shrink-0 bg-green-500 rounded-full p-2 mr-3">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <p className="text-gray-700 font-medium">Free domain name and hosting included</p>
              </div>
              <div className="flex items-start bg-purple-50 p-3 rounded-lg border border-purple-100 transform transition-transform hover:scale-105">
                <div className="flex-shrink-0 bg-purple-500 rounded-full p-2 mr-3">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <p className="text-gray-700 font-medium">No technical skills required — 100% no-code</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-lg shadow-lg border border-gray-200 flex items-center justify-center transform transition-transform hover:scale-105">
              <div className="h-64 w-full">
                <div className="flex h-full justify-around items-end">
                  <div className="w-8 bg-gradient-to-t from-purple-500 to-purple-300 rounded-t-lg shadow-lg transform transition-all duration-1000 hover:h-[70%]" style={{ height: '60%' }}></div>
                  <div className="w-8 bg-gradient-to-t from-purple-600 to-purple-400 rounded-t-lg shadow-lg transform transition-all duration-1000 hover:h-[90%]" style={{ height: '80%' }}></div>
                  <div className="w-8 bg-gradient-to-t from-purple-700 to-purple-500 rounded-t-lg shadow-lg transform transition-all duration-1000 hover:h-[50%]" style={{ height: '40%' }}></div>
                  <div className="w-8 bg-gradient-to-t from-purple-800 to-purple-600 rounded-t-lg shadow-lg transform transition-all duration-1000 hover:h-[60%]" style={{ height: '50%' }}></div>
                  <div className="w-8 bg-gradient-to-t from-purple-900 to-purple-700 rounded-t-lg shadow-lg transform transition-all duration-1000 hover:h-[40%]" style={{ height: '30%' }}></div>
                  <div className="w-8 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg shadow-lg transform transition-all duration-1000 hover:h-[100%]" style={{ height: '90%' }}></div>
                </div>
                <div className="absolute bottom-4 right-4 text-xs text-gray-500">
                  Interactive Analytics - Hover over bars
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}