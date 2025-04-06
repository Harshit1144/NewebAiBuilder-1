import { Check, Clock, Globe, Code, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Core Features */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8">Create your website in minutes, not months</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {/* 2-Minute Creation */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-4 transition-all duration-300 group-hover:shadow-lg group-hover:scale-110">
                <Clock className="h-6 w-6 text-[#0032b2]" />
              </div>
              <h3 className="text-lg font-semibold mb-2">2-Minute Creation</h3>
              <p className="text-gray-600">
                From idea to live site in under 2 minutes. No more waiting weeks for your website.
              </p>
            </div>
            
            {/* Free Domain Included */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-4 transition-all duration-300 group-hover:shadow-lg group-hover:scale-110">
                <Globe className="h-6 w-6 text-[#0032b2]" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Free Domain Included</h3>
              <p className="text-gray-600">
                Every website comes with a free domain name. Launch your online presence without additional costs.
              </p>
            </div>
            
            {/* No Code Required */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-4 transition-all duration-300 group-hover:shadow-lg group-hover:scale-110">
                <Code className="h-6 w-6 text-[#0032b2]" />
              </div>
              <h3 className="text-lg font-semibold mb-2">No Code Required</h3>
              <p className="text-gray-600">
                Zero technical skills needed. Our technology handles all the design and development work for you.
              </p>
            </div>
          </div>
        </div>
        
        {/* Website Creation Reimagined */}
        <div className="mt-20">
          <div className="mx-auto max-w-4xl text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Website creation reimagined</h2>
            <p className="text-gray-600 text-lg mb-8">
              Describe your business, and watch as neweb.ai builds your complete website with stunning design and professional features in minutes.
            </p>
          </div>
          
          <div className="bg-gray-900 rounded-xl overflow-hidden mb-12 shadow-xl border border-gray-800 relative max-w-4xl mx-auto">
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
                  <div className="h-1.5 rounded-full bg-gradient-to-r from-[#0050e6] to-[#0032b2]" style={{ width: "98%" }}></div>
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
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-start bg-blue-50 p-4 rounded-lg border border-blue-100 transform transition-transform hover:scale-105 shadow-sm hover:shadow">
              <div className="flex-shrink-0 bg-[#0032b2] rounded-full p-2 mr-3">
                <Check className="h-4 w-4 text-white" />
              </div>
              <p className="text-gray-700 font-medium">From concept to live site in less than 2 minutes</p>
            </div>
            <div className="flex items-start bg-blue-50 p-4 rounded-lg border border-blue-100 transform transition-transform hover:scale-105 shadow-sm hover:shadow">
              <div className="flex-shrink-0 bg-[#0032b2] rounded-full p-2 mr-3">
                <Check className="h-4 w-4 text-white" />
              </div>
              <p className="text-gray-700 font-medium">Free domain name and hosting included</p>
            </div>
            <div className="flex items-start bg-blue-50 p-4 rounded-lg border border-blue-100 transform transition-transform hover:scale-105 shadow-sm hover:shadow">
              <div className="flex-shrink-0 bg-[#0032b2] rounded-full p-2 mr-3">
                <Check className="h-4 w-4 text-white" />
              </div>
              <p className="text-gray-700 font-medium">No technical skills required — 100% no-code</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button
              className="bg-[#0032b2] hover:bg-[#0032b2]/90 text-white font-medium py-2 px-6 rounded-lg text-lg transition-all duration-300 hover:shadow-lg group"
              size="lg"
            >
              Try it yourself
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
        
        {/* Additional Features */}
        <div className="mt-24 grid md:grid-cols-3 gap-8">
          {/* WordPress Integration */}
          <div className="flex flex-col p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
              <div className="text-[#0032b2] font-bold text-xl">W</div>
            </div>
            <h3 className="text-lg font-semibold mb-2">WordPress Integration</h3>
            <p className="text-gray-600">
              Built on WordPress for unlimited flexibility. Access the world's largest ecosystem of plugins and themes.
            </p>
          </div>
          
          {/* Instant Deployment */}
          <div className="flex flex-col p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
              <Zap className="h-5 w-5 text-[#0032b2]" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Instant Deployment</h3>
            <p className="text-gray-600">
              One-click publishing to get your site live instantly. No complicated deployment processes or wait times.
            </p>
          </div>
          
          {/* Make Website Building Effortless */}
          <div className="flex flex-col p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
              <Globe className="h-5 w-5 text-[#0032b2]" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Make Website Building Effortless</h3>
            <p className="text-gray-600">
              Create, manage, and scale your website with our powerful platform that anyone can use.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}