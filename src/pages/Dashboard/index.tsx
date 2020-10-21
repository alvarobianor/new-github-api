import React, {FormEvent, useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
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
  const [inputError, setInputError] = useState('')
  const [repositories, setRepositories] = useState<RepositoryDTO[]>(() => {
    const savedRepositories = localStorage.getItem(
      `@githubExplore: Repositories`,
    );
    if (savedRepositories) {
      return JSON.parse(savedRepositories);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      `@githubExplore: Repositories`,
      JSON.stringify(repositories),
    );
  }, [repositories]);



  async function addRepository(e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    
    if(newRepo === ''){
      setInputError('Digite alguma coisa')
      return
    }

    try {
      const response = await api.get<RepositoryDTO>(`/repos/${newRepo}`)
      const {data} = response

      const alreadyExists = repositories.filter(element => 
        element.full_name === data.full_name)
      
      if(alreadyExists.length>0){
        setInputError('Repo already exists')
        setNewRepo('')
        return;
      }

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
    <Form hasError={!!inputError} onSubmit={addRepository}>
      <input type="text" value={newRepo} placeholder="Text here" 
      onChange={(e) => setNewRepo(e.target.value)} />
      <button type="submit">Search</button>
    </Form>
    <Repositories>
    {inputError && <Error>{inputError}</Error>}
    {
      repositories.map(data => (
        <Link key={data.full_name} to={`/repository/${data.full_name}`}>
          <img src={data.owner.avatar_url} alt="Álvaro Bianor" />
          <div>
            <strong>{data.full_name}</strong>
            <p>{data.description}</p>
          </div>
          <FiChevronRight />
        </Link>
      ))
    }
            
    </Repositories>
    </>

  );
}

export default Dashboard;