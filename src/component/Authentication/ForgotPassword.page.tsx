import { useState } from 'react';

const className = {
  container: 'container mx-auto p-10 h-screen',
  heading: 'text-2xl',
  button: 'w-[175px] mt-10 bg-clrOrange p-2 rounded-lg font-bold text-clrWhite',
  input:
    'w-[250px] block focus:outline-none transition-all duration-750 focus:border-clrOrange border p-2 rounded-lg mt-2 text-sm'
};
const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const onChangeEmail = (event: any) => {
    setEmail(event.target.value);
  };

  const submitForm = (event: any) => {
    event && event.preventDefault();
    // dispatch(actions.auth.resetPassword({ host: getBaseUrl(), email: email }));
  };

  return (
    <div className={className.container}>
      <form onSubmit={submitForm}>
        <h1 className={className.heading}>Nhập Email của bạn</h1>
        <input
          value={email}
          onChange={onChangeEmail}
          placeholder="Email"
          type="email"
          className={className.input}
        />
        <button className={className.button} type="submit">
          Đặt lại mật khẩu
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
