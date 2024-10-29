const HeaderAdmin = () => {
  return (
    <header className="flex justify-between items-center w-full mt-[30px] px-[40px] ">
      <div>
        <img
          className="max-w-[70px] w-full h-[40px]"
          src="/public/images/logo.png"
          alt="logo"
        />
      </div>
      <div>
        <img
          className="max-w-[41px]"
          src="/public/icons/arrowLeft.svg"
          alt=""
        />
      </div>
    </header>
  );
};

export default HeaderAdmin;
