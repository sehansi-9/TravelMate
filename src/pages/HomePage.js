import DefaultLayout from "../layouts/Default";

export const HomePage = () => {
  return (
    <DefaultLayout>
      <h1 style={{color:"#103A40"}}>Welcome to TravelMate!</h1>
      <img className="flight-item-title" src="https://github.com/sehansi-9/resources/blob/master/tm2.png?raw=true" style={{height:"300px", width:"40%",display:"block", marginLeft:"400px"}}></img>
      <h3 className="image-cont flight-item-title">Make your next flight memorable, with TravelMate</h3>
      <div className="image-cont">
    <img src="https://www.ucb.ac.uk/media/haknbf0f/cabin-crew-l2.jpg?rxy=0.5120006182648975,0.4201467616101763&width=1920&height=823&format=webp&quality=80&v=1da5f42a8706770" alt="handicraft products"></img>
</div>

      
      
    </DefaultLayout>
  );
};

export default HomePage;
