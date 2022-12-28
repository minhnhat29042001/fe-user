import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { forgotPassword } from '../../api/auth';
import Message from '../../component/Common/Message';

const Forgot = () => {
  const { register, handleSubmit, formState: {errors}, reset } = useForm();



  const onSubmit = async (data: any) => {
    try {
      const res = await forgotPassword(data, window.location.origin)
      alert(res.data?.content)
      reset()
    } catch (error: any) {
      alert(`Lỗi: ${error.response?.data?.message || error?.message}` )
    }
  }


  return (
    <div className="bg-no-repeat bg-center bg-cover" style={{backgroundImage: `url(https://media.istockphoto.com/id/1394017961/photo/coffee-beans-background-roasted-coffee-beans-view-from-above-coffee-concept-mock-up.jpg?b=1&s=170667a&w=0&k=20&c=LVj75xGlUZB_4I9Dn-BTkARsHlipYbvOUXdgqUV5dso=)`}}>
      <div className="container mx-auto px-10">

        <div  className=" h-[100vh] flex justify-center items-center">
          <form
            onSubmit={handleSubmit((data) => onSubmit(data))}
            className="w-1/2 px-10 py-10 shadow-md shadow-black/20 bg-white rounded-lg">
            <div className="flex flex-col">
              <span className="capitalize text-2xl mb-2">Nhap Email cua ban</span>
              <input
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
                type="text"
                className="w-full focus:outline-none transition-all duration-750 focus:border-clrOrange border p-2 rounded-lg mt-2 text-sm"
                placeholder="Email"
              />
              {errors?.email && <Message  message={errors?.email.message}/>}
            </div>
            <button className="bg-clrOrange text-white px-2 py-3 rounded-lg mt-4">
              Lấy Lại Mật Khẩu
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
