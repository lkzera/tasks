import React from 'react';
import { useRoutes, A } from 'hookrouter';

function ListarTarefas(){
    return(
        <A href="/cadastrar">Novo</A>
    );
}

export default ListarTarefas;