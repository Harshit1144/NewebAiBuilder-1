import { useState } from "react";
import { motion } from "framer-motion";
import { Server, Shield, Zap, Database, Cloud, Globe, BarChart, CircleOff, Check } from "lucide-react";

export default function TechInfrastructure() {
  const [activeTab, setActiveTab] = useState("speed");
  
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h6 className="text-primary font-semibold text-sm uppercase mb-2">Enterprise-Grade Technology</h6>
          <h2 className="text-3xl font-bold mb-4">Built on advanced infrastructure</h2>
          <p className="text-gray-600 text-lg">
            Our powerful platform combines cutting-edge AI technology with enterprise-grade infrastructure
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Infrastructure tabs */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-1">
                <div className="grid grid-cols-3 gap-1">
                  <button
                    className={`px-3 py-3 rounded-lg text-sm font-medium text-center transition-colors ${
                      activeTab === "speed" 
                        ? "bg-primary text-white" 
                        : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={() => setActiveTab("speed")}
                  >
                    <Zap className={`h-5 w-5 mx-auto mb-1 ${activeTab === "speed" ? "text-white" : "text-gray-500"}`} />
                    <span>Speed</span>
                  </button>
                  <button
                    className={`px-3 py-3 rounded-lg text-sm font-medium text-center transition-colors ${
                      activeTab === "security" 
                        ? "bg-primary text-white" 
                        : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={() => setActiveTab("security")}
                  >
                    <Shield className={`h-5 w-5 mx-auto mb-1 ${activeTab === "security" ? "text-white" : "text-gray-500"}`} />
                    <span>Security</span>
                  </button>
                  <button
                    className={`px-3 py-3 rounded-lg text-sm font-medium text-center transition-colors ${
                      activeTab === "wordpress" 
                        ? "bg-primary text-white" 
                        : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={() => setActiveTab("wordpress")}
                  >
                    <Globe className={`h-5 w-5 mx-auto mb-1 ${activeTab === "wordpress" ? "text-white" : "text-gray-500"}`} />
                    <span>WordPress</span>
                  </button>
                </div>
              </div>
              
              <div className="p-6 space-y-6">
                {activeTab === "speed" && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold">Lightning-Fast Performance</h3>
                    <p className="text-gray-600">
                      Our optimized architecture ensures your websites always load quickly, providing the best user experience possible.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <Check className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">SSD-Only Storage</h4>
                          <p className="text-sm text-gray-600">
                            All data is stored on high-performance SSDs, delivering superior speed compared to traditional storage.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <Check className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Global CDN</h4>
                          <p className="text-sm text-gray-600">
                            Content delivery network ensures your website loads quickly from anywhere in the world.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <Check className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Advanced Caching</h4>
                          <p className="text-sm text-gray-600">
                            Multi-layered caching system optimizes WordPress performance for lightning-fast page loads.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === "security" && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold">Enterprise-Level Security</h3>
                    <p className="text-gray-600">
                      Comprehensive security measures keep your website and your visitors' data protected at all times.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <Check className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">DDoS Protection</h4>
                          <p className="text-sm text-gray-600">
                            Advanced mitigation systems protect against distributed denial of service attacks.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <Check className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Daily Backups</h4>
                          <p className="text-sm text-gray-600">
                            Automated daily backups ensure your data is always safely stored and easily recoverable.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <Check className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">SSL Certificates</h4>
                          <p className="text-sm text-gray-600">
                            Free SSL certificates included with every website for secure HTTPS connections.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === "wordpress" && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold">WordPress Optimization</h3>
                    <p className="text-gray-600">
                      Our infrastructure is specifically designed to provide the best WordPress experience possible.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <Check className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">WordPress-Specific Caching</h4>
                          <p className="text-sm text-gray-600">
                            Caching system designed specifically for WordPress to maximize performance.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <Check className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Plugin Compatibility</h4>
                          <p className="text-sm text-gray-600">
                            Pre-configured environment ensures compatibility with thousands of WordPress plugins.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <Check className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Automatic Updates</h4>
                          <p className="text-sm text-gray-600">
                            Core WordPress updates are managed automatically to keep your site secure and up-to-date.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Infrastructure visualization */}
          <div className="lg:col-span-3">
            <motion.div 
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden h-[500px] relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {activeTab === "speed" && (
                <div className="p-8 h-full flex flex-col">
                  <div className="mb-8">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 text-xs font-medium">
                      <BarChart className="h-3.5 w-3.5 mr-1.5" />
                      <span>Performance Metrics</span>
                    </div>
                    <h3 className="text-xl font-bold mt-3 mb-1">Lightning Fast Performance</h3>
                    <p className="text-sm text-gray-600">How neweb.ai outperforms traditional WordPress hosting</p>
                  </div>
                  
                  <div className="flex-1 grid grid-cols-2 gap-6">
                    {/* Left column - pagespeed scores */}
                    <div className="space-y-6">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-sm font-medium">Google PageSpeed Score</h4>
                          <div className="inline-flex items-center gap-1.5">
                            <span className="text-sm font-medium text-green-600">90-100</span>
                          </div>
                        </div>
                        
                        <div className="bg-gray-100 rounded-full h-2 mb-4">
                          <div className="h-2 rounded-full bg-green-500" style={{ width: '95%' }}></div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h4 className="text-sm font-medium">Performance Comparison</h4>
                        
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between mb-1 text-xs">
                              <div className="flex items-center">
                                <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
                                <span className="font-medium">neweb.ai</span>
                              </div>
                              <span>0.8s</span>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-1.5">
                              <div className="bg-primary h-1.5 rounded-full" style={{ width: '85%' }}></div>
                            </div>
                          </div>
                          
                          <div>
                            <div className="flex justify-between mb-1 text-xs">
                              <div className="flex items-center">
                                <div className="w-3 h-3 bg-gray-400 rounded-full mr-2"></div>
                                <span className="font-medium">Traditional Hosting</span>
                              </div>
                              <span>3.2s</span>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-1.5">
                              <div className="bg-gray-400 h-1.5 rounded-full" style={{ width: '30%' }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                        <h4 className="text-sm font-medium text-blue-800 mb-1">Optimized for Speed</h4>
                        <p className="text-xs text-blue-600">
                          All websites are optimized with server-side caching, image optimization, and code minification.
                        </p>
                      </div>
                    </div>
                    
                    {/* Right column - Performance visualization */}
                    <div className="border border-gray-100 rounded-lg overflow-hidden flex flex-col">
                      <div className="bg-gray-50 p-3 border-b border-gray-100">
                        <div className="text-xs font-medium">Load Time Comparison</div>
                      </div>
                      
                      <div className="flex-1 p-4 flex flex-col justify-center space-y-8">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center">
                              <div className="w-4 h-4 rounded-full bg-primary mr-2 flex items-center justify-center">
                                <Zap className="h-2.5 w-2.5 text-white" />
                              </div>
                              <span className="text-sm font-medium">neweb.ai</span>
                            </div>
                            <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                              0.8 seconds
                            </span>
                          </div>
                          
                          <div className="relative">
                            <div className="h-16 bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-center">
                              <div className="absolute inset-x-0 h-16 bg-gradient-to-r from-transparent via-primary/10 to-transparent rounded-lg animate-pulse" style={{ animationDuration: '1.5s' }}></div>
                              <div className="z-10 flex items-center gap-2">
                                <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                                </div>
                                <div className="h-2 w-24 bg-gray-200 rounded-full"></div>
                              </div>
                            </div>
                            <div className="mt-1 text-xs text-center text-gray-500">Website fully loaded</div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center">
                              <div className="w-4 h-4 rounded-full bg-gray-400 mr-2 flex items-center justify-center">
                                <CircleOff className="h-2.5 w-2.5 text-white" />
                              </div>
                              <span className="text-sm font-medium">Traditional</span>
                            </div>
                            <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">
                              3.2 seconds
                            </span>
                          </div>
                          
                          <div className="relative">
                            <div className="h-16 bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-center">
                              <div className="absolute inset-x-0 h-16 flex items-center">
                                <div className="h-2 bg-gray-200 rounded-full w-full"></div>
                                <div className="absolute left-0 h-2 bg-gray-400 rounded-full" style={{ width: '30%' }}></div>
                                <div className="absolute left-0 w-1.5 h-3 bg-gray-500 rounded" style={{ left: '30%' }}></div>
                              </div>
                              <div className="absolute right-4 flex items-center h-full">
                                <span className="text-xs text-gray-400">Still loading...</span>
                              </div>
                            </div>
                            <div className="mt-1 text-xs text-center text-gray-500">Website partially loaded</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === "security" && (
                <div className="p-8 h-full">
                  <div className="mb-8">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 text-xs font-medium">
                      <Shield className="h-3.5 w-3.5 mr-1.5" />
                      <span>Security Features</span>
                    </div>
                    <h3 className="text-xl font-bold mt-3 mb-1">Enterprise-Grade Security</h3>
                    <p className="text-sm text-gray-600">Multi-layered protection for your WordPress website</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6 h-[340px]">
                    {/* Left column - Security features */}
                    <div className="space-y-5">
                      <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-16 h-16">
                          <div className="absolute transform rotate-45 bg-green-500 text-white text-xs font-bold text-center py-1 right-[-35px] top-[20px] w-[130px]">Active</div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900 mb-1">DDoS Protection</h4>
                            <p className="text-xs text-gray-600 mb-2">
                              Advanced protection against distributed denial of service attacks.
                            </p>
                            <div className="flex items-center">
                              <div className="text-xs font-medium text-gray-900">Security level:</div>
                              <div className="ml-2 inline-flex">
                                <div className="w-2 h-2 rounded-full bg-green-500 mr-1"></div>
                                <div className="w-2 h-2 rounded-full bg-green-500 mr-1"></div>
                                <div className="w-2 h-2 rounded-full bg-green-500 mr-1"></div>
                                <div className="w-2 h-2 rounded-full bg-green-500 mr-1"></div>
                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-16 h-16">
                          <div className="absolute transform rotate-45 bg-green-500 text-white text-xs font-bold text-center py-1 right-[-35px] top-[20px] w-[130px]">Active</div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-4 flex-shrink-0">
                            <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900 mb-1">SSL Encryption</h4>
                            <p className="text-xs text-gray-600 mb-2">
                              Free SSL certificates included with all websites for secure HTTPS connections.
                            </p>
                            <div className="flex items-center">
                              <div className="text-xs font-medium text-gray-900">Security level:</div>
                              <div className="ml-2 inline-flex">
                                <div className="w-2 h-2 rounded-full bg-green-500 mr-1"></div>
                                <div className="w-2 h-2 rounded-full bg-green-500 mr-1"></div>
                                <div className="w-2 h-2 rounded-full bg-green-500 mr-1"></div>
                                <div className="w-2 h-2 rounded-full bg-green-500 mr-1"></div>
                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-16 h-16">
                          <div className="absolute transform rotate-45 bg-green-500 text-white text-xs font-bold text-center py-1 right-[-35px] top-[20px] w-[130px]">Active</div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-4 flex-shrink-0">
                            <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900 mb-1">Malware Protection</h4>
                            <p className="text-xs text-gray-600 mb-2">
                              Real-time scanning and protection against malware and suspicious activity.
                            </p>
                            <div className="flex items-center">
                              <div className="text-xs font-medium text-gray-900">Security level:</div>
                              <div className="ml-2 inline-flex">
                                <div className="w-2 h-2 rounded-full bg-green-500 mr-1"></div>
                                <div className="w-2 h-2 rounded-full bg-green-500 mr-1"></div>
                                <div className="w-2 h-2 rounded-full bg-green-500 mr-1"></div>
                                <div className="w-2 h-2 rounded-full bg-green-500 mr-1"></div>
                                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Right column - Security visualization */}
                    <div className="border border-gray-100 rounded-lg overflow-hidden flex flex-col bg-gray-50">
                      <div className="p-4 flex items-center justify-center h-full">
                        <div className="relative w-64 h-64">
                          {/* Outer security layer */}
                          <motion.div 
                            className="absolute inset-0 rounded-full border-2 border-dashed border-blue-200"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                          />
                          
                          {/* Middle security layer */}
                          <motion.div 
                            className="absolute inset-8 rounded-full border-2 border-dashed border-indigo-300"
                            animate={{ rotate: -360 }}
                            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                          />
                          
                          {/* Inner security layer */}
                          <motion.div 
                            className="absolute inset-16 rounded-full border-2 border-dashed border-purple-300"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                          />
                          
                          {/* Security dots */}
                          {[...Array(12)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-3 h-3 rounded-full bg-blue-500"
                              style={{
                                left: `calc(50% + ${Math.cos(i * 30 * Math.PI / 180) * 120}px)`,
                                top: `calc(50% + ${Math.sin(i * 30 * Math.PI / 180) * 120}px)`,
                                transform: 'translate(-50%, -50%)'
                              }}
                              animate={{ 
                                scale: [1, 1.5, 1],
                                opacity: [0.7, 1, 0.7]
                              }}
                              transition={{ 
                                duration: 2, 
                                repeat: Infinity, 
                                delay: i * 0.2
                              }}
                            />
                          ))}
                          
                          {/* Central shield */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-white p-4 rounded-full shadow-xl">
                              <Shield className="h-12 w-12 text-primary" />
                            </div>
                          </div>
                          
                          {/* Protected website */}
                          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1.5 rounded-full shadow-md border border-gray-200">
                            <div className="text-xs font-medium text-gray-800 flex items-center">
                              <Check className="h-3 w-3 text-green-500 mr-1" />
                              Protected Website
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === "wordpress" && (
                <div className="p-8 h-full flex flex-col">
                  <div className="mb-8">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-medium">
                      <svg className="h-3.5 w-3.5 mr-1.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 19.5c-5.244 0-9.5-4.256-9.5-9.5S6.756 2.5 12 2.5s9.5 4.256 9.5 9.5-4.256 9.5-9.5 9.5z"/>
                        <path d="M12 4.25c-4.254 0-7.75 3.496-7.75 7.75S7.746 19.75 12 19.75 19.75 16.254 19.75 12 16.254 4.25 12 4.25"/>
                      </svg>
                      <span>WordPress Integration</span>
                    </div>
                    <h3 className="text-xl font-bold mt-3 mb-1">Built for WordPress Success</h3>
                    <p className="text-sm text-gray-600">Our platform is optimized specifically for WordPress</p>
                  </div>
                  
                  <div className="flex-1 grid grid-cols-3 gap-6">
                    {/* WordPress admin panel preview */}
                    <div className="col-span-2 border border-gray-200 rounded-lg overflow-hidden flex flex-col shadow-sm">
                      <div className="bg-gray-900 text-white py-2 px-4 border-b border-gray-800 flex items-center">
                        <div className="w-8 h-8 flex items-center justify-center mr-2 overflow-hidden">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                            <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 19.5c-5.244 0-9.5-4.256-9.5-9.5S6.756 2.5 12 2.5s9.5 4.256 9.5 9.5-4.256 9.5-9.5 9.5z"/>
                            <path d="M12 4.25c-4.254 0-7.75 3.496-7.75 7.75S7.746 19.75 12 19.75 19.75 16.254 19.75 12 16.254 4.25 12 4.25"/>
                          </svg>
                        </div>
                        <span className="font-medium">WordPress Admin</span>
                      </div>
                      
                      <div className="flex flex-1">
                        {/* Sidebar */}
                        <div className="w-48 bg-gray-800 text-white py-4 px-2 space-y-1">
                          <div className="flex items-center px-3 py-2 rounded bg-gray-700 text-sm">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            Dashboard
                          </div>
                          <div className="flex items-center px-3 py-2 rounded text-sm text-gray-400 hover:text-white">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Posts
                          </div>
                          <div className="flex items-center px-3 py-2 rounded text-sm text-gray-400 hover:text-white">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                            </svg>
                            Pages
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1 bg-white p-4">
                          <h3 className="text-lg font-medium mb-4">Dashboard</h3>
                          
                          <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                              <div className="flex items-center justify-between mb-4">
                                <h4 className="text-sm font-medium">At a Glance</h4>
                                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </div>
                              <div className="space-y-2 text-sm">
                                <div className="flex items-center">
                                  <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                  </svg>
                                  <span>5 Posts</span>
                                </div>
                                <div className="flex items-center">
                                  <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                                  </svg>
                                  <span>7 Pages</span>
                                </div>
                                <div className="flex items-center">
                                  <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                  </svg>
                                  <span>0 Comments</span>
                                </div>
                              </div>
                            </div>
                            
                            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                              <div className="flex items-center justify-between mb-4">
                                <h4 className="text-sm font-medium">Activity</h4>
                                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </div>
                              <div className="space-y-3 text-sm">
                                <div className="flex items-start">
                                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                                    <span className="text-blue-700 font-bold">A</span>
                                  </div>
                                  <div>
                                    <p className="text-gray-600">Admin published page "About Us"</p>
                                    <p className="text-gray-400 text-xs">3 minutes ago</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                            <div className="flex items-center justify-between mb-4">
                              <h4 className="text-sm font-medium">WordPress News</h4>
                              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                              </svg>
                            </div>
                            <div className="space-y-2">
                              <div className="h-4 bg-gray-200 rounded w-full"></div>
                              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                              <div className="h-4 bg-gray-200 rounded w-4/6"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Stats */}
                    <div className="space-y-6">
                      <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                        <h4 className="text-sm font-medium text-gray-700 mb-4">Plugin Compatibility</h4>
                        <div className="flex items-center mb-1">
                          <div className="text-3xl font-bold text-primary">58,000+</div>
                        </div>
                        <p className="text-xs text-gray-600">
                          Compatible WordPress plugins ready to extend your website's functionality
                        </p>
                      </div>
                      
                      <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                        <h4 className="text-sm font-medium text-gray-700 mb-2">Theme Options</h4>
                        <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                          <span>Free themes</span>
                          <span>100%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1 mb-3">
                          <div className="bg-primary h-1 rounded-full w-full"></div>
                        </div>
                        <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                          <span>Premium themes</span>
                          <span>100%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1 mb-3">
                          <div className="bg-primary h-1 rounded-full w-full"></div>
                        </div>
                        <p className="text-xs text-gray-600 mt-2">
                          Full compatibility with all WordPress themes
                        </p>
                      </div>
                      
                      <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                        <h4 className="text-sm font-medium text-gray-700 mb-2">WordPress Version</h4>
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center">
                            <svg className="w-8 h-8 text-blue-500 mr-2" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 19.5c-5.244 0-9.5-4.256-9.5-9.5S6.756 2.5 12 2.5s9.5 4.256 9.5 9.5-4.256 9.5-9.5 9.5z"/>
                              <path d="M12 4.25c-4.254 0-7.75 3.496-7.75 7.75S7.746 19.75 12 19.75 19.75 16.254 19.75 12 16.254 4.25 12 4.25"/>
                            </svg>
                            <div>
                              <div className="text-sm font-medium">WordPress 6.4</div>
                              <div className="text-xs text-gray-500">Latest Version</div>
                            </div>
                          </div>
                          <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                            Up to date
                          </div>
                        </div>
                        <p className="text-xs text-gray-600">
                          Automatic WordPress core updates for optimal security and performance
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}