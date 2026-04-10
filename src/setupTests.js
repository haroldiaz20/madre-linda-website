// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Mock IntersectionObserver: treat all observed elements as in-view so reveal animations and hooks behave in tests
global.IntersectionObserver = class IntersectionObserver {
  constructor(callback) {
    this.callback = callback;
  }
  observe(target) {
    if (typeof this.callback === 'function') {
      this.callback(
        [
          {
            isIntersecting: true,
            intersectionRatio: 1,
            boundingClientRect: target.getBoundingClientRect?.() ?? {},
            intersectionRect: {},
            rootBounds: null,
            target,
            time: Date.now(),
          },
        ],
        this,
      );
    }
  }
  unobserve() {}
  disconnect() {}
};

// Mock window.scrollTo and scroll event support
Object.defineProperty(window, 'scrollTo', { value: jest.fn(), writable: true });

Element.prototype.scrollIntoView = jest.fn();
