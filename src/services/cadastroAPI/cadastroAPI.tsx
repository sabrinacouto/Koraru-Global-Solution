import axios, { AxiosError, AxiosResponse } from 'axios';
import { FormData } from '@/types/formData';

const api = axios.create({
  baseURL: 'http://localhost:8080/', // Coloque a URL correta da sua API aqui
  headers: {
    'Content-Type': 'application/json'
    // Adicione outros headers se necessário
  }
});


export const  cadastrarProfissional  = async (FormData: FormData) => {
  try {
    // Enviando uma requisição POST para o endpoint '/contaCliente' com os dados da nova conta cliente
    const response = await api.post('/profissional', FormData );
    return response.data; // Retornando os dados da conta cliente criada
  } catch (error: unknown) {
    // Tratando erros da requisição
    if (axios.isAxiosError(error)) {
      // Se for um erro do axios, lançar um novo erro com a mensagem do erro original
      throw new Error('Erro ao criar ContaCliente: ' + (error as AxiosError).message);
    } else {
      // Se for outro tipo de erro, lançar um novo erro com a mensagem do erro
      throw new Error('Erro ao criar ContaCliente: ' + String(error));
    }
  }
};
