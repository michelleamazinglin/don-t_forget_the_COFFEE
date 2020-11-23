import React from 'react';
import { withRouter } from 'react-router-dom';

class CreateListForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            user_id: this.props.currentUser,
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(e) {
        e.preventDefault();
        const list = this.state;
        this.setState({ title: '' });
        this.props.createList(list);
        this.props.closeModal();
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
                <div className="modal-wrap">
                    <h1>Add a list</h1>
                    {/* {this.renderErrors()} */}
                    <label className="enter-wrap">Please enter list name:<br></br>
                        <input type="text"
                            value={this.state.title}
                            onChange={this.update('title')}
                        />
                    </label>
                    <div className="modal-button">
                        <button onSubmit={this.handleSubmit}>Save</button>
                        <button onClick={this.props.closeModal}>Cancel</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default CreateListForm;