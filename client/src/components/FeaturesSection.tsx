import { 
  Check, 
  Clock, 
  Globe, 
  Code, 
  Zap, 
  ArrowRight, 
  Layout, 
  Rocket, 
  Sparkles, 
  RefreshCw,
  AlignLeft,
  Monitor,
  Pencil,
  Upload,
  Star,
  Copy,
  Palette,
  FileText
} from "lucide-react";
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
          
          <div className="mt-20 md:mt-24 relative overflow-hidden">
            {/* Background gradients */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-gradient-to-tr from-[#0032b2]/10 to-[#0050e6]/5 rounded-full filter blur-3xl opacity-60"></div>
              <div className="absolute bottom-10 -right-20 w-80 h-80 bg-gradient-to-bl from-[#0050e6]/10 to-[#0032b2]/5 rounded-full filter blur-3xl opacity-60"></div>
            </div>
            
            {/* Main title */}
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0032b2] to-[#0050e6]">
                Try it yourself
              </h3>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                See how easy it is to create a professional WordPress website with just a simple description.
              </p>
            </div>
            
            {/* Interactive Builder Container */}
            <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              {/* Tabs */}
              <div className="flex border-b border-gray-200">
                <div className="flex-1 text-center py-4 font-semibold text-[#0032b2] border-b-2 border-[#0032b2] bg-blue-50/50">
                  <span className="flex items-center justify-center gap-2 mx-auto w-fit">
                    <span className="flex items-center justify-center w-6 h-6 bg-[#0032b2] text-white rounded-full text-xs">1</span>
                    Describe your website
                  </span>
                </div>
                <div className="flex-1 text-center py-4 font-medium text-gray-500">
                  <span className="flex items-center justify-center gap-2 mx-auto w-fit">
                    <span className="flex items-center justify-center w-6 h-6 bg-gray-200 text-gray-600 rounded-full text-xs">2</span>
                    Preview &amp; Publish
                  </span>
                </div>
              </div>
              
              {/* Main Content Area */}
              <div className="p-6 md:p-8">
                <div className="grid gap-8 grid-cols-1 lg:grid-cols-5">
                  
                  {/* Left Column - Settings */}
                  <div className="lg:col-span-2 space-y-8">
                    
                    {/* Integration Type */}
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-gray-800 flex items-center">
                        <Layout className="h-5 w-5 mr-2 text-[#0032b2]" /> Integration
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="border-2 border-[#0032b2] p-3 rounded-lg flex flex-col items-center justify-center bg-blue-50/50 cursor-pointer">
                          <div className="w-8 h-8 bg-[#0032b2] rounded-full flex items-center justify-center mb-2">
                            <span className="text-white font-bold text-sm">W</span>
                          </div>
                          <span className="text-sm font-medium text-gray-800">WordPress</span>
                        </div>
                        
                        <div className="border border-gray-200 p-3 rounded-lg flex flex-col items-center justify-center text-gray-400 cursor-pointer hover:bg-gray-50 transition-colors">
                          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                            <Code className="h-4 w-4 text-gray-400" />
                          </div>
                          <span className="text-sm font-medium">Custom</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-gray-800 flex items-center">
                        <AlignLeft className="h-5 w-5 mr-2 text-[#0032b2]" /> Describe what you want
                      </h4>
                      <div className="relative">
                        <div className="absolute top-2 right-2 rounded-md">
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="h-8 px-2 text-xs text-[#0032b2] hover:text-[#0050e6] hover:bg-blue-50"
                          >
                            <Copy className="h-3.5 w-3.5 mr-1" /> Copy
                          </Button>
                        </div>
                        <textarea 
                          className="w-full h-28 p-3 border border-gray-200 rounded-lg text-gray-700 text-sm focus:border-[#0032b2] focus:ring-1 focus:ring-[#0032b2] resize-none transition-all"
                          defaultValue="I need a professional website for my bakery business with online ordering, photo gallery, and contact form."
                        />
                      </div>
                    </div>
                    
                    {/* Theme & Color */}
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-gray-700 flex items-center">
                          <FileText className="h-4 w-4 mr-1.5 text-[#0032b2]" /> Theme
                        </h4>
                        <select className="w-full p-2 text-sm border border-gray-200 rounded-lg focus:border-[#0032b2] focus:ring-1 focus:ring-[#0032b2]">
                          <option>Modern</option>
                          <option>Classic</option>
                          <option>Minimalist</option>
                          <option>Bold</option>
                        </select>
                      </div>
                      
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-gray-700 flex items-center">
                          <Palette className="h-4 w-4 mr-1.5 text-[#0032b2]" /> Primary Color
                        </h4>
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-lg bg-[#3b82f6] mr-2 ring-1 ring-gray-200"></div>
                          <input
                            type="text"
                            className="w-full p-2 text-sm border border-gray-200 rounded-lg focus:border-[#0032b2] focus:ring-1 focus:ring-[#0032b2]"
                            defaultValue="#3b82f6"
                          />
                        </div>
                      </div>
                    </div>
                    
                    {/* Button */}
                    <div>
                      <Button
                        className="w-full bg-gradient-to-r from-[#0032b2] to-[#0050e6] hover:from-[#0050e6] hover:to-[#0032b2] text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all py-3 group h-auto"
                      >
                        <span className="relative flex items-center justify-center font-semibold text-base">
                          Generate Website
                          <Sparkles className="ml-2 h-4 w-4 transition-all duration-500 group-hover:rotate-12" />
                        </span>
                      </Button>
                      
                      <p className="mt-4 text-gray-500 text-xs text-center">
                        No credit card required. Your website will be ready in less than 2 minutes.
                      </p>
                    </div>
                  </div>
                  
                  {/* Right Column - Website Preview */}
                  <div className="lg:col-span-3 space-y-3">
                    <h4 className="text-lg font-semibold text-gray-800 flex items-center">
                      <Monitor className="h-5 w-5 mr-2 text-[#0032b2]" /> Website Preview
                    </h4>
                    
                    <div className="rounded-lg border border-gray-200 shadow-md overflow-hidden relative bg-white min-h-[400px] flex items-center justify-center group">
                      
                      {/* Display mock browser frame */}
                      <div className="w-full max-w-md mx-auto overflow-hidden relative">
                        {/* Browser top bar */}
                        <div className="bg-gray-100 border-b border-gray-200 p-2 flex items-center space-x-2">
                          <div className="flex space-x-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                          </div>
                          <div className="flex-1 bg-white px-2 py-1 rounded text-xs text-gray-500 text-center">
                            sweetbakery.com
                          </div>
                        </div>
                        
                        {/* Mock website */}
                        <div className="relative">
                          {/* Hero section */}
                          <div className="h-40 bg-[#3b82f6] relative">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-50"></div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                              <h2 className="text-2xl font-bold mb-2">Sweet Bakery</h2>
                              <p className="text-sm">Artisanal baked goods since 2005</p>
                              <button className="mt-4 bg-white text-[#3b82f6] font-medium py-1 px-4 rounded-lg text-sm shadow-md">
                                Order Now
                              </button>
                            </div>
                          </div>
                          
                          {/* Content section */}
                          <div className="p-4 bg-white">
                            <div className="flex items-center justify-center space-x-3 pb-3 border-b border-gray-100">
                              <div className="h-1.5 w-16 rounded-full bg-gray-200"></div>
                              <div className="h-1.5 w-16 rounded-full bg-gray-200"></div>
                              <div className="h-1.5 w-16 rounded-full bg-gray-200"></div>
                            </div>
                            
                            {/* Product grid */}
                            <div className="mt-4 grid grid-cols-2 gap-2">
                              <div className="bg-gray-100 rounded-lg h-20"></div>
                              <div className="bg-gray-100 rounded-lg h-20"></div>
                              <div className="bg-gray-100 rounded-lg h-20"></div>
                              <div className="bg-gray-100 rounded-lg h-20"></div>
                            </div>
                            
                            {/* Text content */}
                            <div className="mt-4 space-y-2">
                              <div className="h-2 w-full rounded-full bg-gray-100"></div>
                              <div className="h-2 w-5/6 rounded-full bg-gray-100"></div>
                              <div className="h-2 w-4/6 rounded-full bg-gray-100"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Hover overlay with buttons */}
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="flex space-x-4">
                          <Button variant="default" className="bg-white text-gray-800 hover:bg-gray-100">
                            <Pencil className="mr-1.5 h-4 w-4" /> Edit
                          </Button>
                          <Button className="bg-[#0032b2]">
                            <Upload className="mr-1.5 h-4 w-4" /> Publish
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    {/* Progress bar */}
                    <div className="flex items-center space-x-4">
                      <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-[#0032b2] to-[#0050e6] rounded-full" style={{ width: "75%" }}></div>
                      </div>
                      <span className="text-xs font-medium text-gray-500">75% Complete</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Testimonial or social proof */}
            <div className="max-w-3xl mx-auto mt-10 text-center">
              <div className="flex items-center justify-center mb-3">
                <div className="flex -space-x-2">
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" className="w-8 h-8 rounded-full border-2 border-white" alt="User" />
                  <img src="https://randomuser.me/api/portraits/women/44.jpg" className="w-8 h-8 rounded-full border-2 border-white" alt="User" />
                  <img src="https://randomuser.me/api/portraits/men/21.jpg" className="w-8 h-8 rounded-full border-2 border-white" alt="User" />
                </div>
                <div className="ml-2 flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 text-sm italic">
                "I created a professional website for my business in under 2 minutes. The AI understood exactly what I needed!"
              </p>
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