import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, useAnimation } from "framer-motion";
import { Sparkles, Bot, Wand2, PenTool, Globe, Server, Clock, ArrowRight, CheckCircle, Code, Laptop, ArrowUpRight } from "lucide-react";

export default function Hero() {
  const [businessName, setBusinessName] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [step, setStep] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();
  
  // Track mouse movement for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) * 20 - 10;
      const y = (clientY / window.innerHeight) * 20 - 10;
      setMousePosition({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // Animate elements
  useEffect(() => {
    controls.start({
      x: mousePosition.x * 0.5,
      y: mousePosition.y * 0.5,
      transition: { type: "spring", stiffness: 50 }
    });
  }, [mousePosition, controls]);
  
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
    <section className="pt-32 pb-16 overflow-hidden relative bg-gradient-to-b from-[#0032b2]/5 via-[#0050e6]/3 to-transparent">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div 
          className="absolute w-72 h-72 rounded-full bg-[#0032b2]/10 blur-3xl"
          animate={controls}
          style={{ top: "10%", left: "10%" }}
        />
        <motion.div 
          className="absolute w-96 h-96 rounded-full bg-[#0050e6]/10 blur-3xl"
          animate={controls}
          style={{ bottom: "10%", right: "5%" }}
        />
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] -z-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-[#0032b2]/10 text-[#0032b2] text-sm font-medium backdrop-blur-sm border border-[#0032b2]/20 mb-6"
          >
            <Sparkles className="h-4 w-4 mr-2" />
            <span>AI-Powered WordPress Builder</span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#0032b2] to-[#0050e6]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Your website ready in <span className="relative inline-block">
              <span className="relative z-10">2 minutes</span>
              <motion.span 
                className="absolute bottom-2 left-0 right-0 h-3 bg-[#0032b2]/20 -z-0"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.6 }}
              ></motion.span>
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-600 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Just tell us about your business, and our technology will create a complete WordPress website
            tailored to your needs — instantly.
          </motion.p>
        </div>
        
        <motion.div 
          className="max-w-5xl mx-auto rounded-2xl shadow-xl overflow-hidden relative"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="grid md:grid-cols-2 relative">
            {/* Glassmorphic effect for the entire card */}
            <div className="absolute inset-0 bg-white/70 backdrop-blur-md border border-white/20 rounded-2xl"></div>
            
            {/* Website creation form */}
            <div className="p-8 relative z-10">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Create your website</h2>
              
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
                        className="w-full border-[#0032b2]/20 focus:border-[#0032b2] focus:ring-[#0032b2]/20"
                        autoFocus
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-[#0032b2] hover:bg-[#0032b2]/90 text-white flex items-center justify-center gap-2 relative overflow-hidden group"
                      disabled={!businessName}
                    >
                      <span className="relative z-10 flex items-center">
                        Next
                        <ArrowRight className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                      <span className="absolute inset-0 bg-gradient-to-r from-[#0050e6] to-[#0032b2] transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
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
                        className="w-full border-[#0032b2]/20 focus:border-[#0032b2] focus:ring-[#0032b2]/20"
                        autoFocus
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-[#0032b2] hover:bg-[#0032b2]/90 text-white flex items-center justify-center gap-2 relative overflow-hidden group"
                      disabled={!businessType}
                    >
                      <span className="relative z-10 flex items-center">
                        Generate Website
                        <Sparkles className="h-4 w-4 ml-1" />
                      </span>
                      <span className="absolute inset-0 bg-gradient-to-r from-[#0050e6] to-[#0032b2] transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                    </Button>
                    
                    <button 
                      type="button" 
                      className="text-sm text-gray-500 hover:text-[#0032b2] flex items-center justify-center w-full transition-colors duration-300"
                      onClick={() => setStep(0)}
                    >
                      ← Back
                    </button>
                  </div>
                )}
                
                {step === 2 && (
                  <div className="space-y-8">
                    <div className="text-center py-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#0032b2]/10 mb-4">
                        <Clock className="h-8 w-8 text-[#0032b2]" />
                      </div>
                      <h3 className="text-xl font-bold mb-1 text-gray-800">Creating your website</h3>
                      <p className="text-sm text-gray-500">Your site will be ready in under 2 minutes</p>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1 text-sm">
                          <span className="font-medium">{getProgressStatus()}</span>
                          <span className="text-[#0032b2]">{progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <motion.div 
                            className="bg-gradient-to-r from-[#0032b2] to-[#0050e6] h-3 rounded-full" 
                            style={{ width: `${progress}%` }}
                            initial={{ width: "0%" }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.3 }}
                          ></motion.div>
                        </div>
                      </div>
                    </div>
                    
                    {progress === 100 && (
                      <Button 
                        className="w-full bg-[#0032b2] hover:bg-[#0032b2]/90 text-white flex items-center justify-center gap-2 mt-4 relative overflow-hidden group"
                        asChild
                      >
                        <a href="https://app.neweb.ai/">
                          <span className="relative z-10 flex items-center">
                            <CheckCircle className="h-4 w-4 mr-2" />
                            View Your Website
                          </span>
                          <span className="absolute inset-0 bg-gradient-to-r from-[#0050e6] to-[#0032b2] transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
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
            
            {/* Animated product demo */}
            <div className="relative z-10 overflow-hidden">
              {/* Browser chrome */}
              <div className="absolute top-0 left-0 right-0 z-20 h-12 bg-gray-800 rounded-tr-xl flex items-center px-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="bg-gray-700 text-xs text-gray-300 rounded-md px-3 py-1 max-w-[220px] truncate">
                    {businessName ? `${businessName.toLowerCase().replace(/\s+/g, '')}.neweb.ai` : 'yourbusiness.neweb.ai'}
                  </div>
                </div>
              </div>
              
              <div className="h-full pt-12">
                {/* Website preview */}
                <div className="relative h-full bg-white overflow-hidden">
                  {step < 2 && (
                    <div className="flex flex-col items-center justify-center h-full text-center p-8">
                      {/* Animated website mockup */}
                      <motion.div 
                        className="w-32 h-32 rounded-xl bg-gradient-to-br from-[#0032b2]/20 to-[#0050e6]/20 flex items-center justify-center mb-6 relative overflow-hidden"
                        animate={{ 
                          boxShadow: ["0px 0px 0px rgba(0,50,178,0.1)", "0px 10px 30px rgba(0,50,178,0.2)", "0px 0px 0px rgba(0,50,178,0.1)"] 
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        <Laptop className="h-16 w-16 text-[#0032b2]" />
                        <motion.div 
                          className="absolute bottom-0 left-0 right-0 h-1 bg-[#0032b2]"
                          initial={{ width: 0 }}
                          animate={{ width: ["0%", "100%", "0%"] }}
                          transition={{ duration: 3, repeat: Infinity }}
                        />
                      </motion.div>
                      
                      <motion.h3 
                        className="text-xl font-bold mb-2 text-gray-800"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        {businessName || 'Your Business'} Website
                      </motion.h3>
                      
                      <motion.p 
                        className="text-gray-500 mb-6 max-w-xs"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        {businessType 
                          ? `A professional website for your ${businessType.toLowerCase()} business` 
                          : 'Complete your information to see your website preview'}
                      </motion.p>
                      
                      <div className="space-y-3 w-full max-w-xs">
                        <motion.div 
                          className="h-2 bg-gradient-to-r from-[#0032b2]/20 to-[#0050e6]/20 rounded w-full"
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ delay: 0.7, duration: 0.7 }}
                        ></motion.div>
                        <motion.div 
                          className="h-2 bg-gradient-to-r from-[#0032b2]/20 to-[#0050e6]/20 rounded w-5/6"
                          initial={{ width: 0 }}
                          animate={{ width: "83%" }}
                          transition={{ delay: 0.9, duration: 0.7 }}
                        ></motion.div>
                        <motion.div 
                          className="h-2 bg-gradient-to-r from-[#0032b2]/20 to-[#0050e6]/20 rounded w-4/6"
                          initial={{ width: 0 }}
                          animate={{ width: "67%" }}
                          transition={{ delay: 1.1, duration: 0.7 }}
                        ></motion.div>
                      </div>
                    </div>
                  )}
                  
                  {step === 2 && (
                    <div className="h-full">
                      {progress < 50 ? (
                        <div className="flex flex-col items-center justify-center h-full text-center p-8">
                          {/* Animated building process */}
                          <motion.div 
                            className="relative w-32 h-32 mb-8"
                          >
                            <motion.div 
                              className="absolute inset-0 rounded-full bg-[#0032b2]/10"
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                            <motion.div 
                              className="absolute inset-[20%] rounded-full bg-[#0032b2]/20"
                              animate={{ scale: [1, 1.3, 1] }}
                              transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                            />
                            <motion.div 
                              className="absolute inset-[40%] rounded-full bg-[#0032b2]/30"
                              animate={{ scale: [1, 1.4, 1] }}
                              transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
                            />
                            <motion.div
                              className="absolute inset-0 flex items-center justify-center"
                              animate={{ rotate: 360 }}
                              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            >
                              <div className="w-6 h-6 rounded-full bg-[#0032b2] absolute" style={{ top: 0, left: "calc(50% - 12px)" }} />
                            </motion.div>
                            <motion.div
                              className="absolute inset-0 flex items-center justify-center"
                              animate={{ rotate: -360 }}
                              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            >
                              <div className="w-4 h-4 rounded-full bg-[#0050e6] absolute" style={{ bottom: 10, right: 0 }} />
                            </motion.div>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <Code className="h-12 w-12 text-[#0032b2]" />
                            </div>
                          </motion.div>
                          
                          <h3 className="text-xl font-bold mb-2 text-gray-800">Generating your website</h3>
                          <p className="text-gray-500">Our technology is crafting the perfect {businessType} website</p>
                        </div>
                      ) : (
                        <div className="h-full flex flex-col">
                          {/* Animated website preview */}
                          <motion.div 
                            className="bg-gradient-to-r from-[#0032b2] to-[#0050e6] text-white py-6 px-6"
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                          >
                            <h3 className="text-2xl font-bold mb-2">{businessName || 'Your Business'}</h3>
                            <motion.p 
                              className="text-white/90 text-sm max-w-xs"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.4 }}
                            >
                              Professional {businessType || 'business'} services tailored to your needs
                            </motion.p>
                          </motion.div>
                          
                          {/* Content Preview with animations */}
                          <div className="flex-1 p-6 space-y-6 overflow-y-auto">
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.6 }}
                            >
                              <h4 className="text-lg font-semibold mb-3 text-gray-800">Our Services</h4>
                              <div className="grid grid-cols-2 gap-3">
                                <motion.div 
                                  className="border border-gray-200 rounded-lg p-3 hover:border-[#0032b2]/30 hover:shadow-md transition-all duration-300"
                                  whileHover={{ y: -5 }}
                                >
                                  <div className="w-10 h-10 bg-[#0032b2]/10 rounded-full flex items-center justify-center mb-2">
                                    <span className="text-[#0032b2]">✓</span>
                                  </div>
                                  <motion.div 
                                    className="h-2 bg-[#0032b2]/10 rounded-full w-2/3 mb-1"
                                    initial={{ width: 0 }}
                                    animate={{ width: "67%" }}
                                    transition={{ delay: 0.8 }}
                                  ></motion.div>
                                  <motion.div 
                                    className="h-2 bg-[#0032b2]/10 rounded-full w-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{ delay: 0.9 }}
                                  ></motion.div>
                                </motion.div>
                                
                                <motion.div 
                                  className="border border-gray-200 rounded-lg p-3 hover:border-[#0032b2]/30 hover:shadow-md transition-all duration-300"
                                  whileHover={{ y: -5 }}
                                >
                                  <div className="w-10 h-10 bg-[#0032b2]/10 rounded-full flex items-center justify-center mb-2">
                                    <span className="text-[#0032b2]">✓</span>
                                  </div>
                                  <motion.div 
                                    className="h-2 bg-[#0032b2]/10 rounded-full w-3/4 mb-1"
                                    initial={{ width: 0 }}
                                    animate={{ width: "75%" }}
                                    transition={{ delay: 1.0 }}
                                  ></motion.div>
                                  <motion.div 
                                    className="h-2 bg-[#0032b2]/10 rounded-full w-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{ delay: 1.1 }}
                                  ></motion.div>
                                </motion.div>
                              </div>
                            </motion.div>
                            
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 1.2 }}
                            >
                              <h4 className="text-lg font-semibold mb-3 text-gray-800">About Us</h4>
                              <div className="space-y-2">
                                <motion.div 
                                  className="h-2 bg-[#0032b2]/10 rounded-full w-full"
                                  initial={{ width: 0 }}
                                  animate={{ width: "100%" }}
                                  transition={{ delay: 1.3 }}
                                ></motion.div>
                                <motion.div 
                                  className="h-2 bg-[#0032b2]/10 rounded-full w-full"
                                  initial={{ width: 0 }}
                                  animate={{ width: "100%" }}
                                  transition={{ delay: 1.4 }}
                                ></motion.div>
                                <motion.div 
                                  className="h-2 bg-[#0032b2]/10 rounded-full w-3/4"
                                  initial={{ width: 0 }}
                                  animate={{ width: "75%" }}
                                  transition={{ delay: 1.5 }}
                                ></motion.div>
                              </div>
                            </motion.div>
                            
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 1.6 }}
                            >
                              <h4 className="text-lg font-semibold mb-3 text-gray-800">Contact</h4>
                              <div className="grid grid-cols-1 gap-2">
                                <motion.div 
                                  className="h-8 bg-[#0032b2]/5 rounded-lg w-full"
                                  initial={{ width: 0 }}
                                  animate={{ width: "100%" }}
                                  transition={{ delay: 1.7 }}
                                ></motion.div>
                                <motion.div 
                                  className="h-8 bg-[#0032b2]/5 rounded-lg w-full"
                                  initial={{ width: 0 }}
                                  animate={{ width: "100%" }}
                                  transition={{ delay: 1.8 }}
                                ></motion.div>
                                <motion.div 
                                  className="h-20 bg-[#0032b2]/5 rounded-lg w-full"
                                  initial={{ width: 0 }}
                                  animate={{ width: "100%" }}
                                  transition={{ delay: 1.9 }}
                                ></motion.div>
                                <motion.div 
                                  className="h-10 bg-[#0032b2] rounded-lg w-1/3 mt-2"
                                  initial={{ width: 0 }}
                                  animate={{ width: "33%" }}
                                  transition={{ delay: 2.0 }}
                                ></motion.div>
                              </div>
                            </motion.div>
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
            className="bg-white/70 backdrop-blur-sm p-8 rounded-xl shadow-md border border-white/20 relative overflow-hidden group"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="absolute -right-20 -top-20 w-40 h-40 bg-[#0032b2]/5 rounded-full blur-xl transform group-hover:scale-150 transition-transform duration-700"></div>
            <div className="rounded-full bg-[#0032b2]/10 w-14 h-14 flex items-center justify-center mb-4 relative z-10 group-hover:bg-[#0032b2]/20 transition-colors duration-300">
              <Clock className="h-6 w-6 text-[#0032b2]" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800 relative z-10">2-Minute Creation</h3>
            <p className="text-gray-600 relative z-10">
              From idea to live site in under 2 minutes. No more waiting weeks for your website.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-white/70 backdrop-blur-sm p-8 rounded-xl shadow-md border border-white/20 relative overflow-hidden group"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="absolute -left-20 -bottom-20 w-40 h-40 bg-[#0050e6]/5 rounded-full blur-xl transform group-hover:scale-150 transition-transform duration-700"></div>
            <div className="rounded-full bg-[#0032b2]/10 w-14 h-14 flex items-center justify-center mb-4 relative z-10 group-hover:bg-[#0032b2]/20 transition-colors duration-300">
              <Globe className="h-6 w-6 text-[#0032b2]" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800 relative z-10">Free Domain Included</h3>
            <p className="text-gray-600 relative z-10">
              Every website comes with a free domain name. Launch your online presence without additional costs.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-white/70 backdrop-blur-sm p-8 rounded-xl shadow-md border border-white/20 relative overflow-hidden group"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#0032b2]/5 rounded-full blur-xl transform group-hover:scale-150 transition-transform duration-700"></div>
            <div className="rounded-full bg-[#0032b2]/10 w-14 h-14 flex items-center justify-center mb-4 relative z-10 group-hover:bg-[#0032b2]/20 transition-colors duration-300">
              <Wand2 className="h-6 w-6 text-[#0032b2]" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800 relative z-10">No Code Required</h3>
            <p className="text-gray-600 relative z-10">
              Zero technical skills needed. Our technology handles all the design and development work for you.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
