'use client';
import React, { useState } from "react";
import { cadastrarProfissional } from "@/services/cadastroAPI/cadastroAPI";


const FormSignUp = () => {
  const [selectedOption, setSelectedOption] = useState(""); // Estado para armazenar a opção selecionada

const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  setSelectedOption(event.target.value); // Atualiza o estado com a opção selecionada
};

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
  confirmarSenha: ""
});

const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = event.target;
  setFormData({
    ...formData,
    [name]: value
  });
};

const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  try {
    const response = await cadastrarProfissional(formData); // Chama a função da API
    console.log('Cadastro realizado com sucesso!', response);
    // Faça o que for necessário após o cadastro, como redirecionar o usuário
  } catch (error) {
    console.error('Erro ao cadastrar:', error);
    // Trate o erro conforme necessário
  }
};
  return (
    <form className="shadow-lg rounded-3xl w-[19rem] lg:w-[30rem] bg-gradient-to-b from-[#466379] to-white px-7 pt-9 ">
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
          <input
            className="border-none outline-none bg-white h-8 shadow-lg rounded-lg p-2 font-montserrat text-xs sm:text-sm text-darkgray placeholder-sm"
            placeholder="Sobrenome*"
            type="text"
            name="nome"
            value={formData.sobrenome}
            onChange={handleInputChange}
          />
          <div>
            <select
              className={`border-none outline-none bg-white h-8 shadow-lg rounded-lg w-full font-montserrat text-xs sm:text-sm placeholder-sm ${
                selectedOption !== "" ? "text-black" : "text-[#4B5563] text-opacity-50 font-medium"
              }`}
              name="gender"
              id="gender"
              onChange={handleSelectChange} // Adiciona o evento onChange
              value={formData.genero}
            >
              <option value="">Gênero*</option>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
              <option value="prefiro_nao_dizer">Prefiro não dizer</option>
            </select>
            </div>
          <input
            className="border-none outline-none bg-white h-8 shadow-lg rounded-lg p-2 font-montserrat text-xs sm:text-sm text-darkgray placeholder-sm"
            placeholder="Nacionalidade*"
            type="text"
            name="complemento"
            value={formData.nacionalidade}
            onChange={handleInputChange}
          />
           <input
            className="border-none outline-none bg-white h-8 shadow-lg rounded-lg p-2 font-montserrat text-xs sm:text-sm text-darkgray placeholder-sm"
            placeholder="Especialização*"
            type="text"
            value={formData.especializacao}
            onChange={handleInputChange}
          />
          <input
            className="border-none outline-none bg-white h-8 shadow-lg rounded-lg p-2 font-montserrat text-xs sm:text-sm text-darkgray placeholder-sm"
            placeholder="Atuação*"
            type="text"
            value={formData.atuacao}
            onChange={handleInputChange}
          />
          <input
            className="border-none outline-none bg-white h-8 shadow-lg rounded-lg p-2 font-montserrat text-xs sm:text-sm text-darkgray placeholder-sm"
            placeholder="Email corporativo*"
            type="text"
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            className="border-none outline-none bg-white h-8 shadow-lg rounded-lg p-2 font-montserrat text-xs sm:text-sm text-darkgray placeholder-sm"
            placeholder="Telefone*"
            type="text"
            value={formData.telefone}
            onChange={handleInputChange}
          />
          <input
            className="border-none outline-none bg-white h-8 shadow-lg rounded-lg p-2 font-montserrat text-xs sm:text-sm text-darkgray placeholder-sm"
            placeholder="CEP da empresa*"
            type="text"
            value={formData.cep}
            onChange={handleInputChange}
          />
          <input
            className="border-none outline-none bg-white h-8 shadow-lg rounded-lg p-2 font-montserrat text-xs sm:text-sm text-darkgray placeholder-sm"
            placeholder="Logradouro*"
            type="text"
            value={formData.logradouro}
            onChange={handleInputChange}
          />
          <input
            className="border-none outline-none bg-white h-8 shadow-lg rounded-lg p-2 font-montserrat text-xs sm:text-sm text-darkgray placeholder-sm"
            placeholder="Número*"
            type="text"
            value={formData.numero}
            onChange={handleInputChange}
          />
          <input
            className="border-none outline-none bg-white h-8 shadow-lg rounded-lg p-2 font-montserrat text-xs sm:text-sm text-darkgray placeholder-sm"
            placeholder="Bairro*"
            type="text"
            value={formData.bairro}
            onChange={handleInputChange}
          />
        </div>

        <div className="grid grid-cols-1 mt-7 md:mt-5">
          <input
            className="border-none outline-none bg-white h-8 shadow-lg rounded-lg p-2 font-montserrat text-xs sm:text-sm text-darkgray placeholder-sm"
            placeholder="Complemento (opcional)"
            type="text"
            value={formData.complemento}
            onChange={handleInputChange}
          />
        </div>

        <div className="grid grid-cols-1  gap-7 md:gap-5 md:grid-cols-2 my-7 md:my-5">
        
          <input
            className="border-none outline-none bg-white h-8 shadow-lg rounded-lg p-2 font-montserrat text-xs sm:text-sm text-darkgray placeholder-sm"
            placeholder="Cidade*"
            type="text"
            value={formData.localidade}
            onChange={handleInputChange}
          />
          <input
            className="border-none outline-none bg-white h-8 shadow-lg rounded-lg p-2 font-montserrat text-xs sm:text-sm text-darkgray placeholder-sm"
            placeholder="Estado*"
            type="text"
            value={formData.estado}
            onChange={handleInputChange}
          />
        </div>

        <div className="grid grid-cols-1 gap-7 md:gap-5">
          <input
            className="border-none outline-none bg-white h-8 shadow-lg rounded-lg p-2 font-montserrat text-xs sm:text-sm text-darkgray placeholder-sm"
            placeholder="Senha*"
            type="text"
            value={formData.senha}
            onChange={handleInputChange}
          />
          <input
            className="border-none outline-none bg-white h-8 shadow-lg rounded-lg p-2 font-montserrat text-xs sm:text-sm text-darkgray placeholder-sm"
            placeholder="Confirmar senha*"
            type="text"
            value={formData.confirmarSenha}
            onChange={handleInputChange}
          />
        </div>
        <button className="border-none p-0 my-10 bg-[#002847] hover:bg-[#2D4D66] shadow-lg rounded-lg flex items-center justify-center py-2.5 px-7">
          <span className="font-montserrat text-xs sm:text-sm text-white">Confirmar cadastro</span>
        </button>
      </div>
    </form>
  );
};

export default FormSignUp;

