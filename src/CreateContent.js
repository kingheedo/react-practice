import React, { Component } from 'react';

class CreateContent extends Component {
    ChangeContent = (e) => {
        e.preventDefault();

    }

    render() {
        return (
            <form action="/create_content" method=" post" onSubmit={this.ChangeContent}>
                <input name="content" placeholder="오늘의 할일은?" >

                </input>
                <div>
                    <button type="submit">작성</button>
                </div>
            </form>
        );
    }
}

export default CreateContent;