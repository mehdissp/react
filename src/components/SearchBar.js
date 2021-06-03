import React from 'react';

class SearchBar extends React.Component {
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
                                <input type="text"/>
                            
                        </div>
                    </div>
                    </form>
                </div>
              
            </div>

        )
    }
}

export default SearchBar