import React, { useState } from 'react';
import { RiEyeLine } from 'react-icons/ri';
import Message from './Message';

interface Props {
  register: any;
  label: string;
  type?: string;
  errors?: string;
}

const Input = ({ register, label, type = 'text', errors }: Props) => {
  const [showPass, setShowPass] = useState(false);
  return (
    <div className="relative z-0 mb-6 w-full group ">
      <input
        type={ showPass ? 'text': type}
        {...register}
        className="block py-2.5  px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-clrOrange focus:outline-none focus:ring-0 focus:border-clrOrange peer"
        placeholder=" "
      />
      <label className="capitalize peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-clrOrange peer-focus:dark:text-clrOrange peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
        {label}
      </label>
      {type === 'password' && (
        <button type='button' onClick={() => setShowPass(pre => !pre)} className={`${showPass ? 'text-clrOrange': ''} absolute right-0 top-1/2 -translate-y-3/4  p-4`}>
          <RiEyeLine />
        </button>
      )}
      {errors && <Message message={errors} />}
    </div>
  );
};

export default Input;
