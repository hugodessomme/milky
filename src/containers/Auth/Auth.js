import React, { Component } from 'react';
import { connect } from 'react-redux';
import { auth } from '../../store/actions/auth';
import Helmet from '../../components/Helmet/Helmet';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Tile from '../../components/UI/Tile/Tile';
import { Container, Row, Col } from '../../components/UI/Grid/Grid';
import Loader from '../../components/UI/Loader/Loader';

class Auth extends Component {
  state = {
    login: '',
    email: '',
    password: '',
    registeredLogin: '',
    registeredPassword: ''
  }

  changedHandler = event => {
    const { name, value } = event.target;
    
    this.setState({ [name]: value });
  };

  subscribeHandler = event => {
    event.preventDefault();
    this.props.onAuth();
  };

  loginHandler = event => {
    event.preventDefault();
    this.props.onAuth();
  }

  render() {
    const { login, email, password, registeredLogin, registeredPassword } = this.state;

    let form = (
      <Row>
        {/* Subscribe */}
        <Col>
          <Tile>
            <h3>Subscribe</h3>
            <form className="subscribe" onSubmit={this.subscribeHandler}>
              <Input
                id='login'
                value={login}
                label='Login' 
                placeholder='Enter your login' 
                onChange={this.changedHandler} />
              <Input 
                id='email'
                value={email}
                label='Email'
                placeholder='Enter your email'
                type='email'
                onChange={this.changedHandler} />
              <Input 
                id='password'
                value={password}
                label='Choose a safe password'
                type='password'
                onChange={this.changedHandler} />
              
              <div className="text-right">
                <Button>Register</Button>
              </div>
            </form>
          </Tile>
        </Col>
        
        {/* Login */}
        <Col>
          <Tile>
            <h3>Login</h3>
            <form className="login" onSubmit={this.loginHandler}>
              <Input 
                id='registeredLogin'
                value={registeredLogin}
                label='Your login' 
                onChange={this.changedHandler} />
              <Input 
                id='registeredPassword'
                value={registeredPassword}
                label='Your password'
                tye='password' 
                onChange={this.changedHandler} />
              
              <div className="text-right">
                <Button>Login</Button>                  
              </div>
            </form>
          </Tile>
        </Col>
      </Row>
    );

    if (this.props.loading) {
      form = <div className="text-center"><Loader /></div>;
    }

    if (this.props.error) {
      form = <div className="text-center">{this.props.error}</div>;
    }

    return (
      <Container>
        <Helmet />
        {form}        
      </Container>
    );
  };
};

const mapStateToProps = ({ auth }) => {
  return {
    loading: auth.loading,
    error: auth.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuth: () => dispatch(auth())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);