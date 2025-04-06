import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Gauge, MessageSquare, MailPlus, LucideIcon, Sparkles } from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature = ({ icon, title, description }: FeatureProps) => (
  <div className="flex flex-col items-center text-center p-6">
    <div className="bg-primary/10 rounded-full p-3 mb-4">
      {icon}
    </div>
    <h3 className="text-base font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

export default function BuiltInFeatures() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Powerful built-in features</h2>
          <p className="text-gray-600 text-lg">
            Everything you need for a successful website, all in one platform
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Feature 
            icon={<Gauge className="h-6 w-6 text-primary" />}
            title="Site Optimization"
            description="Automatically optimized structure for peak performance and enhanced user experience."
          />
          
          <Feature 
            icon={<MessageSquare className="h-6 w-6 text-primary" />}
            title="Live Chat Integration"
            description="Connect with your audience in real-time to understand and address their needs instantly."
          />
          
          <Feature 
            icon={<MailPlus className="h-6 w-6 text-primary" />}
            title="Email Automation"
            description="Automate email communications for all your website functions and marketing campaigns."
          />
          
          <Feature 
            icon={<Sparkles className="h-6 w-6 text-primary" />}
            title="AI Content Generation"
            description="Create engaging, SEO-optimized content automatically with our advanced AI tools."
          />
        </motion.div>
        
        <motion.div 
          className="mt-16 bg-white rounded-lg p-8 border border-gray-200 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-3">Ready to build your website?</h3>
              <p className="text-gray-600 mb-6 md:mb-0">
                Start creating your professional WordPress website in minutes, no coding required.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-white"
                size="lg"
              >
                <a href="https://app.neweb.ai/">
                  Start building now →
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
