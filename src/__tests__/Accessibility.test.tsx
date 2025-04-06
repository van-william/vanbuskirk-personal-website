import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../App';

describe('Accessibility', () => {
  it('has proper heading hierarchy', () => {
    render(<App />);
    
    const headings = screen.getAllByRole('heading');
    const headingLevels = headings.map(heading => 
      parseInt(heading.tagName.replace('H', ''))
    );
    
    // Check if heading levels are sequential
    for (let i = 1; i < headingLevels.length; i++) {
      expect(headingLevels[i] - headingLevels[i - 1]).toBeLessThanOrEqual(1);
    }
  });

  it('has proper ARIA labels', () => {
    render(<App />);
    
    // Check for proper ARIA labels on interactive elements
    const buttons = screen.getAllByRole('button');
    buttons.forEach(button => {
      expect(button).toHaveAttribute('aria-label');
    });
  });

  it('has proper color contrast', () => {
    render(<App />);
    
    // Check text elements for sufficient contrast
    const textElements = screen.getAllByText(/./);
    textElements.forEach(element => {
      const style = window.getComputedStyle(element);
      const backgroundColor = style.backgroundColor;
      const color = style.color;
      
      // You might want to use a library like color-contrast-checker
      // for actual contrast ratio calculation
      expect(backgroundColor).not.toBe(color);
    });
  });
}); 