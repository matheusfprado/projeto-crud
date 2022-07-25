import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Form from './Form';

describe('Testing arqive Form.tsx', () => {
  it('should render Form base', () => {
    render(<Form />);
    expect(screen.queryAllByRole('<Form/>')).toBeInTheDocument;
  });
  it('should render Form base', () => {
    render(<Form />);
    expect(screen.queryAllByRole('<Form/>')).not.toBeInTheDocument;
  });
  it('should render Form base', () => {
    render(<Form />);
    expect(screen.findAllByRole('<Form/>')).toHaveFormValues;
  });
});
