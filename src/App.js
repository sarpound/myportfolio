import React from "react";
import Routes from "./assets/routes/routes";
function App() {
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener('load', handleLoad);
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  function handleLoad() {
    setLoaded(true);
  }

  if (!loaded) {
    return (
      <React.Fragment>
      <div className="loading">
        <div className="loading-text">
        Loading
        <span className="dot">.</span><span class="dot">.</span><span class="dot">.</span>
        </div>
      </div>
      </React.Fragment>
    );
  }

  return (
    <>
      <React.Fragment>
        <Routes />
      </React.Fragment>
    </>
  );
}

export default App;
