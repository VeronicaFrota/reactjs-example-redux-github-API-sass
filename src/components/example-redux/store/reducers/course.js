const INITIAL_STATE = {
    activeLesson: {},
    activeModule: {},
    modules: [
        {
            id: 1,
            title: "Iniciando com React",
            lessons: [
                {
                    id: 1,
                    title: "Primeira Aula"
                },
                {
                    id: 2,
                    title: "Segunda Aula"
                }
            ]
        },
        {
            id: 2,
            title: "Aprendendo Redux",
            lessons: [
                {
                    id: 3,
                    title: "Terceira Aula"
                },
                {
                    id: 4,
                    title: "Quarta Aula"
                }
            ]
        },
        {
            id: 3,
            title: "Aprendendo Hooks",
            lessons: [
                {
                    id: 5,
                    title: "Quarta Aula"
                },
                {
                    id: 6,
                    title: "Quinta Aula"
                }
            ]
        },
        {
            id: 4,
            title: "Consumindo API",
            lessons: [
                {
                    id: 7,
                    title: "Sexta Aula"
                },
                {
                    id: 8,
                    title: "Sétima Aula"
                }
            ]
        }
    ]
};

/* Reducer é uma função que é chamada pelo Redux em certos momentos */
/* reducer - Armazena estado e pode manipula-lo 
*  state  - estado anterior antes da aplicação
*/
export default function course(state = INITIAL_STATE, action) {
    /* Quando o button da toggleLesson for acionado o activeLesson e activeModule como o obj de lesson e module, modificando seu estado */
    if(action.type === "TOGGLE_LESSON") {
        return {
            ...state,                       /* Copia o estado para que seja alterado apenas a ativação da lesson e o module */
            activeLesson: action.lesson,
            activeModule: action.module
        }
    }

    return state;
}
