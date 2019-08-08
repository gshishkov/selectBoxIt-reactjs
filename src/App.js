import React from 'react';
import SelectBox from './SelectBox';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      selectedValue: "2"
    }
  }

  changeOption = (e) =>{
    this.setState({selectedValue: e.target.value});
    alert(e.target.value);
  }

  render() {
    return (
      <div>
        <SelectBox callback={this.changeOption} value={this.state.selectedValue}/>
      </div>
    );
  }
}

export default App;
