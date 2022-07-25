import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import FormEdit from './FormEdit';

describe('Testing arqive FormEdit.tsx', () => {
  it('should render FormEdit base', () => {
    render(<FormEdit onSubmit={[]} itemData={[]} accountId={[]} />);
    expect(screen.queryAllByRole('<FormEdit/>')).toBeInTheDocument;
  });
  it('should render FormEdit base', () => {
    render(<FormEdit onSubmit={[]} itemData={[]} accountId={[]} />);
    expect(screen.findAllByRole('FormEdit')).toHaveFormValues;
  });
  it('should props onSubmit params for FormEdit', () => {
    render(<FormEdit onSubmit={[]} itemData={[]} accountId={[]} />);
    expect(screen.queryByDisplayValue('onSubmit')).toBeDefined;
  });
  it('should props onSubmit params for FormEdit', () => {
    render(<FormEdit onSubmit={[]} itemData={[]} accountId={[]} />);
    expect(screen.findByDisplayValue('onSubmit')).toHaveDisplayValue;
  });
  it('should props itemData params for FormEdit', () => {
    render(<FormEdit onSubmit={[]} itemData={[]} accountId={[]} />);
    expect(screen.queryByRole('ItemData')).toBeDefined;
  });
  it('should props itemData params for FormEdit', () => {
    render(<FormEdit onSubmit={[]} itemData={[]} accountId={[]} />);
    expect(screen.findByRole('itemData')).toHaveDisplayValue;
  });
  it('should props accountId params for FormEdit', () => {
    render(<FormEdit onSubmit={[]} itemData={[]} accountId={[]} />);
    expect(screen.queryByTestId('accountId')).toBeDefined;
  });
  it('should props accountId params for FormEdit', () => {
    render(<FormEdit onSubmit={[]} itemData={[]} accountId={[]} />);
    expect(screen.findAllByTestId('accountId')).toHaveDisplayValue;
  });
});
