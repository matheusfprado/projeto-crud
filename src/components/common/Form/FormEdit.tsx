import { Controller, useForm } from 'react-hook-form';
import Input from '../Input/Input';

interface IFormEdit {
  onSubmit: any;
  itemData: any;
  accountId: any;
}

export default function Form({ onSubmit, itemData, accountId }: IFormEdit) {
  const { register, handleSubmit, control } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='grid grid-cols-6 gap-6'>
        <div className='col-span-6 sm:col-span-4'>
          <Controller
            control={control}
            name='name'
            defaultValue={itemData.attributes.name}
            render={({ field: { onChange, ...rest } }) => (
              <Input
                register={register('name')}
                title='Name'
                onChange={onChange}
                name='name'
                id='name'
                type='text'
              />
            )}
          />
        </div>
        <div className='col-span-6 sm:col-span-4'>
          <Controller
            control={control}
            name='email'
            defaultValue={itemData.attributes.email}
            render={({ field: { onChange, ...rest } }) => (
              <Input
                register={register('email')}
                title='E-mail'
                name='email'
                id='email'
                type='email'
              />
            )}
          />
        </div>
        <div className='col-span-6 sm:col-span-4'>
          <Controller
            control={control}
            name='document_number'
            defaultValue={itemData.attributes.document_number}
            render={({ field: { onChange, ...rest } }) => (
              <Input
                register={register('document_number')}
                title='Documento'
                name='document_number'
                id='document_number'
                type='text'
              />
            )}
          />
        </div>
        <div className='pt-20 -ml-80 py-3 bg-gray-50 text-right sm:px-6'>
          <button
            type='submit'
            className='w-96 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
          >
            editar
          </button>
        </div>
      </div>
    </form>
  );
}
