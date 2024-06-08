import axios, { AxiosError, AxiosResponse } from 'axios';
import { FormData } from '@/types/formData';
import { Profissional } from '@/types/Profissional';

/**
 * Função para excluir um cliente.
 * @param profissionalId O ID do cliente a ser excluído ou atualizada.
 * @param newData Um objeto contendo os novos dados do cliente a serem atualizados.
 * @returns Uma Promise que resolve quando o cliente é excluído ou atualizado com sucesso.
 *          Se houver um erro durante a exclusão ou atualização, a Promise será rejeitada com detalhes do erro.
 */

// Configurando a instância do axios para se comunicar com o servidor
const api = axios.create({
  baseURL: 'http://localhost:8080/', // Coloque a URL correta da sua API aqui
  headers: {
    'Content-Type': 'application/json' // Adicione outros headers se necessário
  }
});

// Função para cadastrar um novo profissional
export const cadastrarProfissional = async (formData: FormData) => {
  try {
    // Enviando uma requisição POST para o endpoint '/profissional' com os dados do novo profissional
    const response = await api.post('/profissional', formData);
    return response.data; // Retornando os dados do profissional criado
  } catch (error: unknown) {
    // Tratando erros da requisição
    if (axios.isAxiosError(error)) {
      // Se for um erro do axios, lançar um novo erro com a mensagem do erro original
      throw new Error('Erro ao cadastrar Profissional: ' + (error as AxiosError).message);
    } else {
      // Se for outro tipo de erro, lançar um novo erro com a mensagem do erro
      throw new Error('Erro ao cadastrar Profissional: ' + String(error));
    }
  }
};

// Função para fazer login do profissional
export const loginUser = async (email: string, senha: string): Promise<FormData | null> => {
  try {
    // Enviando uma requisição GET para o endpoint '/profissional' com os parâmetros de email e senha
    const response = await api.get<{ profissionais: FormData[] }>('/profissional', {
      params: { email, senha }
    });

    const { profissionais } = response.data; // Extraindo os dados dos profissionais da resposta

    if (Array.isArray(profissionais)) {
      // Verificando se a resposta contém um array de profissionais
      // Encontrando o profissional correspondente ao email e senha informados
      const contaProfissional: FormData | null = profissionais.find(conta => conta.email === email && conta.senha === senha) || null;
      return contaProfissional; // Retornando a conta do profissional encontrada (ou null se não encontrada)
    } else {
      // Se a resposta não contiver a propriedade 'profissionais', exibir um erro
      console.error('Resposta da API não contém a propriedade profissionais:', response.data);
      throw new Error('Erro ao fazer login: Resposta da API inválida');
    }
  } catch (error) {
    // Tratando erros da requisição
    console.error('Erro ao fazer login:', error);
    throw new Error('Erro ao fazer login');
  }
};

// Função para buscar todos os profissionais
export const getAllProfissionais = async (): Promise<Profissional[]> => {
  try {
    // Enviando uma requisição GET para o endpoint '/profissional' para buscar todos os profissionais
    const response = await api.get('/profissional');
    return response.data.profissionais; // Retornando todos os profissionais encontrados na resposta
  } catch (error) {
    // Tratando erros da requisição
    console.error('Erro ao buscar profissionais:', error);

    if (axios.isAxiosError(error)) {
      // Se for um erro do Axios, retornar uma resposta com o status code e a mensagem de erro
      const axiosError = error as AxiosError<any>; // Define o tipo de dados como 'any' ou outro tipo mais específico, se aplicável
      const status = axiosError.response?.status || 500;
      const message = axiosError.response?.data?.message || 'Erro interno do servidor';
      throw { status, message };
    } else {
      // Se for outro tipo de erro, retornar uma resposta com status 500 e a mensagem de erro genérica
      throw { status: 500, message: 'Erro interno do servidor' };
    }
  }
};

// Função para excluir um profissional
export const deleteProfissional = async (profissionalId: number): Promise<void> => {
  try {
    // Enviando uma requisição DELETE para o endpoint '/profissional/:id' para excluir o profissional com o ID fornecido
    await api.delete(`/profissional/${profissionalId}`);
    // Se a exclusão for bem-sucedida, não é necessário retornar nada
  } catch (error) {
    // Tratando erros da requisição
    console.error('Erro ao excluir profissional:', error);

    if (axios.isAxiosError(error)) {
      // Se for um erro do Axios, retornar uma resposta com o status code e a mensagem de erro
      const axiosError = error as AxiosError<any>;
      const status = axiosError.response?.status || 500;
      const message = axiosError.response?.data?.message || 'Erro interno do servidor';
      throw { status, message };
    } else {
      // Se for outro tipo de erro, retornar uma resposta com status 500 e a mensagem de erro genérica
      throw { status: 500, message: 'Erro interno do servidor' };
    }
  }
};


// Função para atualizar um profissional
export const updateProfissional = async (profissionalId: number, newData: any): Promise<void> => {
  try {
    console.log('Dados enviados para atualização:', newData); // Adicionando um console.log para verificar os dados enviados

    // Enviando uma requisição PUT para o endpoint '/profissional/:id' para atualizar o profissional com o ID fornecido
    await api.put(`/profissional/${profissionalId}`, newData);

    // Se a atualização for bem-sucedida, não é necessário retornar nada
  } catch (error) {
    // Tratando erros da requisição
    console.error('Erro ao atualizar profissional:', error);

    if (axios.isAxiosError(error)) {
      // Se for um erro do Axios, verificar se há resposta da API
      if (error.response) {
        console.error('Resposta da API:', error.response.data);
      }
      
      const axiosError = error as AxiosError<any>;
      const status = axiosError.response?.status || 500;
      const message = axiosError.response?.data?.message || 'Erro interno do servidor';
      throw { status, message };
    } else {
      // Se for outro tipo de erro, retornar uma resposta com status 500 e a mensagem de erro genérica
      throw { status: 500, message: 'Erro interno do servidor' };
    }
  }
};


