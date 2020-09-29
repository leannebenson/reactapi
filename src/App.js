import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        shoe: []
      };
  }

  componentDidMount(){
    fetch("http://localhost:8000/api/shoe").then((res) => res.json()).then((data) => this.setState({ shoe: data}));
  }


  render(){
  return (
    <div>
      <h1>Hello World</h1>
      <ul>
        {this.state.shoe.map((p) => (
          <li>
            Brand:{p.brand_name} Manufacturer:{p.manufacturer} Size:{p.size}{" "}
            Color:{p.color} Material:{p.material} Type:{p.shoe_type} Fasten Type:
            {p.fasten_type}
          </li>
        ))}
      </ul>
    </div>
  );
  }

}

export default App;
