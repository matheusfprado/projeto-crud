import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ModalEdit from './ModalEdit';

describe('Testing arquive ModalEdit.tsx', () => {
  it('should render ModalEdit base', () => {
    render(
      <ModalEdit open={false} setOpen={[]} itemData={[]} accountId={[]} updateUser={[]} />
    );
    expect(screen.queryAllByRole('<ModalEdit/>')).toBeInTheDocument;
  });
  it('should render ModalEdit base', () => {
    render(
      <ModalEdit open={false} setOpen={[]} itemData={[]} accountId={[]} updateUser={[]} />
    );
    expect(screen.findAllByRole('<ModalEdit/>')).toHaveDisplayValue;
  });
  it('should props open params ModalEdit', () => {
    render(
      <ModalEdit open={false} setOpen={[]} itemData={[]} accountId={[]} updateUser={[]} />
    );
    expect(screen.queryByRole('open')).toBeFalsy;
  });
  it('should props setOpen params ModalEdit', () => {
    render(
      <ModalEdit open={false} setOpen={[]} itemData={[]} accountId={[]} updateUser={[]} />
    );
    expect(screen.queryByRole('setOpen')).toBeDefined;
  });
  it('should props itemData params ModalEdit', () => {
    render(
      <ModalEdit open={false} setOpen={[]} itemData={[]} accountId={[]} updateUser={[]} />
    );
    expect(screen.queryAllByDisplayValue('itemData')).toBeDefined;
  });
  it('should props itemData params ModalEdit', () => {
    render(
      <ModalEdit open={false} setOpen={[]} itemData={[]} accountId={[]} updateUser={[]} />
    );
    expect(screen.findByDisplayValue('itemData')).toHaveDisplayValue;
  });
  it('should props accountId params ModalEdit', () => {
    render(
      <ModalEdit open={false} setOpen={[]} itemData={[]} accountId={[]} updateUser={[]} />
    );
    expect(screen.queryAllByTestId('accountId')).toBeDefined;
  });
  it('should props updateUser params ModalEdit', () => {
    render(
      <ModalEdit open={false} setOpen={[]} itemData={[]} accountId={[]} updateUser={[]} />
    );
    expect(screen.queryAllByDisplayValue('updateUser')).toBeDefined;
  });
});
