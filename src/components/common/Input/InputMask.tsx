import { ExclamationCircleIcon } from '@heroicons/react/outline';
import InputMask from 'react-input-mask';

type InputProps = {
  name: string;
  id: string;
  type: string;
  register: {};
  placeholder?: string;
  value?: string;
  title: string;
  errors: object | any;
  onChange?: any;
  mask: any;
};

export default function Input({
  name,
  id,
  type,
  value,
  placeholder,
  register,
  title,
  errors,
  mask,
  ...props
}: InputProps) {
  return (
    <div>
      <div className='relative'>
        <label htmlFor={name} className='block text-sm font-medium text-gray-700'>
          {title}
        </label>
        <InputMask
          mask={mask}
          {...register}
          {...props}
          name={name}
          id={id}
          type={type}
          value={value}
          required
          placeholder={placeholder}
          className='block w-full h-9 rounded-md px-2 border'
        />
      </div>
      <p className='absolute mt-2 text-sm text-gray-600 '>
        {errors[name]?.message && (
          <div className='inset-y-0 -mt-2 right-0 pr-1 flex items-center pointer-events-none font-normal gap-x-6'>
            <div className='-mt-4'>
              {' '}
              <ExclamationCircleIcon
                className='h-5 w-5 text-red-500 bg-trasparent absolute'
                aria-hidden='true'
              />
            </div>
            <div className='relative text-red-500'>{errors[name]?.message}</div>
          </div>
        )}
      </p>
    </div>
  );
}
