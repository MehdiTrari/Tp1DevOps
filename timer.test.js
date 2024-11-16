// timer.test.js
import { expect, test, vi } from 'vitest'
import { delayedGreeting } from './timer.js'

test('delayedGreeting calls callback with correct message', () => {
  // Arrange
  vi.useFakeTimers();
  const callback = vi.fn();

  // Act
  delayedGreeting('Alice', callback);
  vi.runAllTimers();

  // Assert
  expect(callback).toHaveBeenCalledWith('Hello, Alice!');
  vi.useRealTimers();
});