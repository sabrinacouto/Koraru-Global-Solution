import axios from 'axios';
import { FormData } from '@/types/formData';

const api = axios.create({
  baseURL: 'http://localhost:3000', // Coloque a URL correta da sua API aqui
  headers: {
    'Content-Type': 'application/json'
    // Adicione outros headers se necessário
  }
});

export const cadastrarProfissional = async (formData: FormData) => { // Defina o tipo FormData aqui
  try {
    const response = await api.post('/cadastrar-profissional', formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Outros métodos da API podem ser adicionados aqui
