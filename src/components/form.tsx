import React from 'react';
import model from '../model/taskModel'

interface State {
    text: string
    showInfo: boolean
}

interface Props {

}


class Form extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            text: '',
            showInfo: false              
        };

    }

    handleChange = (e: any) => {
        this.setState({text: e.target.text});
    }

    handleSubmit = (e: any) => {
        e.preventDefault();
        this.setState({
            showInfo: true
        })

    }

  
    render() {
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <h2>Add task to the list!</h2>
                <input className="textField" type="text" value={this.state.text} onChange={this.handleChange} />
                <input type="submit" className="button" value="Add task" /> 
                <div className="taskAdded">{this.state.showInfo && 'Task has been added'}</div>
            </form>
        );
    }

}   

export default Form;