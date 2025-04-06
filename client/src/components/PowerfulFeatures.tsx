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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#0032b2] to-[#0050e6]">
              Make website building effortless
            </h2>
            <p className="text-gray-600 mb-10">
              Create, manage, and scale your website with our powerful WordPress platform that anyone can use.
            </p>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`flex items-start p-4 rounded-lg transition-all duration-300 transform cursor-pointer ${
                    activeFeature === index 
                      ? `bg-blue-50 border border-blue-100 scale-105 shadow-md` 
                      : "hover:bg-blue-50/50 border border-transparent hover:shadow"
                  }`}
                  onClick={() => setActiveFeature(activeFeature === index ? null : index)}
                >
                  <div className={`flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mr-5 transition-all duration-300 ${activeFeature === index ? 'bg-[#0032b2] shadow-lg' : ''}`}>
                    <div className={`transition-all duration-300 ${activeFeature === index ? 'text-white' : 'text-[#0032b2]'}`}>
                      {feature.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1 flex items-center">
                      {feature.title}
                      {activeFeature === index && (
                        <span className="ml-2 text-xs bg-[#0032b2] text-white px-2 py-0.5 rounded-full">Click for details</span>
                      )}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                    
                    {activeFeature === index && (
                      <div className="mt-3 pt-3 border-t border-gray-100 text-sm text-gray-700 animate-fadeIn">
                        <div className="flex items-start">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <p>{feature.details}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <Button
                className="bg-[#0032b2] hover:bg-[#0032b2]/90 text-white group relative overflow-hidden"
                size="lg"
              >
                <span className="relative z-10 flex items-center">
                  Start building now 
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#0050e6] to-[#0032b2] transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
              </Button>
            </div>
          </div>
          
          <div className="relative rounded-xl overflow-hidden shadow-xl border border-gray-200 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0032b2]/10 to-[#0050e6]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="Person working on website" 
              className="w-full h-full object-cover transition-transform duration-7000 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Effortless Design</h3>
                <p className="text-gray-700">
                  Our intuitive platform handles all the technical aspects, so you can focus on what matters - growing your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}