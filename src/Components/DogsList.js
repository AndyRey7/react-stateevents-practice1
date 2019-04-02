import React from 'react'
import DogCard from './DogCard.js'

class DogsList extends React.Component {

    state= {
        dogs: []
    }

    componentDidMount() {
        fetch('http://localhost:3005/dogs')
        .then(resp => resp.json())
        .then(dogsJSON => {
            this.setState({
                dogs: dogsJSON
            })
        })
    }

    doggyCard = () => {
        return this.state.dogs.map(dog => {
            return <DogCard
                name={dog.name}
                img={dog.img}
                breed={dog.breed}
                ageInHumanYears={dog.ageInHumanYears}
                />
            })
    }

    render() {
        return(
            <div className="dogContainer">
                {this.doggyCard()}
            </div>
        )
    }
}


export default DogsList;
