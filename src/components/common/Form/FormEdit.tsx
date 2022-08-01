import { Controller, useForm } from 'react-hook-form';
import Input from '../Input/Input';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { validateCPF } from 'validations-br';
import { toast } from 'react-toastify';
import Reload from '@/assets/img/atualizar.svg';
import { RefreshIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import InputMask from '../Input/InputMask';

interface IFormEdit {
  onSubmit: any;
  itemData: any;
  accountId: any;
  loading: any;
}

export default function Form({ onSubmit, itemData, accountId, loading }: IFormEdit) {
  const notify = () => {
    try {
      toast.success('editado com sucesso', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });
    } catch (errors) {
      toast.error('alguma informação incorreta', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });
    }
  };
  const schema = Yup.object().shape({
    email: Yup.string()
      .trim()
      .lowercase()
      .required('email é obrigatório.')
      .email('email não é válido.')
      .defined(),
    name: Yup.string().required('campo obrigatório'),
    document_number: Yup.string()
      .trim()
      .required('campo é obrigatório.')
      .test(
        'documento não é válido.',
        (value: any) =>
          value !== '000.000.000-00' &&
          value !== '111.111.111-11' &&
          value !== '222.222.222-22' &&
          value !== '333.333.333-33' &&
          value !== '444.444.444-44' &&
          value !== '555.555.555-55' &&
          value !== '666.666.666-66' &&
          value !== '777.777.777-77' &&
          value !== '888.888.888-88' &&
          value !== '999.999.999-99'
      )
      .test('documento não é válido.', (value: any) => validateCPF(value))
      .matches(
        /^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2})$/,
        'documento não é válido.'
      )
  });
  const yupOption = { resolver: yupResolver(schema) };
  const { register, handleSubmit, control, formState } = useForm(yupOption);

  const { errors } = formState;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='grid grid-cols-0 gap-6'>
        <div className='col-span-6 sm:col-span-4'>
          <Controller
            control={control}
            name='name'
            defaultValue={itemData.attributes?.name}
            render={({ field: { onChange, ...rest } }) => (
              <Input
                register={register('name')}
                title='Name'
                onChange={onChange}
                name='name'
                id='name'
                type='text'
                errors={errors}
              />
            )}
          />
        </div>
        <div className='col-span-6 sm:col-span-4'>
          <Controller
            control={control}
            name='email'
            defaultValue={itemData.attributes?.email}
            render={({ field: { onChange, ...rest } }) => (
              <Input
                register={register('email')}
                title='E-mail'
                name='email'
                id='email'
                type='email'
                errors={errors}
              />
            )}
          />
        </div>
        <div className='col-span-6 sm:col-span-4'>
          <Controller
            control={control}
            name='document_number'
            defaultValue={itemData.attributes?.document_number}
            render={({ field: { onChange, ...rest } }) => (
              <InputMask
                mask={'999.999.999-99'}
                register={register('document_number')}
                title='Documento'
                name='document_number'
                id='document_number'
                type='text'
                errors={errors}
              />
            )}
          />
        </div>
        {!loading ? (
          <button
            onClick={notify}
            type='submit'
            className='block w-full h-9 px-10 rounded-md border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
          >
            editar
          </button>
        ) : (
          <button
            disabled
            className='block w-full h-9 px-10 rounded-md border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
          >
            salvando
            <RefreshIcon className='w-5 h-5 animate-spin -mt-5 -ml-2' />
          </button>
        )}
      </div>
    </form>
  );
}
