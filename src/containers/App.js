import React from 'react';
import CardList from '../components/CardList'
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
        console.log('construct')
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users}))
        console.log('component didmound')

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
                <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
        
        )
        }
    }
}

export default App;