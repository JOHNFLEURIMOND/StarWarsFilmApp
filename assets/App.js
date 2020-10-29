import React, { useState, useEffect } from 'react';

const App = () => {
  const [message, setMessage] = useState('Frontend');
  console.log(setMessage);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        "http://localhost:8080/api/test"
      );
      const data = await result.json();
      console.log("data", data);

      setMessage(data);
    };

    fetchData();
  })

  console.log(setMessage)
  return (
    <div>
    <pre>
      <code>
        {message && JSON.stringify(message, null, 4)}
      </code>
    </pre>
  </div>
  );
};

export default App;
