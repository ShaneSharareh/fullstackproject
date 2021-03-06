import {connect} from 'react-redux';
import {createNewUser, removeError} from '../../actions/session_action';
import UserForm from './user_form'
import { openModal, closeModal } from '../../actions/modal_actions';
import React from 'react';
import { Link } from 'react-router-dom';
const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Register',
  };
};

const mapDispatchToProps = dispatch => {
   return {
    processUser: (user) => dispatch(createNewUser(user)),
    otherSession: (
      <button className ="signup-login-btn" onClick={() => dispatch(openModal('login'))}>
        Sign in
      </button>
    ),
    closeModal: () => dispatch(closeModal()),
    removeError: () => dispatch(removeError())
  };
}

//dont have to depend on state so, no need for mapStateToProps
export default connect(mapStateToProps,mapDispatchToProps)(UserForm)