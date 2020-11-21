import React from 'react';

class ListIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { lists } = this.props;
        return (
            <>
            <div>this is the List index page</div>
            <ul>
                <li>
                {lists}
                </li>
            </ul>
            </>
        );
    }
}

export default ListIndex;