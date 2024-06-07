import axios, { AxiosError, AxiosResponse } from 'axios';
import { FormData } from '@/types/formData';
/**
 * Função para excluir um cliente.
 * @param clienteId O ID do cliente a ser excluído ou atualizada.
 * @param newData Um objeto contendo os novos dados do cliente a serem atualizados.
 * @returns Uma Promise que resolve quando o cliente é excluído ou atualizado com sucesso.
 *          Se houver um erro durante a exclusão ou atualização, a Promise será rejeitada com detalhes do erro.
 */

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

// Função para fazer login do usuário
export const loginUser = async (email: string, senha: string): Promise<FormData| null> => {
  try {
    // Enviando uma requisição GET para o endpoint '/contaCliente' com os parâmetros de email e senha
    const response = await api.get<{ profissionais: FormData[] }>('/profissional', {
      params: { email, senha }
    });

    const { profissionais } = response.data; // Extraindo os dados dos clientes da resposta

    if (Array.isArray(profissionais)) {
      // Verificando se a resposta contém um array de clientes
      // Encontrando a conta cliente correspondente ao email e senha informados
      const contaProfissional: FormData| null = profissionais.find(conta => conta.email === email && conta.senha === senha) || null;
      return contaProfissional; // Retornando a conta cliente encontrada (ou null se não encontrada)
    } else {
      // Se a resposta não contiver a propriedade 'clientes', exibir um erro
      console.error('Resposta da API não contém a propriedade clientes:', response.data);
      throw new Error('Erro ao fazer login: Resposta da API inválida');
    }
  } catch (error) {
    // Tratando erros da requisição
    console.error('Erro ao fazer login:', error);
    throw new Error('Erro ao fazer login');
  }
}

