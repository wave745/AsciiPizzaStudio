import { useState } from "react";
import { motion } from "framer-motion";
import TerminalWindow from "./terminal-window";
import { useClipboard } from "@/hooks/use-clipboard";
import { generateRandomPizza } from "@/data/pizza-templates";

export default function RandomPizza() {
  const { copyToClipboard, message } = useClipboard();
  const [currentPizza, setCurrentPizza] = useState(() => generateRandomPizza());

  const generateNew = () => {
    setCurrentPizza(generateRandomPizza());
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <TerminalWindow title="RANDOM PIZZA GENERATOR">
        <div className="text-center">
          <div className="text-terminal-green mb-4">
            <motion.div 
              className="text-xl font-bold"
              key={currentPizza.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {currentPizza.name}
            </motion.div>
            <div className="text-sm text-gray-400">Randomly generated ASCII pizza!</div>
          </div>
          
          <motion.pre 
            className="ascii-art text-xs inline-block mb-4"
            key={currentPizza.ascii}
            initial={{ opacity: 0, rotateY: -90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.6 }}
            dangerouslySetInnerHTML={{ __html: currentPizza.ascii }}
          />
          
          <div className="space-x-4">
            <motion.button 
              className="bg-terminal-green text-black px-6 py-2 rounded hover:bg-green-400 transition-colors"
              onClick={generateNew}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              GENERATE NEW
            </motion.button>
            <motion.button 
              className="bg-pizza-sauce text-white px-6 py-2 rounded hover:bg-red-600 transition-colors"
              onClick={() => copyToClipboard(currentPizza.ascii)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              COPY ASCII
            </motion.button>
          </div>
          
          {message && (
            <motion.div
              className="text-terminal-green mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {message}
            </motion.div>
          )}
        </div>
      </TerminalWindow>
    </motion.div>
  );
}
