import React from 'react';
import {useRouteMatch} from 'react-router-dom'

interface Params {
  repository: string;
}

const Repository: React.FC = () => {
  const {params} = useRouteMatch<Params>()

  return (
  <h1>Olá repo: {params.repository}</h1>
  );
}

export default Repository;