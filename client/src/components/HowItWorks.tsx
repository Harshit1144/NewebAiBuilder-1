import { Button } from "@/components/ui/button";
import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sparkles, ArrowRight, Clock, MousePointerClick, Globe } from "lucide-react";
import ThreeScene from "./ThreeScene";

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(1);
  const controls = useAnimation();

  useEffect(() => {
    // Automatically advance steps every 4 seconds
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev % 3) + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Animate progress bar when step changes
    controls.start({
      width: `${(activeStep / 3) * 100}%`,
      transition: { duration: 0.6, ease: "easeInOut" }
    });
  }, [activeStep, controls]);

  const steps = [
    {
      number: 1,
      title: "Describe your website",
      description: "Tell our AI what kind of website you need in simple language - no technical jargon required.",
      icon: <MousePointerClick className="h-5 w-5 text-primary" />,
      visual: <div className="h-full w-full overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg flex items-center justify-center">
        <div className="relative w-full max-w-md p-8">
          <div className="p-4 rounded-lg overflow-hidden border border-slate-700 bg-black/40 backdrop-blur-sm">
            <div className="flex items-center mb-4">
              <div className="bg-primary/80 text-white text-xs font-medium px-2 py-1 rounded mr-2 inline-flex items-center">
                <Sparkles className="h-3 w-3 mr-1" />
                AI Website Generator
              </div>
            </div>
            <div className="text-white text-sm mb-3">
              "I need a professional website for my bakery business with online ordering and a gallery of my products."
            </div>
            <div className="h-1.5 w-full max-w-[80%] bg-primary/30 rounded-full animate-pulse"></div>
          </div>
          <div className="mt-6 flex justify-end">
            <Button 
              size="sm"
              className="bg-primary hover:bg-primary/90 text-white"
            >
              Generate Website
              <ArrowRight className="h-3.5 w-3.5 ml-1.5" />
            </Button>
          </div>
        </div>
      </div>
    },
    {
      number: 2,
      title: "Wait just 2 minutes",
      description: "Our advanced AI builds your entire WordPress website in less than 2 minutes with all the features you need.",
      icon: <Clock className="h-5 w-5 text-primary" />,
      visual: <div className="h-full w-full overflow-hidden bg-white flex items-center justify-center">
        <div className="w-full max-w-md p-6">
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Clock className="h-10 w-10 text-primary mx-auto mb-3" />
              <h3 className="text-xl font-semibold">Creating Your Website</h3>
              <p className="text-sm text-gray-500">Just 2 minutes from start to finish</p>
            </div>
            <div className="space-y-5">
              <div>
                <div className="flex justify-between mb-1.5 text-sm">
                  <span className="font-medium">Analyzing requirements</span>
                  <span className="text-green-600 font-medium">100%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full w-full"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1.5 text-sm">
                  <span className="font-medium">Creating design</span>
                  <span className="text-green-600 font-medium">100%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full w-full"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1.5 text-sm">
                  <span className="font-medium">Generating content</span>
                  <span className="text-green-600 font-medium">92%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <motion.div 
                    animate={{ width: ["85%", "92%"] }}
                    transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
                    className="bg-primary h-2 rounded-full"
                  ></motion.div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1.5 text-sm">
                  <span className="font-medium">Building website</span>
                  <span className="text-primary font-medium">68%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <motion.div 
                    animate={{ width: ["50%", "68%"] }}
                    transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
                    className="bg-primary h-2 rounded-full"
                  ></motion.div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <motion.p
                animate={{ opacity: [1, 0.7] }}
                transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
                className="text-sm text-gray-500"
              >
                Estimated time remaining: <span className="font-medium">38 seconds</span>
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    },
    {
      number: 3,
      title: "Launch with your free domain",
      description: "Publish your website with your free domain name instantly. No additional setup or technical knowledge needed.",
      icon: <Globe className="h-5 w-5 text-primary" />,
      visual: <div className="h-full w-full overflow-hidden bg-white flex items-center justify-center">
        <div className="w-full max-w-md p-6 text-center">
          <div className="mb-8">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
              <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Your website is ready!</h3>
            <p className="text-gray-600">Publish it instantly with your free domain</p>
          </div>
          
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-center mb-1">
              <Globe className="h-4 w-4 text-blue-500 mr-2" />
              <h4 className="text-sm font-medium text-blue-800">Your free domain</h4>
            </div>
            <div className="bg-white border border-blue-200 rounded px-3 py-2 text-blue-700 font-mono text-center">
              yoursite.neweb.ai
            </div>
            <p className="text-xs text-blue-600 mt-2">
              No additional setup or technical knowledge needed
            </p>
          </div>
          
          <Button 
            className="bg-green-600 hover:bg-green-700"
            size="lg"
          >
            Launch Your Website
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-primary font-medium text-sm uppercase mb-2">HOW IT WORKS</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">From idea to website in 2 minutes</h2>
          <p className="text-gray-600 text-lg">
            No coding, no design skills, no waiting. Just describe what you need and get a complete website.
          </p>
        </div>
        
        <div className="grid md:grid-cols-12 gap-8 max-w-6xl mx-auto">
          {/* Steps navigation */}
          <div className="md:col-span-5">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              {steps.map((step, index) => (
                <div 
                  key={step.number}
                  className={`border-b border-gray-100 last:border-b-0 cursor-pointer transition-colors ${
                    activeStep === step.number ? 'bg-blue-50' : 'hover:bg-gray-50'
                  }`}
                  onClick={() => setActiveStep(step.number)}
                >
                  <div className="p-4 flex items-start">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mr-4 ${activeStep === step.number ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500'}`}>
                      <span className="text-base font-semibold">{step.number}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-semibold ${activeStep === step.number ? 'text-primary' : 'text-gray-800'}`}>
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {step.description}
                      </p>
                    </div>
                    {activeStep === step.number && (
                      <div className="w-1.5 h-10 bg-primary rounded-l-full"></div>
                    )}
                  </div>
                </div>
              ))}
              <div className="p-4">
                <Button
                  onClick={() => setActiveStep((prev) => (prev % 3) + 1)}
                  variant="outline"
                  className="w-full"
                >
                  See next step
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          
          {/* Visual display */}
          <div className="md:col-span-7">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden h-[400px]">
              {steps[activeStep - 1].visual}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
