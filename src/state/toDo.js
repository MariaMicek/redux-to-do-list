import uuid from 'uuid'

const ADD = 'toDo/ADD'
const TASK = 'toDo/TASK'
const DELETE = 'toDo/DELETE'
const EDIT = 'toDo/EDIT'

export const addActionCreator = () => ({
    type: ADD,
})

export const taskActionCreator = (newTaskText) => ({
    type: TASK,
    newTaskText
})

export const deleteActionCreator = (uuid) => ({
    type: DELETE,
    uuid
})

export const editActionCreator = (uuid, newText) => ({
    type: EDIT,
    uuid,
    newText
})

const initialState = {
    tasks: [],
    newTask: {
        text: ''
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case TASK:
            return {
                ...state,
                newTask: {
                    text: action.newTaskText,
                }
            }

        case ADD:
            return {
                ...state,
                tasks: state.tasks.concat({
                    ...state.newTask,
                    uuid: uuid()
                }),
                newTask: {
                    text: ''
                }
            }

        case DELETE:
            return {
                ...state,
                tasks: state.tasks.filter(el => el.uuid !== action.uuid)
            }

        case EDIT:
            return {
                ...state,
                tasks: state.tasks.map(
                    el => {
                        if (action.newText === null || action.newText === '') return el
                        return (el.uuid === action.uuid ?
                            { ...el, text: action.newText }
                            :
                            el
                        )
                    }

                )
            }

        default:
            return state
    }
}