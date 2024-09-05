import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [item, setitem] = React.useState([]);

  function noteadded(note) {
    
    const timestamp = new Date().toLocaleString(); 
    setitem((prev) => {
      return [...prev, { ...note, timestamp }];
    });
  }

  function deletenote(id) {
    setitem((prevvalue) => {
      return prevvalue.filter((not, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea ontodoadd={noteadded} />
      {item.map((items, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={items.title}
            content={items.content}
            timestamp={items.timestamp} 
            ondeletecalled={deletenote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
