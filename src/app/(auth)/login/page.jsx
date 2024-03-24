"use client"

import { useState } from "react";
import Validation from "./validation";

export default function LoginPage(){

    const [value, setValue] = useState({
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({});


    const handleOnClick = (e) => {
        e.preventDefault();
        const validationErrors = Validation(value);
    if (Object.keys(validationErrors).length === 0) {
      // Jika tidak ada error, pindah ke halaman home
      window.location.href = "/";
    } else {
      // Jika terdapat error, set error ke state
      setErrors(validationErrors);
    }
    };

    const handleOnChange = (e) => {
        setValue({
          ...value,
          [e.target.name]: e.target.value,
        });
      };
    return(
    
    <div className="flex flex-col items-center justify-between p-24">
        <div className="w-full max-w-xs p-4 bg-white border border-gray-200 rounded-lg shadow-lg sm:p-6 md:p-8">
            <form className="space-y-6" action="#">
                <h5 className="flex flex-col items-center text-xl font-medium text-gray-900 dark:text-black">Sign in</h5>
                <div>
                    <input type="email" value={value.email} onChange={handleOnChange} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black" placeholder="Username/Email" required />
                    {errors.email && <h1 className="italic text-red-400">{errors.email}</h1>}
                </div>
                <div>
                    <input type="password" value={value.password} onChange={handleOnChange} name="password" id="password" placeholder="Masukan Password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black" required />
                    {errors.email && <h1 className="italic text-red-400">{errors.password}</h1>}
                </div>
                <button type="submit" onClick={handleOnClick} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-3.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
            </form>
        </div>
    </div>

    )
}