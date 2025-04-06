import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-20 gradient-bg text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h6 className="text-blue-200 font-semibold text-sm uppercase mb-2">Get Started</h6>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Build a complete site with Neweb.ai</h2>
            <p className="text-blue-100 text-lg mb-8">
              Start now and witness your ideas come to life, effortlessly and creatively.
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg h-auto"
            >
              <a 
                href="https://app.neweb.ai/"
                className="transition-transform hover:scale-105"
              >
                Start Now
              </a>
            </Button>
          </motion.div>
          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1573495612937-f978cc14e472?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="AI Website Builder Dashboard" 
              className="rounded-xl shadow-2xl w-full max-w-md object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
