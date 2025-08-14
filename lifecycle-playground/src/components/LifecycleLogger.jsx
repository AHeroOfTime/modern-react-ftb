import { Component } from 'react';

class LifecycleLogger extends Component {
  constructor(props) {
    // must call super, and pass in any props that are passed into the component
    super(props);
    console.log('Component init...');

    // this.incrementCount = this.incrementCount.bind(this);
    // manually bind this

    // state is added in the constructor
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log('Component mounted...');
    // api calls would go here in this lifecycle method
    // lifecycle methods: 1. mount, 2. update, 3. unmount
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log('Component updated...', this.state.count);
    }
  }

  componentWillUnmount() {
    console.log('Component unmount...');
  }

  // created as an arrow function so you dont have to manually bind each function to this(kw)
  incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <div className='logger-container'>
        <h2>LifecycleLogger (Class Component)</h2>
        <p>{this.props.message}</p>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount} className='secondary-btn'>
          Update
        </button>
      </div>
    );
  }
}

export default LifecycleLogger;
