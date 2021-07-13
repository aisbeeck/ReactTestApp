import React, { Component } from 'react';


const name = {
    name: "",
    firstName: "",
    lastName: ""
}


class Name extends Component {

 
    

    handleFirstNameChange = e => {
        this.props.handleFirstNameChange(e.target.value);

    }

    handleLastNameChange = e => {
        this.props.handleLastNameChange(e.target.value);
        //this.props.handleLastNameChange({ lastName: e.target.value });

    }

    onButtonClickHandler = () => {
        //const { name } = this.state;
        //this.setState({ name: this.state.firstName + ' ' + this.state.lastName });
        this.props.onButtonClickHandler()
    }

    render() {
        const { fullName, firstName,lastName } = this.props.name;
        return (
            <div>
                <input className="m-2"
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={this.handleFirstNameChange}
                />

                <input className="m-2"
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={this.handleLastNameChange}
                />

                <button className="btn btn-primary m-2" onClick={this.onButtonClickHandler}>Enter</button>
                <br />

                <br />
                <label className="m-2"> {fullName}</label>
            </div>

        );
    }
}
export default Name;
