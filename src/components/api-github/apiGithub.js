import React, { Component } from 'react';

import axios from 'axios';
import Form from '../api-github/form/';
import RepoList from '../api-github/repo-list';

class ApiGitHub extends Component {
    	// Local onde ficará armazenado as informações que serão digitadas pelo usuário
	state = {
		user: "",
		repos: [],
		error: "",
		loading: false,
	};

	// Recebe um usuario e executa a função que atualiza o usuário do state com o usuário que está recebendo como parametro
	changeUser = user => {
		this.setState({ user })
	}

	// Realiza a busca do usuario atraves da API do GitHub utilizando o axios
	searcheUser = async () => {
		const { user } = this.state										// Recupera o usuário do state
		this.setState({ loading: true })

		try {
			// Do que for retornado vai até o nó 'data', pega todo o resultado e atribui para a constante 'repos'
			const { data: repos } = await axios.get(`https://api.github.com/users/${user}/repos`);

			this.setState({ repos, error: '', loading: false })							// Atualiza o estado (state) do(s) repositório(s)

		} catch (error) {
			this.setState({
				error: 'Usuário Não Encontrado',
				repos: [],																// Caso ocorra erro os repositorios serão zerados
				loading: false
			})
		}
	}

	render() {
		const { user, repos, error, loading } = this.state;

		return (
			<div>
				<Form
					changeUser={this.changeUser}						// Atualiza o estado (state) do usuario
					user={user} 										// O estado (state) replica a informação para o input
					error={error}
					loading={loading}
					buttonAction={this.searcheUser}
				/>
				<RepoList repos={repos} />
			</div>
		);
	}
}


export default ApiGitHub;

