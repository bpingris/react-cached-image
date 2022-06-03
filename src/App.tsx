import CachedImage from "./CachedImage";

const imgs = [
  {
      src: `https://i.picsum.photos/id/1083/200/300.jpg?hmac=Cb2IPPC1QKcreSR4t7ILwR62HeAnBS5y7pK9zl3XwI4&q=${Math.random()}`,
      id: 'Cb2IPPC1QKcreSR4t7ILwR62HeAnBS5y7pK9zl3XwI4',
  },
  {
      src:`https://i.picsum.photos/id/441/200/200.jpg?hmac=ajdz2DirytbwfXS-S6OBlM6NaQALCD7Aajo8uQcJMV0&q=${Math.random()}`,
      id: 'ajdz2DirytbwfXS-S6OBlM6NaQALCD7Aajo8uQcJMV0'
  },
  {
      src:`https://i.picsum.photos/id/101/200/300.jpg?hmac=xUDvORQTxaML0fp9wnx4y6LIHvc7M-tNcOJz8rDLRXo&q=${Math.random()}`,
      id: 'xUDvORQTxaML0fp9wnx4y6LIHvc7M-tNcOJz8rDLRXo',
  },
];

function App() {
  return (
    <div className="App">
        {/*
            on the first call, images are fetched from the URL and cached as base64 url and stored in the localstorage with the `keyCache` as the key
        */}
        {imgs.map(img => <CachedImage key={img.id} src={img.src} keyCache={img.id} />)}
    </div>
  );
}

export default App;
