import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../firebase';
import AddGoal from './AddGoal';
import GoalList from './GoalList';
import CompleteGoalList from './CompleteGoalList';
//import SignedIn from './SignedIn';



class App extends Component {
    constructor() {
        super();
        this.state = {
            name: (firebaseApp.auth().currentUser && firebaseApp.auth().currentUser.email) || '',
        };

        if (!firebaseApp.auth().currentUser) {
            firebaseApp.auth().onAuthStateChanged(user => user && this.updateName(user.email));
        }
    }

    updateName(name) {
        this.setState({name});
    }

    signOut() {
        firebaseApp.auth().signOut();
    }

    render() {
        return (
            <div style={{margin: '5px'}}>
                <h3>Goal Coach</h3>
                <h4>Signed in as <em>{this.state.name}</em></h4>
                <AddGoal />
                <hr />
                <h4>Goals</h4>
                <GoalList />
                <hr />
                <h4>Complete Goals</h4>
                <CompleteGoalList />
                <hr />
                <button
                    className="btn btn-danger"
                    onClick={() => this.signOut()}
                >
                    Sign Out
                </button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    // console.log('state', state);
    return {}
}

export default connect(mapStateToProps, null)(App);