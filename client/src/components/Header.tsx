import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.95)"]
  );
  const boxShadow = useTransform(
    scrollY,
    [0, 50],
    ["none", "0 1px 10px rgba(0, 0, 0, 0.1)"]
  );

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.header
      className="fixed w-full z-50 backdrop-blur-sm"
      style={{ backgroundColor, boxShadow }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img
              src="https://neweb.ai/wp-content/uploads/2023/10/ai-logo.svg"
              alt="Neweb.ai Logo"
              className="h-8 w-auto"
            />
            <span className="ml-2 text-xl font-semibold">neweb.ai</span>
          </div>

          {/* Desktop menu */}
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#features"
              className="text-gray-600 hover:text-primary font-medium text-sm transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-gray-600 hover:text-primary font-medium text-sm transition-colors"
            >
              How it Works
            </a>
            <a
              href="#pricing"
              className="text-gray-600 hover:text-primary font-medium text-sm transition-colors"
            >
              Pricing
            </a>
            <a
              href="https://app.neweb.ai/"
              className="text-gray-600 hover:text-primary font-medium text-sm transition-colors"
            >
              Log In
            </a>
            <Button 
              asChild
              className="bg-primary hover:bg-primary/90 text-white ml-2"
              size="sm"
            >
              <a href="https://app.neweb.ai/">Start Building →</a>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-4 space-y-1 bg-white rounded-md shadow-lg">
              <a
                href="#features"
                className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
                onClick={closeMobileMenu}
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
                onClick={closeMobileMenu}
              >
                How it Works
              </a>
              <a
                href="#pricing"
                className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
                onClick={closeMobileMenu}
              >
                Pricing
              </a>
              <a
                href="https://app.neweb.ai/"
                className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
                onClick={closeMobileMenu}
              >
                Log In
              </a>
              <div className="mt-3 px-3">
                <Button
                  asChild
                  className="bg-primary hover:bg-primary/90 text-white w-full text-center"
                  size="sm"
                >
                  <a href="https://app.neweb.ai/">Start Building →</a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
