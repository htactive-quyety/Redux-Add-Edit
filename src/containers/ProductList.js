import { connect } from 'react-redux'
import React, { Component } from 'react'
import Update from './UpdateUser'

class ProductList extends Component {

    render() {
        return (
            <div>
                <p></p>
                <table className='table'  >
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Name:</th>
                            <th scope="col">IMG:</th>
                            <th></th>
                        </tr>
                    </thead>
                    {this.props.todos.map((todo, i) => (
                        <tbody key={i}>
                            <tr>
                                <td>{todo.name}</td>
                                <td><img alt='img' width={230} height={250} src={todo.imgURL}></img></td>
                                <td><Update index={i} nameEdit = {todo.name} urlEdit= {todo.imgURL}/> </td>
                            </tr>
                        </tbody>
                    ))}
                </table>

            </div>
        )
    }
}



const mapStateProps = (state) => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateProps)(ProductList)

