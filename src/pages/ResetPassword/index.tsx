const ResetPassword = () => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
  };
  return (
    <div className="md:max-w-[1100px] m-auto mt-11 font-sans flex flex-col justify-center items-center">
      <p className="text-bold text-xl mb-7">Thay đổi mật khẩu</p>

      <form action="" className="flex flex-col">
        <input
          type="password"
          placeholder="Mật khẩu mới"
          className="w-[320px] h-[45px] p-[10px] text-slate-800 text-sm border border-solid border-slate-400 rounded-xl mb-5 outline-none"
        />
        <input
          type="password"
          placeholder="Nhập lại mật khẩu mới"
          className="w-[320px] h-[45px] p-[10px] text-slate-800 text-sm border border-solid border-slate-400 rounded-xl mb-5 outline-none"
        />
        <div className="flex mb-7 justify-center">
          <button
            className="flex items-center justify-end p-[10px_20px] rounded-solid border-transparent rounded-3xl border bg-[#FA8A2A] text-white hover:bg-orange-400"
            onSubmit={handleSubmit}>
            Thay đổi
          </button>
          <button className="ml-5">Huỷ</button>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
