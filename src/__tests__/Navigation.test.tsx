import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Navigation from '../components/Navigation';

describe('Navigation', () => {
  it('renders all navigation links', () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    );
    
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /projects/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument();
  });

  it('navigates to correct routes', () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    );
    
    const homeLink = screen.getByRole('link', { name: /home/i });
    const aboutLink = screen.getByRole('link', { name: /about/i });
    
    expect(homeLink).toHaveAttribute('href', '/');
    expect(aboutLink).toHaveAttribute('href', '/about');
  });

  it('highlights active route', () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    );
    
    const activeLink = screen.getByRole('link', { name: /home/i });
    expect(activeLink).toHaveClass('active');
  });
}); 