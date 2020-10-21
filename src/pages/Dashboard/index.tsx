import React, {FormEvent, useState} from 'react';
import {Title, Form, Repositories, Error} from './style'
import { FiChevronRight } from 'react-icons/fi';
import Logo from '../../assets/logo.svg'
import api from '../../service/api'

interface RepositoryDTO {
  id: number;
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('')
  const [repositories, setRepositories] = useState<RepositoryDTO[]>([])
  const [inputError, setInputError] = useState('')



  async function handle(e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    
    if(newRepo === ''){
      setInputError('Digite alguma coisa')
      return
    }

    try {
      const response = await api.get<RepositoryDTO>(`/repos/${newRepo}`)
      const {data} = response

      setRepositories([...repositories, data])
      setInputError('')
      setNewRepo('');
    } catch (error) {
      setInputError('Esse repositório ou usuário não existem')
    }
  
  }


  return (
    <>
    <img src={Logo} alt="logo of aplication"/>
    <Title>Explore repositories on Github</Title>
    <Form hasError={!!inputError} onSubmit={handle}>
      <input type="text" value={newRepo} placeholder="Text here" onChange={(e) => setNewRepo(e.target.value)} />
      <button type="submit">Search</button>
    </Form>
    <Repositories>
    {inputError && <Error>{inputError}</Error>}
    {
      repositories.map(data => (
        <a key={data.id} href="test">
          <img src={data.owner.avatar_url} alt="Álvaro Bianor" />
          <div>
            <strong>{data.full_name}</strong>
            <p>{data.description}</p>
          </div>
          <FiChevronRight />
        </a>
      ))
    }
            
    </Repositories>
    </>

  );
}

export default Dashboard;