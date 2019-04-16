import React from 'react'

import { addActionCreator, taskActionCreator, deleteActionCreator, editActionCreator } from './state/toDo'
import { connect } from "react-redux"

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const ToDo = (props) => {
    return (
        <div>
            <div style={{display: 'flex', alignItems: 'center', margin: '20px'}}
            >
                <TextField
                    id="outlined-name"
                    label="New Task"
                    variant="outlined"
                    value={props._newTask}
                    onChange={(event) => props._createTask(event.target.value)}
                />
                <Button
                    style={{ height: '50px', marginLeft: '10px' }}
                    variant="outlined"
                    color="primary"
                    onClick={() => {
                        if (props._newTask === '') return
                        props._add()
                    }
                    }
                >
                    ADD
                </Button>
            </div>
            {
                props._tasks.map(
                    (task, index) => (
                        <div
                            key={task.uuid}
                            style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}
                        >
                            <p>
                                {(index + 1) + '. ' + task.text}
                            </p>
                            <div>
                                <Button
                                    style={{ marginLeft: '10px', fontSize: '10px' }}
                                    variant="outlined"
                                    color="primary"
                                    onClick={() => props._delete(task.uuid)}
                                >
                                    DELETE
                                </Button>
                                <Button
                                    style={{ marginLeft: '10px', fontSize: '10px' }}
                                    variant="outlined"
                                    color="primary"
                                    onClick={() => props._edit(task.uuid)}
                                >
                                    EDIT
                                </Button>
                            </div>
                        </div>
                    )
                )
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
    _tasks: state.toDoReducer.tasks,
    _newTask: state.toDoReducer.newTask.text,
})

const mapDispatchToProps = (dispatch) => ({
    _add: () => dispatch(addActionCreator()),
    _createTask: (value) => dispatch(taskActionCreator(value)),
    _delete: (uuid) => dispatch(deleteActionCreator(uuid)),
    _edit: (uuid) => dispatch(editActionCreator(uuid, prompt()))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDo)

