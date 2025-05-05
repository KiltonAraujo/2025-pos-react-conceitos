"use client";
import React from "react";

const Titulo = () => (
	<h1 className="text-2xl font-bold mb-1">React - Conceitos básicos</h1>
);

const SubTitulo = () => (
	<h2 className="text-4xl font-bold mb-6">Lista de tarefas</h2>
);

function Cabecalho() {
	return (
		<div className="text-center">
			<Titulo />
			<SubTitulo />
		</div>
	);
}
interface TarefaInterface {
	id: number;
	Titulo: string;
	Concluido: boolean;
}

interface TarefaProps{
	dados: Array<TarefaInterface>;
}

const Tarefa: React.FC<TarefaInterface> = ({ Titulo, Concluido }) => {
	const [estaConcluido, setEstaConcluido] = React.useState(Concluido);

	const classe = `p-3 mb-3 rounded-lg shadow-md hover:cursor-pointer hover:border ${
		estaConcluido
			? "bg-gray-800 hover:border-gray-800"
			: "bg-gray-400 hover:border-gray-400"
	}`;

	const escutarClique = () => {
		console.log(`A tarefa '${Titulo}' foi clicada!`);
		setEstaConcluido(!estaConcluido);
	}

	return (
		<div
			className={classe}
			onClick={() => escutarClique()}
		>
			<h3 className="text-xl font-bold">{Titulo}</h3>
			<p className="text-sm">{estaConcluido ? "Concluída" : "Pendente"}</p>
		</div>
	);
};

const Home = () => {
    const tarefas = [
        { id: 1, Titulo: "delectus aut autem", Concluido: false },
        { id: 2, Titulo: "quis ut nam facilis et officia qui", Concluido: true },
        { id: 3, Titulo: "fugiat veniam minus", Concluido: false },
    ];

    return (
        <div className="container mx-auto p-4">
            <Cabecalho />
            <div>
                {tarefas.map((tarefa) => (
                    <Tarefa id={tarefa.id} Titulo={tarefa.Titulo} Concluido={tarefa.Concluido} />
                ))}
            </div>
        </div>
    );
};

export default Home;