import { render, screen } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  // Just asserts that compiling and rendering doesn't throw a fatal JS crash
  render(<App />); 
});
