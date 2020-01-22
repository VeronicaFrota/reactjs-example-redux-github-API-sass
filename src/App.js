import React, { Component } from 'react';
import './App.scss';

import { isAuthenticaded } from './auth';
import Header from './components/header/header';
import Footer from './components/footer/footer'
import ApiGitHub from './components/api-github/apiGithub';
import ExempleRedux from './components/example-redux/exempleRedux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// Acessa a rota somente se estiver autenticado
const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route {...rest} render={props => (
		/* Se autenticação ok, então reinderiza o componente para ser exibido, se não, redireciona para a página inicial sem perder o hostórico de navegação */
		isAuthenticaded() ? <Component {...props} /> : (<Redirect to={{ pathname: '/', state: { from: props.location } }} />)
	)}
	/>
)

class App extends Component {
	render() {
		return (
			<BrowserRouter>                                              		{/* Para trabalhar com o navigate state do browser, manipula as URL's */}
				<div>
					<Header />
					<Switch>                                                     {/* Não deixa mais de uma rota ser aberta, abrindo somente uma rota */}
						<Route exact path="/" component={ApiGitHub} />
						<PrivateRoute path="/exemple-redux" component={ExempleRedux} />
					</Switch>
					<Footer />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
