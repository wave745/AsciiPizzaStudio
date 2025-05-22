export interface PizzaTemplate {
  name: string;
  ascii: string;
  titleColor: string;
  toppings: string[];
}

export const PIZZA_TEMPLATES: PizzaTemplate[] = [
  {
    name: "MARGHERITA",
    titleColor: "text-pizza-cheese",
    toppings: ["cheese", "basil"],
    ascii: `      ████████████████
    ██<span style="color: #e5c07b;">▓▓▓▓▓▓▓▓▓▓▓▓</span>██
   ██<span style="color: #e5c07b;">▓▓</span><span style="color: #98c379;">♦</span><span style="color: #e5c07b;">▓▓▓▓▓▓</span><span style="color: #98c379;">♦</span><span style="color: #e5c07b;">▓▓</span>██
  ██<span style="color: #e5c07b;">▓▓▓▓</span><span style="color: #98c379;">♦</span><span style="color: #e5c07b;">▓▓▓▓</span><span style="color: #98c379;">♦</span><span style="color: #e5c07b;">▓▓▓▓</span>██
  ██<span style="color: #e5c07b;">▓▓</span><span style="color: #98c379;">♦</span><span style="color: #e5c07b;">▓▓▓▓▓▓▓▓</span><span style="color: #98c379;">♦</span><span style="color: #e5c07b;">▓▓</span>██
   ██<span style="color: #e5c07b;">▓▓▓▓▓▓▓▓▓▓▓▓</span>██
    ██<span style="color: #e5c07b;">▓▓▓▓▓▓▓▓▓▓</span>██
      ████████████████`
  },
  {
    name: "PEPPERONI",
    titleColor: "text-pizza-pepperoni",
    toppings: ["cheese", "pepperoni"],
    ascii: `      ████████████████
    ██<span style="color: #e5c07b;">▓▓▓▓▓▓▓▓▓▓▓▓</span>██
   ██<span style="color: #e5c07b;">▓▓</span><span style="color: #d19a66;">●●</span><span style="color: #e5c07b;">▓▓▓▓</span><span style="color: #d19a66;">●●</span><span style="color: #e5c07b;">▓▓</span>██
  ██<span style="color: #e5c07b;">▓▓▓▓</span><span style="color: #d19a66;">●●</span><span style="color: #e5c07b;">▓▓</span><span style="color: #d19a66;">●●</span><span style="color: #e5c07b;">▓▓▓▓</span>██
  ██<span style="color: #e5c07b;">▓▓</span><span style="color: #d19a66;">●●</span><span style="color: #e5c07b;">▓▓▓▓▓▓</span><span style="color: #d19a66;">●●</span><span style="color: #e5c07b;">▓▓</span>██
   ██<span style="color: #e5c07b;">▓▓▓▓</span><span style="color: #d19a66;">●●</span><span style="color: #e5c07b;">▓▓▓▓</span><span style="color: #d19a66;">●●</span>██
    ██<span style="color: #e5c07b;">▓▓▓▓▓▓▓▓▓▓</span>██
      ████████████████`
  },
  {
    name: "SUPREME",
    titleColor: "text-pizza-sauce",
    toppings: ["cheese", "pepperoni", "mushrooms", "olives"],
    ascii: `      ████████████████
    ██<span style="color: #e5c07b;">▓▓▓▓▓▓▓▓▓▓▓▓</span>██
   ██<span style="color: #e5c07b;">▓</span><span style="color: #d19a66;">●</span><span style="color: #98c379;">♦</span><span style="color: #e5c07b;">▓▓▓</span><span style="color: #d19a66;">●</span><span style="color: #98c379;">♦</span><span style="color: #e5c07b;">▓▓</span>██
  ██<span style="color: #e5c07b;">▓▓</span><span style="color: #98c379;">♦</span><span style="color: #e5c07b;">▓</span><span style="color: #d19a66;">●</span><span style="color: #e5c07b;">▓</span><span style="color: #98c379;">♦</span><span style="color: #d19a66;">●</span><span style="color: #e5c07b;">▓▓</span>██
  ██<span style="color: #e5c07b;">▓</span><span style="color: #d19a66;">●</span><span style="color: #e5c07b;">▓▓</span><span style="color: #98c379;">♦</span><span style="color: #e5c07b;">▓▓</span><span style="color: #d19a66;">●</span><span style="color: #e5c07b;">▓</span><span style="color: #98c379;">♦</span><span style="color: #e5c07b;">▓</span>██
   ██<span style="color: #e5c07b;">▓</span><span style="color: #98c379;">♦</span><span style="color: #e5c07b;">▓</span><span style="color: #d19a66;">●</span><span style="color: #e5c07b;">▓▓</span><span style="color: #98c379;">♦</span><span style="color: #d19a66;">●</span><span style="color: #e5c07b;">▓</span>██
    ██<span style="color: #e5c07b;">▓▓▓▓▓▓▓▓▓▓</span>██
      ████████████████`
  },
  {
    name: "HAWAIIAN",
    titleColor: "text-yellow-400",
    toppings: ["cheese", "ham", "pineapple"],
    ascii: `      ████████████████
    ██<span style="color: #e5c07b;">▓▓▓▓▓▓▓▓▓▓▓▓</span>██
   ██<span style="color: #e5c07b;">▓▓</span><span style="color: #ff9ff3;">◆</span><span style="color: #e5c07b;">▓▓▓</span><span style="color: #ffdd44;">▲</span><span style="color: #e5c07b;">▓▓</span><span style="color: #ff9ff3;">◆</span><span style="color: #e5c07b;">▓</span>██
  ██<span style="color: #e5c07b;">▓▓</span><span style="color: #ffdd44;">▲</span><span style="color: #e5c07b;">▓▓</span><span style="color: #ff9ff3;">◆</span><span style="color: #e5c07b;">▓▓</span><span style="color: #ffdd44;">▲</span><span style="color: #e5c07b;">▓▓</span>██
  ██<span style="color: #e5c07b;">▓</span><span style="color: #ff9ff3;">◆</span><span style="color: #e5c07b;">▓▓▓</span><span style="color: #ffdd44;">▲</span><span style="color: #e5c07b;">▓▓</span><span style="color: #ff9ff3;">◆</span><span style="color: #e5c07b;">▓</span>██
   ██<span style="color: #e5c07b;">▓▓</span><span style="color: #ffdd44;">▲</span><span style="color: #e5c07b;">▓▓▓▓</span><span style="color: #ff9ff3;">◆</span><span style="color: #e5c07b;">▓▓</span>██
    ██<span style="color: #e5c07b;">▓▓▓▓▓▓▓▓▓▓</span>██
      ████████████████`
  }
];

export function generateCustomPizza(options: {
  base: string;
  cheese: boolean;
  pepperoni: boolean;
  mushrooms: boolean;
  olives: boolean;
  pineapple: boolean;
}): string {
  const baseTemplate = `      ████████████████
    ██<span style="color: #e5c07b;">▓▓▓▓▓▓▓▓▓▓▓▓</span>██
   ██<span style="color: #e5c07b;">▓▓{0}▓▓▓▓{1}▓▓</span>██
  ██<span style="color: #e5c07b;">▓▓▓▓{2}▓▓{3}▓▓▓▓</span>██
  ██<span style="color: #e5c07b;">▓▓{4}▓▓▓▓▓▓{5}▓▓</span>██
   ██<span style="color: #e5c07b;">▓▓▓▓{6}▓▓▓▓{7}</span>██
    ██<span style="color: #e5c07b;">▓▓▓▓▓▓▓▓▓▓</span>██
      ████████████████`;

  // Define topping characters
  const toppings = {
    pepperoni: '<span style="color: #d19a66;">●</span>',
    mushrooms: '<span style="color: #98c379;">♦</span>',
    olives: '<span style="color: #666;">○</span>',
    pineapple: '<span style="color: #ffdd44;">▲</span>',
    cheese: '<span style="color: #e5c07b;">▓</span>'
  };

  // Create topping positions
  const positions = new Array(8).fill('<span style="color: #e5c07b;">▓</span>');
  
  if (options.pepperoni) {
    positions[0] = toppings.pepperoni;
    positions[3] = toppings.pepperoni;
    positions[5] = toppings.pepperoni;
    positions[7] = toppings.pepperoni;
  }
  
  if (options.mushrooms) {
    positions[1] = toppings.mushrooms;
    positions[2] = toppings.mushrooms;
    positions[6] = toppings.mushrooms;
  }
  
  if (options.olives) {
    positions[4] = toppings.olives;
  }
  
  if (options.pineapple) {
    positions[1] = toppings.pineapple;
    positions[6] = toppings.pineapple;
  }

  let result = baseTemplate;
  positions.forEach((topping, index) => {
    result = result.replace(`{${index}}`, topping);
  });

  return result;
}

export function generateRandomPizza(): { name: string; ascii: string } {
  const names = [
    "MYSTERY MEAT",
    "VEGGIE SUPREME", 
    "CHEESE LOVERS",
    "RANDOM SPECIAL",
    "CHAOS PIZZA",
    "DISCO PIZZA",
    "TERMINAL SPECIAL",
    "BINARY PIZZA",
    "PIXEL PERFECT",
    "RETRO DELIGHT"
  ];

  const toppingChars = [
    '<span style="color: #d19a66;">●</span>', // pepperoni
    '<span style="color: #98c379;">♦</span>', // mushrooms
    '<span style="color: #666;">○</span>',     // olives
    '<span style="color: #ffdd44;">▲</span>',  // pineapple
    '<span style="color: #ff9ff3;">◆</span>',  // ham
    '<span style="color: #e5c07b;">▓</span>'   // cheese
  ];

  const name = names[Math.floor(Math.random() * names.length)];
  
  // Generate random pizza pattern
  const baseTemplate = `    ████████████████
  ██<span style="color: #e5c07b;">▓▓▓▓▓▓▓▓▓▓▓▓</span>██
 ██<span style="color: #e5c07b;">▓▓{0}{1}▓▓▓{2}{3}▓</span>██
██<span style="color: #e5c07b;">▓▓{4}▓{5}▓{6}▓{7}▓▓</span>██
██<span style="color: #e5c07b;">▓{8}▓▓{9}▓▓{10}▓{11}</span>██
 ██<span style="color: #e5c07b;">▓▓{12}▓▓▓▓{13}▓▓</span>██
  ██<span style="color: #e5c07b;">▓▓▓▓▓▓▓▓▓▓</span>██
    ████████████████`;

  let result = baseTemplate;
  for (let i = 0; i < 14; i++) {
    const randomTopping = toppingChars[Math.floor(Math.random() * toppingChars.length)];
    result = result.replace(`{${i}}`, randomTopping);
  }

  return { name, ascii: result };
}
