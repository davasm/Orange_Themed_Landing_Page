import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/1530513141.png";
import { navItems } from "../../constants";

export const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
            <span className="text-xl tracking-tight">Selular</span>
          </div>

          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <a 
                  href={item.href} 
                  className="relative transition-all duration-300 hover:text-orange-500"
                >
                  {item.label}
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-orange-500 scale-x-0 transition-transform duration-300 hover:scale-x-100"></span>
                </a>
              </motion.li>
            ))}
          </ul>

          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <motion.a 
              href="#" 
              className="py-2 px-3 border rounded-md transition-all duration-300 hover:border-orange-500"
              whileHover={{ scale: 1.05 }}
            >
              Login
            </motion.a>
            <motion.a 
              href="#" 
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md transition-all duration-300"
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 10px rgba(255, 94, 0, 0.5)" }}
            >
              Cadastre-se
            </motion.a>
          </div>

          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileDrawerOpen && (
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden"
            >
              <ul>
                {navItems.map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="py-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <a href={item.href} className="transition-all duration-300 hover:text-orange-500">{item.label}</a>
                  </motion.li>
                ))}
              </ul>

              <div className="flex space-x-6 mt-6">
                <motion.a 
                  href="#" 
                  className="py-2 px-3 border rounded-md transition-all duration-300 hover:border-orange-500"
                  whileHover={{ scale: 1.05 }}
                >
                  Login
                </motion.a>
                <motion.a 
                  href="#" 
                  className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md transition-all duration-300"
                  whileHover={{ scale: 1.05, boxShadow: "0px 0px 10px rgba(255, 94, 0, 0.5)" }}
                >
                  Cadastre-se
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
