import { Check, X } from "lucide-react";
import { motion } from "framer-motion";

export default function CompetitorComparison() {
  const features = [
    { name: "AI-Powered Content Generation", description: "Create professional content with just a few prompts" },
    { name: "WordPress Integration", description: "Built specifically for seamless WordPress compatibility" },
    { name: "Grade A Server Infrastructure", description: "Enterprise-level hosting with optimized performance" },
    { name: "Managed Security & Updates", description: "Automatic security patches and software updates" },
    { name: "Custom Domain Included", description: "Free domain for the first year with all plans" },
    { name: "Modern Design Templates", description: "Professionally designed templates optimized for conversions" },
    { name: "Advanced SEO Tools", description: "Built-in tools to help your site rank higher" },
  ];

  const competitors = [
    { name: "neweb.ai", logo: "https://neweb.ai/wp-content/uploads/2023/10/ai-logo.svg", primary: true },
    { name: "Traditional Website Builders", logo: "", primary: false },
    { name: "WordPress Templates", logo: "", primary: false },
  ];

  // Feature availability by competitor
  const featureAvailability: Record<string, boolean[]> = {
    "neweb.ai": [true, true, true, true, true, true, true],
    "Traditional Website Builders": [false, false, true, true, true, true, false],
    "WordPress Templates": [false, true, false, false, false, true, false],
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Comparison with alternatives</h2>
          <p className="text-gray-600 text-lg">
            See how neweb.ai compares to traditional website building solutions
          </p>
        </motion.div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="py-4 px-6 text-left bg-gray-50 border-b border-gray-200 font-medium text-gray-600">
                  Features
                </th>
                {competitors.map((competitor, index) => (
                  <th 
                    key={competitor.name}
                    className={`py-4 px-6 text-center border-b ${
                      competitor.primary ? 'bg-primary/5 border-primary/20' : 'bg-gray-50 border-gray-200'
                    } font-medium ${competitor.primary ? 'text-primary' : 'text-gray-600'}`}
                  >
                    <div className="flex flex-col items-center">
                      {competitor.logo && (
                        <img src={competitor.logo} alt={competitor.name} className="h-6 mb-2" />
                      )}
                      {competitor.name}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, featureIndex) => (
                <tr 
                  key={feature.name}
                  className={featureIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                >
                  <td className="py-4 px-6 border-b border-gray-200">
                    <div>
                      <div className="font-medium text-gray-900">{feature.name}</div>
                      <div className="text-sm text-gray-500">{feature.description}</div>
                    </div>
                  </td>
                  
                  {competitors.map((competitor) => (
                    <td 
                      key={`${competitor.name}-${feature.name}`}
                      className={`py-4 px-6 text-center border-b ${
                        competitor.primary ? 'border-primary/20' : 'border-gray-200'
                      }`}
                    >
                      {featureAvailability[competitor.name][featureIndex] ? (
                        <div className="flex justify-center">
                          <Check className={`h-5 w-5 ${competitor.primary ? 'text-primary' : 'text-green-500'}`} />
                        </div>
                      ) : (
                        <div className="flex justify-center">
                          <X className="h-5 w-5 text-gray-300" />
                        </div>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-primary font-semibold mb-4">The comprehensive AI-powered WordPress solution</p>
          <a 
            href="https://app.neweb.ai/" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
          >
            Start building with neweb.ai
          </a>
        </motion.div>
      </div>
    </section>
  );
}