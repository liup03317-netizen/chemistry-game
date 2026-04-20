import React from 'react';

// Radicals in the game
export const RADICALS = ['NH4', 'OH', 'CO3', 'NO3', 'SO4'];

// Elements in the game (non-radical)
export const ELEMENTS_SIMPLE = ['H', 'Na', 'K', 'Ca', 'Mg', 'Al', 'Zn', 'Fe', 'Cu', 'Ag', 'Ba', 'Cl', 'O', 'P', 'S', 'C'];

/**
 * Parses a chemical formula string and returns an array of tokens.
 * This can be used to split a formula into text and subscript numbers.
 * Example: 'H2O' -> ['H', '2', 'O']
 */
export function tokenizeFormula(formula: string): string[] {
  // Match any uppercase letter followed by lowercase letters, OR a number, OR brackets
  // e.g. "Fe2(SO4)3" -> ["Fe", "2", "(", "S", "O", "4", ")", "3"]
  const regex = /([A-Z][a-z]*|\d+|\(|\))/g;
  const matches = formula.match(regex);
  return matches || [];
}

/**
 * Renders a chemical formula string with subscript numbers.
 * Example: "H2O" -> H<sub>2</sub>O
 */
export function renderFormula(formula: string): React.ReactNode {
  const tokens = tokenizeFormula(formula);
  
  return tokens.map((token, index) => {
    // If it's a number, render as subscript
    if (/^\d+$/.test(token)) {
      return <sub key={index} className="text-[0.7em]">{token}</sub>;
    }
    // Otherwise, render normally
    return <React.Fragment key={index}>{token}</React.Fragment>;
  });
}

/**
 * Validates if the user's input matches the target formula.
 * The user's input is an array of tokens, e.g. ['Fe', '2', '(', 'SO4', ')', '3']
 * We just join them and compare to the target formula string.
 * Note: Since the user has radical buttons like 'SO4', the joined string will be 'Fe2(SO4)3',
 * which exactly matches the target formula.
 */
export function checkAnswer(userTokens: string[], targetFormula: string): boolean {
  return userTokens.join('') === targetFormula;
}
