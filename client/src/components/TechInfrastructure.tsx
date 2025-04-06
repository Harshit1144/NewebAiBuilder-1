import { motion } from "framer-motion";
import { Server, Shield, Zap, Database, Cloud, Globe } from "lucide-react";
import ThreeScene from "./ThreeScene";

export default function TechInfrastructure() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
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
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Server Infrastructure */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Server className="mr-3 text-primary" />
                Grade A Server Infrastructure
              </h3>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold mb-1">High-Performance Servers</h4>
                    <p className="text-gray-600">
                      Powered by enterprise-level hardware with SSD storage and optimized configurations for maximum speed and reliability.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold mb-1">Advanced Security</h4>
                    <p className="text-gray-600">
                      Protection against DDoS attacks, regular security audits, and automated threat detection to keep your website safe.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Database className="h-5 w-5 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold mb-1">99.9% Uptime Guarantee</h4>
                    <p className="text-gray-600">
                      Redundant systems, load balancing, and continuous monitoring ensure your website is always available to visitors.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 h-64 relative">
                <ThreeScene type="server" />
              </div>
            </div>
          </motion.div>
          
          {/* WordPress Integration */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Globe className="mr-3 text-primary" />
                Seamless WordPress Integration
              </h3>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 19.5c-5.244 0-9.5-4.256-9.5-9.5S6.756 2.5 12 2.5s9.5 4.256 9.5 9.5-4.256 9.5-9.5 9.5z"/>
                      <path d="M3.51 12c0 4.69 3.8 8.49 8.49 8.49 4.69 0 8.49-3.8 8.49-8.49 0-4.69-3.8-8.49-8.49-8.49-4.69 0-8.49 3.8-8.49 8.49zm1.02 0c0-4.13 3.34-7.47 7.47-7.47 4.13 0 7.47 3.34 7.47 7.47 0 4.13-3.34 7.47-7.47 7.47-4.13 0-7.47-3.34-7.47-7.47z"/>
                      <path d="M12 4.94c3.9 0 7.06 3.17 7.06 7.06 0 3.9-3.17 7.06-7.06 7.06-3.9 0-7.06-3.17-7.06-7.06 0-3.9 3.17-7.06 7.06-7.06zm3.89 2.12c-.55 0-.85.4-.85.79 0 .33.21.66.43.99.19.26.4.6.4.99 0 .38-.26.85-.79 1.84l-1.06 2.85-2.12-6.27c.02-.04.04-.09.04-.13 0-.28-.26-.5-.5-.5-.28 0-.5.24-.5.5 0 .04.01.07.01.11l-1.67 4.93-.85-1.98c-.19-.5-.4-.85-.4-1.35 0-.5.21-1.01.5-1.98.26-.6-.5-1.01-1.01-1.01-.33 0-.66.16-.66.66 0 .33.21.66.5 1.32.19.43.4.85.4 1.32 0 .43-.26.79-.66 1.77l-.82 2.39-.02.04c-.01.04-.02.07-.02.11 0 .28.24.5.5.5.21 0 .4-.13.47-.33l1.9-5.58 1.49 4.61-.95 2.85-.02.04c-.01.04-.01.07-.01.11 0 .28.23.5.5.5.22 0 .4-.13.47-.33l3.87-11.32.79 2.3.01.04c.01.04.02.07.02.11 0 .28.24.5.5.5.21 0 .4-.13.47-.33l1.12-3.32v-.02c.01-.02.01-.04.01-.07 0-.24-.19-.45-.45-.45-.19 0-.35.11-.43.26l-.79 2.39-.85-2.46v-.01c-.09-.26-.33-.45-.62-.45-.55 0-.85.4-.85.79"/>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold mb-1">Purpose-Built for WordPress</h4>
                    <p className="text-gray-600">
                      Our platform is designed specifically for WordPress, with optimized configurations and specialized tools.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Cloud className="h-5 w-5 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold mb-1">One-Click WordPress Setup</h4>
                    <p className="text-gray-600">
                      Get a fully configured WordPress installation in seconds, complete with themes and essential plugins.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7 7h10v1.5H7zm0 2.5h10v1.5H7zm0 2.5h10v1.5H7zM6 2v18.4h12V2zm0-2h12c1.1 0 2 .9 2 2v18.4c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V2c0-1.1.9-2 2-2z"/>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold mb-1">WordPress-Optimized Caching</h4>
                    <p className="text-gray-600">
                      Advanced caching mechanisms designed specifically for WordPress, dramatically improving load times.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 h-64 relative">
                <ThreeScene type="wordpress" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}