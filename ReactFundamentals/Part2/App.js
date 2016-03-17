import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      red: 0,
      green: 0,
      blue: 0
    }
    this.update = this.update.bind(this);
  }

  update(e) {
    this.setState({
      red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
      green: ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
      blue: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value
    })
  }

  render() {
    return (
      <div>

        <hr />
        <Slider ref="red" update={this.update}/>
        {this.state.red}
        <br />

        <Slider ref="green" update={this.update}/>
        {this.state.green}
        <br />

        <Slider ref="blue" update={this.update}/>
        {this.state.blue}
        <br />

      </div>
    )
  }
}

class Slider extends React.Component {
  render() {
    return (
      <div>
        <input ref="inp" type="range"
          min="0"
          max="255"
          onChange={this.props.update} />
      </div>
    )
  }
}

ReactDOM.render(
  <App cat={5}  />,
  document.getElementById('app')
)












/*
  DIVIDER 2
*/

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {txt: 'this is the state txt'}
//     this.update = this.update.bind(this);
//   }
//
//   update(e) {
//     this.setState({txt: e.target.value})
//   }
//
//   render() {
//     return (
//       <Widget txt={this.state.txt} update={this.update}/>
//     )
//   }
// }
//
//
//
// const Widget = (props) => {
//   return (
//     <div>
//       <input type="text"
//         onChange={props.update} />
//       <h1>{props.txt}</h1>
//     </div>
//   )
//
// }
//
// ReactDOM.render(
//   <App cat={5}  />,
//   document.getElementById('app')
// )



/*
  DIVIDER 1
*/

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {txt: 'this is the state txt'}
//   }
//
//   update(e) {
//     this.setState({txt: e.target.value})
//   }
//
//   render() {
//     return (
//       <div>
//         <input type="text"
//           onChange={this.update.bind(this)} />
//         <h1>{this.state.txt}</h1>
//       </div>
//     )
//   }
// }
//
// App.propTypes = {
//   txt: React.PropTypes.string,
//   cat: React.PropTypes.number.isRequired
// }
//
// App.defaultProps = {
//   txt: 'this is the default txt'
// }
//
// ReactDOM.render(
//   <App cat={5}  />,
//   document.getElementById('app')
// )
