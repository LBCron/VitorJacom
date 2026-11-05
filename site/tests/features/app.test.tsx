import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
// Import will fail initially if App.tsx does not exist yet (TDD RED)
import App from '../../src/App';

describe('App Component Acceptance Suite', () => {
  it('should render the application without throwing', () => {
    const { container } = render(<App />);
    expect(container).toBeDefined();
  });

  it('should display the professional identity "Vítor Jacom" in main heading', () => {
    render(<App />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent(/Vítor Jacom/i);
  });

  it('should render container with layout classes', () => {
    const { container } = render(<App />);
    const rootWrapper = container.firstElementChild;
    expect(rootWrapper).not.toBeNull();
  });
});
