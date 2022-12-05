import axios from 'axios';
import { Usuario } from './models/usuario';



(async() => {
    async function getUsers(): Promise<Usuario[]> {
        const { data } = await axios.get<Usuario[]>('https://api.escuelajs.co/api/v1/users?limit=3');
        return data;
    }

    const axiosResponse = await getUsers();
    console.log(axiosResponse.map((usuario: Usuario) => usuario.name));
})();