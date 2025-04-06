import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const features = [
  {
    image: "https://neweb.ai/wp-content/uploads/2025/01/data-cleaning-2.png.webp",
    title: "Site Optimization",
    description: "Optimized structures for peak performance and user experience."
  },
  {
    image: "https://neweb.ai/wp-content/uploads/2025/01/live-chat.png.webp",
    title: "Live Chat",
    description: "Connect with your audience, understanding their needs."
  },
  {
    image: "https://neweb.ai/wp-content/uploads/2025/01/message.png.webp",
    title: "Mail Automation",
    description: "Automate mails for almost all the website functions."
  }
];

export default function BuiltInFeatures() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h6 className="text-primary font-semibold text-sm uppercase mb-2">Plugin Integration</h6>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Built with best Features</h2>
          <p className="text-gray-600 text-lg">
            We help startups who want to rise above the ordinary with extraordinary messaging that speaks to their audience.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <img 
                src={feature.image} 
                alt={feature.title} 
                className="w-16 h-16 mb-4 object-contain"
              />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg h-auto"
          >
            <a 
              href="https://app.neweb.ai/"
              className="transition-transform hover:scale-105"
            >
              Get Started
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
