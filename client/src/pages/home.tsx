import { useState } from "react";
import TerminalWindow from "@/components/terminal-window";
import PizzaGallery from "@/components/pizza-gallery";
import PizzaBuilder from "@/components/pizza-builder";
import PizzaAnimations from "@/components/pizza-animations";
import RandomPizza from "@/components/random-pizza";
import { motion } from "framer-motion";
import { ExternalLink, Copy } from "lucide-react";
import { useClipboard } from "@/hooks/use-clipboard";

type Section = 'gallery' | 'builder' | 'animations' | 'random' | null;

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>(null);
  const { copyToClipboard, message } = useClipboard();
  
  const contractAddress = "HTMvt5CVKcGNobkvBLtroR6dK5rgNnCt6Vi7Btwopump";

  return (
    <div className="min-h-screen bg-background p-4 space-y-4">
      {/* Top Action Buttons */}
      <div className="flex justify-end gap-3 mb-2">
        {/* Copy CA Button */}
        <motion.button
          onClick={() => copyToClipboard(contractAddress)}
          className="flex items-center gap-2 bg-pizza-cheese text-black px-4 py-2 rounded-lg hover:bg-yellow-400 transition-colors border border-yellow-600 font-mono text-sm"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          title="Copy Contract Address"
        >
          <Copy className="w-4 h-4" />
          <span className="hidden sm:inline">Copy CA</span>
          <span className="sm:hidden">CA</span>
        </motion.button>

        {/* X.com Community Link */}
        <motion.a
          href="https://twitter.com/i/communities/1925506087979045256"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors border border-gray-600"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
          <span className="text-sm hidden sm:inline">Join Pizza Community</span>
          <span className="text-sm sm:hidden">Community</span>
          <ExternalLink className="w-4 h-4" />
        </motion.a>
      </div>

      {/* Copy Message Display */}
      {message && (
        <motion.div
          className="text-center mb-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          <div className="inline-block bg-terminal-green text-black px-4 py-2 rounded-lg text-sm font-mono">
            {message}
          </div>
        </motion.div>
      )}

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
