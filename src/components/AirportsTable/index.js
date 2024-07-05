// AirportsTable.js

import React, { useState } from 'react';
import { ActionButton, Checkbox } from '@adobe/react-spectrum';
import Edit from '@spectrum-icons/workflow/Edit';
import Delete from '@spectrum-icons/workflow/Delete';
import EditComponent from '../Editcomponent'; 
import './index.css';

function AirportsTable() {
  const [airports, setAirports] = useState([
    { id: 1, name: 'Indra Gandhi International Airport', country: 'India', code: 'DEL', terminals: 3 },
    { id: 2, name: 'Dubai International Airport', country: 'UAE', code: 'DXB', terminals: 5 },
    { id: 3, name: 'Heathrow Airport', country: 'England', code: 'LHR', terminals: 6 },
    { id: 4, name: 'Istanbul Airport', country: 'Turkey', code: 'IST', terminals: 3 },
    { id: 5, name: 'Rajiv Gandhi International Airport', country: 'Texas', code: 'DFW', terminals: 14 }
  ]);
  const [selectedAirports, setSelectedAirports] = useState([]);
  const [editingAirportId, setEditingAirportId] = useState(null);

  const addAirport = () => {
    const newAirport = { id: Date.now(), name: 'New Airport', country: 'New Country', code: 'XXX', terminals: 1 };
    setAirports([...airports, newAirport]);
  };

  const deleteAirport = (id) => {
    setAirports(airports.filter(airport => airport.id !== id));
  };

  const handleSelectAll = (isSelected) => {
    if (isSelected) {
      setSelectedAirports(airports.map(airport => airport.id));
    } else {
      setSelectedAirports([]);
    }
  };

  const handleSelect = (id) => {
    setSelectedAirports((prevSelected) =>
      prevSelected.includes(id) ? prevSelected.filter(item => item !== id) : [...prevSelected, id]
    );
  };

  const handleEdit = (airport) => {
    setEditingAirportId(airport.id);
  };

  const handleSaveEdit = (updatedAirport) => {
    const updatedAirports = airports.map(airport =>
      airport.id === updatedAirport.id ? { ...updatedAirport } : airport
    );
    setAirports(updatedAirports);
    setEditingAirportId(null);
  };

  const handleCancelEdit = () => {
    setEditingAirportId(null);
  };

  return (
    <div className='main-airports'>
      {editingAirportId ? (
        <React.Fragment>
          <div className="navigation-path">
            <span onClick={() => setEditingAirportId(null)}>Airports / </span>
            <span>{airports.find(airport => airport.id === editingAirportId).name}</span>
          </div>
          <EditComponent
            airport={airports.find(airport => airport.id === editingAirportId)}
            onSave={handleSaveEdit}
            onCancel={handleCancelEdit}
          />
        </React.Fragment>
      ) : (
        <div>
          <div className="header">
            <h2>Airports</h2>
            <ActionButton className="add-button" onPress={addAirport}>+ Add New</ActionButton>
          </div>
          <table className="airports-table">
            <thead>
              <tr>
                <th><Checkbox isSelected={selectedAirports.length === airports.length} onChange={handleSelectAll} /></th>
                <th>All Airports</th>
                <th>Country</th>
                <th>Code</th>
                <th>Terminals</th>
                
              </tr>
            </thead>
            <tbody>
              {airports.map((airport) => (
                <tr key={airport.id}>
                  <td><Checkbox isSelected={selectedAirports.includes(airport.id)} onChange={() => handleSelect(airport.id)} /></td>
                  <td>{airport.name}</td>
                  <td>{airport.country}</td>
                  <td>{airport.code}</td>
                  <td>{airport.terminals}</td>
                  <td>
                    <ActionButton className="edit-button" onPress={() => handleEdit(airport)}><Edit /></ActionButton>
                    <ActionButton onPress={() => deleteAirport(airport.id)}><Delete /></ActionButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default AirportsTable;
