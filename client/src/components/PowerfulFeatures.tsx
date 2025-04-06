import { useState } from "react";
import { Globe, Server, Search, Shield, Zap, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PowerfulFeatures() {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  
  const features = [
    {
      icon: <Globe className="text-[#0032b2] h-5 w-5" />,
      title: "Free domain for the first year",
      description: "Every Neweb.ai plan includes a free domain for your first year, getting your business online with no additional costs.",
      color: "blue",
      details: "Choose from .com, .org, .net, or many other popular TLDs. We handle all domain management and renewal reminders."
    },
    {
      icon: <Server className="text-[#0032b2] h-5 w-5" />,
      title: "High-speed managed hosting",
      description: "Our reliable, lightning-fast hosting ensures your website loads quickly and performs optimally, with no technical expertise required.",
      color: "blue",
      details: "Built on enterprise-grade cloud infrastructure with 99.9% uptime guarantee and worldwide CDN distribution."
    },
    {
      icon: <Search className="text-[#0032b2] h-5 w-5" />,
      title: "AI-powered SEO tools",
      description: "Let our AI optimize your content for search engines automatically, improving your visibility and helping you rank higher.",
      color: "blue",
      details: "Includes keyword optimization, content suggestions, meta tag generation, and search ranking monitoring."
    },
    {
      icon: <Shield className="text-[#0032b2] h-5 w-5" />,
      title: "Built-in security features",
      description: "SSL certificates and comprehensive security measures come standard, protecting your site and your visitors' data.",
      color: "blue",
      details: "Includes DDoS protection, daily backups, malware scanning, and automatic security updates."
    }
  ];

  return (
    <section className="py-20 bg-white overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-tr from-[#0032b2]/5 to-[#0050e6]/10 rounded-full filter blur-3xl animate-slow-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#0050e6]/5 to-[#0032b2]/10 rounded-full filter blur-3xl animate-slow-pulse-delay"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-[#0032b2]/5 to-[#0050e6]/5 rounded-full filter blur-3xl opacity-30 animate-slow-spin"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content column */}
          <div className="relative">
            {/* Floating particle elements */}
            <div className="absolute -top-10 -left-10 w-4 h-4 bg-blue-400 rounded-full animate-float-random opacity-40"></div>
            <div className="absolute top-1/4 -right-5 w-3 h-3 bg-[#0032b2] rounded-full animate-float-random-delay opacity-30"></div>
            <div className="absolute bottom-1/3 left-10 w-6 h-6 bg-[#0050e6] rounded-full animate-pulse opacity-20"></div>
            
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#0032b2] to-[#0050e6] animate-text-shimmer">
                Make website building effortless
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-[#0032b2] to-[#0050e6] rounded-full animate-width-expand mb-6"></div>
              <p className="text-gray-600 mb-10 text-lg max-w-lg animate-fade-in">
                Create, manage, and scale your website with our powerful WordPress platform that anyone can use.
              </p>
              
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className={`flex items-start p-5 rounded-xl transition-all duration-500 transform cursor-pointer group hover:bg-white hover:shadow-xl ${
                      activeFeature === index 
                        ? `bg-blue-50 border border-blue-200 scale-[1.03] shadow-lg` 
                        : "border border-transparent hover:border-blue-100"
                    }`}
                    onClick={() => setActiveFeature(activeFeature === index ? null : index)}
                    style={{ animationDelay: `${index * 150}ms` }}
                    data-animation="slide-up"
                  >
                    <div className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center mr-5 transition-all duration-500 ${
                      activeFeature === index 
                        ? 'bg-gradient-to-r from-[#0032b2] to-[#0050e6] shadow-lg transform scale-110' 
                        : 'bg-blue-50 group-hover:bg-blue-100 group-hover:scale-110'
                    }`}>
                      <div className={`transition-all duration-500 transform ${
                        activeFeature === index 
                          ? 'text-white rotate-12' 
                          : 'text-[#0032b2] group-hover:text-[#0050e6]'
                      }`}>
                        {feature.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2 flex items-center group-hover:text-[#0032b2] transition-colors">
                        {feature.title}
                        
                        <div className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          {activeFeature === index ? (
                            <span className="text-xs bg-green-500 text-white px-2 py-0.5 rounded-full animate-pulse">
                              Active
                            </span>
                          ) : (
                            <span className="text-xs bg-[#0032b2] text-white px-2 py-0.5 rounded-full">
                              Click for details
                            </span>
                          )}
                        </div>
                      </h3>
                      <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors">
                        {feature.description}
                      </p>
                      
                      <div className={`mt-3 pt-3 border-t border-gray-100 text-sm text-gray-700 overflow-hidden transition-all duration-500 ${
                        activeFeature === index ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="flex items-start">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0 animate-bounce-in" />
                          <p className="animate-fade-in-delayed">{feature.details}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10">
                <Button
                  className="relative bg-gradient-to-r from-[#0032b2] to-[#0050e6] hover:from-[#0050e6] hover:to-[#0032b2] text-white group overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1"
                  size="lg"
                >
                  <span className="relative z-10 flex items-center font-medium">
                    Start building now 
                    <ArrowRight className="ml-2 h-5 w-5 transition-all duration-500 group-hover:translate-x-1" />
                  </span>
                  
                  {/* Animated shine effect */}
                  <span className="absolute top-0 -left-[100%] h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-[100%] transition-all duration-1000 ease-in-out"></span>
                  
                  {/* Animated particles */}
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-blue-400 blur-sm opacity-0 group-hover:opacity-70 transition-opacity"></span>
                  <span className="absolute -bottom-1 -left-1 w-4 h-4 rounded-full bg-blue-300 blur-sm opacity-0 group-hover:opacity-60 transition-opacity"></span>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Right image/interactive column */}
          <div className="relative perspective-1000">
            {/* Floating notification elements */}
            <div className="absolute -top-5 right-10 z-20 animate-float-slow">
              <div className="bg-white rounded-lg shadow-lg p-3 border border-gray-100">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <Check className="h-4 w-4" />
                  </div>
                  <div className="ml-2">
                    <p className="text-xs font-medium">Website Created</p>
                    <p className="text-[10px] text-gray-500">Just now</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-5 -left-5 z-20 animate-float-medium">
              <div className="bg-white rounded-lg shadow-lg p-3 border border-gray-100">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <Zap className="h-4 w-4" />
                  </div>
                  <div className="ml-2">
                    <p className="text-xs font-medium">AI Working</p>
                    <div className="flex mt-1 space-x-1">
                      <div className="w-8 h-1 rounded-full bg-blue-200">
                        <div className="h-full bg-blue-600 rounded-full animate-progress-slide"></div>
                      </div>
                      <div className="w-8 h-1 rounded-full bg-blue-200">
                        <div className="h-full bg-blue-600 rounded-full animate-progress-slide-delay-1"></div>
                      </div>
                      <div className="w-8 h-1 rounded-full bg-blue-200">
                        <div className="h-full bg-blue-600 rounded-full animate-progress-slide-delay-2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Main interactive image */}
            <div className="relative rounded-xl overflow-hidden shadow-xl border border-gray-200 transform transition-all duration-700 hover:scale-[1.03] hover:rotate-1 hover:shadow-2xl group">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0032b2]/10 via-transparent to-[#0050e6]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Background animation effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-[#0032b2]/10 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#0050e6]/10 to-transparent"></div>
                <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-gradient-to-r from-[#0032b2]/10 to-transparent"></div>
                <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-[#0050e6]/10 to-transparent"></div>
              </div>
              
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Person working on website" 
                className="w-full h-full object-cover transition-transform duration-10000 group-hover:scale-110"
              />
              
              {/* Interactive overlay with animated elements */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="bg-white/90 backdrop-blur-md p-6 rounded-lg shadow-lg transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-500 max-w-xs">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                    <span className="bg-gradient-to-r from-[#0032b2] to-[#0050e6] h-5 w-1 mr-2 rounded-full"></span>
                    Effortless Design
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Our intuitive platform handles all the technical aspects, so you can focus on what matters - growing your business.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-1">
                      <div className="w-8 h-1 rounded-full bg-[#0032b2]"></div>
                      <div className="w-4 h-1 rounded-full bg-[#0050e6]"></div>
                      <div className="w-2 h-1 rounded-full bg-blue-300"></div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-[#0032b2] animate-bounce-x" />
                  </div>
                </div>
              </div>
              
              {/* Interactive elements that appear on hover */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-5 left-5 bg-white/80 backdrop-blur-sm p-2 rounded-md transform -translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 shadow-lg">
                  <p className="text-xs font-semibold text-[#0032b2]">Drag-and-drop editor</p>
                </div>
                <div className="absolute top-5 right-5 bg-white/80 backdrop-blur-sm p-2 rounded-md transform -translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200 shadow-lg">
                  <p className="text-xs font-semibold text-[#0032b2]">Real-time preview</p>
                </div>
                <div className="absolute bottom-5 left-5 bg-white/80 backdrop-blur-sm p-2 rounded-md transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-300 shadow-lg">
                  <p className="text-xs font-semibold text-[#0032b2]">Mobile optimization</p>
                </div>
                <div className="absolute bottom-5 right-5 bg-white/80 backdrop-blur-sm p-2 rounded-md transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-400 shadow-lg">
                  <p className="text-xs font-semibold text-[#0032b2]">SEO friendly</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* All animations now in global CSS */}
    </section>
  );
}