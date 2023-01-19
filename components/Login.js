import Image from "next/image";
import React from "react";
import { signIn } from "next-auth/react";
const Login = () => {
  return (
    <div className="grid place-items-center gap-5">
      <Image
        className="mt-20"
        src="https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-large-transparent-png.png"
        width={350}
        height={350}
        alt=""
        style={{ objectFit: "cover" }}
        priority={true}
      />
      <h1
        onClick={signIn}
        className="p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer font-medium"
      >
        Login in To Facebook
      </h1>
    </div>
  );
};

export default Login;
