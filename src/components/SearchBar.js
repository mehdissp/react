import React from 'react';

class SearchBar extends React.Component {
    // onInputClick(event) {
    //     //todo
    //     event.persist();
    //     console.log(event)
    // }
    state ={term:''}

    render() {
        return (
            <div>
                <div className="ui segment">
                    <form>
                        <div className="ui form">
                            <div className="field">
                                <label>
                                    image search
                                </label>
                                <input value={this.state.term} type="text" onChange={event=> this.setState({term:event.target.value})} />

                            </div>
                        </div>
                    </form>
                </div>

            </div>

        )
    }
}

export default SearchBar