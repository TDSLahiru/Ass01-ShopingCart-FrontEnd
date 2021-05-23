import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { setName, setData } from './actions/personAction'

export const mapStateToProps = state => ({
    ...state,
    ...state.person
});

export const mapDispatchToProps = dispatch => ({
    setPersonName: (name) => dispatch(setName(name)),
    setPersonData: () => dispatch(setData())
});

const App = (props) => {

    const onChangeName = () => {
        props.setPersonData()
        props.setPersonName("lahiru a")
    }

    console.log(props.person.data)

    return (
        <div>
            <h1>{props.person.name}</h1>
            <button onClick={onChangeName}>update</button>
        </div>
    )
}

/*const mapStateToProps = state => {
    return {
        person: state.person
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setPersonName: (name) => { dispatch(setName(name)) },
        setPersonData: () => { dispatch(setData()) }
    }
}*/

export default connect(mapStateToProps, mapDispatchToProps)(App)