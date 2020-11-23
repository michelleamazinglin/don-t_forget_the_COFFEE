import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import ListItem from './list_item'
import Modal from '../modal/modal';
import { openModal } from '../../actions/modal_actions';


class ListIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchLists();
    }


    render() {
        const { lists, deleteList ,updateList, openModal } = this.props;
        //deconstruc
        return (
            <>
            <Modal list={this.props.list}/>
            <Link to="/" className="list-header-link">
                <img src={window.logoUrl} alt="logo" className="logo" width="90px"/>
                <p>Don't forget<br></br>the COFFEE</p>
            </Link>
            <div className="list-plus">
                <img src={window.arrowUrl} className="arrow-down" width="15px" height="15px" />
                <p>Lists</p>
                <button onClick={() => this.props.openModal('createList')}>+</button>
            </div>

                <ul className="list-ul">
                    {
                        lists.map(list => <ListItem
                            list={list}
                            deleteList={deleteList}
                            key={list.id}
                            openModal={openModal}
                        />
                        )
                        // for each list, render list item
                    }
                </ul>
            </>
        );
    }
}

export default ListIndex;