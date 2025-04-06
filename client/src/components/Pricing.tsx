import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

// Define pricing plans
const plans = {
  monthly: [
    {
      name: "Starter",
      price: "$8",
      period: "month",
      features: [
        {
          title: "Free Domain",
          description: "Enjoy a free domain for 1 year, applicable to .com, .org, and more with Neweb.ai!"
        },
        {
          title: "1 Website",
          description: "Build and host 1 stunning website effortlessly with Neweb.ai!"
        },
        {
          title: "Free SSL Certificate",
          description: "Secure your website with a free SSL certificate included with Neweb.ai!"
        },
        {
          title: "Email Support",
          description: "Get dedicated email support to assist you every step of the way with Neweb.ai!"
        },
        {
          title: "SEO Tools Suite",
          description: "Optimize your website's visibility with Neweb.ai's powerful SEO Tools Suite!"
        }
      ],
      link: "https://app.neweb.ai/Billing",
      popular: false
    },
    {
      name: "Elite",
      price: "$16",
      period: "month",
      features: [
        {
          title: "Free Domain",
          description: "Enjoy a free domain for 1 year, applicable to .com, .org, and more with Neweb.ai!"
        },
        {
          title: "5 Websites",
          description: "Build and host 5 stunning websites effortlessly with Neweb.ai!"
        },
        {
          title: "Free SSL Certificate",
          description: "Secure your website with a free SSL certificate included with Neweb.ai!"
        },
        {
          title: "24*7 Live chat support",
          description: "Access 24/7 live chat support to resolve your queries anytime with Neweb.ai!"
        },
        {
          title: "Priority SEO Optimization",
          description: "Enhance your online presence with Neweb.ai's Priority SEO Optimization services!"
        }
      ],
      link: "https://app.neweb.ai/Billing",
      popular: true
    },
    {
      name: "Agency",
      price: "$Custom",
      period: "",
      features: [
        {
          title: "Everything in Starter and Elite",
          description: "Enjoy all features from the Starter and Elite plans combined with Neweb.ai!"
        },
        {
          title: "Unlimited Websites",
          description: "Create and manage unlimited websites seamlessly with Neweb.ai"
        },
        {
          title: "Agency-specific Tools",
          description: "Access exclusive agency-specific tools to streamline your workflow with Neweb.ai!"
        },
        {
          title: "Priority 24/7 Support",
          description: "Get priority 24/7 support for faster resolutions with Neweb.ai!"
        }
      ],
      link: "https://app.neweb.ai/Billing",
      popular: false
    }
  ],
  yearly: [
    {
      name: "Starter",
      price: "$89",
      period: "year",
      features: [
        {
          title: "Free Domain",
          description: "Enjoy a free domain for 1 year, applicable to .com, .org, and more with Neweb.ai!"
        },
        {
          title: "1 Website",
          description: "Build and host 1 stunning website effortlessly with Neweb.ai!"
        },
        {
          title: "Free SSL Certificate",
          description: "Secure your website with a free SSL certificate included with Neweb.ai!"
        },
        {
          title: "Email Support",
          description: "Get dedicated email support to assist you every step of the way with Neweb.ai!"
        },
        {
          title: "SEO Tools Suite",
          description: "Optimize your website's visibility with Neweb.ai's powerful SEO Tools Suite!"
        }
      ],
      link: "https://app.neweb.ai/Billing",
      popular: false,
      savings: "Save $7"
    },
    {
      name: "Elite",
      price: "$168",
      period: "year",
      features: [
        {
          title: "Free Domain",
          description: "Enjoy a free domain for 1 year, applicable to .com, .org, and more with Neweb.ai!"
        },
        {
          title: "5 Websites",
          description: "Build and host 5 stunning websites effortlessly with Neweb.ai!"
        },
        {
          title: "Free SSL Certificate",
          description: "Secure your website with a free SSL certificate included with Neweb.ai!"
        },
        {
          title: "24*7 Live chat support",
          description: "Access 24/7 live chat support to resolve your queries anytime with Neweb.ai!"
        },
        {
          title: "Priority SEO Optimization",
          description: "Enhance your online presence with Neweb.ai's Priority SEO Optimization services!"
        }
      ],
      link: "https://app.neweb.ai/Billing",
      popular: true,
      savings: "Save $24"
    },
    {
      name: "Agency",
      price: "$Custom",
      period: "",
      features: [
        {
          title: "Everything in Starter and Elite",
          description: "Enjoy all features from the Starter and Elite plans combined with Neweb.ai!"
        },
        {
          title: "Unlimited Websites",
          description: "Create and manage unlimited websites seamlessly with Neweb.ai"
        },
        {
          title: "Agency-specific Tools",
          description: "Access exclusive agency-specific tools to streamline your workflow with Neweb.ai!"
        },
        {
          title: "Priority 24/7 Support",
          description: "Get priority 24/7 support for faster resolutions with Neweb.ai!"
        }
      ],
      link: "https://app.neweb.ai/Billing",
      popular: false
    }
  ]
};

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h6 className="text-primary font-semibold text-sm uppercase mb-2">Flexible Pricing</h6>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose a pricing plan that works for you</h2>
          <p className="text-gray-600 text-lg">
            Whether you're an individual, a small team, or a growing enterprise, we have a plan that aligns perfectly with your goals.
          </p>
          
          {/* Toggle Switch */}
          <div className="flex items-center justify-center mt-8">
            <button 
              onClick={() => setBillingPeriod("monthly")}
              className={`px-6 py-2 font-medium rounded-l-lg transition-colors ${
                billingPeriod === "monthly" 
                  ? "bg-primary text-white" 
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setBillingPeriod("yearly")}
              className={`px-6 py-2 font-medium rounded-r-lg transition-colors ${
                billingPeriod === "yearly" 
                  ? "bg-primary text-white" 
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              Yearly
            </button>
          </div>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans[billingPeriod].map((plan, index) => (
            <motion.div 
              key={plan.name}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl ${
                plan.popular 
                  ? "border-2 border-primary transform md:-translate-y-4" 
                  : "border border-gray-200"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {plan.popular && (
                <div className="bg-primary text-white py-2 px-4 text-center text-sm font-medium">
                  MOST POPULAR
                </div>
              )}
              <div className="p-8 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-500 mb-2">{plan.name}</h3>
                <div className="flex items-end">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-gray-500 ml-1">/{plan.period}</span>}
                </div>
                {plan.savings && (
                  <div className="mt-2 inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                    {plan.savings}
                  </div>
                )}
              </div>
              <div className="p-8">
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="text-green-500 h-5 w-5 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <span className="font-medium">{feature.title}</span>
                        <p className="text-sm text-gray-500">{feature.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className="mt-8 w-full bg-primary hover:bg-primary/90 text-white"
                >
                  <a href={plan.link}>
                    Get started
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
