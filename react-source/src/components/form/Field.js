import React, { Component } from 'react';

class Field extends Component {
  render() {
    return (
      <div className={this.props.className || 'field'}>
        <label className="control">
          <h3 className="label">{this.props.label}</h3>
          {this.props.children ||
            <input className="input" type={this.props.type || 'text'} placeholder={this.props.placeholder} />
          }
        </label>
      </div>
    );
  }
}

export default Field;
