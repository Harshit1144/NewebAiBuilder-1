import { useState } from "react";
import { Check, Globe, Zap, Shield, BarChart } from "lucide-react";

export default function TechInfrastructure() {
  const [activeTab, setActiveTab] = useState("wordpress");
  
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-primary font-medium text-sm uppercase mb-2">ENTERPRISE-GRADE TECHNOLOGY</div>
          <h2 className="text-3xl font-bold mb-4">Built on advanced infrastructure</h2>
          <p className="text-gray-600">
            Our powerful platform combines cutting-edge AI technology with enterprise-grade infrastructure
          </p>
        </div>
        
        <div className="grid md:grid-cols-12 gap-8">
          {/* Tabs */}
          <div className="md:col-span-5 lg:col-span-4">
            <div className="flex justify-center mb-6 space-x-2">
              <button
                className={`flex flex-1 items-center justify-center p-3 rounded-md ${
                  activeTab === "speed" ? "bg-primary text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
                onClick={() => setActiveTab("speed")}
              >
                <Zap className="h-5 w-5 mr-2" />
                <span>Speed</span>
              </button>
              <button
                className={`flex flex-1 items-center justify-center p-3 rounded-md ${
                  activeTab === "security" ? "bg-primary text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
                onClick={() => setActiveTab("security")}
              >
                <Shield className="h-5 w-5 mr-2" />
                <span>Security</span>
              </button>
              <button
                className={`flex flex-1 items-center justify-center p-3 rounded-md ${
                  activeTab === "wordpress" ? "bg-primary text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
                onClick={() => setActiveTab("wordpress")}
              >
                <Globe className="h-5 w-5 mr-2" />
                <span>WordPress</span>
              </button>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              {activeTab === "speed" && (
                <div className="p-6 space-y-5">
                  <h3 className="text-xl font-bold">Lightning-Fast Performance</h3>
                  <p className="text-gray-600 text-sm">
                    Our optimized architecture ensures your websites always load quickly, providing the best user experience possible.
                  </p>
                  
                  <div className="space-y-4 mt-6">
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
                <div className="p-6 space-y-5">
                  <h3 className="text-xl font-bold">Enterprise-Level Security</h3>
                  <p className="text-gray-600 text-sm">
                    Comprehensive security measures keep your website and your visitors' data protected at all times.
                  </p>
                  
                  <div className="space-y-4 mt-6">
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
                <div className="p-6 space-y-5">
                  <h3 className="text-xl font-bold">WordPress Optimization</h3>
                  <p className="text-gray-600 text-sm">
                    Our infrastructure is specifically designed to provide the best WordPress experience possible.
                  </p>
                  
                  <div className="space-y-4 mt-6">
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
          
          {/* Visual Display */}
          <div className="md:col-span-7 lg:col-span-8">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden h-[500px]">
              {activeTab === "speed" && (
                <div className="p-8 h-full">
                  <div className="bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm inline-flex items-center mb-6">
                    <BarChart className="h-4 w-4 mr-2" />
                    Performance Metrics
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2">Lightning Fast Performance</h3>
                  <p className="text-gray-500 mb-8">How neweb.ai outperforms traditional WordPress hosting</p>
                  
                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-8">
                      <div>
                        <div className="flex justify-between mb-2">
                          <h4 className="text-sm font-medium">Google PageSpeed Score</h4>
                          <span className="text-sm font-medium text-green-600">90-100</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: "95%" }}></div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h4 className="text-sm font-medium">Load Time Comparison</h4>
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between mb-1">
                              <div className="flex items-center">
                                <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
                                <span className="text-sm">neweb.ai</span>
                              </div>
                              <span className="text-sm">0.8s</span>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-2">
                              <div className="bg-primary h-2 rounded-full" style={{ width: "85%" }}></div>
                            </div>
                          </div>
                          
                          <div>
                            <div className="flex justify-between mb-1">
                              <div className="flex items-center">
                                <div className="w-3 h-3 bg-gray-400 rounded-full mr-2"></div>
                                <span className="text-sm">Traditional Hosting</span>
                              </div>
                              <span className="text-sm">3.2s</span>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-2">
                              <div className="bg-gray-400 h-2 rounded-full" style={{ width: "30%" }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-6 flex flex-col">
                      <div className="text-center mb-4">
                        <span className="inline-block p-3 bg-blue-50 rounded-full mb-2">
                          <Zap className="h-6 w-6 text-blue-500" />
                        </span>
                        <h3 className="text-lg font-medium">Speed Optimization</h3>
                      </div>
                      
                      <div className="flex-1 space-y-4 text-sm">
                        <div className="flex items-start">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <p>CDN integration for global delivery</p>
                        </div>
                        <div className="flex items-start">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <p>Advanced caching at server level</p>
                        </div>
                        <div className="flex items-start">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <p>Image optimization and lazy loading</p>
                        </div>
                        <div className="flex items-start">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <p>Code minification and compression</p>
                        </div>
                        <div className="flex items-start">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <p>HTTP/3 and QUIC protocol support</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === "security" && (
                <div className="p-8 h-full">
                  <div className="bg-red-50 text-red-700 px-4 py-2 rounded-full text-sm inline-flex items-center mb-6">
                    <Shield className="h-4 w-4 mr-2" />
                    Security Measures
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2">Enterprise-Level Protection</h3>
                  <p className="text-gray-500 mb-8">Comprehensive security for your WordPress website</p>
                  
                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="p-5 bg-gray-50 rounded-lg border border-gray-200">
                        <h4 className="font-medium mb-4 flex items-center">
                          <Shield className="h-5 w-5 text-primary mr-2" />
                          Advanced Firewall
                        </h4>
                        <p className="text-sm text-gray-600">
                          AI-powered firewall that automatically blocks malicious traffic and prevents brute force attacks.
                        </p>
                      </div>
                      
                      <div className="p-5 bg-gray-50 rounded-lg border border-gray-200">
                        <h4 className="font-medium mb-4 flex items-center">
                          <Shield className="h-5 w-5 text-primary mr-2" />
                          Automated Backups
                        </h4>
                        <p className="text-sm text-gray-600">
                          Daily backups with 30-day retention, allowing point-in-time restoration if needed.
                        </p>
                      </div>
                      
                      <div className="p-5 bg-gray-50 rounded-lg border border-gray-200">
                        <h4 className="font-medium mb-4 flex items-center">
                          <Shield className="h-5 w-5 text-primary mr-2" />
                          DDoS Protection
                        </h4>
                        <p className="text-sm text-gray-600">
                          Enterprise-grade protection against distributed denial of service attacks.
                        </p>
                      </div>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg overflow-hidden flex flex-col">
                      <div className="p-4 border-b border-gray-200 bg-gray-50">
                        <h4 className="font-medium">Security Features</h4>
                      </div>
                      
                      <div className="p-6 flex-1 space-y-4">
                        <div className="flex items-start">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                            <Check className="h-4 w-4 text-green-600" />
                          </div>
                          <div>
                            <h5 className="font-medium text-sm">Free SSL Certificate</h5>
                            <p className="text-xs text-gray-500 mt-1">
                              Automatic HTTPS encryption for all websites
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                            <Check className="h-4 w-4 text-green-600" />
                          </div>
                          <div>
                            <h5 className="font-medium text-sm">Malware Scanning</h5>
                            <p className="text-xs text-gray-500 mt-1">
                              Daily automated scanning for malicious code
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                            <Check className="h-4 w-4 text-green-600" />
                          </div>
                          <div>
                            <h5 className="font-medium text-sm">Login Protection</h5>
                            <p className="text-xs text-gray-500 mt-1">
                              Two-factor authentication and login attempt limiting
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                            <Check className="h-4 w-4 text-green-600" />
                          </div>
                          <div>
                            <h5 className="font-medium text-sm">Real-time Monitoring</h5>
                            <p className="text-xs text-gray-500 mt-1">
                              24/7 security monitoring and threat detection
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === "wordpress" && (
                <div className="h-full">
                  <div className="p-6 pb-0">
                    <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm inline-flex items-center">
                      <div className="h-3 w-3 bg-primary rounded-full mr-2"></div>
                      WordPress Integration
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">Built for WordPress Success</h3>
                    <p className="text-gray-500 mb-8">Our platform is optimized specifically for WordPress</p>
                  
                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <div className="space-y-6">
                          <div className="flex items-start">
                            <div className="flex-shrink-0 bg-green-100 p-2 rounded-full mr-4">
                              <Check className="h-5 w-5 text-green-600" />
                            </div>
                            <div>
                              <h4 className="font-semibold">WordPress-Specific Caching</h4>
                              <p className="text-sm text-gray-600 mt-1">
                                Caching system designed specifically for WordPress to maximize performance.
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="flex-shrink-0 bg-green-100 p-2 rounded-full mr-4">
                              <Check className="h-5 w-5 text-green-600" />
                            </div>
                            <div>
                              <h4 className="font-semibold">Plugin Compatibility</h4>
                              <div className="flex items-baseline space-x-2">
                                <span className="text-3xl font-bold text-primary">58,000+</span>
                                <span className="text-sm text-gray-600">Compatible plugins</span>
                              </div>
                              <p className="text-sm text-gray-600 mt-1">
                                Pre-configured environment ensures compatibility with thousands of WordPress plugins.
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="flex-shrink-0 bg-green-100 p-2 rounded-full mr-4">
                              <Check className="h-5 w-5 text-green-600" />
                            </div>
                            <div>
                              <h4 className="font-semibold">Automatic Updates</h4>
                              <p className="text-sm text-gray-600 mt-1">
                                Core WordPress updates are managed automatically to keep your site secure and up-to-date.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700">
                        <div className="flex items-center bg-gray-800 px-4 py-2 border-b border-gray-700">
                          <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                          <div className="ml-2 text-gray-400 text-sm">WordPress Admin</div>
                        </div>
                        
                        <div className="flex h-[370px]">
                          {/* Sidebar */}
                          <div className="w-48 bg-gray-900 border-r border-gray-700 p-4">
                            <div className="flex items-center py-2 px-3 bg-gray-800 text-white rounded mb-2">
                              <span className="text-sm">Dashboard</span>
                            </div>
                            <div className="flex items-center py-2 px-3 text-gray-400 hover:bg-gray-800 rounded mb-2">
                              <span className="text-sm">Posts</span>
                            </div>
                            <div className="flex items-center py-2 px-3 text-gray-400 hover:bg-gray-800 rounded mb-2">
                              <span className="text-sm">Pages</span>
                            </div>
                            <div className="flex items-center py-2 px-3 text-gray-400 hover:bg-gray-800 rounded mb-2">
                              <span className="text-sm">Media</span>
                            </div>
                            <div className="flex items-center py-2 px-3 text-gray-400 hover:bg-gray-800 rounded">
                              <span className="text-sm">Comments</span>
                            </div>
                          </div>
                          
                          {/* Content */}
                          <div className="flex-1 p-6 bg-white">
                            <h2 className="text-xl font-bold mb-6">Dashboard</h2>
                            
                            <div className="grid grid-cols-2 gap-4 mb-6">
                              <div className="bg-gray-50 border border-gray-200 rounded p-4">
                                <h3 className="text-sm font-medium mb-2">Activity</h3>
                                <div className="space-y-2">
                                  <div className="flex items-center">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                                      <span className="text-xs font-bold text-blue-700">A</span>
                                    </div>
                                    <div className="text-xs">
                                      <p className="font-medium">New page published</p>
                                      <p className="text-gray-500">About Us</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="bg-gray-50 border border-gray-200 rounded p-4">
                                <h3 className="text-sm font-medium mb-2">At a glance</h3>
                                <div className="space-y-1 text-xs">
                                  <p>5 Posts</p>
                                  <p>7 Pages</p>
                                  <p>0 Comments</p>
                                </div>
                              </div>
                            </div>
                            
                            <div>
                              <h3 className="text-sm font-medium mb-3">Theme Options</h3>
                              
                              <div className="space-y-3">
                                <div>
                                  <div className="flex justify-between text-xs mb-1">
                                    <span>Free themes</span>
                                    <span className="text-blue-600">100%</span>
                                  </div>
                                  <div className="h-1.5 w-full bg-gray-100 rounded-full">
                                    <div className="h-1.5 bg-blue-500 rounded-full w-full"></div>
                                  </div>
                                </div>
                                
                                <div>
                                  <div className="flex justify-between text-xs mb-1">
                                    <span>Premium themes</span>
                                    <span className="text-blue-600">100%</span>
                                  </div>
                                  <div className="h-1.5 w-full bg-gray-100 rounded-full">
                                    <div className="h-1.5 bg-blue-500 rounded-full w-full"></div>
                                  </div>
                                </div>
                                
                                <div className="text-xs">
                                  <p>Full compatibility with all WordPress themes</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}