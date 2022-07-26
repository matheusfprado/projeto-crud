import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import FormEdit from './FormEdit';

describe('Testing arqive FormEdit.tsx', () => {
  it('should render FormEdit base', () => {
    render(<FormEdit onSubmit={[]} itemData={[]} accountId={[]} loading={false} />);
    expect(screen.queryAllByRole('<FormEdit/>')).toBeInTheDocument;
  });
  it('should render FormEdit base', () => {
    render(<FormEdit onSubmit={[]} itemData={[]} accountId={[]} loading={false} />);
    expect(screen.findAllByRole('FormEdit')).toHaveFormValues;
  });
  it('should props onSubmit params for FormEdit', () => {
    render(<FormEdit onSubmit={[]} itemData={[]} accountId={[]} loading={false} />);
    expect(screen.queryByDisplayValue('onSubmit')).toBeDefined;
  });
  it('should props onSubmit params for FormEdit', () => {
    render(<FormEdit onSubmit={[]} itemData={[]} accountId={[]} loading={false} />);
    expect(screen.findByDisplayValue('onSubmit')).toHaveDisplayValue;
  });
  it('should props itemData params for FormEdit', () => {
    render(<FormEdit onSubmit={[]} itemData={[]} accountId={[]} loading={false} />);
    expect(screen.queryByRole('ItemData')).toBeDefined;
  });
  it('should props itemData params for FormEdit', () => {
    render(<FormEdit onSubmit={[]} itemData={[]} accountId={[]} loading={false} />);
    expect(screen.findByRole('itemData')).toHaveDisplayValue;
  });
  it('should props accountId params for FormEdit', () => {
    render(<FormEdit onSubmit={[]} itemData={[]} accountId={[]} loading={false} />);
    expect(screen.queryByTestId('accountId')).toBeDefined;
  });
  it('should props accountId params for FormEdit', () => {
    render(<FormEdit onSubmit={[]} itemData={[]} accountId={[]} loading={false} />);
    expect(screen.findAllByTestId('accountId')).toHaveDisplayValue;
  });
  it('should props loading params for FormEdit', () => {
    render(<FormEdit onSubmit={[]} itemData={[]} accountId={[]} loading={false} />);
    expect(screen.queryByRole('loading')).toBeCalled;
  });
  it('should props loading params for FormEdit', () => {
    render(<FormEdit onSubmit={[]} itemData={[]} accountId={[]} loading={false} />);
    expect(screen.findAllByRole('loading')).toHaveBeenCalled;
  });
});
