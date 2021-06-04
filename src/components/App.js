import axios from 'axios';
import React from 'react';
import SearchBar from './SearchBar';



class App extends React.Component {
  async  onSearchSubmit(term) {
        console.log(term);
       const {data}=await axios.get('https://api.unsplash.com/search/photos', {
            headers: {
                authorization:'Client-ID OvwFnJezZH8gObQt7qbnhxl487pftfxRxj_XCHAz4sI'
            },
            params: {
                query: term
            }
        });
        console.log(data)
    }
    render() {
        return (
            <>
                <div className="ui container" style={{ 'margin-top': '10px' }}>
                    <SearchBar onSubmit={this.onSearchSubmit} />
                </div>
            </>
        );
    }
}


export default App;