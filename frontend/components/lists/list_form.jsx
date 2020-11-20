import React from 'react';
import { withRouter } from 'react-router-dom';

class ListForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.list;
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(this.props.closeModal);
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value });
        }
    }

    // renderErrors() {
    //     return (
    //         <ul>
    //             {this.props.errors.map((error, i) => (
    //                 <li key={`error-${i}`}>
    //                     {error}
    //                 </li>
    //             ))}
    //         </ul>
    //     );
    // }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div onClick={this.props.closeModal} className="close-x">X</div>
                <h1>{this.props.formType}</h1>
                {/* {this.renderErrors()} */}
                <label>
                    <input type="text"
                            value={this.state.title}
                            onChange={this.update('title')}
                            />
                </label>
                <input type="submit" value={this.props.formType} />
            </form>
        )
    }
}

export default ListForm;