// File: lib/utils.js

// Simple class name merger utility
export function cn(...inputs) {
  return inputs
    .filter(Boolean) // Remove false, null, undefined
    .join(" ")       // Join with space
    .trim();          // Clean whitespace
}

export default cn;
