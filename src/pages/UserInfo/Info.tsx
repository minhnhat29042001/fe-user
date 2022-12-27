import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { updateUser, uploadAvatar } from '../../api/auth';
import Input from '../../component/Common/Input';
import Message from '../../component/Common/Message';
import useUserSlice from '../../hooks/useUserSlice';

const Info = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      name: '',
      username: '',
      password: '',
      email: '',
      birth: '',
      avatar: '',
      phone: '',
      gender: '',
      address: ''
    }
  });

  const { user } = useUserSlice();

  useEffect(() => {
    Object.entries(user).forEach(([k, v]: any) => {
      setValue(k, v);
    });
  }, [user]);

  const { saveUserInformation } = useUserSlice();

  const onSubmit = async (data: any) => {
    // const imageBuffer = new FormData();
    // imageBuffer.append('avatar', data.avatar[0]);
    try {
      // await uploadAvatar(imageBuffer, data?.username);
      const { password, ...rest } = data;
      const res = await updateUser({ ...rest, avatar: '' });
      saveUserInformation(res.data.content);
      alert('Cập nhật thông tin thành công');
    } catch (e: any) {
      alert(`Lỗi: ${e?.response?.data?.errors?.join() || e?.message}`);
    }
  };

  return (
    <div className="shadow-xl p-10 shadow-black/20">
      <form
        action=""
        className="py-10  w-full "
        onSubmit={handleSubmit((data: any) => onSubmit(data))}>
        <Input
          register={{
            ...register('name', {
              required: 'Trường này không được để trống',
              minLength: {
                value: 6,
                message: 'Trường này tối thiểu 6 ký tự'
              }
            })
          }}
          label="Họ và Tên"
          errors={errors?.name?.message}
        />

        <div className="mb-10">
          <label className="capitalize peer-focus:font-medium  text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] ">
            {'gender'}
          </label>
          <div className="flex items-center gap-4">
            <input
              value={'FEMALE'}
              id={'FEMALE'}
              defaultChecked={true}
              type={'radio'}
              {...register('gender', {
                required: 'Trường này không được để trống'
              })}
              placeholder=" "
            />
            <label htmlFor={'FEMALE'} className="cursor-pointer">
              {'Nữ'}
            </label>
          </div>
          <div className="flex items-center gap-4">
            <input
              value={'MALE'}
              id={'MALE'}
              type={'radio'}
              {...register('gender', {
                required: 'Trường này không được để trống'
              })}
              placeholder=" "
            />
            <label htmlFor="MALE" className="cursor-pointer">
              {'Nam'}
            </label>
          </div>
          <Message message={errors?.gender?.message} />
        </div>

        <Input
          type="date"
          register={{
            ...register('birth', {
              required: 'Trường này không được để trống'
            })
          }}
          label="Ngày Sinh"
          errors={errors?.birth?.message}
        />
        <Input
          type="email"
          register={{
            ...register('email', {
              required: 'Trường này không được để trống',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Định dạng email không chính xác'
              }
              
            })
          }}
          label="Email"
          errors={errors?.email?.message}
        />
        <Input
          register={{
            ...register('address', {
              required: 'Trường này không được để trống'
            })
          }}
          label="Địa chỉ"
          errors={errors?.address?.message}
        />

        <Input
          register={{
            ...register('phone', {
              required: 'Trường này không được để trống',
              pattern: {
                value: /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
                message: 'Hãy nhập đúng định dạng số điện thoại'
              }
            })
          }}
          label="phone"
          errors={errors?.phone?.message}
        />
        <Input
          type="file"
          register={{
            ...register('avatar')
          }}
          label="avatar"
          errors={errors?.avatar?.message}
        />
        <button className="bg-clrOrange text-white px-6 py-4 rounded-lg focus:bg-clrOrange/80 transition">
          Cập Nhật
        </button>
      </form>
    </div>
  );
};

export default Info;
