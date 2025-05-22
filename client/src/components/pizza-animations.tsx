import { useState } from "react";
import { motion } from "framer-motion";
import TerminalWindow from "./terminal-window";

export default function PizzaAnimations() {
  const [isSpinning, setIsSpinning] = useState(true);
  const [cookingStage, setCookingStage] = useState(0);
  const [isCooking, setIsCooking] = useState(false);

  const startCooking = () => {
    if (isCooking) return;
    
    setIsCooking(true);
    setCookingStage(0);
    
    const stages = [0, 1, 2];
    stages.forEach((stage, index) => {
      setTimeout(() => {
        setCookingStage(stage);
        if (stage === 2) {
          setTimeout(() => setIsCooking(false), 1000);
        }
      }, index * 1000);
    });
  };

  const cookingStages = [
    // Raw dough
    `    ████████████
  ██<span style="color: #8b4513;">░░░░░░░░</span>██
 ██<span style="color: #8b4513;">░░░░░░░░░░</span>██
██<span style="color: #8b4513;">░░░░░░░░░░░░</span>██
██<span style="color: #8b4513;">░░░░░░░░░░░░</span>██
 ██<span style="color: #8b4513;">░░░░░░░░░░</span>██
  ██<span style="color: #8b4513;">░░░░░░░░</span>██
    ████████████`,
    // Sauce added
    `    ████████████
  ██<span style="color: #e06c75;">▓▓▓▓▓▓▓▓</span>██
 ██<span style="color: #e06c75;">▓▓▓▓▓▓▓▓▓▓</span>██
██<span style="color: #e06c75;">▓▓▓▓▓▓▓▓▓▓▓▓</span>██
██<span style="color: #e06c75;">▓▓▓▓▓▓▓▓▓▓▓▓</span>██
 ██<span style="color: #e06c75;">▓▓▓▓▓▓▓▓▓▓</span>██
  ██<span style="color: #e06c75;">▓▓▓▓▓▓▓▓</span>██
    ████████████`,
    // Finished pizza
    `    ████████████
  ██<span style="color: #e5c07b;">▓▓▓▓▓▓▓▓</span>██
 ██<span style="color: #e5c07b;">▓▓</span><span style="color: #d19a66;">●</span><span style="color: #e5c07b;">▓▓▓▓</span><span style="color: #d19a66;">●</span><span style="color: #e5c07b;">▓</span>██
██<span style="color: #e5c07b;">▓▓▓▓</span><span style="color: #d19a66;">●</span><span style="color: #e5c07b;">▓▓</span><span style="color: #d19a66;">●</span><span style="color: #e5c07b;">▓▓▓</span>██
██<span style="color: #e5c07b;">▓</span><span style="color: #d19a66;">●</span><span style="color: #e5c07b;">▓▓▓▓▓▓</span><span style="color: #d19a66;">●</span><span style="color: #e5c07b;">▓</span>██
 ██<span style="color: #e5c07b;">▓▓▓▓▓▓▓▓▓▓</span>██
  ██<span style="color: #e5c07b;">▓▓▓▓▓▓▓▓</span>██
    ████████████`
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <TerminalWindow title="ASCII PIZZA ANIMATIONS">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Spinning Pizza */}
          <div className="terminal-border p-4 bg-gray-900 rounded text-center">
            <h3 className="text-pizza-cheese mb-4">SPINNING PIZZA</h3>
            <motion.div
              animate={isSpinning ? { rotate: 360 } : { rotate: 0 }}
              transition={{ duration: 3, repeat: isSpinning ? Infinity : 0, ease: "linear" }}
              className="inline-block"
            >
              <pre className="ascii-art text-xs" dangerouslySetInnerHTML={{
                __html: `    ████████████
  ██<span style="color: #e5c07b;">▓▓▓▓▓▓▓▓</span>██
 ██<span style="color: #e5c07b;">▓▓</span><span style="color: #d19a66;">●</span><span style="color: #e5c07b;">▓▓▓▓</span><span style="color: #d19a66;">●</span><span style="color: #e5c07b;">▓</span>██
██<span style="color: #e5c07b;">▓▓▓▓</span><span style="color: #d19a66;">●</span><span style="color: #e5c07b;">▓▓</span><span style="color: #d19a66;">●</span><span style="color: #e5c07b;">▓▓▓</span>██
██<span style="color: #e5c07b;">▓</span><span style="color: #d19a66;">●</span><span style="color: #e5c07b;">▓▓▓▓▓▓</span><span style="color: #d19a66;">●</span><span style="color: #e5c07b;">▓</span>██
 ██<span style="color: #e5c07b;">▓▓▓▓▓▓▓▓▓▓</span>██
  ██<span style="color: #e5c07b;">▓▓▓▓▓▓▓▓</span>██
    ████████████`
              }} />
            </motion.div>
            <motion.button 
              className="mt-4 bg-terminal-green text-black px-4 py-2 rounded hover:bg-green-400 transition-colors"
              onClick={() => setIsSpinning(!isSpinning)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isSpinning ? 'Stop Spin' : 'Start Spin'}
            </motion.button>
          </div>

          {/* Cooking Animation */}
          <div className="terminal-border p-4 bg-gray-900 rounded text-center">
            <h3 className="text-pizza-cheese mb-4">PIZZA COOKING</h3>
            <motion.div
              key={cookingStage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <pre 
                className="ascii-art text-xs"
                dangerouslySetInnerHTML={{ __html: cookingStages[cookingStage] }}
              />
            </motion.div>
            <motion.button 
              className="mt-4 bg-pizza-sauce text-white px-4 py-2 rounded hover:bg-red-600 transition-colors disabled:opacity-50"
              onClick={startCooking}
              disabled={isCooking}
              whileHover={{ scale: isCooking ? 1 : 1.05 }}
              whileTap={{ scale: isCooking ? 1 : 0.95 }}
            >
              {isCooking ? 'Cooking...' : 'Start Cooking'}
            </motion.button>
          </div>

          {/* Steam Animation */}
          <div className="terminal-border p-4 bg-gray-900 rounded text-center">
            <h3 className="text-pizza-cheese mb-4">HOT PIZZA STEAM</h3>
            <div>
              <div className="text-xs mb-2 h-12">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="steam-line text-foreground"
                    animate={{
                      y: [-5, -15, -5],
                      x: [-2, 2, -2],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeInOut"
                    }}
                  >
                    {i === 0 && "  ~  ~  ~  ~  ~  ~  "}
                    {i === 1 && " ~  ~  ~  ~  ~  ~ "}
                    {i === 2 && "  ~  ~  ~  ~  ~  ~  "}
                  </motion.div>
                ))}
              </div>
              <pre className="ascii-art text-xs" dangerouslySetInnerHTML={{
                __html: `    ████████████
  ██<span style="color: #e5c07b;">▓▓▓▓▓▓▓▓</span>██
 ██<span style="color: #e5c07b;">▓▓</span><span style="color: #d19a66;">●</span><span style="color: #e5c07b;">▓▓▓▓</span><span style="color: #d19a66;">●</span><span style="color: #e5c07b;">▓</span>██
██<span style="color: #e5c07b;">▓▓▓▓</span><span style="color: #d19a66;">●</span><span style="color: #e5c07b;">▓▓</span><span style="color: #d19a66;">●</span><span style="color: #e5c07b;">▓▓▓</span>██
██<span style="color: #e5c07b;">▓</span><span style="color: #d19a66;">●</span><span style="color: #e5c07b;">▓▓▓▓▓▓</span><span style="color: #d19a66;">●</span><span style="color: #e5c07b;">▓</span>██
 ██<span style="color: #e5c07b;">▓▓▓▓▓▓▓▓▓▓</span>██
  ██<span style="color: #e5c07b;">▓▓▓▓▓▓▓▓</span>██
    ████████████`
              }} />
            </div>
          </div>

          {/* Loading Pizza */}
          <div className="terminal-border p-4 bg-gray-900 rounded text-center">
            <h3 className="text-pizza-cheese mb-4">LOADING PIZZA</h3>
            <div>
              <div className="text-terminal-green text-sm mb-2">PREPARING YOUR PIZZA...</div>
              <motion.div 
                className="text-foreground text-xs mb-4"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                [████████████████████] 100%
              </motion.div>
              <pre className="ascii-art text-xs" dangerouslySetInnerHTML={{
                __html: `      ▓▓▓▓▓▓▓▓▓▓
    ▓▓<span style="color: #e5c07b;">●</span>▓▓▓▓▓▓<span style="color: #e5c07b;">●</span>▓▓
   ▓▓▓▓<span style="color: #e5c07b;">●</span>▓▓<span style="color: #e5c07b;">●</span>▓▓▓▓
  ▓▓<span style="color: #e5c07b;">●</span>▓▓▓▓▓▓▓▓<span style="color: #e5c07b;">●</span>▓▓
   ▓▓▓▓▓▓▓▓▓▓▓▓
    ▓▓▓▓▓▓▓▓▓▓
      ▓▓▓▓▓▓▓▓`
              }} />
            </div>
          </div>
        </div>
      </TerminalWindow>
    </motion.div>
  );
}
