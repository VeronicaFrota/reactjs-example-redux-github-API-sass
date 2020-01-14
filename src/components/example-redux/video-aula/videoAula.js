import React from 'react';
import { connect } from 'react-redux';

const VideoAula = ({ activeModule, activeLesson }) => {
    return (
        <div>
            <strong>Módulo: {activeModule.title ? activeModule.title : 'Selecione o Módulo'}</strong>
            <br />
            <span>Aula: {activeLesson.title ? activeLesson.title : 'Selecione uma Aula'}</span>
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


/* import React from 'react';

const videoAula = () => {
    return (
        <div>

        </div>
    );
};

export default videoAula; */