import React from 'react';

class SearchBar extends React.Component {
    // onInputClick(event) {
    //     //todo
    //     event.persist();
    //     console.log(event)
    // }
    state = { term: '' }
    onFormSubmit(e) {
        e.preventDefault();
      console.log(this.state.term)
        this.props.onSubmit(this.state.term);
    }



    render() {
        return (
            <div>
                <div className="ui segment">
                    {/* this.onFormSubmit.bind(this) */}

                    <form onSubmit={this.onFormSubmit.bind(this)}>
                        <div className="ui form">
                            <div className="field">
                                <label>
                                    image search
                                </label>
                                <input
                                    value={this.state.term}
                                    type="text"
                                    onChange={event => this.setState({ term: event.target.value })}
                                />

                            </div>
                        </div>
                    </form>
                </div>

            </div>

        )
    }
}

export default SearchBar