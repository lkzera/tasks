import GerenciadorTarefas from './gerenciador-tarefas';
import React from 'react';
import ReactDOM from 'react-dom';

it('Renderizando componente na tela', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GerenciadorTarefas/>,div);
  ReactDOM.unmountComponentAtNode(div);
});
