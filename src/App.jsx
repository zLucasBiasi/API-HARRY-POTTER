import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getData() {
      const url = await fetch(
        " https://fedeperin-harry-potter-api-en.herokuapp.com/characters"
      );

      const response = await url.json();
      setData(response);
    }

    getData();
  }, []);
  return (
    <>
      {data?.map((item) => (
        <div key={item.id}>
          <h1>Name: {item.character}</h1>
          <h2>Nickname: {item.nickname}</h2>
          <h3>Hogwarts House: {item.hogwartsHouse}</h3>
          <h4>Interpreted by: {item.interpretedBy}</h4>
          <img src={item.image} alt="Personagem" />
        </div>
      ))}
    </>
  );
}

export default App;
