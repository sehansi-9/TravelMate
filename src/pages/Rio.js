import DefaultLayout from "../layouts/Default";
import React, { useState } from "react";

const seatPrices = {
  "1A": 120, "1B": 100, "1C": 100, "1D": 120,
  "2A": 120, "2B": 100, "2C": 100, "2D": 120,
  "3A": 120, "3B": 100, "3C": 100, "3D": 120,
  "4A": 120, "4B": 100, "4C": 100, "4D": 120,
  "5A": 100, "5B": 80, "5C": 80, "5D": 100,
  "6A": 100, "6B": 80, "6C": 80, "6D": 100,
  "7A": 100, "7B": 80, "7C": 80, "7D": 100,
  "8A": 100, "8B": 80, "8C": 80, "8D": 100,
  "9A": 100, "9B": 80, "9C": 80, "9D": 100,
  "10A": 100, "10B": 80, "10C": 80, "10D": 100,
  "11A": 90, "11B": 80, "11C": 80, "11D": 90,
  "12A": 90, "12B": 80, "12C": 80, "12D": 90,
  "13A": 100, "13D": 90,
  "14A": 100, "14D": 90,
};

const Rio = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [occupiedSeats, setOccupiedSeats] = useState(["1D"]);
  const [showForm, setShowForm] = useState(false);
  const [showPurchase, setShowPurchase] = useState(false);

  const handleSeatChange = (event) => {
    const { id, checked } = event.target;
    if (checked) {
      setSelectedSeats([...selectedSeats, id]);
    } else {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== id));
    }
  };

  const handleBookClick = () => {
    if (selectedSeats.length === 0) {
      alert("Please select a seat");
    } else {
      setShowForm(true);
    }
  };

  const handlePurchaseClick = () => {
    setOccupiedSeats([...occupiedSeats, ...selectedSeats]);
    setShowPurchase(true);
    setSelectedSeats([]);
    setShowForm(false);
  };

  return (
    <DefaultLayout>
      
      <h1 className="flight-item-title">Colombo to Rio de Janeiro 2/7/2024 : 8.30 PM (IST)</h1>
      <div className="container">
        <div className="plane">
          <div className="cockpit">
            <h1 style={{ fontSize: "45px", color:"#3456", marginTop:"70px"  }}>Please select a seat/seats</h1>
          </div>
          <div className="exit exit--front fuselage"></div>
          <ol className="cabin fuselage">
            {[...Array(14)].map((_, rowIndex) => (
              <li key={rowIndex} className={`row row--${rowIndex + 1}`}>
                <ol className="seats" type="A">
                  {[...Array(4)].map((_, seatIndex) => {
                    const seatId = `${rowIndex + 1}${String.fromCharCode(65 + seatIndex)}`;
                    const isOccupied = occupiedSeats.includes(seatId);
                    return (
                      <li key={seatId} className="seat">
                        <input
                          type="checkbox"
                          id={seatId}
                          disabled={isOccupied}
                          onChange={handleSeatChange}
                        />
                        <label htmlFor={seatId}>
                          {isOccupied ? "Occupied" : seatId}
                        </label>
                      </li>
                    );
                  })}
                </ol>
              </li>
            ))}
          </ol>
          <div className="exit exit--back fuselage"></div>
        </div>
        <button onClick={handleBookClick}>Book</button>

        {showForm && selectedSeats.length > 0 && (
          <div className="forms-container">
            <div className="forms">
              {selectedSeats.map((seat) => (
                <div key={seat} className="seat-form">
                  <h3>Seat {seat} (${seatPrices[seat]})</h3>
                  <form>
                    <div>
                      <label>Name:</label>
                      <input type="text" className="input-boxes" name={`name-${seat}`} />
                    </div>
                    <div>
                      <label>Surname:</label>
                      <input type="text" className="input-boxes" name={`surname-${seat}`} />
                    </div>
                    <div>
                      <label>Passport No.:</label>
                      <input type="text" className="input-boxes" name={`passport-${seat}`} />
                    </div>
                    <div>
                      <label>Contact No.:</label>
                      <input type="text" className="input-boxes" name={`contact-${seat}`} />
                    </div>
                    <hr />
                  </form>
                </div>
              ))}
            </div>
            <button onClick={handlePurchaseClick}>Purchase</button>
          </div>
        )}

        {showPurchase && (
          <div style={{ marginLeft: "20px" }}>
            <h2>Thank you for your purchase!</h2>
            {/* Add more details or actions related to the purchase here */}
          </div>
        )}
      </div>
    </DefaultLayout>
  );
};

export default Rio;

