import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../Input/Input';

export default function Form({ onSubmit }: any) {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='grid grid-cols-6 gap-6'>
        <div className='col-span-6 sm:col-span-4'>
          <Input
            register={register('name')}
            title='Name'
            name='name'
            id='name'
            type='text'
          />
        </div>
        <div className='col-span-6 sm:col-span-4'>
          <Input
            register={register('email')}
            title='E-mail'
            name='email'
            id='email'
            type='email'
          />
        </div>
        <div className='col-span-6 sm:col-span-4'>
          <Input
            register={register('document_number')}
            title='Documento'
            name='document_number'
            id='document_number'
            type='text'
          />
        </div>
        <div className='pt-20 -ml-80 py-3 bg-gray-50 text-right sm:px-6'>
          <button
            type='submit'
            className='w-96 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
          >
            salvar
          </button>
        </div>
      </div>
    </form>
  );
}
