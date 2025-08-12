import { useState } from "react";
import Register from "./Register";
import Movies from "./Movies";

function App() {
  const [showMovies, setShowMovies] = useState(false);

  return (
    <div>
      {!showMovies ? (
        <Register onSuccess={() => setShowMovies(true)} />
      ) : (
        <Movies />
      )}
    </div>
  );
}

export default App;



