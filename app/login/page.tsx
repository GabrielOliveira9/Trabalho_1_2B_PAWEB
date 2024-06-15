"use client";

import { AuthContext, SignIdData } from "@/context/AuthContext";
import { useForm } from 'react-hook-form';
import { useContext } from "react";

const Login = async ({}) => {
    const {register, handleSubmit} = useForm<SignIdData>();
    const { login, authError } = useContext(AuthContext);

    const handleLogin = async (data : SignIdData) => {
        await login(data);
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <form className="flex flex-col space-y-4" onSubmit={handleSubmit(handleLogin)}>
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">Usuário: </label>
                        <input 
                            {...register('username')}
                            type="text" 
                            name='username' 
                            id='username' 
                            placeholder="Username" 
                            className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Senha: </label>
                        <input 
                            {...register('password')}
                            type="password" 
                            name='password' 
                            id='password' 
                            placeholder="Password" 
                            className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <input 
                        type="submit" 
                        value="Acessar" 
                        className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 transition duration-300 ease-in-out cursor-pointer"
                    />
                </form>
                {authError && <p className="mt-4 text-red-500 text-center">{authError}</p>}
            </div>
        </div>
    );
}

export default Login;
