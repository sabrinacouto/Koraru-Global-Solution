import axios from 'axios';


export const fetchViaCep = async (cep: string) => {
    try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar CEP:', error);
        throw error;
    }
};
