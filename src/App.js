import { useEffect, useState } from 'react';
import './App.scss';
import Routes from './pages/Routes';

function App() {
  const [isApploading, setIsApploading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsApploading(false)
    }, 200)
  }, [])
  if (isApploading) {
    return (
      <div className="loaderContainer">
        <span className="loader"></span>
      </div>
    )
  }
  return (
    <>
      <Routes />
    </>
  );
}

export default App;
