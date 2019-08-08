import React from 'react';

class SelectBox extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  handleClick = (e) => {
    const { value, callback } = this.props;
    const newValue = e.target.value;
    if( value !== newValue) {
      callback(e);
    }
  }

  render() {
    return (
      <div>
        <select 
          onClick={(e) => {this.handleClick(e)}}
          onChange={(e) => {this.handleClick(e)}}
          value={this.props.value}
        >
          <option value="1" >Test</option>
          <option value="2" >Test2</option>
        </select>
      </div>
    );
  }
}

export default SelectBox;
