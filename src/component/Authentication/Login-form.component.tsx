/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { EGender, IUserRegisterParams } from '../../api/auth';
import { Images } from '../../assets/image';
import useUserSlice from '../../hooks/useUserSlice';
import { actions } from '../../store';
import Input from '../Common/Input';
import Message from '../Common/Message';
import Image from '../Image.component';

const styles = {
  container: 'h-screen w-full bg-clrLightGrey z-60 absolute top-0 left-0',
  formContainer: 'bg-clrWhite opacity-100 w-1/4 rounded-md mx-auto mt-10',
  form: 'px-3 pb-3',
  input:
    'w-full focus:outline-none transition-all duration-750 focus:border-clrOrange border p-2 rounded-lg mt-2 text-sm',
  button: 'mt-2 bg-clrOrange p-2 rounded-lg w-full font-bold text-clrWhite'
};

interface Form {
  username: string;
  password: string;
  confirmPassword: string;
  email: string;
  phone: string;
  name: string;
  gender: string;
  birth: string;
  address: string;
}

export const LoginForm = (props: { visible: boolean; onClose: any }) => {
  const { visible, onClose } = props;
  const [isLogin, setIsLogin] = useState(true);

  const dispatch = useDispatch();

  const loginUser = (data: any) => {
    dispatch(actions.auth.login(data));
  };
  const registerUser = (data: Form) => {
    dispatch(actions.auth.register(data));
  };

  const handleSubmitForm = (data: Form) => {
    isLogin ? loginUser({ username: data.username, password: data.password }) : registerUser(data);
  };
  useEffect(() => {
    if (!visible) {
      setIsLogin(true);
    }
  }, [visible]);

  useEffect(() => {}, [isLogin]);

  useEffect(() => {}, []);

  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
    clearErrors
  } = useForm<Form>();

  // const { errorLogin, errorRegister } = useUserSlice();

  // const isErrors = errorLogin || errorRegister;

  const clearAllErrors = () => Object.entries(errors).forEach(([k]) => clearErrors(k as any));

  return visible ? (
    <div className=" w-full bg-clrLightGrey z-60 fixed inset-0" onClick={onClose}>
      <div className={"absolute top-1/2  left-1/2 -translate-y-1/2 -translate-x-1/2 flex justify-center"} onClick={(event) => event.stopPropagation()}>
        <div className=" lg:w-1/2 bg-white ">
            <Image src={Images.imgLoginBanner} height={'100%'} width={'100%'} />
            <p className="text-sm mt-3 text-center">Đăng nhập và chọn món ưa thích của bạn</p>
            <form className={'w-full pl-10 pr-6 py-10 '} onSubmit={handleSubmit(handleSubmitForm)}>
              <div className="overflow-y-auto  max-h-[500px] scroll pt-5">
                <Input
                  register={{
                    ...register('username', {
                      required: 'Trường này không được để trống',
                      maxLength: {
                        value: 15,
                        message: 'Username không quá 15 ký tự'
                      }
                    })
                  }}
                  label="username"
                  errors={errors?.username?.message}
                />
                {isLogin ? (
                  <Input
                    register={{
                      ...register('password', {
                        required: 'Trường này không được để trống'
                      })
                    }}
                    type="password"
                    label={'password'}
                    errors={errors?.password?.message}
                  />
                ) : (
                  <Input
                    register={{
                      ...register('password', {
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
                    label={'password'}
                    errors={errors?.password?.message}
                  />
                )}

                {!isLogin && (
                  <>
                    <Input
                      register={{
                        ...register('confirmPassword', {
                          validate: (value: any) => value === watch('password') || 'Password không hợp lệ'
                        })
                      }}
                      type="password"
                      label="Nhập lại mật khẩu"
                      errors={errors?.confirmPassword?.message}
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
                  </>
                )}
              </div>

              {/* {isErrors && (
                <div className="">
                  <Message message={`Lỗi: ${isErrors}`} />
                </div>
              )} */}

              <button className={styles.button} type="submit">
                {isLogin ? 'Đăng Nhập' : 'Đăng ký'}
              </button>
              <p className="text-sm text-center my-2">
                {isLogin ? 'Chưa có tài khoản ? ' : 'Đã có tài khoản ? '}
                <span className="text-clrOrange">
                  <button
                    type="button"
                    onClick={() => {
                      setIsLogin((pre) => !pre), clearAllErrors();
                    }}>
                    {isLogin ? 'Đăng ký ngay!' : 'Đăng nhập'}
                  </button>
                </span>
              </p>
              <span className="text-clrOrange text-sm">
                <Link to="/forgot" className="text-center w-full" onClick={onClose}>
                  Quên mật khẩu ?
                </Link>
              </span>
            </form>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};
