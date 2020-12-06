import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { A } from 'hookrouter';
import ConcluirTarefa from './concluir-tarefa';
import RemoverTarefa from './remover-tarefa';


function ItensListaTarefas(props) {

    function marcarConcluido(tarefa){
        return tarefa.concluida ? 'Line-through' : 'none'; 
    }

    return (
        props.tarefas.map(tarefa =>
            <tr key={tarefa.id}>
                <td width="75%" style={{textDecoration: marcarConcluido(tarefa)}}>
                    {tarefa.nome}
                </td>
                <td className="text-right">
                    <ConcluirTarefa tarefa={tarefa}
                    recarregarTarefas={props.recarregarTarefas}
                    className={tarefa.concluida ? 'hidden' : null} />
                    &nbsp;
                    <A href={"/atualizar/" + tarefa.id} className={tarefa.concluida ? 'hidden' : 'btn btn-warning btn-sm' }>
                        <FontAwesomeIcon icon={faEdit}/>
                    </A>
                    &nbsp;
                    <RemoverTarefa tarefa={tarefa} recarregarTarefas={props.recarregarTarefas}/>
                </td>
            </tr>
        )
    );
}

ItensListaTarefas.PropTypes = {
    tarefas: PropTypes.array.isRequired,
    recarregarTarefas: PropTypes.func.isRequired
};

export default ItensListaTarefas;