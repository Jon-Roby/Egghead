import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = { data: [
      {id: 1, name: "A"},
      {id: 2, name: "B"},
      {id: 3, name: "C"},
      {id: 4, name: "D"},
      {id: 5, name: "E"},
      {id: 6, name: "F"},
      {id: 7, name: "G"},
      {id: 8, name: "H"},
      {id: 9, name: "I"},
      {id: 10, name: "J"},

    ]}
  }

  render() {
    let rows = this.state.data.map( (person) => {
      // You should have a unique key or else you get an error
      // This is only required for siblings
      return <PersonRow key={person.id} data={person} />
    })
    return (
      <table>
        <tbody>{rows}</tbody>
      </table>
    )
  }
}

const PersonRow = (props) => {
  return (
    <tr>
      <td>{props.data.id}</td>
      <td>{props.data.name}</td>
    </tr>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)

/*
  UP TO VIDEO 12
/*

// import React from 'react';
// import ReactDOM from 'react-dom';
//
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       red: 0
//     }
//     this.update = this.update.bind(this);
//   }
//
//
//   update(e) {
//     this.setState({
//       red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
//
//     })
//   }
//
//   render() {
//     return (
//       <div>
//         <NumInput ref="red" update={this.update} />
//         {this.state.red}
//       </div>
//     )
//   }
// }
//
// class NumInput extends React.Component {
//   render() {
//     return (
//       <div>
//         <input ref="inp" type="range"
//           min="0"
//           max="255"
//           onChange={this.props.update} />
//       </div>
//     );
//   }
// }
//
// NumInput.propTypes = {
//   min: React.PropTypes.number,
//   max: React.PropTypes.number,
//   step: React.PropTypes.number,
//   val: React.PropTypes.number,
//   label: React.PropTypes.string,
//   update: React.PropTypes.func.isRequired,
//   type: React.PropTypes.oneOf(['number', 'range'])
// }
//
// NumInput.defaultProps = {
//   min: 0,
//   max: 0,
//   step: 1,
//   val: 0,
//   label: '',
//   type: 'range'
// }
//
// ReactDOM.render(
//   <App />,
//   document.getElementById('app')
// )



/*
  UP TO VIDEO 12
*/

// import React from 'react';
// import ReactDOM from 'react-dom';
//
// let Mixin = InnerComponent => class extends React.Component {
//   constructor() {
//     super();
//     this.update = this.update.bind(this);
//     this.state = {val: 0}
//   }
//
//   update() {
//     this.setState({val: this.state.val + 1})
//   }
//
//   componentWillMount() {
//     console.log('will mount');
//   }
//
//   render() {
//     return (
//       <InnerComponent
//         update={this.update}
//         {...this.state}
//         {...this.props} />
//     )
//   }
//
//   componentDidMount() {
//     console.log('mounted');
//   }
// }
//
// const Button = (props) => <button onClick={props.update}>{props.txt} - {props.val}</button>
//
// const Label = (props) => <label onMouseMove={props.update}>{props.txt} - {props.val}</label>
//
// let ButtonMixed = Mixin(Button);
// let LabelMixed = Mixin(Label);
//
// class App extends React.Component {
//
//   render() {
//     return (
//       <div>
//         <ButtonMixed txt="Button" />
//         <LabelMixed txt="Label" />
//       </div>
//     );
//   }
//
//
// }
//
// ReactDOM.render(
//   <App />,
//   document.getElementById('app')
// )



/*
  UP TO VIDEO 11
/*

// import React from 'react';
// import ReactDOM from 'react-dom';
//
// class App extends React.Component {
//   constructor() {
//     super();
//     this.update = this.update.bind(this);
//     this.state = {increasing: false}
//   }
//
//   update() {
//     ReactDOM.render(
//       <App val={this.props.val + 1} />,
//       document.getElementById('app')
//     );
//   }
//
//   componentWillReceiveProps(nextProps) {
//     this.setState({increasing: nextProps.val > this.props.val})
//   }
//
//   shouldComponentUpdate(nextProps, nextState) {
//     return nextProps.val % 5 === 0;
//   }
//
//   componentDidUpdate(prevProps, prevState) {
//     console.log('prevProps', prevProps)
//   }
//
//   render() {
//     console.log(this.state.increasing)
//     return (
//       <button onClick={this.update}>
//         {this.props.val}
//       </button>
//     )
//   }
// }
//
// App.defaultProps = { val: 0 }
//
// ReactDOM.render(
//   <App />,
//   document.getElementById('app')
// )


/*
  UP TO VIDEO 10
*/

// import React from 'react';
// import ReactDOM from 'react-dom';
//
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = { val: 0 }
//     this.update = this.update.bind(this);
//   }
//
//   update() {
//     this.setState({val: this.state.val + 1})
//   }
//
//   componentWillMount() {
//     this.setState({m: 2})
//   }
//
//   componentDidMount() {
//     console.log(ReactDOM.findDOMNode(this));
//     this.inc = setInterval(this.update, 500);
//   }
//
//   componentWillUnmount() {
//     clearInterval(this.inc);
//   }
//
//   render() {
//     console.log('rendering!');
//     return (
//       <button onClick={this.update}>
//         {this.state.val * this.state.m}
//       </button>
//     )
//   }
// }
//
// class Wrapper extends React.Component {
//   constructor() {
//     super();
//   }
//
//   mount() {
//     ReactDOM.render(<App />, document.getElementById('a'))
//   }
//
//   unmount() {
//     ReactDOM.unmountComponentAtNode(document.getElementById('a'))
//   }
//
//   render() {
//     return (
//       <div>
//         <button onClick={this.mount.bind(this)}>Mount</button>
//         <button onClick={this.unmount.bind(this)}>Unmount</button>
//         <div id="a"></div>
//       </div>
//     )
//   }
// }
//
// ReactDOM.render(
//   <Wrapper />,
//   document.getElementById('app')
// )



/*
  Up To Video 9
*/

// import React from 'react';
// import ReactDOM from 'react-dom';
//
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = { val: 0 }
//     this.update = this.update.bind(this);
//   }
//
//   update() {
//     this.setState({val: this.state.val + 1})
//   }
//
//   componentWillMount() {
//     console.log('mounting');
//   }
//
//   componentDidMount() {
//     console.log('mounted');
//   }
//
//   componentWillUnmount() {
//     console.log('bye');
//   }
//
//   render() {
//     console.log('rendering!');
//     return <button onClick={this.update}>{this.state.val}</button>
//   }
// }
//
// class Wrapper extends React.Component {
//   constructor() {
//     super();
//   }
//
//   mount() {
//     ReactDOM.render(<App />, document.getElementById('a'))
//   }
//
//   unmount() {
//     ReactDOM.unmountComponentAtNode(document.getElementById('a'))
//   }
//
//   render() {
//     return (
//       <div>
//         <button onClick={this.mount.bind(this)}>Mount</button>
//         <button onClick={this.unmount.bind(this)}>Unmount</button>
//         <div id="a"></div>
//       </div>
//     )
//   }
// }
//
// ReactDOM.render(
//   <Wrapper />,
//   document.getElementById('app')
// )

/*
  UP TO VIDEO 8
*/

// import React from 'react';
// import ReactDOM from 'react-dom';
//
// class App extends React.Component {
//   render() {
//     return <Button>I <Heart />React</Button>
//   }
// }
//
// class Button extends React.Component {
//   render() {
//     return <button>{this.props.children}</button>
//   }
// }
//
// // Stateless Component
// const Heart = () => <span className="glyphicon glyphicon-heart"></span>
//
// ReactDOM.render(
//   <App />,
//   document.getElementById('app')
// )

/*
  UP TO VIDE0 #7
*/

// import React from 'react';
// import ReactDOM from 'react-dom';
//
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       red: 0,
//       green: 0,
//       blue: 0
//     }
//     this.update = this.update.bind(this);
//   }
//
//   update(e) {
//     this.setState({
//       red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
//       green: ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
//       blue: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value
//     })
//   }
//
//   render() {
//     return (
//       <div>
//
//         <hr />
//         <Slider ref="red" update={this.update}/>
//         {this.state.red}
//         <br />
//
//         <Slider ref="green" update={this.update}/>
//         {this.state.green}
//         <br />
//
//         <Slider ref="blue" update={this.update}/>
//         {this.state.blue}
//         <br />
//
//       </div>
//     )
//   }
// }
//
// class Slider extends React.Component {
//   render() {
//     return (
//       <div>
//         <input ref="inp" type="range"
//           min="0"
//           max="255"
//           onChange={this.props.update} />
//       </div>
//     )
//   }
// }
//
// ReactDOM.render(
//   <App cat={5}  />,
//   document.getElementById('app')
// )

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
