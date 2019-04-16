import React from 'react'

import { addActionCreator, taskActionCreator } from './state/toDo'
import { connect } from "react-redux"

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const ToDo = (props) => {
    return (
        <div>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center'
                }}
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
                    onClick={props._add}
                >
                    ADD
                </Button>
            </div>
            {
                props._tasks.map(
                    (task, index) => (
                        <p
                            key={index}
                        >
                            {(index + 1) + '. ' + task}
                        </p>
                    )
                )
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
    _tasks: state.toDoReducer.tasks,
    _newTask: state.toDoReducer.newTask,
})

const mapDispatchToProps = (dispatch) => ({
    _add: () => dispatch(addActionCreator()),
    _createTask: (value) => dispatch(taskActionCreator(value))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDo)
