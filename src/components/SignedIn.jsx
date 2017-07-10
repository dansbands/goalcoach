//This should return 'Signed In as: {user}


import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goalRef } from '../firebase';
import { setGoals } from '../actions';
import GoalItem from './GoalItem';

class SignedIn extends Component {
    componentDidMount() {
        goalRef.on('value', snap => {
            let goals = [];
            snap.forEach(goal => {
                const { email, title } = goal.val();
                const serverKey = goal.key;
                goals.push({ email, title, serverKey });
                console.log('goal', goal);
            })
            console.log('goals', goals);
            this.props.setGoals(goals);
        })
    }

render() {
    console.log('this.props.goals', this.props.goals);
    return (
        <div>{
            <h5><em>Signed In as: {user} </em></h5>
        }</div>
    )
}





export default connect(mapStateToProps, { setGoals })(SignedIn);