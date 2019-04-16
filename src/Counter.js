import React from 'react'

import { incActionCreator, decActionCreator } from './state/counter'
import { connect } from "react-redux"

const Counter = (props) => {
    return (
        <div>
            <h1>{props._number}</h1>
            <button
                onClick={props._dec}
            >
                -
            </button>
            <button
                onClick={props._inc}
            >
                +
            </button>
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