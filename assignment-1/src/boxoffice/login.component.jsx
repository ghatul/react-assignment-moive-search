import React from 'react';
import apiService from './movie.service';


class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        apiService.login().then(res => {
            this.props.history.push({
                pathname: `/dashboard`,
              });
        }).catch(err => {
             //console.log(err);
        })
    }

    onChange(event) {
    const obj = {};
    obj[event.target.name] = event.target.value;
    this.setState({...obj});
    }

    render() {
        const { userName, password } = this.state;
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                <lable>user name:
                    <input
                      type='text'
                      value={userName}
                      name='userName'
                      onChange={this.onChange}
                    ></input>
                </lable>
                <label>password:
                    <input
                      type='text'
                      value={password}
                      name='password'
                      onChange={this.onChange}>
                    </input>
                </label>
                <input type='submit' value='submit'></input>
                </form>
            </div>
        );
    }
}

export default LoginComponent;