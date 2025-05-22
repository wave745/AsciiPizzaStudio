import { motion } from "framer-motion";
import TerminalWindow from "./terminal-window";
import { PIZZA_TEMPLATES } from "@/data/pizza-templates";
import { useClipboard } from "@/hooks/use-clipboard";

export default function PizzaGallery() {
  const { copyToClipboard, message } = useClipboard();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <TerminalWindow title="PIZZA GALLERY - Select and Copy ASCII Art">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PIZZA_TEMPLATES.map((pizza, index) => (
            <motion.div
              key={pizza.name}
              className="terminal-border p-4 bg-gray-900 rounded"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className={`text-center mb-2 ${pizza.titleColor}`}>{pizza.name}</h3>
              <motion.pre
                className="ascii-art text-xs pizza-hover cursor-pointer"
                onClick={() => copyToClipboard(pizza.ascii)}
                whileHover={{ textShadow: "0 0 10px currentColor" }}
                dangerouslySetInnerHTML={{ __html: pizza.ascii }}
              />
              <div className="text-xs text-terminal-green text-center mt-2">
                Click to copy!
              </div>
            </motion.div>
          ))}
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
