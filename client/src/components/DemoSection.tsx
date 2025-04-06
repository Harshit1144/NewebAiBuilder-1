import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Play, Code, Copy, CheckCircle2, AlignLeft, PanelLeft, Layout, Edit } from "lucide-react";

export default function DemoSection() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("input");
  const [promptValue, setPromptValue] = useState("I need a professional website for my bakery business with online ordering, photo gallery, and contact form.");
  
  const handleCopy = () => {
    navigator.clipboard.writeText(promptValue).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  
  // Simulated website preview based on the prompt
  const websitePreview = (
    <div className="relative rounded-lg overflow-hidden border border-gray-200 shadow-xl">
      {/* Browser header */}
      <div className="bg-gray-100 border-b border-gray-200 py-2 px-4 flex items-center gap-1.5">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex-1 mx-4">
          <div className="bg-white text-gray-600 text-xs py-1 px-3 rounded-full flex items-center justify-center">
            <span className="truncate">sweetdelights.neweb.ai</span>
          </div>
        </div>
      </div>
      
      {/* Website content */}
      <div className="bg-white h-[400px] overflow-y-auto">
        {/* Hero section */}
        <div className="bg-gradient-to-r from-amber-100 to-amber-50 px-6 py-12 text-center">
          <h2 className="text-2xl font-bold text-amber-900">Sweet Delights Bakery</h2>
          <p className="text-amber-800 mt-2 mb-6">Artisanal baked goods made with love</p>
          <Button className="bg-amber-600 hover:bg-amber-700">Order Online</Button>
        </div>
        
        {/* Products section */}
        <div className="px-6 py-8">
          <h3 className="text-lg font-medium mb-4">Our Most Popular Items</h3>
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-100 rounded-lg p-2 aspect-square flex items-center justify-center">
                <div className="w-full h-full bg-gray-200 rounded flex items-center justify-center text-gray-400">
                  Photo {i}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* About section preview */}
        <div className="px-6 py-8 bg-gray-50">
          <h3 className="text-lg font-medium mb-2">About Us</h3>
          <div className="space-y-2">
            <div className="h-2 bg-gray-200 rounded w-full"></div>
            <div className="h-2 bg-gray-200 rounded w-5/6"></div>
            <div className="h-2 bg-gray-200 rounded w-4/6"></div>
          </div>
        </div>
      </div>
    </div>
  );
  
  // Mock code section that shows how to integrate with the website
  const codeExample = `// Example API call to generate a website
const response = await fetch('https://api.neweb.ai/generate', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    prompt: "${promptValue.substring(0, 40)}${promptValue.length > 40 ? '...' : ''}",
    settings: {
      theme: "modern",
      features: ["online-ordering", "gallery", "contact-form"],
      domain: "sweetdelights.neweb.ai" // Free domain included!
    }
  }),
});

const data = await response.json();
console.log(\`Your website is ready at: \${data.websiteUrl}\`);`;

  return (
    <section id="demo" className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Try it yourself</h2>
          <p className="text-gray-600 text-lg">
            See how easy it is to create a professional WordPress website with just a simple description.
          </p>
        </motion.div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Input section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col h-full"
            >
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                <Tabs 
                  defaultValue="input" 
                  value={activeTab} 
                  onValueChange={setActiveTab}
                  className="w-full"
                >
                  <div className="border-b border-gray-200">
                    <TabsList className="grid grid-cols-2 bg-gray-50 p-0 h-auto">
                      <TabsTrigger 
                        value="input" 
                        className={`py-3 rounded-none border-r border-gray-200 data-[state=active]:bg-white data-[state=active]:shadow-none flex items-center justify-center gap-2`}
                      >
                        <AlignLeft className="h-4 w-4" />
                        <span>Describe your website</span>
                      </TabsTrigger>
                      <TabsTrigger 
                        value="code" 
                        className={`py-3 rounded-none data-[state=active]:bg-white data-[state=active]:shadow-none flex items-center justify-center gap-2`}
                      >
                        <Code className="h-4 w-4" />
                        <span>Integration</span>
                      </TabsTrigger>
                    </TabsList>
                  </div>
                  
                  <TabsContent value="input" className="p-6 space-y-4">
                    <div>
                      <div className="mb-2 flex justify-between">
                        <label htmlFor="website-prompt" className="text-sm font-medium text-gray-700">
                          Describe what you want
                        </label>
                        <button 
                          onClick={handleCopy}
                          className="text-xs text-gray-500 hover:text-gray-700 flex items-center gap-1" 
                        >
                          {copied ? <CheckCircle2 className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                          {copied ? "Copied!" : "Copy"}
                        </button>
                      </div>
                      <textarea
                        id="website-prompt"
                        value={promptValue}
                        onChange={(e) => setPromptValue(e.target.value)}
                        rows={4}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary text-gray-900"
                        placeholder="Describe the website you want to create..."
                      />
                    </div>
                    
                    <div className="flex gap-2">
                      <div className="w-1/2">
                        <label htmlFor="theme" className="block text-sm font-medium text-gray-700 mb-1">Theme</label>
                        <select 
                          id="theme" 
                          className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary text-gray-900"
                        >
                          <option value="modern">Modern</option>
                          <option value="classic">Classic</option>
                          <option value="minimal">Minimal</option>
                          <option value="bold">Bold</option>
                        </select>
                      </div>
                      <div className="w-1/2">
                        <label htmlFor="color" className="block text-sm font-medium text-gray-700 mb-1">Primary Color</label>
                        <div className="flex">
                          <Input 
                            id="color"
                            type="text" 
                            defaultValue="#3b82f6" 
                            className="rounded-r-none"
                          />
                          <div className="w-10 border border-l-0 border-gray-300 rounded-r-lg flex items-center justify-center">
                            <div className="w-6 h-6 rounded-full bg-blue-500" />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <Button className="w-full relative overflow-hidden group">
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Generate Website
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 transform transition-transform group-hover:scale-105" />
                    </Button>
                    
                    <p className="text-xs text-gray-500 text-center">
                      No credit card required. Your website will be ready in less than 2 minutes.
                    </p>
                  </TabsContent>
                  
                  <TabsContent value="code" className="m-0">
                    <div className="relative bg-gray-900 text-gray-200 p-6 rounded-none font-mono text-sm">
                      <div className="absolute top-4 right-4 flex gap-2">
                        <button 
                          onClick={handleCopy}
                          className="p-1.5 text-xs bg-gray-800 hover:bg-gray-700 rounded-md flex items-center gap-1.5 transition-colors" 
                        >
                          {copied ? <CheckCircle2 className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                          {copied ? "Copied" : "Copy"}
                        </button>
                      </div>
                      <pre className="whitespace-pre-wrap">{codeExample}</pre>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </motion.div>
            
            {/* Preview section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                <div className="border-b border-gray-200 bg-gray-50 py-3 px-4 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <PanelLeft className="h-4 w-4 text-gray-500" />
                    <span className="font-medium text-gray-700">Website Preview</span>
                  </div>
                  <div className="flex gap-1.5">
                    <Button variant="outline" size="sm" className="text-xs h-7 px-2 flex items-center gap-1.5">
                      <Edit className="h-3.5 w-3.5" />
                      <span>Edit</span>
                    </Button>
                    <Button size="sm" className="text-xs h-7 px-2 flex items-center gap-1.5 bg-green-600 hover:bg-green-700">
                      <Layout className="h-3.5 w-3.5" />
                      <span>Publish</span>
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  {websitePreview}
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-20 bg-gray-50 rounded-xl p-8 border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h3 className="text-xl font-bold mb-2">Want to see more examples?</h3>
              <p className="text-gray-600 max-w-2xl">
                Check out our gallery of pre-made templates and live examples created with neweb.ai's WordPress builder.
              </p>
            </div>
            <Button 
              variant="outline" 
              className="flex-shrink-0 flex items-center gap-2"
            >
              <Play className="h-4 w-4" />
              Watch Demo
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}