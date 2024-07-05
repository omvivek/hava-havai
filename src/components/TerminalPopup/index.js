// Popup.js

import React, { Component } from 'react';
import './index.css'; 
class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      image: null
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleImageUpload = (event) => {
    const file = event.target.files[0];
    this.setState({ image: file });
  };

  handleSubmit = () => {
    const { title, description, image } = this.state;
    this.props.onAddTerminal({ title, description, image });
    this.setState({ title: '', description: '', image: null });
    this.props.onClose(); 
  };

  render() {
    const { title, description } = this.state;

    return (
      <div className="popup">
        <div className="popup-inner">
          <h2>Add Terminal</h2>
          <div>
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label>Description:</label>
            <textarea
              name="description"
              value={description}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label>Upload Image:</label>
            <input type="file" onChange={this.handleImageUpload} />
          </div>
          <div className="popup-buttons">
            <button onClick={this.handleSubmit}>Continue</button>
            <button onClick={this.props.onClose}>Cancel</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;
