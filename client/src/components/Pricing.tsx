import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

// Define types for plans
type PricingPlan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  link: string;
  popular: boolean;
  period?: string;
  savings?: string;
};

// Define simplified pricing plans
const plans: Record<'monthly' | 'yearly', PricingPlan[]> = {
  monthly: [
    {
      name: "Starter",
      price: "$8",
      period: "month",
      description: "Perfect for individuals starting their online presence",
      features: [
        "1 Website",
        "Free domain for 1 year (.com, .org, etc.)",
        "SSL certificate included",
        "AI-powered site builder",
        "Basic SEO tools",
        "Email support"
      ],
      link: "https://app.neweb.ai/Billing",
      popular: false
    },
    {
      name: "Elite",
      price: "$16",
      period: "month",
      description: "Ideal for businesses needing multiple websites",
      features: [
        "5 Websites",
        "Free domain for 1 year",
        "SSL certificates included",
        "Advanced AI site builder",
        "Priority SEO optimization",
        "24/7 live chat support",
        "Custom design templates",
        "Analytics dashboard"
      ],
      link: "https://app.neweb.ai/Billing",
      popular: true
    },
    {
      name: "Agency",
      price: "Custom",
      description: "For agencies managing multiple client websites",
      features: [
        "Unlimited websites",
        "Everything in Elite plan",
        "White-label solutions",
        "Agency dashboard",
        "Client management tools",
        "Priority dedicated support",
        "API access"
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
      description: "Perfect for individuals starting their online presence",
      features: [
        "1 Website",
        "Free domain for 1 year (.com, .org, etc.)",
        "SSL certificate included",
        "AI-powered site builder",
        "Basic SEO tools",
        "Email support"
      ],
      link: "https://app.neweb.ai/Billing",
      popular: false,
      savings: "Save $7"
    },
    {
      name: "Elite",
      price: "$168",
      period: "year",
      description: "Ideal for businesses needing multiple websites",
      features: [
        "5 Websites",
        "Free domain for 1 year",
        "SSL certificates included",
        "Advanced AI site builder",
        "Priority SEO optimization",
        "24/7 live chat support",
        "Custom design templates",
        "Analytics dashboard"
      ],
      link: "https://app.neweb.ai/Billing",
      popular: true,
      savings: "Save $24"
    },
    {
      name: "Agency",
      price: "Custom",
      description: "For agencies managing multiple client websites",
      features: [
        "Unlimited websites",
        "Everything in Elite plan",
        "White-label solutions",
        "Agency dashboard",
        "Client management tools",
        "Priority dedicated support",
        "API access"
      ],
      link: "https://app.neweb.ai/Billing",
      popular: false
    }
  ]
};

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Simple, transparent pricing</h2>
          <p className="text-gray-600 text-lg mb-8">
            Choose the plan that works best for your needs. All plans include our core features.
          </p>
          
          {/* Toggle Switch */}
          <div className="inline-flex items-center bg-gray-100 rounded-lg p-1">
            <button 
              onClick={() => setBillingPeriod("monthly")}
              className={`px-5 py-2 text-sm font-medium rounded-md transition-all ${
                billingPeriod === "monthly" 
                  ? "bg-white text-gray-900 shadow-sm" 
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setBillingPeriod("yearly")}
              className={`px-5 py-2 text-sm font-medium rounded-md transition-all ${
                billingPeriod === "yearly" 
                  ? "bg-white text-gray-900 shadow-sm" 
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              Yearly
              {billingPeriod === "yearly" ? null : (
                <span className="ml-1 text-xs text-green-600 font-normal">Save up to 16%</span>
              )}
            </button>
          </div>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {plans[billingPeriod].map((plan, index) => (
            <motion.div 
              key={plan.name}
              className={`bg-white rounded-lg border ${
                plan.popular 
                  ? "border-primary ring-1 ring-primary shadow-lg" 
                  : "border-gray-200 hover:border-gray-300"
              } transition-all`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="p-6 border-b border-gray-100">
                {plan.popular && (
                  <div className="inline-block bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded-full mb-3">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-lg font-semibold text-gray-900">{plan.name}</h3>
                <p className="text-sm text-gray-500 mt-1 mb-4">{plan.description}</p>
                <div className="flex items-baseline mb-1">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-gray-500 ml-1 text-sm">/{plan.period}</span>}
                </div>
                {plan.savings && (
                  <div className="text-green-600 text-sm font-medium">
                    {plan.savings}
                  </div>
                )}
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="text-primary h-5 w-5 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant={plan.popular ? "default" : "outline"}
                  className={`w-full ${
                    plan.popular 
                      ? "bg-primary hover:bg-primary/90 text-white" 
                      : "border-gray-300 text-gray-900"
                  }`}
                >
                  <a href={plan.link}>
                    Get started
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-gray-600 text-sm">
            Need a custom solution? <a href="#" className="text-primary font-medium">Contact us</a> for enterprise pricing.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
