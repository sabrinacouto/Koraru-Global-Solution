'use client';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import logo from "../../../public/assets/logo.png";
import { loginUser } from '@/services/cadastroAPI/cadastroAPI';
import { FormData } from '@/types/formData';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Faz login do usuário com os dados fornecidos
      const contaProfissional: FormData | null = await loginUser(email, password);

      if (contaProfissional) {
        // Login bem-sucedido
        console.log('Login bem-sucedido', contaProfissional);
        alert('Usuário logado com sucesso!');
      } else {
        // E-mail ou senha incorretos
        setError('E-mail ou senha incorretos.');
      }
    } catch (error: unknown) {
      // Tratamento de erros
      setError('Erro ao fazer login: ' + String(error));
    } finally {
      setLoading(false);
    }
  };
  return (
    <section id="login" className="background-image my-[5rem] bg-cover bg-center">
      <div className="flex justify-center items-center w-full mt-10">
        <div className="container max-w-[90%] sm:max-w-xl w-full sm:w-3/4 bg-white shadow-xl rounded-lg">
        <Image src ={logo} alt = "Logoda empresa. Uma letra K azul envolta de corais" className=' w-[5rem] md:w-[8.5rem] pl-[1.7rem] md:pl-[4.5rem] mb-4'/>
        <div className='px-10 md:px-20'>
          <h2 className="text-7xl font-bold gradient mb-2">Login to your <span className='text-mediumturquoise'>account</span></h2>
          <p className=' text-slategray-300'>Conecte-se em tempo real com o recife de corais.</p>
          </div>

          <div className='px-10 md:px-20 py-9'>
          <form onSubmit={handleSubmit} className="space-y-10  ">
          {error && <p className="text-red-500 text-center mb-6">{error}</p>}
            <div className="mb-6">
              <label htmlFor="email" className="block text-[#808080] text-lg mb-2 ml-2">E-mail <span className='text-lightcoral font-bold'>*</span></label>
              <input
                type="email"
                name="emailInput"
                id="email"
                className="border border-slategray-300 rounded-3xl py-2 px-3 w-full transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#0CBFE3]"
                title="E-mail"
                placeholder="Digite seu email cadastrado"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="passwordInput" className="block text-[#808080] text-lg mb-2 ml-2">Senha <span className='text-lightcoral'>*</span></label>
              <input
                type="password"
                name="passwordInput"
                id="passwordInput"
                placeholder="Digite sua senha"
                title="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className=" border border-slategray-300 rounded-3xl py-2 px-3 w-full transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#0CBFE3]"
                required
              />
            </div>
            <button type="submit" className="bg-lightcoral text-white hover:bg-slate-500 w-full py-2 font-semibold rounded-3xl transition duration-300">
            {loading ? 'Loading...' : 'Login'}
            </button>
            <div className='flex justify-center items-center'>
                
           <div className='w-[4rem] border-t-2 border-slategray-300 mr-2'/> <p className='text-center text-slategray-300'> ou </p> <div className='w-[4rem] border-t-2 border-slategray-300 ml-2'/>

            </div>

        
          </form>


           <Link href="/cadastro" ><button type="submit" className="bg-mediumturquoise text-white  hover:bg-slate-500  w-full py-2 font-semibold rounded-3xl mt-10 transition duration-300">
             Registre-se
             </button></Link>
             </div>
        
        </div>
      </div>
    </section>
  );
};

export default Login;
