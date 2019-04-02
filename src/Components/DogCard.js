import React from "react";

class DogCard extends React.Component {
    state = {
        clicked: false,
        age: false
    }

    handleClick = () => {
        this.setState({
            clicked: !this.state.clicked

        })
        console.log('clicked')
        console.log(this.state.clicked)
    }

    handleDoubleClick = () => {
        this.setState({
            doubleClicked: !this.state.doubleClicked
        })
    }

  render() {
    return (
      <div>
        <h2>{this.props.name}({this.props.breed})</h2>
        <h1 className='bark'>{this.state.clicked ? "AWOOOOOOOO!" : null}</h1>
        <img alt={this.props.name} src={this.props.img} />
        <button onClick={this.handleClick}>Bark</button>
        <h2 className='bark'>{this.state.doubleClicked ? this.props.ageInHumanYears : null }</h2>
        <button className="age-button"onDoubleClick={this.handleDoubleClick}>Check his/her Age</button>
        <hr/>
      </div>
    );
  }
}

export default DogCard;
