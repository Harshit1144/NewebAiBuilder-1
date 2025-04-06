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
      color: "primary",
      title: "Describe your website",
      description: "Tell our AI what kind of website you need in simple language - no technical jargon required.",
      icon: <MousePointerClick className="h-6 w-6 text-white" />,
      visual: <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg">
        <div className="absolute inset-0 opacity-10">
          <ThreeScene type="ai-grid" className="h-full" />
        </div>
        <div className="relative p-6 h-full flex flex-col justify-between">
          <div className="bg-black/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700">
            <div className="flex items-center mb-2">
              <Sparkles className="h-4 w-4 text-primary mr-2" />
              <p className="text-white text-sm font-medium">AI Website Generator</p>
            </div>
            <p className="text-white text-base">
              "I need a professional website for my bakery business with online ordering and a gallery of my products."
            </p>
          </div>
          <motion.div 
            animate={{ opacity: [0.5, 1], y: [10, 0] }}
            transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
            className="self-end"
          >
            <Button className="bg-primary hover:bg-primary/90">
              Generate Website
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    },
    {
      number: 2,
      color: "violet-500",
      title: "Wait just 2 minutes",
      description: "Our advanced AI builds your entire WordPress website in less than 2 minutes with all the features you need.",
      icon: <Clock className="h-6 w-6 text-white" />,
      visual: <div className="bg-gradient-to-br from-violet-500/10 to-indigo-500/10 rounded-lg h-full w-full overflow-hidden p-6 flex flex-col items-center justify-center">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-1 bg-gradient-to-r from-violet-500 to-indigo-600"></div>
            <div className="p-6">
              <h4 className="text-lg font-semibold text-center mb-4">Creating Your Website</h4>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Generating content</span>
                    <span className="text-sm font-medium text-green-600">100%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: "100%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Building structure</span>
                    <span className="text-sm font-medium text-green-600">100%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: "100%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Optimizing for speed</span>
                    <motion.span 
                      animate={{ opacity: [1, 0.5] }}
                      transition={{ repeat: Infinity, duration: 1, repeatType: "reverse" }}
                      className="text-sm font-medium text-violet-600"
                    >
                      87%
                    </motion.span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div 
                      animate={{ width: ["70%", "87%"] }}
                      transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
                      className="bg-violet-500 h-2 rounded-full"
                    ></motion.div>
                  </div>
                </div>
                <div className="text-center text-sm text-gray-500">
                  <motion.p
                    animate={{ opacity: [1, 0.7] }}
                    transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
                  >
                    Time remaining: <span className="font-medium">38 seconds</span>
                  </motion.p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    },
    {
      number: 3,
      color: "emerald-500",
      title: "Launch with your free domain",
      description: "Publish your website with your free domain name instantly. No additional setup or technical knowledge needed.",
      icon: <Globe className="h-6 w-6 text-white" />,
      visual: <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-lg h-full w-full overflow-hidden flex items-center justify-center">
        <div className="w-full max-w-md p-6">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="mb-4 flex justify-center">
              <div className="rounded-full bg-green-100 p-3">
                <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">Congratulations!</h3>
            <p className="text-gray-600 mb-4">Your website is ready to launch</p>
            
            <div className="bg-gray-100 rounded-lg p-3 mb-4">
              <p className="text-sm font-medium text-gray-900">Your free domain is ready:</p>
              <div className="flex items-center justify-center space-x-2">
                <Globe className="h-4 w-4 text-primary" />
                <code className="text-emerald-600 font-semibold">yourbusiness.neweb.ai</code>
              </div>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button className="bg-emerald-600 hover:bg-emerald-700 w-full">
                Launch Your Website
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h6 className="text-primary font-semibold text-sm uppercase mb-2">How it works</h6>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">From idea to website in 2 minutes</h2>
          <p className="text-gray-600 text-lg">
            No coding, no design skills, no waiting. Just describe what you need and get a complete website.
          </p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          {/* Steps navigation */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="relative mb-8">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-200 rounded-full"></div>
                <motion.div 
                  className="absolute left-0 top-0 w-1 bg-primary rounded-full"
                  animate={controls}
                  style={{ height: '100%' }}
                ></motion.div>
                
                {steps.map((step) => (
                  <motion.div 
                    key={step.number}
                    className={`relative pl-8 py-4 cursor-pointer transition-all duration-200 ${activeStep === step.number ? 'opacity-100' : 'opacity-60'}`}
                    onClick={() => setActiveStep(step.number)}
                    whileHover={{ opacity: 0.8 }}
                  >
                    <div className={`absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-5 h-5 rounded-full flex items-center justify-center ${activeStep === step.number ? 'bg-primary scale-125' : 'bg-gray-200'}`}>
                      <div className={`absolute w-2 h-2 rounded-full bg-white ${activeStep === step.number ? 'scale-100' : 'scale-0'} transition-transform duration-200`}></div>
                    </div>
                    <h3 className={`text-lg font-semibold ${activeStep === step.number ? 'text-primary' : 'text-gray-700'}`}>
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mt-1 text-sm">
                      {step.description}
                    </p>
                  </motion.div>
                ))}
              </div>
              
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
          
          {/* Visual display */}
          <div className="lg:w-2/3 h-[500px]">
            <motion.div 
              key={activeStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="h-full rounded-xl shadow-md border border-gray-100 overflow-hidden"
            >
              {steps[activeStep - 1].visual}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
