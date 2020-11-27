import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import ListItem from './list_item'
import Modal from '../modal/modal';
import { openModal } from '../../actions/modal_actions';


class ListIndex extends React.Component {
    constructor(props) {
        super(props);
        this.coffee = this.coffee.bind(this);
    }

    componentDidMount() {
        this.props.fetchLists();
    }

    coffee() {
        alert("you found the COFFEE!");
    }


    render() {
        const { lists, deleteList ,updateList, openModal } = this.props;
        //deconstruc
        return (
            <>
            <Modal list={this.props.list}/>

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
                
                <p className="coffee-talk">Are you ready to get even more done?</p>
                <div className="arrow-down-1"></div>
                <img src={window.coffeeUrl} alt="coffee" className="coffee" width="90px" onClick={this.coffee} />

            </>
        );
    }
}

export default ListIndex;