const ADD = 'toDo/ADD'
const TASK = 'toDo/TASK'

export const addActionCreator = () => ({
    type: ADD,
})

export const taskActionCreator = (newTask) => ({
    type: TASK,
    newTask
})

const initialState = {
    tasks: [],
    newTask: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case TASK:
            return {
                ...state,
                newTask: action.newTask
            }

        case ADD:
            return {
                ...state,
                tasks: state.tasks.concat(state.newTask),
                newTask: ''
            }

        default:
            return state
    }
}