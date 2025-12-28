import React from "react";

function FleetCard({ fleet, updateDriver, toggleStatus, deleteFleet }) {
  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      <img
        src="https://via.placeholder.com/150"
        alt="vehicle"
        width="100%"
      />

      <p>Reg No: {fleet.regNo}</p>
      <p>Category: {fleet.category}</p>
      <p>Driver: {fleet.driver}</p>
      <p>Status: {fleet.status}</p>

      <button onClick={() => updateDriver(fleet.id)}>
        Update Driver
      </button>

      <button onClick={() => toggleStatus(fleet.id)}>
        Toggle Status
      </button>

      <button onClick={() => deleteFleet(fleet.id)}>
        Delete
      </button>
    </div>
  );
}

export default React.memo(FleetCard);
