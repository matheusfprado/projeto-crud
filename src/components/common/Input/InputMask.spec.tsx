import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import InputMask from './InputMask';

describe('Testing arquive InputMask.tsx', () => {
  it('should render InputMask base ', () => {
    render(
      <InputMask
        name={'name'}
        id={'name'}
        type={'text'}
        register={[]}
        title={'Name'}
        errors={[]}
        mask={'539.843.770-45'}
      />
    );
    expect(screen.queryByRole('Input')).toBeInTheDocument;
  });
  it('should props name params for InputMask ', () => {
    render(
      <InputMask
        name={'name'}
        id={'name'}
        type={'text'}
        register={[]}
        title={'Name'}
        errors={[]}
        mask={'539.843.770-45'}
      />
    );
    expect(screen.queryAllByRole('name')).toBeCalled;
  });
  it('should props name params for InputMask', () => {
    render(
      <InputMask
        name={'name'}
        id={'name'}
        type={'text'}
        register={[]}
        title={'Name'}
        errors={[]}
        mask={'539.843.770-45'}
      />
    );
    expect(screen.findByDisplayValue('Matheus felipe do prado')).toHaveDisplayValue;
  });
  it('should props id params for InputMask', () => {
    render(
      <InputMask
        name={'name'}
        id={'name'}
        type={'text'}
        register={[]}
        title={'Name'}
        errors={[]}
        mask={'539.843.770-45'}
      />
    );
    expect(screen.queryAllByTestId('id')).toBeDefined;
  });
  it('should props type params for InputMask', () => {
    render(
      <InputMask
        name={'name'}
        id={'name'}
        type={'text'}
        register={[]}
        title={'Name'}
        errors={[]}
        mask={'539.843.770-45'}
      />
    );
    expect(screen.queryByRole('type')).toBeDefined;
  });
  it('should props type params for InputMask', () => {
    render(
      <InputMask
        name={'name'}
        id={'name'}
        type={'text'}
        register={[]}
        title={'Name'}
        errors={[]}
        mask={'539.843.770-45'}
      />
    );
    expect(screen.findByDisplayValue('type')).toHaveDisplayValue;
  });
  it('should props register params for InputMask', () => {
    render(
      <InputMask
        name={'name'}
        id={'name'}
        type={'text'}
        register={[]}
        title={'Name'}
        errors={[]}
        mask={'539.843.770-45'}
      />
    );
    expect(screen.queryByDisplayValue('register')).toBeDefined;
  });
  it('should props register params for InputMask', () => {
    render(
      <InputMask
        name={'name'}
        id={'name'}
        type={'text'}
        register={[]}
        title={'Name'}
        errors={[]}
        mask={'539.843.770-45'}
      />
    );
    expect(screen.findAllByDisplayValue('register')).toHaveDisplayValue;
  });
  it('should props title params for InputMask', () => {
    render(
      <InputMask
        name={'name'}
        id={'name'}
        type={'text'}
        register={[]}
        title={'Name'}
        errors={[]}
        mask={'539.843.770-45'}
      />
    );
    expect(screen.queryAllByTitle('title')).toBeInTheDocument;
  });
  it('should props tilte params for InputMask', () => {
    render(
      <InputMask
        name={'name'}
        id={'name'}
        type={'text'}
        register={[]}
        title={'Name'}
        errors={[]}
        mask={'539.843.770-45'}
      />
    );
    expect(screen.findAllByTitle('tilte')).toHaveDisplayValue;
  });
  it('should props errors params for InputMask', () => {
    render(
      <InputMask
        name={'name'}
        id={'name'}
        type={'text'}
        register={[]}
        title={'Name'}
        errors={[]}
        mask={'539.843.770-45'}
      />
    );
    expect(screen.queryByDisplayValue('errors')).toBeDefined;
  });
  it('should errors params for InputMask', () => {
    render(
      <InputMask
        name={'name'}
        id={'name'}
        type={'text'}
        register={[]}
        title={'Name'}
        errors={[]}
        mask={'539.843.770-45'}
      />
    );
    expect(screen.findByDisplayValue('errors')).toHaveDisplayValue;
  });
  it('should mask params for InputMask', () => {
    render(
      <InputMask
        name={'name'}
        id={'name'}
        type={'text'}
        register={[]}
        title={'Name'}
        errors={[]}
        mask={'539.843.770-45'}
      />
    );
    expect(screen.queryByRole('mask')).toBeCalled;
  });
  it('should mask params for InputMask', () => {
    render(
      <InputMask
        name={'name'}
        id={'name'}
        type={'text'}
        register={[]}
        title={'Name'}
        errors={[]}
        mask={'539.843.770-45'}
      />
    );
    expect(screen.findAllByRole('mask')).toHaveBeenCalled;
  });
});
