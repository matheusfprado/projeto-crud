import { ExclamationCircleIcon } from '@heroicons/react/outline';

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
  maxlength?: number;
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
  maxlength,
  ...props
}: InputProps) {
  return (
    <div>
      <div className='relative'>
        <label htmlFor={name} className='block text-sm font-medium text-gray-700'>
          {title}
        </label>
        <input
          {...register}
          {...props}
          maxLength={maxlength}
          name={name}
          id={id}
          type={type}
          value={value}
          placeholder={placeholder}
          className='block w-96 h-9 rounded-md px-2 border'
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
