import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Sparkles, Bot, Wand2, PenTool, Globe, Server, Clock, ArrowRight, CheckCircle } from "lucide-react";

export default function Hero() {
  const [businessName, setBusinessName] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [step, setStep] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 0 && businessName) {
      setStep(1);
    } else if (step === 1 && businessType) {
      setStep(2);
      setIsGenerating(true);
      
      // Simulate progress for demo
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 2;
        });
      }, 120);
    }
  };
  
  const getProgressStatus = () => {
    if (progress < 25) return "Analyzing requirements...";
    if (progress < 50) return "Designing layout...";
    if (progress < 75) return "Generating content...";
    if (progress < 100) return "Finalizing website...";
    return "Website ready!";
  };
  
  return (
    <section className="pt-32 pb-16 bg-white overflow-hidden relative">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white -z-10"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] -z-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            <Sparkles className="h-4 w-4 mr-2" />
            <span>AI-Powered WordPress Builder</span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Your website ready in <span className="gradient-text">2 minutes</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg text-gray-600 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Just tell us about your business, and our AI will create a complete WordPress website
            tailored to your needs — instantly.
          </motion.p>
        </div>
        
        <motion.div 
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden relative"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="grid md:grid-cols-2">
            {/* Website creation form */}
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6">Create your website</h2>
              
              <form onSubmit={handleSubmit}>
                {step === 0 && (
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="business-name" className="block text-sm font-medium text-gray-700 mb-1">
                        What's your business name?
                      </label>
                      <Input
                        id="business-name"
                        placeholder="e.g. Acme Digital Solutions"
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        className="w-full"
                        autoFocus
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90 flex items-center justify-center gap-2"
                      disabled={!businessName}
                    >
                      Next
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                )}
                
                {step === 1 && (
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="business-type" className="block text-sm font-medium text-gray-700 mb-1">
                        What type of business do you have?
                      </label>
                      <Input
                        id="business-type"
                        placeholder="e.g. Marketing Agency, Restaurant, Law Firm"
                        value={businessType}
                        onChange={(e) => setBusinessType(e.target.value)}
                        className="w-full"
                        autoFocus
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90 flex items-center justify-center gap-2"
                      disabled={!businessType}
                    >
                      Generate Website
                      <Sparkles className="h-4 w-4" />
                    </Button>
                    
                    <button 
                      type="button" 
                      className="text-sm text-gray-500 hover:text-gray-700 flex items-center justify-center w-full"
                      onClick={() => setStep(0)}
                    >
                      ← Back
                    </button>
                  </div>
                )}
                
                {step === 2 && (
                  <div className="space-y-8">
                    <div className="text-center py-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                        <Clock className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold mb-1">Creating your website</h3>
                      <p className="text-sm text-gray-500">Your site will be ready in under 2 minutes</p>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1 text-sm">
                          <span className="font-medium">{getProgressStatus()}</span>
                          <span className="text-primary">{progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div 
                            className="bg-primary h-2.5 rounded-full transition-all duration-300" 
                            style={{ width: `${progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    
                    {progress === 100 && (
                      <Button 
                        className="w-full bg-green-600 hover:bg-green-700 flex items-center justify-center gap-2 mt-4"
                        asChild
                      >
                        <a href="https://app.neweb.ai/">
                          <CheckCircle className="h-4 w-4" />
                          View Your Website
                        </a>
                      </Button>
                    )}
                  </div>
                )}
              </form>
              
              <div className="mt-8 pt-8 border-t border-gray-100">
                <h3 className="text-sm font-medium text-gray-700 mb-4">Included with every website:</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Free domain name</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm text-gray-600">WordPress CMS</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Mobile optimized</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm text-gray-600">SEO ready</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Website live preview */}
            <div className="relative md:border-l border-gray-100 bg-gray-50">
              <div className="absolute top-0 left-0 right-0 h-16 bg-gray-100 border-b border-gray-200 flex items-center px-6">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="bg-white text-xs rounded-md px-3 py-1 max-w-[220px] truncate">
                    {businessName ? `${businessName.toLowerCase().replace(/\s+/g, '')}.neweb.ai` : 'yourbusiness.neweb.ai'}
                  </div>
                </div>
              </div>
              
              <div className="pt-16 p-4 h-full">
                <div className="bg-white rounded border border-gray-200 h-[500px] shadow-sm overflow-hidden">
                  {step < 2 && (
                    <div className="flex flex-col items-center justify-center h-full text-center p-8">
                      <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                        <span className="text-4xl">🚀</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">
                        {businessName || 'Your Business'} Website
                      </h3>
                      <p className="text-gray-500 mb-6 max-w-xs">
                        {businessType 
                          ? `A professional website for your ${businessType.toLowerCase()} business` 
                          : 'Complete your information to see your website preview'}
                      </p>
                      <div className="space-y-2 w-full max-w-xs">
                        <div className="h-2 bg-gray-200 rounded w-full"></div>
                        <div className="h-2 bg-gray-200 rounded w-5/6"></div>
                        <div className="h-2 bg-gray-200 rounded w-4/6"></div>
                      </div>
                    </div>
                  )}
                  
                  {step === 2 && (
                    <div className="h-full">
                      {progress < 50 ? (
                        <div className="flex flex-col items-center justify-center h-full text-center p-8">
                          <motion.div 
                            className="w-20 h-20 relative mb-8"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: [0.8, 1.1, 0.8] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <div className="absolute inset-0 bg-blue-500 opacity-20 rounded-full"></div>
                            <div className="absolute inset-4 bg-blue-500 opacity-30 rounded-full"></div>
                            <div className="absolute inset-8 bg-blue-500 opacity-50 rounded-full"></div>
                          </motion.div>
                          <h3 className="text-xl font-bold mb-2">Generating your website</h3>
                          <p className="text-gray-500">Our AI is gathering the best designs for your {businessType}</p>
                        </div>
                      ) : (
                        <div className="h-full flex flex-col">
                          {/* Header */}
                          <div className="bg-primary text-white py-8 px-6">
                            <h3 className="text-xl font-bold mb-2">{businessName || 'Your Business'}</h3>
                            <p className="text-white/80 text-sm max-w-xs">
                              Professional {businessType || 'business'} services tailored to your needs
                            </p>
                          </div>
                          
                          {/* Content Preview */}
                          <div className="flex-1 p-6 space-y-6">
                            <div>
                              <h4 className="text-lg font-semibold mb-3">Our Services</h4>
                              <div className="grid grid-cols-2 gap-3">
                                <div className="border border-gray-200 rounded p-3">
                                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                                    <span className="text-primary">✓</span>
                                  </div>
                                  <div className="h-2 bg-gray-200 rounded-full w-2/3 mb-1"></div>
                                  <div className="h-2 bg-gray-200 rounded-full w-full"></div>
                                </div>
                                <div className="border border-gray-200 rounded p-3">
                                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                                    <span className="text-primary">✓</span>
                                  </div>
                                  <div className="h-2 bg-gray-200 rounded-full w-3/4 mb-1"></div>
                                  <div className="h-2 bg-gray-200 rounded-full w-full"></div>
                                </div>
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="text-lg font-semibold mb-3">About Us</h4>
                              <div className="space-y-2">
                                <div className="h-2 bg-gray-200 rounded-full w-full"></div>
                                <div className="h-2 bg-gray-200 rounded-full w-full"></div>
                                <div className="h-2 bg-gray-200 rounded-full w-3/4"></div>
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="text-lg font-semibold mb-3">Contact</h4>
                              <div className="border border-gray-200 rounded p-4 flex items-center">
                                <div className="w-10 h-10 bg-gray-100 rounded-full mr-3"></div>
                                <div>
                                  <div className="h-2 bg-gray-200 rounded-full w-32 mb-1"></div>
                                  <div className="h-2 bg-gray-200 rounded-full w-24"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Features highlight */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-20">
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
              <Clock className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">2-Minute Creation</h3>
            <p className="text-gray-600">
              From idea to live site in under 2 minutes. No more waiting weeks for your website.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
              <Globe className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Free Domain Included</h3>
            <p className="text-gray-600">
              Every website comes with a free domain name. Launch your online presence without additional costs.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
              <Wand2 className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">No Code Required</h3>
            <p className="text-gray-600">
              Zero technical skills needed. Our AI handles all the design and development work for you.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
