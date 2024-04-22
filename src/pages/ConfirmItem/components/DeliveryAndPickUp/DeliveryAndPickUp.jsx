import React, { useState } from 'react';

const DeliveryPickUp = () => {
  const [activeTab, setActiveTab] = useState('delivery');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryScheduled, setDeliveryScheduled] = useState(false);
  const [deliveryTime, setDeliveryTime] = useState({
    hour: '',
    minute: '',
    period: 'AM',
  });
  const [pickUpScheduled, setPickUpScheduled] = useState(false);
  const [pickUpTime, setPickUpTime] = useState({
    hour: '',
    minute: '',
    period: 'AM',
  });

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleDeliveryAddressChange = (e) => {
    setDeliveryAddress(e.target.value);
  };

  const handleUseCurrentLocation = () => {
    // Logic to get the current location and set the delivery address
    setDeliveryAddress('123 Street Ave, IL, USA');
  };

  const handleDeliveryScheduled = (scheduled) => {
    setDeliveryScheduled(scheduled);
  };

  const handleDeliveryTimeChange = (e) => {
    setDeliveryTime({ ...deliveryTime, [e.target.name]: e.target.value });
  };

  const handlePickUpScheduled = (scheduled) => {
    setPickUpScheduled(scheduled);
  };

  const handlePickUpTimeChange = (e) => {
    setPickUpTime({ ...pickUpTime, [e.target.name]: e.target.value });
  };

  const tabStyle = {
    width: '50%',
    borderBottomColor: '#333',
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    backgroundColor: '#83abae',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '16px',
    color: 'white',
    padding: '10px',
    marginBottom: '0',
  };

  const activeTabStyle = {
    ...tabStyle,
    borderTopColor: 'Black',
    borderLeftColor: 'Black',
    borderRightColor: 'Black',
    borderBottomColor: 'transparent',
    backgroundColor: '#FFEFD7',
    color: 'black',
  };

  const optionStyle = {
    padding: '10px 20px',
    border: '2px solid black',
    borderRadius: '4px',
    backgroundColor: '#DFE4E5',
    cursor: 'pointer',
    marginRight: '10px',
    fontSize: '16px',
    color: 'black',
  };

  const activeOptionStyle = {
    ...optionStyle,
    backgroundColor: '#9B5DE4',
    color: 'white',
  };

  const inputStyle = {
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '10px',
  };

  const buttonStyle = {
    padding: '8px 16px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#DFE4E5',
    color: 'black',
    cursor: 'pointer',
  };

  const confirmButtonStyle = {
    padding: '8px 16px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#9B5DE4',
    color: 'white',
    cursor: 'pointer',
  };

  return (
    <div>
      <div style={{ marginBottom: '0', display: 'flex' }}>
        <button
          style={activeTab === 'pickup' ? activeTabStyle : tabStyle}
          onClick={() => handleTabChange('pickup')}
        >
          Pick-Up
        </button>
        <button
          style={activeTab === 'delivery' ? activeTabStyle : tabStyle}
          onClick={() => handleTabChange('delivery')}
        >
          Delivery
        </button>
      </div>
      <div style={{ backgroundColor: '#FFEFD7', borderBottom: 'Black 2px solid', borderLeft: 'Black solid 2px', borderRight: 'Black solid 2px' }}>
        <div style={{ padding: '20px' }}>
          {activeTab === 'delivery' ? (
            <div>
              <h3>Delivery</h3>
              <p>Would you like to schedule a time for your Delivery?</p>
              <button
                style={deliveryScheduled ? activeOptionStyle : optionStyle}
                onClick={() => handleDeliveryScheduled(true)}
              >
                Yes
              </button>
              <button
                style={!deliveryScheduled ? activeOptionStyle : optionStyle}
                onClick={() => handleDeliveryScheduled(false)}
              >
                No
              </button>
              {deliveryScheduled && (
                <div style={{ marginTop: '20px' }}>
                  <input
                    type="number"
                    name="hour"
                    value={deliveryTime.hour}
                    onChange={handleDeliveryTimeChange}
                    style={{ ...inputStyle, width: '40px', marginRight: '5px' }}
                  />
                  <span>:</span>
                  <input
                    type="number"
                    name="minute"
                    value={deliveryTime.minute}
                    onChange={handleDeliveryTimeChange}
                    style={{ ...inputStyle, width: '40px', marginLeft: '5px' }}
                  />
                  <select
                    name="period"
                    value={deliveryTime.period}
                    onChange={handleDeliveryTimeChange}
                    style={{ ...inputStyle, marginLeft: '10px' }}
                  >
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                  </select>
                </div>
              )}
              <p style={{ marginTop: '20px' }}>Which address would you like to send it to?</p>
              <input
                type="text"
                placeholder="Enter delivery address"
                value={deliveryAddress}
                onChange={handleDeliveryAddressChange}
                style={inputStyle}
              />
              <button onClick={handleUseCurrentLocation} style={buttonStyle}>
                Use Current Location
              </button>
            </div>
          ) : (
            <div>
              <h3>Pick-Up</h3>
              <p>Would you like to schedule a time for your Pick-Up?</p>
              <button
                style={pickUpScheduled ? activeOptionStyle : optionStyle}
                onClick={() => handlePickUpScheduled(true)}
              >
                Yes
              </button>
              <button
                style={!pickUpScheduled ? activeOptionStyle : optionStyle}
                onClick={() => handlePickUpScheduled(false)}
              >
                No
              </button>
              {pickUpScheduled && (
                <div style={{ marginTop: '20px' }}>
                  <input
                    type="number"
                    name="hour"
                    value={pickUpTime.hour}
                    onChange={handlePickUpTimeChange}
                    style={{ ...inputStyle, width: '40px', marginRight: '5px' }}
                  />
                  <span>:</span>
                  <input
                    type="number"
                    name="minute"
                    value={pickUpTime.minute}
                    onChange={handlePickUpTimeChange}
                    style={{ ...inputStyle, width: '40px', marginLeft: '5px' }}
                  />
                  <select
                    name="period"
                    value={pickUpTime.period}
                    onChange={handlePickUpTimeChange}
                    style={{ ...inputStyle, marginLeft: '10px' }}
                  >
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                  </select>
                </div>
              )}
            </div>
          )}
        </div>
        <button style={confirmButtonStyle}>Confirm Order</button>
      </div>
    </div>
  );
};

export default DeliveryPickUp;