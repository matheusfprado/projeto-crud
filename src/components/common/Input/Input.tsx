type InputProps = {
  name: string;
  id: string;
  type: string;
  register: {};
  placeholder?: string;
  value?: string;
  title: string;
  onChange?: any;
};

export default function Input({
  name,
  id,
  type,
  value,
  placeholder,
  register,
  title,
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
          name={name}
          id={id}
          type={type}
          value={value}
          placeholder={placeholder}
          className='block w-96 h-9 rounded-md px-2 border'
        />
      </div>
    </div>
  );
}
