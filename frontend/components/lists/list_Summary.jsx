import React from 'react';

class ListSummary extends React.Component {
  render() {
    const list = this.props.lists;
    const numTasks = list.length

    return (
        <>
        <div className='list-name-div'>{list.title}</div>
          <div className='list-num-task detail-item'>
            <p className='num'>{numTasks}</p>
            <p className='type'>{(numTasks < 2 ) ? 'task' : 'tasks' }</p>
          </div>
        </>
    );
  }
}

export default ListSummary;
