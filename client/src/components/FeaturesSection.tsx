import { Check, Clock, Globe, Code, Zap, ArrowRight, Layout, Rocket, Sparkles, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        
        {/* Website Creation Reimagined */}
        <div className="mt-10">
          <div className="mx-auto max-w-4xl text-center mb-12 relative">
            <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-gradient-to-r from-[#0032b2]/10 to-[#0050e6]/20 rounded-full filter blur-3xl opacity-70 animate-pulse"></div>
            
            <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#0032b2] to-[#0050e6] relative">
              Website creation reimagined
            </h2>
            
            <div className="w-24 h-1 bg-[#0032b2] mx-auto mb-8 rounded-full"></div>
            
            <p className="text-gray-700 text-xl mb-8 leading-relaxed relative">
              Describe your business, and watch as neweb.ai builds your complete website with stunning design 
              and professional features in <span className="font-semibold text-[#0032b2]">less than 2 minutes</span>.
            </p>
            
            <div className="absolute -z-10 -bottom-10 right-0 w-48 h-48 bg-gradient-to-l from-[#0032b2]/10 to-[#0050e6]/20 rounded-full filter blur-3xl opacity-60"></div>
          </div>
          
          <div className="bg-gray-900 rounded-xl overflow-hidden mb-12 shadow-2xl border border-gray-700 relative max-w-4xl mx-auto transform hover:scale-[1.02] transition-all duration-500 group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0032b2]/10 to-[#0050e6]/5 opacity-30 pointer-events-none"></div>
            
            {/* Terminal Header */}
            <div className="flex px-4 py-3 bg-gray-800 border-b border-gray-700 items-center">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-gray-300 text-xs mx-auto font-medium bg-gray-700/50 px-4 py-1 rounded-full">
                neweb.ai website generator
              </div>
            </div>
            
            {/* Command prompt and progress */}
            <div className="p-6 text-green-400 font-mono text-sm flex items-center space-x-3 border-b border-gray-800/80">
              <span className="text-[#0050e6] font-bold">$</span>
              <div className="flex-1">
                <div className="flex items-center">
                  <span className="mr-2">generating website for</span>
                  <span className="font-bold text-white">business-name</span>
                  <span className="animate-pulse ml-1 text-white">_</span>
                  <div className="ml-3 animate-pulse text-white bg-[#0032b2]/30 px-3 py-0.5 rounded-full text-xs font-bold">
                    98% complete
                  </div>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2 mt-4 overflow-hidden">
                  <div className="h-2 rounded-full bg-gradient-to-r from-[#0050e6] to-[#0032b2] transition-all duration-1000 group-hover:from-[#0032b2] group-hover:to-[#0050e6]" style={{ width: "98%" }}>
                    <div className="absolute top-0 right-0 h-full w-4 bg-white/20 skew-x-12 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Task list with animations */}
            <div className="p-6 pt-5 pb-5 text-gray-300 font-mono text-xs flex flex-col space-y-3">
              {[
                { status: "complete", text: "Analyzing business requirements" },
                { status: "complete", text: "Generating responsive layout" },
                { status: "complete", text: "Building website structure" },
                { status: "complete", text: "Creating visual elements" },
                { status: "in-progress", text: "Finalizing website configuration..." }
              ].map((task, index) => (
                <div key={index} className={`flex items-center transition-all duration-300 ${
                  task.status === "complete" ? "opacity-100" : "animate-pulse"
                }`}>
                  {task.status === "complete" ? (
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center mr-3">
                      <Check className="h-3 w-3 text-green-400" />
                    </div>
                  ) : (
                    <div className="flex-shrink-0 w-5 h-5 rounded-full border border-[#0050e6]/50 flex items-center justify-center mr-3 animate-spin">
                      <div className="h-2 w-2 rounded-full bg-[#0050e6]"></div>
                    </div>
                  )}
                  <span className={task.status === "complete" ? "" : "text-[#0050e6]"}>
                    {task.text}
                  </span>
                  {task.status === "in-progress" && (
                    <span className="ml-2 opacity-75">ETA: 5s</span>
                  )}
                </div>
              ))}
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
          
          <div className="mt-20 md:mt-24 relative">
            {/* Background effects */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute -top-10 left-1/4 w-32 h-32 bg-gradient-to-tr from-[#0032b2]/10 to-[#0050e6]/5 rounded-full filter blur-2xl opacity-60"></div>
              <div className="absolute top-20 right-1/4 w-40 h-40 bg-gradient-to-bl from-[#0050e6]/5 to-[#0032b2]/10 rounded-full filter blur-3xl opacity-50"></div>
            </div>
            
            {/* Live demo section */}
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              {/* Header */}
              <div className="bg-gradient-to-r from-[#0032b2] to-[#0050e6] p-6 md:p-8 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-opacity-20 bg-white bg-[radial-gradient(rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:12px_12px]"></div>
                <div className="absolute -bottom-2 -right-12 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-3 relative">See it in action</h3>
                <p className="text-white/90 text-lg max-w-2xl relative">
                  Discover how our AI transforms your business description into a complete website in minutes.
                </p>
              </div>
              
              {/* Interactive preview */}
              <div className="p-6 md:p-8 bg-gray-50/50">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-1 space-y-5">
                    <h4 className="text-xl font-semibold text-gray-800 flex items-center">
                      <span className="flex items-center justify-center w-7 h-7 bg-[#0032b2] text-white rounded-full mr-2 text-sm">1</span>
                      Describe your business
                    </h4>
                    
                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4 min-h-[120px] relative">
                      <p className="text-gray-600 italic">
                        "I run a coffee shop in Portland that specializes in single-origin beans. 
                        We also offer baked goods and host community events."
                      </p>
                      <div className="text-right mt-2">
                        <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-[#0032b2]/10 group cursor-pointer">
                          <ArrowRight className="h-4 w-4 text-[#0032b2] group-hover:scale-110 transition-transform" />
                        </span>
                      </div>
                      
                      <div className="absolute -bottom-3 right-3 h-6 w-24 bg-gradient-to-r from-[#0032b2]/10 to-[#0050e6]/20 rounded-full blur-lg"></div>
                    </div>
                    
                    <div className="flex items-center justify-center">
                      <div className="px-3 py-1 rounded-full bg-gray-100 text-xs text-gray-500 font-medium flex items-center animate-pulse">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-500 mr-1.5"></span>
                        AI working...
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-5">
                    <h4 className="text-xl font-semibold text-gray-800 flex items-center">
                      <span className="flex items-center justify-center w-7 h-7 bg-[#0032b2] text-white rounded-full mr-2 text-sm">2</span>
                      Get a complete website
                    </h4>
                    
                    <div className="bg-gray-800 rounded-lg border border-gray-700 shadow-sm overflow-hidden">
                      <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-600 relative">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-40"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <h3 className="text-white text-3xl font-bold">Portland Brew</h3>
                        </div>
                      </div>
                      <div className="p-4 bg-white">
                        <div className="flex space-x-3 mb-3">
                          <div className="h-2 w-12 rounded-full bg-gray-200"></div>
                          <div className="h-2 w-16 rounded-full bg-gray-200"></div>
                          <div className="h-2 w-10 rounded-full bg-gray-200"></div>
                        </div>
                        <div className="space-y-2">
                          <div className="h-2 w-full rounded-full bg-gray-100"></div>
                          <div className="h-2 w-3/4 rounded-full bg-gray-100"></div>
                          <div className="h-2 w-5/6 rounded-full bg-gray-100"></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-center">
                      <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">
                        Ready in under 2 minutes
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10 text-center">
                  <Button 
                    className="relative bg-gradient-to-r from-[#0032b2] to-[#0050e6] hover:from-[#0050e6] hover:to-[#0032b2] text-white font-medium py-3 px-8 rounded-xl text-lg transition-all duration-500 hover:shadow-[0_0_20px_rgba(0,50,178,0.5)] group overflow-hidden"
                    size="lg"
                  >
                    <span className="relative z-10 flex items-center font-semibold">
                      Start building now
                      <Zap className="ml-2 h-5 w-5 transition-all duration-500 group-hover:rotate-12" />
                    </span>
                    
                    {/* Animated shine effect */}
                    <span className="absolute top-0 -left-[100%] h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-[100%] transition-all duration-1000 ease-in-out"></span>
                    
                    {/* Inner glow */}
                    <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[#0032b2] blur-md -z-10"></span>
                  </Button>
                  
                  <p className="mt-4 text-gray-500 text-sm">
                    No credit card required • Free domain included
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional Features */}
        <div className="mt-24 grid md:grid-cols-3 gap-8">
          {/* WordPress Integration */}
          <div className="relative overflow-hidden rounded-lg border border-blue-100 shadow-sm hover:shadow-lg transition-all duration-500 group">
            {/* Background gradient animation */}
            <div className="absolute inset-0 bg-gradient-to-tl from-[#0032b2]/5 to-[#0050e6]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="flex flex-col p-6 relative z-10">
              {/* Animated icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-[#0032b2]/10 to-[#0050e6]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 relative">
                <span className="text-[#0032b2] font-bold text-2xl absolute transform transition-all duration-700 group-hover:opacity-0 group-hover:rotate-90">W</span>
                <Layout className="h-6 w-6 text-[#0050e6] absolute opacity-0 transform scale-75 transition-all duration-700 group-hover:opacity-100 group-hover:scale-100" />
              </div>
              
              <h3 className="text-xl font-semibold mb-2">WordPress Integration</h3>
              
              <p className="text-gray-600 mb-4">
                Built on WordPress for unlimited flexibility. Access the world's largest ecosystem of plugins and themes.
              </p>
              
              {/* Feature list */}
              <div className="mt-2 space-y-2 pt-3 border-t border-gray-100">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-4 w-4 rounded-full bg-[#0032b2]/10 flex items-center justify-center mt-0.5 mr-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#0032b2]"></div>
                  </div>
                  <span className="text-sm text-gray-600">5,000+ available plugins</span>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-4 w-4 rounded-full bg-[#0032b2]/10 flex items-center justify-center mt-0.5 mr-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#0032b2]"></div>
                  </div>
                  <span className="text-sm text-gray-600">Premium themes included</span>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-4 w-4 rounded-full bg-[#0032b2]/10 flex items-center justify-center mt-0.5 mr-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#0032b2]"></div>
                  </div>
                  <span className="text-sm text-gray-600">Familiar admin dashboard</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Instant Deployment */}
          <div className="relative overflow-hidden rounded-lg border border-blue-100 shadow-sm hover:shadow-lg transition-all duration-500 group">
            {/* Background gradient animation */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0032b2]/5 to-[#0050e6]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="flex flex-col p-6 relative z-10">
              {/* Animated icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-[#0032b2]/10 to-[#0050e6]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 relative">
                <Zap className="h-6 w-6 text-[#0032b2] absolute transform transition-all duration-700 group-hover:scale-150 group-hover:opacity-0" />
                <Rocket className="h-6 w-6 text-[#0050e6] absolute opacity-0 transform scale-50 transition-all duration-700 group-hover:opacity-100 group-hover:scale-100" />
              </div>
              
              <h3 className="text-xl font-semibold mb-2">Instant Deployment</h3>
              
              <p className="text-gray-600 mb-4">
                One-click publishing to get your site live instantly. No complicated deployment processes or wait times.
              </p>
              
              {/* Deployment timeline */}
              <div className="mt-2 space-y-2 pt-3 border-t border-gray-100">
                <div className="relative pb-5">
                  <div className="flex items-center">
                    <div className="z-10 flex items-center justify-center w-5 h-5 bg-[#0032b2] rounded-full ring-0 ring-white shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <div className="flex-1 ml-3">
                      <h4 className="text-sm font-semibold text-gray-700">Instant Publishing</h4>
                      <p className="text-xs text-gray-500">Domain automatically configured</p>
                    </div>
                  </div>
                  <div className="absolute top-5 left-2.5 h-full w-0.5 bg-gray-200"></div>
                </div>
                <div className="relative">
                  <div className="flex items-center">
                    <div className="z-10 flex items-center justify-center w-5 h-5 bg-[#0050e6] rounded-full ring-0 ring-white shrink-0">
                      <RefreshCw className="w-3 h-3 text-white" />
                    </div>
                    <div className="flex-1 ml-3">
                      <h4 className="text-sm font-semibold text-gray-700">Continuous Updates</h4>
                      <p className="text-xs text-gray-500">Edit anytime with zero downtime</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Make Website Building Effortless */}
          <div className="relative overflow-hidden rounded-lg border border-blue-100 shadow-sm hover:shadow-lg transition-all duration-500 group">
            {/* Background gradient animation */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0032b2]/5 to-[#0050e6]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="flex flex-col p-6 relative z-10">
              {/* Animated icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-[#0032b2]/10 to-[#0050e6]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 relative">
                <Globe className="h-6 w-6 text-[#0032b2] absolute transform transition-all duration-700 group-hover:opacity-0 group-hover:translate-y-3" />
                <Sparkles className="h-6 w-6 text-[#0050e6] absolute opacity-0 transform -translate-y-3 transition-all duration-700 group-hover:opacity-100 group-hover:translate-y-0" />
              </div>
              
              <h3 className="text-xl font-semibold mb-2">Make Website Building Effortless</h3>
              
              {/* Enhanced description with animation */}
              <p className="text-gray-600 mb-4">
                Create, manage, and scale your website with our powerful platform that anyone can use — no technical skills required.
              </p>
              
              {/* Progress bars showing ease of use */}
              <div className="mt-2 space-y-3 pt-3 border-t border-gray-100">
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="font-medium text-gray-700">Setup time</span>
                    <span className="text-[#0032b2] font-semibold">90% faster</span>
                  </div>
                  <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#0032b2] to-[#0050e6] rounded-full" style={{ width: "90%" }}></div>
                  </div>
                </div>
                
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="font-medium text-gray-700">Learning curve</span>
                    <span className="text-[#0032b2] font-semibold">Minimal</span>
                  </div>
                  <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#0032b2] to-[#0050e6] rounded-full" style={{ width: "95%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}