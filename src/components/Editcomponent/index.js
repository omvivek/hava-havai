import React, { Component } from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-aria-components';
import './index.css';
import Popup from '../TerminalPopup';

class EditComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serviceName: '',
      category: '',
      subCategory: '',
      showImage: false,
      description: '',
      imageUrl: '',
      isPopupOpen: false
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleCheckboxChange = (event) => {
    const { checked, name } = event.target;
    this.setState({ [name]: checked });
  };

  handleImageUpload = (event) => {
    
    const file = event.target.files[0];
    
    const reader = new FileReader();
    reader.onloadend = () => {
      this.setState({ imageUrl: reader.result });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  handleSave = () => {
    
    console.log('Service Details:', this.state);
    
  };

  handleAddTerminal = (terminalData) => {
    
    console.log('New Terminal Data:', terminalData);
    
    this.setState({ isAddingTerminal: false });
  };

  togglePopup = () => {
    this.setState((prevState) => ({
      isPopupOpen: !prevState.isPopupOpen
    }));
  };


  render() {
    const { serviceName, category, subCategory, showImage, description, imageUrl, isPopupOpen } = this.state;

    const { airport } = this.props;

    return (
      <div>
        <div className="navigation-path">
        <h2>{airport.name}</h2>
        
        </div>

        <div className="container">
          <div className="content">
            <Tabs>
              <TabList aria-label="Tabs">
                <Tab id="tab1">Terminals</Tab>
                <Tab id="tab2">Transport</Tab>
                <Tab id="tab3">Contact details</Tab>
              </TabList>
              <TabPanel id="tab1">
                <div>
                  
                  <div className="terminals">
                    
                    <div className="terminal">
                    <div class="terminal-info">
  <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjeP7SbjdSDXkdQDhvLdjm0aTa9jMbPi1l2FSw903wLWQ2lGZVUQRfehRdFSXS5JMKF4WIIbFHUbe_AocA9wLC_bOc9i8MAlofBjLreRFADH2aGBt5vrc7dPhpk7jsilbAQ3WHThHvq70DcPJmC5dGDYECLuEhgv6JeGmV_Vb6AMbVIIZeaJ2mSYGEo/s320/Image.png" alt="Terminal"/>
  <div class="terminal-text">
    <h3>Terminal 1</h3>
    <p>Optional metadata should be two lines.</p>
  </div>
</div>
<div class="terminal-info">
  <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjeP7SbjdSDXkdQDhvLdjm0aTa9jMbPi1l2FSw903wLWQ2lGZVUQRfehRdFSXS5JMKF4WIIbFHUbe_AocA9wLC_bOc9i8MAlofBjLreRFADH2aGBt5vrc7dPhpk7jsilbAQ3WHThHvq70DcPJmC5dGDYECLuEhgv6JeGmV_Vb6AMbVIIZeaJ2mSYGEo/s320/Image.png" alt="Terminal"/>
  <div class="terminal-text">
    <h3>Terminal 2</h3>
    <p>Optional metadata should be two lines.</p>
  </div>
</div>

                      <button className='bu' onClick={this.togglePopup}>+ Add Terminal</button>
                    </div>
                   
                  </div>

                  
                  <h1>Services</h1>
                  <div className="services">
                    
                    <div className="service">
                      <h3>Lost & found</h3>
                      <hr />
                      <div>
                        <label>Service Name:</label>
                        <input
                          type="text"
                          name="serviceName"
                          value={serviceName}
                          onChange={this.handleInputChange}
                        />
                      </div>
                      <div>
                        <label>Category:</label>
                        <select
                          name="category"
                          value={category}
                          onChange={this.handleInputChange}
                        >
                          <option value="">Select Category</option>
                          <option value="Category1">Category 1</option>
                          <option value="Category2">Category 2</option>
                        </select>
                      </div>
                      <div>
                        <label>Sub Category:</label>
                        <select
                          name="subCategory"
                          value={subCategory}
                          onChange={this.handleInputChange}
                        >
                          <option value="">Select Sub Category</option>
                          <option value="SubCategory1">Sub Category 1</option>
                          <option value="SubCategory2">Sub Category 2</option>
                        </select>
                      </div>
                      <div>
                        <label>Upload Image:</label>
                        <input
                          type="file"
                          onChange={this.handleImageUpload}
                        />
                        {imageUrl && (
                          <div className="image-preview">
                            <img src={imageUrl} alt="Uploaded" />
                          </div>
                        )}
                      </div>
                      <div>
                        <label>Show Image:</label>
                        <input
                          type="checkbox"
                          name="showImage"
                          checked={showImage}
                          onChange={this.handleCheckboxChange}
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
                        <button onClick={this.handleSave}>Save</button>
                      </div>
                    </div>
                    <div className="service">
                      <h3>Lounge</h3>
                      <hr />
                      
                    </div>
                    <div className="service">
                      <h3>Money Exchange</h3>
                      <hr />
                      
                    </div>
                    {isPopupOpen && (
          <div className="overlay">
            <Popup
              onAddTerminal={this.handleAddTerminal}
              onClose={this.togglePopup}
            />
          </div>
        )}

                  </div>
                </div>
              </TabPanel>
              <TabPanel id="tab2">
                <p>Content for Tab 2</p>
              </TabPanel>
              <TabPanel id="tab3">
                <p>Content for Tab 3</p>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}

export default EditComponent;
