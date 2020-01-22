import React from 'react';
import { connect } from 'react-redux';
import './style.scss'

const VideoAula = ({ activeModule, activeLesson }) => {
    return (
        <div className="ModuleLessonsItems">
            <strong>
                Módulo: {activeModule.title ? activeModule.title : 'Selecione um módulo '}
            </strong>
            <br />
            <span>
                <strong>Aula: </strong>
                {activeLesson.title ? activeLesson.title : 'Selecione uma Aula '}
            </span>
            <br />
        </div>
    );
}

/* Recebe o state e com o connect, conecta/passa a informação do store (Redux) com o componente de VideoAula*/
export default connect(state => (
    {
        activeModule: state.course.activeModule,
        activeLesson: state.course.activeLesson
    }
))(VideoAula);
