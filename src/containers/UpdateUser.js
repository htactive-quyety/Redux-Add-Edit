import React, { useState } from 'react'
import { connect } from 'react-redux'
import { UPDATE_USER } from '../actions/index'
import { Form, Input, Button } from 'antd';

const Openstyle = {
    display: 'block'
}
const CloseStyle = {
    display: 'none'
}

const UpdateUser = (props) => {
    const { nameEdit, updateUser, urlEdit, index } = props;
    const [userName, setUserName] = useState(nameEdit)
    const [urlImg, seturlImg] = useState(urlEdit);
    const [display, setDisplay] = useState(CloseStyle)

    const submitUpdate = () => {
        if (userName === '' || urlImg === '') {
            alert('NO Blank!!')
        } else {
            updateUser(index, userName, urlImg)
        }
    }

    return (
        <div>
            <Button onClick={() => setDisplay(Openstyle)}>Edit</Button>
            <Form style={display}>
                <Form.Item>
                    <Input
                        value={userName}
                        onChange={event => setUserName(event.target.value)}
                    ></Input>
                </Form.Item>
                <Form.Item>
                    <Input
                        value={urlImg}
                        onChange={event => seturlImg(event.target.value)}
                    ></Input>
                </Form.Item>
                <Form.Item>
                    <Button onClick={submitUpdate}>Update</Button>
                </Form.Item>
            </Form>
        </div>
    )
}

const mapStateProps = (state) => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateUser: (id, name, url) => dispatch(UPDATE_USER(id, name, url))
})

export default connect(mapStateProps, mapDispatchToProps)(UpdateUser)