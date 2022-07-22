import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import AuhtContext from './AuthContex';

describe('Testing arquive AuthContext.tsx', () => {
  it('should render AuthContext base', () => {
    render(<AuhtContext />);
    expect(screen.queryAllByRole('<AuhtContext />')).toBeInTheDocument;
  });
  it('should render AuthContext base', () => {
    render(<AuhtContext />);
    expect(screen.queryAllByRole('<AuhtContext />')).not.toBeInTheDocument;
  });
  it('should render AuthContext base', () => {
    render(<AuhtContext />);
    expect(screen.findAllByRole('<AuhtContext />')).toHaveFormValues;
  });
});
