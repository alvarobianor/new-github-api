
import React  from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronsLeft, FiChevronRight } from 'react-icons/fi';

import { Header, RepositoryInfo, Issue } from './style';
import imgLogo from '../../assets/logo.svg';

interface Params {
  repository: string;
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
              <strong>{params.repository}</strong>
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
