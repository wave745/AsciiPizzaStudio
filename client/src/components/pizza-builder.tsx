import { useState } from "react";
import { motion } from "framer-motion";
import TerminalWindow from "./terminal-window";
import { useClipboard } from "@/hooks/use-clipboard";
import { generateCustomPizza } from "@/data/pizza-templates";

interface PizzaOptions {
  base: 'thin' | 'thick' | 'stuffed';
  cheese: boolean;
  pepperoni: boolean;
  mushrooms: boolean;
  olives: boolean;
  pineapple: boolean;
}

export default function PizzaBuilder() {
  const { copyToClipboard, message } = useClipboard();
  const [options, setOptions] = useState<PizzaOptions>({
    base: 'thin',
    cheese: true,
    pepperoni: false,
    mushrooms: false,
    olives: false,
    pineapple: false,
  });

  const updateOption = (key: keyof PizzaOptions, value: boolean | string) => {
    setOptions(prev => ({ ...prev, [key]: value }));
  };

  const customPizza = generateCustomPizza(options);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <TerminalWindow title="INTERACTIVE PIZZA BUILDER">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Builder Controls */}
          <div className="terminal-border p-4 bg-gray-900 rounded">
            <h3 className="text-pizza-cheese mb-4 text-center">CUSTOMIZE YOUR PIZZA</h3>
            
            <div className="space-y-3">
              <div>
                <label className="block text-terminal-green text-sm mb-1">Base:</label>
                <select 
                  className="w-full bg-gray-800 text-foreground p-2 rounded border border-gray-600"
                  value={options.base}
                  onChange={(e) => updateOption('base', e.target.value)}
                >
                  <option value="thin">Thin Crust</option>
                  <option value="thick">Thick Crust</option>
                  <option value="stuffed">Stuffed Crust</option>
                </select>
              </div>
              
              <div>
                <label className="block text-terminal-green text-sm mb-1">Toppings:</label>
                <div className="space-y-2">
                  {[
                    { key: 'cheese', label: 'Cheese' },
                    { key: 'pepperoni', label: 'Pepperoni' },
                    { key: 'mushrooms', label: 'Mushrooms' },
                    { key: 'olives', label: 'Olives' },
                    { key: 'pineapple', label: 'Pineapple' },
                  ].map(({ key, label }) => (
                    <label key={key} className="flex items-center">
                      <input 
                        type="checkbox" 
                        className="mr-2" 
                        checked={options[key as keyof PizzaOptions] as boolean}
                        onChange={(e) => updateOption(key as keyof PizzaOptions, e.target.checked)}
                      />
                      {label}
                    </label>
                  ))}
                </div>
              </div>
              
              <motion.button 
                className="w-full bg-pizza-sauce text-white p-2 rounded hover:bg-red-600 transition-colors"
                onClick={() => copyToClipboard(customPizza)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                COPY PIZZA ASCII
              </motion.button>
            </div>
          </div>
          
          {/* Live Preview */}
          <div className="terminal-border p-4 bg-gray-900 rounded">
            <h3 className="text-pizza-cheese mb-4 text-center">LIVE PREVIEW</h3>
            <div className="text-center">
              <motion.pre
                className="ascii-art text-xs inline-block"
                key={JSON.stringify(options)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                dangerouslySetInnerHTML={{ __html: customPizza }}
              />
            </div>
            <div className="text-xs text-terminal-green text-center mt-2">
              Your custom pizza will appear here!
            </div>
          </div>
        </div>
        
        {message && (
          <motion.div
            className="text-center mt-4 text-terminal-green"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {message}
          </motion.div>
        )}
      </TerminalWindow>
    </motion.div>
  );
}
