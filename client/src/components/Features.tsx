import { motion } from "framer-motion";
import { Check, Wand2, Palette, Rocket, Server, Settings, Shield } from "lucide-react";
import { FaWordpress } from "react-icons/fa";

export default function Features() {
  const features = [
    {
      icon: <Wand2 className="h-5 w-5 text-primary" />,
      title: "AI Content Generation",
      description: "Create complete websites simply by describing what you want. Our AI crafts tailored content, designs, and images."
    },
    {
      icon: <FaWordpress className="h-5 w-5 text-primary" />,
      title: "WordPress Integration",
      description: "Seamlessly integrate with WordPress. Build and deploy your site with all the power of WordPress behind it."
    },
    {
      icon: <Palette className="h-5 w-5 text-primary" />,
      title: "Custom Designs",
      description: "Choose from hundreds of professionally designed templates or create your own unique design."
    },
    {
      icon: <Server className="h-5 w-5 text-primary" />,
      title: "Managed Hosting",
      description: "Worry-free high-performance hosting included with every site. Focus on your content, not server management."
    },
    {
      icon: <Shield className="h-5 w-5 text-primary" />,
      title: "Security & Maintenance",
      description: "Automatic updates, backups, and security monitoring keep your site safe and running smoothly."
    },
    {
      icon: <Settings className="h-5 w-5 text-primary" />,
      title: "Advanced SEO Tools",
      description: "Built-in tools to help your site rank higher in search results and attract more visitors."
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
          <h2 className="text-3xl font-bold mb-4">Key features that set us apart</h2>
          <p className="text-gray-600 text-lg">
            Create professional WordPress websites in minutes with our intuitive AI-powered platform.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="feature-card rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 rounded-lg p-3 mr-3">
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
          className="mt-20 bg-gray-50 rounded-xl p-8 border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Pixel-perfect UIs, embedded in minutes
              </h3>
              <p className="text-gray-600 mb-6">
                Simply select your preferred design, customize it with your content, and let Neweb.ai handle the rest. Our platform ensures your WordPress site looks exactly as designed.
              </p>
              <div className="font-mono text-sm bg-gray-900 text-gray-200 p-4 rounded-md mb-6">
                <code>&lt;SignIn/&gt; &lt;SignUp/&gt; &lt;UserButton/&gt; &lt;UserProfile/&gt;</code>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="text-primary h-5 w-5 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Complete user management functionality</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-primary h-5 w-5 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Match to your brand with complete customization</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-primary h-5 w-5 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Deploy to your own domain—no more jarring redirects</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1616469829941-c7200edec809?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="WordPress Platform" 
                className="rounded-lg w-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
