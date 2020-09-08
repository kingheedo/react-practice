import React, { Component } from 'react';
import TodoInfo from './TodoInfo';

class TodoList extends Component {
    static defaultProps = {
        data: []
    }
    render() {

        const { data, onRemove, onUpdate  } = this.props;
        const list = data.map(
            info => (<TodoInfo onRemove ={onRemove}
                onUpdate = {onUpdate}
                  info={info} key={info.id} />)
        );
        return (
            <div>
                {list}
            </div>
        );
    }
}

export default TodoList;