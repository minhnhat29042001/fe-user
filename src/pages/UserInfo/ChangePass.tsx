import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { changePassword } from '../../api/auth';
import Input from '../../component/Common/Input';
import Message from '../../component/Common/Message';
import useUserSlice from '../../hooks/useUserSlice';



const ChangePass = () => {

  const defaultValues = {
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  }

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    defaultValues,
  });

  const nav = useNavigate()

  const [errorSer, setErrorSer] = useState();

  const { token, user } = useUserSlice();

  const onSubmit = async (data: any) => {
    try {
      await changePassword({username: user?.username, ...data});
      reset(defaultValues)
      alert("Đổi mật khẩu thành công")
    } catch (e: any) {
      alert(`Lỗi: ${e?.response?.data?.errors || e?.message}`);
    }
  };

  return (
    <div className='shadow-xl p-10 shadow-black/20'>
      <form action="" className="py-10  w-full" onSubmit={handleSubmit((data) => onSubmit(data))}>
        <Input
          register={{
            ...register('oldPassword', {
              required: 'Trường này không được để trống'
            })
          }}
          type="password"
          label={'mật khẩu hiện tại'}
          errors={errors?.oldPassword?.message}
        />
        <Input
          register={{
            ...register('newPassword', {
              required: 'Trường này không được để trống',
              pattern: {
                value: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/,
                message:
                  'Mật khẩu có ít nhất 6 ký tự, ít nhất một chữ số, ít nhất một ký tự đặc biệt và ít nhất một ký tự viết hoa'
              },
              maxLength: {
                value: 20,
                message: 'Password không quá 20 ký tự'
              }
            })
          }}
          type="password"
          label={'mật khẩu mới'}
          errors={errors?.newPassword?.message}
        />
        <Input
          register={{
            ...register('confirmPassword', {
              validate: (value: any) => value === watch('newPassword') || 'Password không hợp lệ'
            })
          }}
          type="password"
          label="Nhập lại mật khẩu mới"
          errors={errors?.confirmPassword?.message}
        />
        <button className="bg-clrOrange text-white px-6 py-4 rounded-lg focus:bg-clrOrange/80 transition">
          Thay đổi
        </button>
      </form>

      <div className="">
        <Message message={errorSer} />
      </div>
    </div>
  );
};

export default ChangePass;
