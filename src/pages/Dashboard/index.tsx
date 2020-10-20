import React from 'react';
import {Title, Form, Repositories} from './style'
import Logo from '../../assets/logo.svg'

const Dashboard: React.FC = () => {
  return (
    <>
    <img src={Logo} alt="logo of aplication"/>
    <Title>Explore repositories on Github</Title>
    <Form>
      <input type="text" placeholder="Text here"/>
      <button type="submit">Search</button>
    </Form>
    <Repositories>
    <a href="test">
      <img src="https://avatars3.githubusercontent.com/u/19610639?s=460&u=beeb3184574cb7862579a00ccfe2dfc935b6f00e&v=4" alt="Álvaro Bianor" />
      <div>
        <strong>Alvim rei delas</strong>
        <p>Caba bom desenrolado</p>
      </div>
    </a>
            
    </Repositories>
    </>

  );
}

export default Dashboard;