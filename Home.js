import React, { Component } from 'react';
import Name from './Name';

    class Home extends Component {

        state = { name:
        {
            fullName: "",
            firstName: "",
            lastName: ""
            }
        }

        handleFirstNameChange = firstName => {
            const { name } = this.state;
            this.setState({ name: { ...name,  firstName } });

        }

        handleLastNameChange = lastName => {
            const { name } = this.state;
            this.setState({ name: { ...name, lastName } });

        }

        onButtonClickHandler = () => {
            console.log(this.state)
            this.setState({ name: { fullName: 'Name Entered: ' + this.state.name.firstName + ' ' + this.state.name.lastName, firstName: "", lastName: "" } })

        }



        render() {
            const { name } = this.state;
            return (
                
                <Name name={name} onButtonClickHandler={this.onButtonClickHandler} handleFirstNameChange={this.handleFirstNameChange} handleLastNameChange={this.handleLastNameChange} />
                );
           }   
}

export default Home;



