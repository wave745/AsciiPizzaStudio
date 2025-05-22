import { useState } from "react";
import TerminalWindow from "@/components/terminal-window";
import PizzaGallery from "@/components/pizza-gallery";
import PizzaBuilder from "@/components/pizza-builder";
import PizzaAnimations from "@/components/pizza-animations";
import RandomPizza from "@/components/random-pizza";
import { motion } from "framer-motion";

type Section = 'gallery' | 'builder' | 'animations' | 'random' | null;

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>(null);

  return (
    <div className="min-h-screen bg-background p-4 space-y-4">
      {/* Header Terminal Window */}
      <TerminalWindow title="ASCII Pizza Co. Terminal v1.0">
        <div className="text-center mb-6">
          <motion.div 
            className="text-2xl md:text-4xl text-pizza-crust mb-4 typewriter-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            WELCOME TO ASCII PIZZA CO.
          </motion.div>
          <div className="text-terminal-green text-sm">
            &gt; Serving fresh ASCII pizzas since 1985
          </div>
        </div>
        
        {/* Main ASCII Pizza Art */}
        <div className="text-center mb-8">
          <motion.pre 
            className="ascii-art text-xs md:text-sm inline-block pizza-hover text-pizza-crust"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
{`    ████████████████████████████
  ██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██
 ██▓▓●●▓▓▓▓▓▓▓▓▓▓●●▓▓██
██▓▓▓▓▓▓●●▓▓▓▓▓▓▓▓●●▓▓▓▓██
██▓▓●●▓▓▓▓▓▓▓▓▓▓▓▓▓▓●●▓▓██
██▓▓▓▓▓▓▓▓●●▓▓▓▓▓▓▓▓▓▓▓▓██
██▓▓●●▓▓▓▓▓▓▓▓▓▓●●▓▓▓▓▓▓██
 ██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██
  ██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██
    ████████████████████████`}
          </motion.pre>
        </div>
      </TerminalWindow>

      {/* Navigation Menu */}
      <TerminalWindow>
        <div className="text-center">
          <div className="text-terminal-green mb-2">╔══════════════════════════════════════╗</div>
          <div className="text-terminal-green">║            MAIN MENU                 ║</div>
          <div className="text-terminal-green mb-4">╚══════════════════════════════════════╝</div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
            <motion.button 
              className="terminal-border p-3 bg-gray-900 hover:bg-gray-800 transition-all rounded"
              onClick={() => setActiveSection('gallery')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              [1] PIZZA GALLERY
            </motion.button>
            <motion.button 
              className="terminal-border p-3 bg-gray-900 hover:bg-gray-800 transition-all rounded"
              onClick={() => setActiveSection('builder')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              [2] PIZZA BUILDER
            </motion.button>
            <motion.button 
              className="terminal-border p-3 bg-gray-900 hover:bg-gray-800 transition-all rounded"
              onClick={() => setActiveSection('animations')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              [3] ANIMATIONS
            </motion.button>
            <motion.button 
              className="terminal-border p-3 bg-gray-900 hover:bg-gray-800 transition-all rounded"
              onClick={() => setActiveSection('random')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              [4] RANDOM PIZZA
            </motion.button>
          </div>
        </div>
      </TerminalWindow>

      {/* Sections */}
      {activeSection === 'gallery' && <PizzaGallery />}
      {activeSection === 'builder' && <PizzaBuilder />}
      {activeSection === 'animations' && <PizzaAnimations />}
      {activeSection === 'random' && <RandomPizza />}

      {/* Footer */}
      <TerminalWindow>
        <div className="text-center">
          <div className="text-terminal-green text-xs">
            ╔════════════════════════════════════════════════════════════════╗<br />
            ║  ASCII PIZZA CO. © 1985 - Serving fresh ASCII art since day 1  ║<br />
            ║  Press CTRL+C to copy any pizza • F5 to refresh the oven      ║<br />
            ╚════════════════════════════════════════════════════════════════╝
          </div>
        </div>
      </TerminalWindow>
    </div>
  );
}
