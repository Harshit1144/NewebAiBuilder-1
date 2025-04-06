import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Globe, Server, Search, Shield } from "lucide-react";

const features = [
  {
    icon: <Globe className="text-white text-5xl" />,
    bgClass: "from-primary to-primary/70",
    category: "Instant Domain",
    title: "Free Domain For 1st Year",
    description: "With each neweb.ai plan you get free domain for the 1st year.",
    link: "https://app.neweb.ai/",
    linkText: "Start Now",
    textColor: "text-primary"
  },
  {
    icon: <Server className="text-white text-5xl" />,
    bgClass: "from-indigo-500 to-indigo-700",
    category: "Powered by Grade A Server",
    title: "High Speed Hosting Included",
    description: "With all the neweb.ai plan we provide high speed web hosting so that your website loads the best when needed.",
    link: "https://app.neweb.ai/",
    linkText: "Get Started",
    textColor: "text-indigo-600"
  },
  {
    icon: <Search className="text-white text-5xl" />,
    bgClass: "from-orange-500 to-orange-700",
    category: "SEO and Website Management",
    title: "Rank Higher With AI SEO",
    description: "Let AI take care of your SEO and website management needs ultimately making you rank higher.",
    link: "https://app.neweb.ai/",
    linkText: "Get Started",
    textColor: "text-orange-600"
  },
  {
    icon: <Shield className="text-white text-5xl" />,
    bgClass: "from-primary to-indigo-700",
    category: "Secure & Fast",
    title: "SSL and Security Measures Inbuilt",
    description: "Neweb.ai provides direct SSL and takes care of all the security measures to get you the best security possible.",
    link: "https://app.neweb.ai/",
    linkText: "Get Started",
    textColor: "text-primary"
  }
];

export default function PowerfulFeatures() {
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
          <h6 className="text-primary font-semibold text-sm uppercase mb-2">Powerful Features</h6>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Make things easy for your business</h2>
          <p className="text-gray-600 text-lg">
            With concepts in hand, we meticulously design, refining every detail to align with your vision and objectives.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl border border-gray-200 shadow-md overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={`h-40 bg-gradient-to-br ${feature.bgClass} flex items-center justify-center`}>
                {feature.icon}
              </div>
              <div className="p-6">
                <h6 className={`text-sm ${feature.textColor} font-semibold uppercase mb-1`}>{feature.category}</h6>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <Button asChild variant="link" className={`${feature.textColor} font-medium p-0`}>
                  <a href={feature.link} className="flex items-center">
                    {feature.linkText}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
