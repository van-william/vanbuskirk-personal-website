import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { act } from 'react-dom/test-utils';

describe('Responsive Design', () => {
  it('adapts to mobile viewport', () => {
    // Mock window.innerWidth
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 375,
    });

    // Trigger resize event
    act(() => {
      window.dispatchEvent(new Event('resize'));
    });

    render(<App />);
    
    // Check for mobile-specific elements or classes
    expect(screen.getByTestId('mobile-menu')).toBeInTheDocument();
    expect(screen.getByTestId('mobile-menu')).toHaveClass('mobile');
  });

  it('adapts to desktop viewport', () => {
    // Mock window.innerWidth
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024,
    });

    // Trigger resize event
    act(() => {
      window.dispatchEvent(new Event('resize'));
    });

    render(<App />);
    
    // Check for desktop-specific elements or classes
    expect(screen.getByTestId('desktop-menu')).toBeInTheDocument();
    expect(screen.getByTestId('desktop-menu')).toHaveClass('desktop');
  });
}); 