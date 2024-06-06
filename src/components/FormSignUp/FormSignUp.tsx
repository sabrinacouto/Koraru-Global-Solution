'use client';
import React, { useState, FormEvent, ChangeEvent} from "react";
import { cadastrarProfissional } from "@/services/cadastroAPI/cadastroAPI";
import { fetchViaCep} from "@/services/viaCep/viaCepAPI";
import { Address } from "@/types/viaCepTypes";


const FormSignUp = () => {
  const [selectedOption, setSelectedOption] = useState(""); 
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [successMessage, setSuccessMessage] = useState<string>('');

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value); 
  };

  const [inputErrors, setInputErrors] = useState({
    nome: false,
    sobrenome: false,
    telefone: false,
    email: false,
    genero: false,
    nacionalidade:false,
    cep: false,
    logradouro: false,
    especializacao: false,
    atuacao: false,
    numero: false,
    bairro: false,
    localidade: false,
    estado: false,
    senha: false,
    confirmarSenha: false
});

  const [formData, setFormData] = useState({
    nome: "",
    sobrenome: "",
    genero: "",
    nacionalidade: "",
    telefone: "",
    email: "",
    cep: "",
    logradouro: "",
    especializacao: "",
    atuacao: "",
    numero: "",
    complemento: "",
    bairro: "",
    localidade: "",
    estado: "",
    senha: "",
    confirmarSenha: "",
  });

     // Função para lidar com a mudança no campo de confirmação de senha
     const handleConfirmarSenhaChange = (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setFormData({
        ...formData,
        confirmarSenha: value
      });
    
  };


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setInputErrors(prevState => ({
      ...prevState,
      [name]: !value
  }));
  };

  const handleCepBlur = async () => {
    try {
      const addressData: Address = await fetchViaCep(formData.cep);
      setFormData({
        ...formData,
        logradouro: addressData.logradouro,
        bairro: addressData.bairro,
        localidade: addressData.localidade,
        estado: addressData.uf
      });
    } catch (error) {
      console.error('Erro ao buscar CEP:', error);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (formData.senha !== formData.confirmarSenha) {
        setInputErrors({ ...inputErrors, confirmarSenha: true });
        console.error('As senhas não correspondem');
        return; // Não prossegue com o envio do formulário se as senhas não correspondem
      }
      // Aqui você pode chamar a função para cadastrar o profissional com os dados do formulário
      console.log("Dados a serem cadastrados:", formData);
      // await cadastrarProfissional(formData);
      console.log('Cadastro realizado com sucesso!');
      // Faça o que for necessário após o cadastro, como redirecionar o usuário
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
      // Trate o erro conforme necessário
    }
  };
  

  return (
<form onSubmit={handleSubmit} className="shadow-lg rounded-3xl w-[19rem] lg:w-[30rem] bg-gradient-to-b from-[#466379] to-white px-7 pt-9">
  <div className="grid justify-center items-center">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-5">
      <input
        className="border-none outline-none bg-white h-8 shadow-lg rounded-lg p-2 font-montserrat text-xs sm:text-sm text-darkgray placeholder-sm"
        placeholder="Nome*"
        type="text"
        name="nome"
        value={formData.nome}
        onChange={handleInputChange}
      />
      {inputErrors.nome && <span className="text-red-500 text-xs ml-2">Campo obrigatório.</span>}
      <input
        className="border-none outline-none bg-white h-8 shadow-lg rounded-lg p-2 font-montserrat text-xs sm:text-sm text-darkgray placeholder-sm"
        placeholder="Sobrenome*"
        type="text"
        name="sobrenome"
        value={formData.sobrenome}
        onChange={handleInputChange}
      />
      {inputErrors.sobrenome && <span className="text-red-500 text-xs ml-2">Campo obrigatório.</span>}
     <div>
            <select
              className={`border-none outline-none bg-white h-8 shadow-lg rounded-lg w-full font-montserrat text-xs sm:text-sm placeholder-sm ${
                selectedOption !== "" ? "text-black" : "text-[#4B5563] text-opacity-50 font-medium"
              }`}
              name="gender"
              id="gender"
              onChange={handleSelectChange} // Adiciona o evento onChange
            >
              <option value="">Gênero*</option>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
              <option value="prefiro_nao_dizer">Prefiro não dizer</option>
            </select>
            </div>
            {inputErrors.genero && <span className="text-red-500 text-xs ml-2">Campo obrigatório.</span>}
      <input
        className="border-none outline-none bg-white h-8 shadow-lg rounded-lg p-2 font-montserrat text-xs sm:text-sm text-darkgray placeholder-sm"
        placeholder="Nacionalidade*"
        type="text"
        name="nacionalidade"
        value={formData.nacionalidade}
        onChange={handleInputChange}
      />
      {inputErrors.nacionalidade && <span className="text-red-500 text-xs ml-2">Campo obrigatório.</span>}
      <input
        className="border-none outline-none bg-white h-8 shadow-lg rounded-lg p-2 font-montserrat text-xs sm:text-sm text-darkgray placeholder-sm"
        placeholder="Especialização*"
        type="text"
        name="especializacao"
        value={formData.especializacao}
        onChange={handleInputChange}
      />
      {inputErrors.especializacao && <span className="text-red-500 text-xs ml-2">Campo obrigatório.</span>}

      <input
        className="border-none outline-none bg-white h-8 shadow-lg rounded-lg p-2 font-montserrat text-xs sm:text-sm text-darkgray placeholder-sm"
        placeholder="Atuação*"
        type="text"
        name="atuacao"
        value={formData.atuacao}
        onChange={handleInputChange}
      />
      {inputErrors.atuacao && <span className="text-red-500 text-xs ml-2">Campo obrigatório.</span>}
      <input
        className="border-none outline-none bg-white h-8 shadow-lg rounded-lg p-2 font-montserrat text-xs sm:text-sm text-darkgray placeholder-sm"
        placeholder="Email corporativo*"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        
      />
      {inputErrors.email && <span className="text-red-500 text-xs ml-2">Campo obrigatório.</span>}
      <input
        className="border-none outline-none bg-white h-8 shadow-lg rounded-lg p-2 font-montserrat text-xs sm:text-sm text-darkgray placeholder-sm"
        placeholder="Telefone*"
        type="text"
        name="telefone"
        value={formData.telefone}
        onChange={handleInputChange}
      />
       {inputErrors.telefone && <span className="text-red-500 text-xs ml-2">Campo obrigatório.</span>}
      <input
        className="border-none outline-none bg-white h-8 shadow-lg rounded-lg p-2 font-montserrat text-xs sm:text-sm text-darkgray placeholder-sm"
        placeholder="CEP da empresa*"
        type="text"
        name="cep"
        value={formData.cep}
        onChange={handleInputChange}
        onBlur={handleCepBlur}
      />
       {inputErrors.cep && <span className="text-red-500 text-xs ml-2">Campo obrigatório.</span>}
      <input
        className="border-none outline-none bg-white h-8 shadow-lg rounded-lg p-2 font-montserrat text-xs sm:text-sm text-darkgray placeholder-sm"
        placeholder="Logradouro*"
        type="text"
        name="logradouro"
        value={formData.logradouro}
        onChange={handleInputChange}
      />
       {inputErrors.logradouro && <span className="text-red-500 text-xs ml-2">Campo obrigatório.</span>}
      <input
        className="border-none outline-none bg-white h-8 shadow-lg rounded-lg p-2 font-montserrat text-xs sm:text-sm text-darkgray placeholder-sm"
        placeholder="Número*"
        type="text"
        name="numero"
        value={formData.numero}
        onChange={handleInputChange}
      />
       {inputErrors.numero && <span className="text-red-500 text-xs ml-2">Campo obrigatório.</span>}
      <input
        className="border-none outline-none bg-white h-8 shadow-lg rounded-lg p-2 font-montserrat text-xs sm:text-sm text-darkgray placeholder-sm"
        placeholder="Bairro*"
        type="text"
        name="bairro"
        value={formData.bairro}
        onChange={handleInputChange}
      />
    </div>
    {inputErrors.bairro && <span className="text-red-500 text-xs ml-2">Campo obrigatório.</span>}

    <div className="grid grid-cols-1 mt-7 md:mt-5">
      <input
        className="border-none outline-none bg-white h-8 shadow-lg rounded-lg p-2 font-montserrat text-xs sm:text-sm text-darkgray placeholder-sm"
        placeholder="Complemento (opcional)"
        type="text"
        name="complemento"
        value={formData.complemento}
        onChange={handleInputChange}
      />
    </div>


    <div className="grid grid-cols-1 gap-7 md:gap-5 md:grid-cols-2 my-7 md:my-5">
      <input
        className="border-none outline-none bg-white h-8 shadow-lg rounded-lg p-2 font-montserrat text-xs sm:text-sm text-darkgray placeholder-sm"
        placeholder="Cidade*"
        type="text"
        name="localidade"
        value={formData.localidade}
        onChange={handleInputChange}
      />
      {inputErrors.localidade && <span className="text-red-500 text-xs ml-2">Campo obrigatório.</span>}
      <input
        className="border-none outline-none bg-white h-8 shadow-lg rounded-lg p-2 font-montserrat text-xs sm:text-sm text-darkgray placeholder-sm"
        placeholder="Estado*"
        type="text"
        name="estado"
        value={formData.estado}
        onChange={handleInputChange}
      />
    </div>
    {inputErrors.estado && <span className="text-red-500 text-xs ml-2">Campo obrigatório.</span>}

    <div className="grid grid-cols-1 gap-7 md:gap-5">
      <input
        className="border-none outline-none bg-white h-8 shadow-lg rounded-lg p-2 font-montserrat text-xs sm:text-sm text-darkgray placeholder-sm"
        placeholder="Senha*"
        type="password"
        name="senha"
        value={formData.senha}
        onChange={handleInputChange}
        title="Senha"
        required
      />
      {inputErrors.senha && <span className="text-red-500 text-xs ml-2">Campo obrigatório.</span>}
      <input
        className="border-none outline-none bg-white h-8 shadow-lg rounded-lg p-2 font-montserrat text-xs sm:text-sm text-darkgray placeholder-sm"
        placeholder="Confirmar senha*"
        type="password"
        name="confirmarSenha"
        value={formData.confirmarSenha}
        onChange={handleConfirmarSenhaChange}
        title="Senha"
        required
      />
        {inputErrors.confirmarSenha && <span className="text-red-500 text-xs ml-2">As senhas não correspondem.</span>}
     
    </div>
    <button type="submit" className="border-none p-0 my-10 bg-[#002847] hover:bg-[#2D4D66] shadow-lg rounded-lg flex items-center justify-center py-2.5 px-7">
      <span className="font-montserrat text-xs sm:text-sm text-white">Confirmar cadastro</span>
    </button>
    {successMessage && <div className="text-green-500">{successMessage}</div>}
  </div>
</form>

  );
};

export default FormSignUp;

