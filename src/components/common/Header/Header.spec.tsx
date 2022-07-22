import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from './Header';
import Logo from '@/assets/img/logo.svg';

describe('Testing arquive Header.tsx', () => {
  it('should render Header base', () => {
    render(<Header image={Logo} />);
    expect(screen.queryByRole('Header')).toBeInTheDocument;
  });
});
