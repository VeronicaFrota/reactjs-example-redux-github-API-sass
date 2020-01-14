import { combineReducers } from 'redux';

import course from  '../reducers/course';

/* Transforma o estado  em um objeto que é subdivididos em categorias, exe: course, user, baseado em cada funcionalidade da aplicação */
export default combineReducers({
    course,
    /* user - Passaria como parametro tambem o user caso ouvesse outros reducers */
});

