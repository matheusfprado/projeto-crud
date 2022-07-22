import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ModalCrud from './ModalCrud';

describe('Testing arquive MadalCrud.tsx', () => {
  it('should render ModalCrud base', () => {
    render(<ModalCrud open={false} setOpen={[]} createUser={[]} />);
    expect(screen.queryAllByRole('<ModalCrud/>')).toBeInTheDocument;
  });
  it('should render ModalCrud base', () => {
    render(<ModalCrud open={false} setOpen={[]} createUser={[]} />);
    expect(screen.findAllByRole('<ModalCrud/>')).toHaveBeenCalled;
  });
  it('should render ModalCrud base', () => {
    render(<ModalCrud open={false} setOpen={[]} createUser={[]} />);
    expect(screen.queryAllByRole('<ModalCrud/>')).toBeInTheDocument;
  });
  it('should props open params ModalCrud', () => {
    render(<ModalCrud open={false} setOpen={[]} createUser={[]} />);
    expect(screen.queryAllByRole('open')).toBeFalsy;
  });
  it('should props setOpen params ModalCrud', () => {
    render(<ModalCrud open={false} setOpen={[]} createUser={[]} />);
    expect(screen.queryByRole('setOpen')).toBeDefined;
  });
  it('should props createUser params ModalCrud', () => {
    render(<ModalCrud open={false} setOpen={[]} createUser={[]} />);
    expect(screen.queryByDisplayValue('createUser')).toBeDefined;
  });
});
