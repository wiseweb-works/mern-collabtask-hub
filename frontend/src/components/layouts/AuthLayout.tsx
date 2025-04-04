import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex">
      <div className="w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12 ">
        <h2 className="text-lg font-medium text-black">
          Collaborative Task HUB
        </h2>
        {children}
      </div>
      <div className="hidden md:flex w-[40vw] h-screen items-center bg-blue-50 bg-[url('/bgimg.jpg')] bg-cover bg-no-repeat bg-center overflow-hidden p-8">
        {/* <img src="" alt="ui-img" className="" /> */}
      </div>
    </div>
  );
};

export default AuthLayout;
