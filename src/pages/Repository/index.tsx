
import React, { useState, useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronsLeft, FiChevronRight } from 'react-icons/fi';
import api from '../../service/api';
import { Header, RepositoryInfo, Issue } from './style';
import imgLogo from '../../assets/logo.svg';

interface Params {
  repository: string;
}

interface IssueDTO {
  id: number;
  number: number;
  title: string;
  user: {
    login: string;
    url_avatar: string;
  };
  state: string;
  html_url: string;
}

interface RepositoryDTO {
  id: number;
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<Params>();

  

  return (
    <>
      <Header>
        <img src={imgLogo} alt="Logo" />
        <Link to="/">
          <FiChevronsLeft size={15} />
          Voltar
        </Link>
      </Header>

      
        <RepositoryInfo>
          <header>
            <img src="https://avatars1.githubusercontent.com/u/6128107?v=4" 
            alt="human" />
            <div>
              <strong>Ai</strong>
              <p>Papaaaaai</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>87455</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>989</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>45214</strong>
              <span>Issues/openeds</span>
            </li>
          </ul>
        </RepositoryInfo>
      
      <Issue>
        
              <a  href="/">
                <div>
                  <strong>Title foda</strong>
                  <p>description foda</p>
                </div>
                <FiChevronRight size={40} />
              </a>
            
      </Issue>
    </>
  );
};

export default Repository;


// import React from 'react';
// import {useRouteMatch} from 'react-router-dom'

// interface Params {
//   repository: string;
// }

// const Repository: React.FC = () => {
//   const {params} = useRouteMatch<Params>()

//   return (
//   <h1>Olá repo: {params.repository}</h1>
//   );
// }

// export default Repository;