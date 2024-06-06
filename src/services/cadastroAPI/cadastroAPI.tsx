import axios from 'axios';
import { FormData } from '@/types/formData';

const api = axios.create({
  baseURL: 'http://localhost:8080/', // Coloque a URL correta da sua API aqui
  headers: {
    'Content-Type': 'application/json'
    // Adicione outros headers se necessário
  }
});

export const cadastrarProfissional = async (formData: FormData) => { // Defina o tipo FormData aqui
  try {
    const response = await api.post('/profissional', formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Outros métodos da API podem ser adicionados aqui
