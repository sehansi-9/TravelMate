import { useAuthContext } from "@asgardeo/auth-react";


export const Header = () => {
  const { state, signIn, signOut } = useAuthContext()
  
   const renderItems = () => {
    return (
      <>
        {state.isAuthenticated ? (
          
          <>
            <div className="center-panel" id="center-panel"style={{marginLeft:"-400px"}}>
            <a href="/book" className="nav active" id="insights">
            
          </a>
            </div>
            <div className="right-panel">
            <div className="avatar-dropdown">
              <div className="si-details">
              <div className="avatar">
                {state.username}
              </div>
              <div className="avatar">
                <button onClick={() => signOut()}>Sign Out</button>
              </div>
              </div>
            </div>
          </div>
          </>
        ) : (
          <div className="right-panel">
            <div className="avatar-dropdown">
              <div className="avatar"></div>
              <div className="avatar">
                <button onClick={() => signIn()}>Sign In</button>
              </div>
            </div>
          </div>
        )}
      </>
    );
  };




  
  return (
    <header>
      <div className="navbar">
        <div className="left-panel">
          <h2>TravelMate</h2>
        </div>
        <div className="center-panel" id="center-panel">
          <a href="/" className="nav active" id="home">
            Home
          </a>
        </div>
        {renderItems()}
      </div>
    </header>
  );
};

export default Header;
