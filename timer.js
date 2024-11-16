/**
 * Calls a callback with a greeting after a delay
 * @param {string} name - The name to greet
 * @param {function(string): void} callback - The callback to call with the greeting
 */
export function delayedGreeting(name, callback) {
    setTimeout(() => {
      callback(`Hello, ${name}!`);
    }, 1000);
  }