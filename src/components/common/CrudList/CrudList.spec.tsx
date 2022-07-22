import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CrudList from './CrudList';

describe('Testing arquive CrudList.tsx', () => {
  it('should render CrudList base ', () => {
    render(
      <CrudList
        deleteUser={'delete'}
        accountId={'id'}
        reponseUpdate={'response'}
        handleOpen={[]}
        setOpen={'open'}
        data={[]}
      />
    );
    expect(screen.queryByRole('CrudList')).toBeInTheDocument;
  });
  it('should render CrudList', () => {
    render(
      <CrudList
        deleteUser={'delete'}
        accountId={'id'}
        reponseUpdate={'response'}
        handleOpen={[]}
        setOpen={'open'}
        data={[]}
      />
    );
    expect(screen.findByRole('Crudlist')).toHaveBeenCalled;
  });
  it('should props deleteUser params for CrudList', () => {
    render(
      <CrudList
        deleteUser={'delete'}
        accountId={'id'}
        reponseUpdate={'response'}
        handleOpen={[]}
        setOpen={'open'}
        data={[]}
      />
    );
    expect(screen.queryAllByRole('deleteUser')).toBeDefined;
  });
  it('should props accountId params for CrudList', () => {
    render(
      <CrudList
        deleteUser={'delete'}
        accountId={'id'}
        reponseUpdate={'response'}
        handleOpen={[]}
        setOpen={'open'}
        data={[]}
      />
    );
    expect(screen.queryAllByTestId('accountId')).toBeDefined;
  });
  it('should props responseUpdate params for CrudList', () => {
    render(
      <CrudList
        deleteUser={'delete'}
        accountId={'id'}
        reponseUpdate={'response'}
        handleOpen={[]}
        setOpen={open}
        data={[]}
      />
    );
    expect(screen.queryAllByRole('responseUpdate')).toBeDefined;
  });
  it('should props handleOpen params for CrudList', () => {
    render(
      <CrudList
        deleteUser={'delete'}
        accountId={'id'}
        reponseUpdate={'response'}
        handleOpen={[]}
        setOpen={'open'}
        data={[]}
      />
    );
    expect(screen.queryByRole('handleOpen')).toBeCalled;
  });
  it('should props setOpen params for CruidList', () => {
    render(
      <CrudList
        deleteUser={'delete'}
        accountId={'id'}
        reponseUpdate={'response'}
        handleOpen={[]}
        setOpen={'open'}
        data={[]}
      />
    );
    expect(screen.queryByRole('setOpen')).toBeCalled;
  });
  it('should props data params for CruidList', () => {
    render(
      <CrudList
        deleteUser={'delete'}
        accountId={'id'}
        reponseUpdate={'response'}
        handleOpen={[]}
        setOpen={'open'}
        data={[]}
      />
    );
    expect(screen.queryByDisplayValue('data')).toBeDefined;
  });
});
