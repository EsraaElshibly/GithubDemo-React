import React , { Component }from 'react';
import './App.css';

class App extends Component {

/* Change Name By Using Button 
  state = {
    name : 'Esraa' 
  }

ChangeName = () => {
    this.setState({
    name : 'Salah' 
  })
}

printName = () => console.log('Esraa')

  render () {
    return(
      <div className="App">
        <button onClick = {this.printName}>Print Name</button>
        <button onClick = {this.ChangeName} >Change Name</button>
        <p> {this.state.name} </p>
      </div>
    )
  }
  */

 /* Forms */
 state = {
   name:''
 }

 handleSubmit = (e) => {
  e.preventDefault(); 
  console.log(this.state.name)
 }

 handleChange = (e) => {
  this.setState ({
    name: e.target.value
  })
}

render() {
  return (
    <div className="app">
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange} />
        <button>Submit</button>
      </form>
      {this.state.name}
<br />
    </div>
  )
  }
}
export default App;
