import React from 'react';
import ReactDOM from 'react-dom';
import ListarTarefas from './listar-tarefa';

describe('Teste do componente de listagem de tarefas', () => {
    it('deve renderizar o componente sem erros', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ListarTarefas />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});