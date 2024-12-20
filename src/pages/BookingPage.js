import DefaultLayout from "../layouts/Default";
export const BookingPage = () => {
  return (
    <DefaultLayout>
      <h1 style={{color:"#103A40"}}>Choose your destination...</h1>
<div className="flight-items">
      <div class="flight-item">
                  <span class="flight-item-title">Flight 1237383 (Rio) </span>
                  <img class="flight-item-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLu7eoHCuGkf-CQUWo4TyQV-IY0NTz4gqaLw&s" alt="rio"></img>
                  <div className="details-book">
                  <button type="button">Details</button>
                  <button type="button"><a href="/book/rio">Book</a></button>
                  </div>
               
      </div>
      <div class="flight-item">
                  <span class="flight-item-title">Flight 6373839 (Narita)</span>
                  <img class="flight-item-image" src="https://img.freepik.com/premium-photo/beautiful-pink-sakura-flower-tree-airplane-with-blue-sky_50039-763.jpg" alt="narita"></img>
                  <div className="details-book">
                  <button type="button">Details</button>
                  <button type="button"><a href="/book/narita">Book</a></button>
                  </div>
      </div>
      <div class="flight-item">
                  <span class="flight-item-title">Flight 7893738 (Amsterdam)</span>
                  <img class="flight-item-image" src="https://tulipfestivalamsterdam.com/wp-content/uploads/2019/10/bigstock-Commercial-Plane-And-Tulips-192652612-1024x705.jpg" alt="amsterdam"></img>
                  <div className="details-book">
                  <button type="button">Details</button>
                  <button type="button"><a href="/book/amstdm">Book</a></button>
                  </div>
      </div>
      </div>
      
    </DefaultLayout>
  );
};

export default BookingPage;
