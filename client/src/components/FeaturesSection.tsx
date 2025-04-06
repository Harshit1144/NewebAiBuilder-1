import { Check, Globe, Zap, Shield } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Free Domain */}
          <div className="flex">
            <div className="flex-shrink-0 mt-1">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                <Globe className="h-5 w-5 text-primary" />
              </div>
            </div>
            <div className="ml-5">
              <h3 className="text-lg font-semibold mb-2">Free Domain Included</h3>
              <p className="text-gray-600 text-sm">
                Every website comes with a free domain name. Launch your online presence without additional costs.
              </p>
            </div>
          </div>
          
          {/* WordPress Integration */}
          <div className="flex">
            <div className="flex-shrink-0 mt-1">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                <div className="text-primary font-bold">W</div>
              </div>
            </div>
            <div className="ml-5">
              <h3 className="text-lg font-semibold mb-2">WordPress Integration</h3>
              <p className="text-gray-600 text-sm">
                Built on WordPress for unlimited flexibility. Access the world's largest ecosystem of plugins and themes.
              </p>
            </div>
          </div>
          
          {/* Instant Deployment */}
          <div className="flex">
            <div className="flex-shrink-0 mt-1">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                <Zap className="h-5 w-5 text-primary" />
              </div>
            </div>
            <div className="ml-5">
              <h3 className="text-lg font-semibold mb-2">Instant Deployment</h3>
              <p className="text-gray-600 text-sm">
                One-click publishing to get your site live instantly. No complicated deployment processes or wait times.
              </p>
            </div>
          </div>
        </div>
        
        {/* Website Creation Reimagined */}
        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Website creation reimagined</h2>
            <p className="text-gray-600 mb-8">
              Describe your business, and watch as neweb.ai builds your complete website with optimized content, stunning design, and professional features.
            </p>
            
            <div className="bg-gray-900 rounded-lg overflow-hidden mb-8">
              <div className="p-4 text-green-400 font-mono text-sm">
                <span className="mr-2">❯</span> generating website... <span className="text-white">98% complete</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                <p className="text-gray-700">From concept to live site in less than 2 minutes</p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                <p className="text-gray-700">Free domain name and hosting included</p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                <p className="text-gray-700">No technical skills required — 100% no-code</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gray-100 p-8 rounded-lg flex items-center justify-center">
              <div className="h-64 w-full">
                <div className="flex h-full justify-around items-end">
                  <div className="w-8 bg-purple-300 rounded-t" style={{ height: '60%' }}></div>
                  <div className="w-8 bg-purple-400 rounded-t" style={{ height: '80%' }}></div>
                  <div className="w-8 bg-purple-500 rounded-t" style={{ height: '40%' }}></div>
                  <div className="w-8 bg-purple-600 rounded-t" style={{ height: '50%' }}></div>
                  <div className="w-8 bg-purple-700 rounded-t" style={{ height: '30%' }}></div>
                  <div className="w-8 bg-blue-500 rounded-t" style={{ height: '90%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}