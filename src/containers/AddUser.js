import React, { Component } from 'react'
import { Input, Form, Row, Col, Button } from 'antd'
import {ADD_USER} from '../actions/index'
import { connect } from 'react-redux'

class AddUser extends Component {
    state = {
        name: '',
        url: ''
    }

    submitAdd() {
        this.props.addUser(this.state.name, this.state.url);
        this.setState({ name: '' })
        this.setState({ url: '' })
    }
    


    render() {
        return (
            <div className='container'>
                <p></p>
                <Row>
                    <Col span={8}></Col>
                    <Col span={6}>
                        <Form  >
                            <Form.Item label='Name Products:'>
                                <Input
                                    value ={this.state.name}
                                    onChange={event => this.setState({ name: event.target.value })}
                                    placeholder='Please enter name product' required></Input>
                            </Form.Item>
                            <Form.Item label='URL IMG Products:'>
                                <Input
                                    value={this.state.url}
                                    onChange={event => this.setState({ url: event.target.value })}
                                    placeholder='Please enter URL product' required></Input>
                            </Form.Item>
                            <Button onClick={() => this.submitAdd()}>SAVE</Button>
                        </Form></Col>
                    <Col span={8}></Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}
const mapDispatchToProps = (dispatch) => ({
    addUser: (name, url) => dispatch(ADD_USER(name, url))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddUser)







// import React, { useState } from 'react'
// import { connect } from 'react-redux'
// import {ADD_USER} from '../actions/index'
// import { Input, Form, Row, Col, Button } from 'antd'
// // import Product from './ProductList'


// const AddUser = () => {
//     const [name, setName] = useState('');
//     const [url, setUrl] = useState('');




//     return (
//         <div className='container'>
//             <p></p>
//             <Row>
//                 <Col span={8}></Col>
//                 <Col span={6}>
//                     <Form  >
//                         <Form.Item label='Name Products:'>
//                             <Input placeholder='Please enter name product' onChange={event => setName(event.target.value)} required></Input>
//                         </Form.Item>
//                         <Form.Item label='URL IMG Products:'>
//                             <Input placeholder='Please enter URL product' onChange={event => setUrl(event.target.value)} required></Input>
//                         </Form.Item>
//                         <Button >SAVE</Button>
//                     </Form></Col>
//                 <Col span={8}></Col>
//             </Row>

//             <div>
//                 {/* <Product productList={productList}/> */}
//             </div>
//         </div>
//     )
// }

// const mapStateToProps = (state) => {
//     return {
//         todos: state.todos
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addUsers: (name, url) => dispatch(ADD_USER(name, url))
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(AddUser)