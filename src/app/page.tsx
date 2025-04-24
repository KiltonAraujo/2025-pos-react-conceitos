// src/app/page.tsx
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

interface TarefaProps {
  titulo: string;
	concluido?: boolean;
}
class Tarefa extends React.Component<TarefaProps> {
	
	render(): React.ReactNode {
		const classe = `p-3 mb-3 rounded-lg shadow-md hover:cursor-pointer hover:border ${this.props.concluido ? "bg-gray-800 hover:border-gray-800" : "bg-gray-400 hover:border-gray-400"}`;

		return (
			<div className={classe}>
				<h3 className="text-xl font-bold">{this.props.titulo}</h3>
				<p className="text-sm ">{this.props.concluido ? "Concluída" : "Pendente"}</p>
			</div>
		);
	}
}

const Home = () => {
	const tarefas = [
		{ id: 1, title: "delectus aut autem", completed: false },
		{ id: 2, title: "quis ut nam facilis et officia qui", completed: true },
		{ id: 3, title: "fugiat veniam minus", completed: false },
	];

	return (
		<div className="container mx-auto p-4">
			<Cabecalho />
			<Tarefa titulo={tarefas[0].title} concluido={tarefas[0].completed} />
			<Tarefa titulo={tarefas[1].title} concluido={tarefas[1].completed} />
		</div>
	);
};

export default Home;
