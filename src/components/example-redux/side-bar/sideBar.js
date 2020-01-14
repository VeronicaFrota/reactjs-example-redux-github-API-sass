import React from 'react';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import Button from '@material-ui/core/Button';
import '../side-bar/style.scss';
import * as CourseActions from '../../example-redux/store/actions/courseAction';

/* 
    dispatch despara actions para o redux, onde essas ections serão "ouvidas" por todos os reducer da aplicação
*/
const SideBar = ({ modules, toggleLesson }) => {
    return (
        <aside>
            {modules.map(module => (
                <div key={module.id}>
                    <strong>
                        {module.title}
                    </strong>
                    <ul>
                        {module.lessons.map(lesson => (
                            <li key={lesson.id}>
                                {lesson.title}
                                <Button variant="outlined" color="secondary" className="button"
                                    onClick={() => toggleLesson(module, lesson)}> {/* Define uma lesson ativa */}   
                                    Selecionar
                                </Button>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </aside>
    );
};

/* O connect aceita dois parametros: mapStateToProps e mapDispatchToProps, que são funções que recebem o estado e retornam um objeto*/
const mapStateToProps = state => ({
    modules: state.course.modules
});

/* bindActionCreators pega o objeto importado do CourseActions e mapea em forma de propriedades */
const mapDispatchToProps = dispatch => 
    bindActionCreators(CourseActions, dispatch);

/* 
    Connect: consegue compartilhar informações para o componente, ou seja, o connect que compartilhar 
    com o sideBar um estado do redux.
    O connect recebe uma função que recebe o estado e retorna tudo do module (retorna um objeto com as
    informações do mesmo), ou seja, agora todas as informações apresentadas no module vem através do redux
*/
export default connect(mapStateToProps, mapDispatchToProps)(SideBar);