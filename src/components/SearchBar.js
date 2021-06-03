import React from 'react';

class SearchBar extends React.Component {
    // onInputClick(event) {
    //     //todo
    //     event.persist();
    //     console.log(event)
    // }

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
                                <input type="text" onChange={event=> console.log(event.target.value)} />

                            </div>
                        </div>
                    </form>
                </div>

            </div>

        )
    }
}

export default SearchBar