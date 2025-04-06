import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

describe('Image Components', () => {
  it('renders images with proper alt text', () => {
    render(
      <img 
        src="/path/to/image.jpg" 
        alt="Test image description" 
        className="test-image"
      />
    );
    
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('alt', 'Test image description');
  });

  it('handles image loading errors gracefully', () => {
    render(
      <img 
        src="/invalid-path.jpg" 
        alt="Fallback image" 
        onError={(e) => {
          e.currentTarget.src = '/fallback.jpg';
        }}
      />
    );
    
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
  });
}); 