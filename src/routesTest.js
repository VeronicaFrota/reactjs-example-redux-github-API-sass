import React from 'react';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import ApiGitHub from './components/api-github/apiGithub';
import ExempleRedux from './components/example-redux/exempleRedux'
import { isAuthenticaded } from './auth';

// Acessa a rota somente se estiver autenticado
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
            /* Se autenticação ok, então reinderiza o componente para ser exibido, se não, redireciona para a página inicial sem perder o hostórico de navegação */
            isAuthenticaded() ? <Component {...props} /> : (<Redirect to={{ pathname: '/', state: { from: props.location } }} />)
        )}
    />
)

const Routes = () => (
    <BrowserRouter>          {/* Para trabalhar com o navigate state do browser, manipula as URL's */}
        <Switch>             {/* Não deixa mais de uma rota ser aberta, abrindo somente uma rota */}
            <Route exact path="/" component={ApiGitHub} />
            <PrivateRoute path="/exemple-redux" component={ExempleRedux} />
        </Switch>
    </BrowserRouter>
);

export default Routes;

