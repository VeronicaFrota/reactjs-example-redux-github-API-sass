/* Função para setar uma lesson para ativa (a lesson se relaciona com o module) */
export function toggleLesson(module, lesson) {
    return {
        type: 'TOGGLE_LESSON',
        module,
        lesson,
    };
}