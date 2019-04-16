import React from 'react'

import { incActionCreator, decActionCreator } from './state/counter'
import { connect } from "react-redux"

import Button from '@material-ui/core/Button'

const Counter = (props) => {
    return (
        <div style={{textAlign: 'center'}}>
            <h1>{props._number}</h1>
            <Button
                style={{ height: '50px', margin: '10px 10px 30px'}}
                variant="outlined"
                color="primary"
                onClick={props._dec}
            >
                -
            </Button>
            <Button
                style={{ height: '50px', margin: '10px 10px 30px'}}
                variant="outlined"
                color="primary"
                onClick={props._inc}
            >
                +
            </Button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    _number: state.counterReducer.number
})

const mapDispatchToProps = (dispatch) => ({
    _inc: () => dispatch(incActionCreator()),
    _dec: () => dispatch(decActionCreator())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)