import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Input from './Input';

describe('Testing arquive Input.tsx', () => {
  it('should render Input base ', () => {
    render(
      <Input
        name={'name'}
        id={'name'}
        type={'text'}
        register={[]}
        title={'Name'}
        errors={[]}
      />
    );
    expect(screen.queryByRole('Input')).toBeInTheDocument;
  });
  it('should props name params for Input ', () => {
    render(
      <Input
        name={'name'}
        id={'name'}
        type={'text'}
        register={[]}
        title={'Name'}
        errors={[]}
      />
    );
    expect(screen.queryAllByRole('name')).toBeCalled;
  });
  it('should props name params for Input', () => {
    render(
      <Input
        name={'name'}
        id={'name'}
        type={'text'}
        register={[]}
        title={'Name'}
        errors={[]}
      />
    );
    expect(screen.findByDisplayValue('Matheus felipe do prado')).toHaveDisplayValue;
  });
  it('should props id params for Input', () => {
    render(
      <Input
        name={'name'}
        id={'name'}
        type={'text'}
        register={[]}
        title={'Name'}
        errors={[]}
      />
    );
    expect(screen.queryAllByTestId('id')).toBeDefined;
  });
  it('should props type params for Input', () => {
    render(
      <Input
        name={'name'}
        id={'name'}
        type={'text'}
        register={[]}
        title={'Name'}
        errors={[]}
      />
    );
    expect(screen.queryByRole('type')).toBeDefined;
  });
  it('should props type params for Input', () => {
    render(
      <Input
        name={'name'}
        id={'name'}
        type={'text'}
        register={[]}
        title={'Name'}
        errors={[]}
      />
    );
    expect(screen.findByDisplayValue('type')).toHaveDisplayValue;
  });
  it('should props register params for Input', () => {
    render(
      <Input
        name={'name'}
        id={'name'}
        type={'text'}
        register={[]}
        title={'Name'}
        errors={[]}
      />
    );
    expect(screen.queryByDisplayValue('register')).toBeDefined;
  });
  it('should props register params for Input', () => {
    render(
      <Input
        name={'name'}
        id={'name'}
        type={'text'}
        register={[]}
        title={'Name'}
        errors={[]}
      />
    );
    expect(screen.findAllByDisplayValue('register')).toHaveDisplayValue;
  });
  it('should props title params for Input', () => {
    render(
      <Input
        name={'name'}
        id={'name'}
        type={'text'}
        register={[]}
        title={'Name'}
        errors={[]}
      />
    );
    expect(screen.queryAllByTitle('title')).toBeInTheDocument;
  });
  it('should props tilte params for Input', () => {
    render(
      <Input
        name={'name'}
        id={'name'}
        type={'text'}
        register={[]}
        title={'Name'}
        errors={[]}
      />
    );
    expect(screen.findAllByTitle('tilte')).toHaveDisplayValue;
  });
  it('should props errors params for Input', () => {
    render(
      <Input
        name={'name'}
        id={'name'}
        type={'text'}
        register={[]}
        title={'Name'}
        errors={[]}
      />
    );
    expect(screen.queryByDisplayValue('errors')).toBeDefined;
  });
  it('should errors register params for Input', () => {
    render(
      <Input
        name={'name'}
        id={'name'}
        type={'text'}
        register={[]}
        title={'Name'}
        errors={[]}
      />
    );
    expect(screen.findByDisplayValue('errors')).toHaveDisplayValue;
  });
});
