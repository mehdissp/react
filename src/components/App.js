import unsplash from '../api/unsplash'
import React from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList'



class App extends React.Component {

    state = { images: [] };

    async onSearchSubmit(term) {
        const { data } = await unsplash.get('/search/photos', {
            params: {
                query: term
            }
        });

        // console.log(data)
        this.setState({ images: data.results });
    }
    render() {
        return (
            <>
                <div className="ui container" style={{ 'margin-top': '10px' }}>
                    <SearchBar onSubmit={this.onSearchSubmit.bind(this)} />
                    {this.state.images.length >0 && `Found:${this.state.images.length}`}
                    <br/>
                    <ImageList images={this.state.images}/>
                </div>
            </>
        );
    }
}


export default App;