import React from 'react';
import CardList from '../components/CardList'
import ErrorBoundry from '../components/ErrorBoundry'
import {robots} from '../robots'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: '',
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
        // console.log(filteredRobots);
    }

    render() {
        console.log('render')
        const filteredRobots = this.state.robots.filter(
            robots => {
                return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
            })
        if (!robots.length) {
            return <h1> Loading </h1>
        } else {
        return (    
            <div className='tc'>
                <h1> RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                <CardList robots={filteredRobots}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
        
        )
        }
    }
}

export default App;