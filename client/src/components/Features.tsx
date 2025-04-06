import { motion } from "framer-motion";
import { Check, Zap, Clock, Globe, Wand2, Code, Rocket, Server } from "lucide-react";
import { FaWordpress } from "react-icons/fa";
import ThreeScene from "./ThreeScene";

export default function Features() {
  const features = [
    {
      icon: <Code className="h-5 w-5 text-primary" />,
      title: "No-Code Builder",
      description: "Build professional websites without writing a single line of code. Perfect for beginners and professionals alike."
    },
    {
      icon: <Clock className="h-5 w-5 text-primary" />,
      title: "2-Minute Generation",
      description: "Get your website up and running in less than 2 minutes. Describe what you need and watch it come to life instantly."
    },
    {
      icon: <Zap className="h-5 w-5 text-primary" />,
      title: "Lightning Fast Performance",
      description: "Enjoy optimized load times and responsive design. Our websites score high on Google PageSpeed Insights."
    },
    {
      icon: <Globe className="h-5 w-5 text-primary" />,
      title: "Free Domain Included",
      description: "Every website comes with a free domain name. Launch your online presence without additional costs."
    },
    {
      icon: <FaWordpress className="h-5 w-5 text-primary" />,
      title: "WordPress Integration",
      description: "Built on WordPress for unlimited flexibility. Access the world's largest ecosystem of plugins and themes."
    },
    {
      icon: <Rocket className="h-5 w-5 text-primary" />,
      title: "Instant Deployment",
      description: "One-click publishing to get your site live instantly. No complicated deployment processes or wait times."
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Build websites in minutes, not months</h2>
          <p className="text-gray-600 text-lg">
            Our no-code platform generates professional WordPress websites in under 2 minutes with free domains included.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 rounded-full p-3 mr-3">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
              </div>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-20 bg-gradient-to-r from-gray-50 to-white rounded-xl p-8 border border-gray-100 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Website creation reimagined
              </h3>
              <p className="text-gray-600 mb-6">
                Describe your business, and watch as neweb.ai builds your complete website with optimized content, stunning design, and professional features.
              </p>
              <div className="relative h-16 bg-gray-900 text-gray-200 p-4 rounded-md mb-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-30"></div>
                <div className="relative z-10 font-mono text-sm animate-pulse">
                  <span className="text-primary">AI</span> generating website... <span className="text-green-400">98% complete</span>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="text-primary h-5 w-5 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">From concept to live site in less than 2 minutes</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-primary h-5 w-5 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Free domain name and hosting included</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-primary h-5 w-5 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">No technical skills required — 100% no-code</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden h-80">
              <div className="h-full w-full">
                <ThreeScene type="analytics" className="h-full" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
