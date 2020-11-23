import React from 'react';
import { withRouter } from 'react-router-dom';

class EditListForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(e) {
        e.preventDefault();
        const list = this.state;
        const title = this.state.title;
        this.setState({ title: '' });
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
                    <h1>Edit list</h1>
                    {/* {this.renderErrors()} */}
                    <label>Please enter list name:<br></br>
                        <input type="text"
                            value={this.state.title}
                            onChange={this.update('title')}
                        />
                    </label>
                    <div className=""></div>
                    <input type="submit" value="Save" />
                    <button onClick={this.props.closeModal}>Cancel</button>
                </div>
            </form>
        )
    }
}

export default EditListForm;