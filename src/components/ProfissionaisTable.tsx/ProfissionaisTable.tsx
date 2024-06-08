'use client'
import React, { useState, useEffect } from 'react';
import { getAllProfissionais, deleteProfissional, updateProfissional } from '@/services/cadastroAPI/cadastroAPI';
import { Profissional } from '@/types/Profisisonal';

const ProfissionaisTable = () => {
  const [profissionais, setProfissionais] = useState<Profissional[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [profissionaisPerPage] = useState(10);
  const [loading, setLoading] = useState<boolean>(true);
  const [message, setMessage] = useState<{text: string, type: 'success' | 'error'} | null>(null);
  const [editData, setEditData] = useState<Partial<Profissional>>({}); // Para armazenar os dados de edição temporariamente
  const [showForm, setShowForm] = useState<boolean>(false); // Para controlar a visibilidade do formulário de edição

  useEffect(() => {
    const fetchProfissionais = async () => {
      try {
        const response = await getAllProfissionais();
        console.log('API Response:', response);
        setProfissionais(response);
      } catch (error) {
        console.error('Erro ao buscar profissionais:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProfissionais();
  }, []);

  const showMessage = (msg: string, type: 'success' | 'error') => {
    setMessage({ text: msg, type });
    setTimeout(() => {
      setMessage(null);
    }, 3000); // Exibir a mensagem por 3 segundos
  };

  const openForm = (profissional: Profissional) => {
    setEditData(profissional);
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  const handleUpdateProfissional = async () => {
    try {
      if (editData && editData.id !== undefined) {
        await updateProfissional(editData.id, editData); 
        showMessage('Profissional atualizado com sucesso.', 'success');
        closeForm();
        setEditData({}); 
      } else {
        showMessage('ID do profissional inválido para atualização.', 'error');
      }
    } catch (error) {
      console.error('Erro ao atualizar profissional:', error);
      showMessage('Erro ao atualizar profissional.', 'error');
    }
  };
  const handleDeleteProfissional = async (profissionalId: number) => {
    try {
      await deleteProfissional(profissionalId);
      const updatedProfissionais = profissionais.filter(profissional => profissional.id !== profissionalId);
      setProfissionais(updatedProfissionais);
      showMessage('Profissional excluído com sucesso.', 'success');
    } catch (error) {
      console.error('Erro ao excluir profisisonal:', error);
      showMessage('Erro ao excluir profisisonal.', 'error');
    }
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (!Array.isArray(profissionais) || profissionais.length === 0) {
    return <p>Nenhum profissional encontrado.</p>;
  }

  const indexOfLastProfissional = currentPage * profissionaisPerPage;
  const indexOfFirstProfissional = indexOfLastProfissional - profissionaisPerPage;
  const currentProfissionais = profissionais.slice(indexOfFirstProfissional, indexOfLastProfissional);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mt-[8rem] ">
      <h2 className="text-3xl gradient text-center font-bold mb-6">Profissionais</h2>
      {message && <p className={message.type === 'success' ? 'text-green-500' : 'text-red-500'}>{message.text}</p>}
      <div className="mx-auto overflow-x-auto">
        <table className="w-full table-auto bg-white">
          <thead>
            <tr>
              <th className="px-4 py-2">Nome</th>
              <th className="px-4 py-2">Sobrenome</th>
              <th className="px-4 py-2">Gênero</th>
              <th className="px-4 py-2">Especialização</th>
              <th className="px-4 py-2">Cidade</th>
              <th className="px-4 py-2">Estado</th>
            </tr>
          </thead>
          <tbody>
            {currentProfissionais.map((profissional) => (
              <tr key={profissional.email}>
                <td className="border px-4 py-2">{profissional.nome}</td>
                <td className="border px-4 py-2">{profissional.sobrenome}</td>
                <td className="border px-4 py-2">{profissional.genero}</td>
                <td className="border px-4 py-2">{profissional.atuacao}</td>
                <td className="border px-4 py-2">{profissional.localidade}</td>
                <td className="border px-4 py-2">{profissional.estado}</td>
                <td className="flex space-x-3 justify-center border px-4 py-2">
                  <button onClick={() => handleDeleteProfissional(profissional.id)} className="bg-lightcoral text-white px-2 py-1 rounded hover:bg-red-700">Excluir</button>
                  <button onClick={() => openForm(profissional)} className="bg-[#002847] hover:bg-[#2D4D66] text-white px-2 py-1 rounded">Atualizar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {showForm && (
          <div className="fixed top-0  left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div className="bg-gradient-to-b from-[#466379] to-white  p-8 rounded-lg flex flex-col">
              <h2 className="text-lg  text-white font-bold mb-4">Editar Profissional</h2>
              <label htmlFor="nome" className="text-lg  text-white" >Nome:</label>
              <input type="text" id="nome" value={editData.nome || ''} onChange={(e) => setEditData({ ...editData, nome: e.target.value })} className='border px-4 py-1 rounded-md'/>
              <label htmlFor="sobrenome" className="text-lg  text-white" >Sobrenome:</label>
              <input type="text" id="sobrenome" value={editData.sobrenome || ''} onChange={(e) => setEditData({ ...editData, sobrenome: e.target.value })} className='border px-4 py-1 rounded-md' />
              <label htmlFor="genero" className="text-lg  text-white" >Gênero:</label>
              <input type="text" id="genero" value={editData.genero || ''} onChange={(e) => setEditData({ ...editData, genero: e.target.value })} className='border px-4 py-1 rounded-md'/>
              <label htmlFor="especializacao" className="text-lg  text-white" >Especialização:</label>
              <input type="text" id="Atuação" value={editData.atuacao|| ''} onChange={(e) => setEditData({ ...editData, atuacao: e.target.value })} className='border px-4 py-1 rounded-md' />
              <label htmlFor="localidade" className="text-lg  text-white" >Cidade:</label>
              <input type="text" id="localidade" value={editData.localidade || ''} onChange={(e) => setEditData({ ...editData, localidade: e.target.value })} className='border px-4 py-1 rounded-md'/>
              <label htmlFor="estado" className="text-lg  text-white" >Estado:</label>
              <input type="text" id="estado" value={editData.estado || ''} onChange={(e) => setEditData({ ...editData, estado: e.target.value })} className='border px-4 py-1 rounded-md'/>
              <button onClick={handleUpdateProfissional} className="bg-[#002847] hover:bg-[#2D4D66] text-white px-4 py-2 rounded mt-4">Atualizar Profissional</button>
              <button onClick={closeForm} className="bg-gray-300 text-gray-800 px-4 py-2 rounded mt-2">Cancelar</button>
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-center my-4">
        {Array.from({ length: Math.ceil(profissionais.length / profissionaisPerPage) }, (_, i) => (
          <button 
            key={i + 1} 
            onClick={() => paginate(i + 1)} 
            className={`mx-2 px-4 py-2 bg-lightcoral text-white rounded  ${currentPage === i + 1 ? 'bg-lightcoral' : ''}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProfissionaisTable;
