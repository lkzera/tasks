import React, { useState, useEffect } from 'react';
import { A } from 'hookrouter';
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import ItensListatarefas from './itens-lista-tarefas';
import Paginacao from './paginacao';


function ListarTarefas() {

    const ITENS_POR_PAG = 3; //DEFINIR AQUI O PARAMETRO POR PARGINA


    const [tarefas, setTarefas] = useState([]);
    const [carregarTarefas, setCarregarTarefas] = useState(true);
    const [totalItems, setTotalItems] = useState(0);
    const [paginaAtual, setPaginaAtual] = useState(1);

    //Tomar cuidado póis é necessário definir um scopo de atualização para ele caso contrario fica chamando infinitamente
    useEffect(() => {
        function obterTarefas() {
            const tarefasDb = localStorage['tarefas'];
            let listarTarefas = tarefasDb ? JSON.parse(tarefasDb) : [];
            setTotalItems(listarTarefas.length);
            setTarefas(listarTarefas.splice((paginaAtual - 1) * ITENS_POR_PAG, ITENS_POR_PAG));
        }

        if (carregarTarefas) {
            obterTarefas();
            setCarregarTarefas(false);
        }
    }, [carregarTarefas, paginaAtual]); // Defino que só será chamdo quando houver mudança de estado de um determinado componente

    function handleMudarPagina(pagina){
        setPaginaAtual(pagina);
        setCarregarTarefas(true);
    }

    return (
        <div className="text-center">
            <h3>Tarefas a Fazer</h3>
            <Table striped bordered hover responsive data-testid="tabela">
                <thead>
                    <tr>
                        <th>Tarefa</th>
                        <th>
                            <A href="/cadastrar" className="btn btn-success btn-sm">
                                <FontAwesomeIcon icon={faPlus} />
                                &nbsp;
                                Nova Tarefa
                            </A>
                        </th>
                    </tr>
                </thead>
                <tbody>
        	    <ItensListatarefas tarefas={tarefas} recarregarTarefas={setCarregarTarefas} />
                </tbody>
            </Table>
            <Paginacao 
            totalItems={totalItems}
            itemsPorPagina={ITENS_POR_PAG}
            paginaAtual={paginaAtual}
            mudarPagina={handleMudarPagina}/>
        </div>
    );
}

export default ListarTarefas;