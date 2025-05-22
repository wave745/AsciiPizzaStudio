import { useState } from "react";

export function useClipboard() {
  const [message, setMessage] = useState<string | null>(null);

  const copyToClipboard = async (text: string) => {
    try {
      // Remove HTML tags for plain text copying
      const plainText = text.replace(/<[^>]*>/g, '');
      
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(plainText);
      } else {
        // Fallback for older browsers or non-secure contexts
        const textArea = document.createElement("textarea");
        textArea.value = plainText;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
      }
      
      setMessage("Pizza ASCII copied to clipboard! 🍕");
      setTimeout(() => setMessage(null), 3000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
      setMessage("Failed to copy to clipboard");
      setTimeout(() => setMessage(null), 3000);
    }
  };

  return { copyToClipboard, message };
}
