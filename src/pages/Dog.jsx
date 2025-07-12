import React, { useState } from "react";
import axios from "axios";
import '../App.css'
const Dog = () => {
  const [dogImage, setDogImage] = useState(null);

  const getDogImage = async () => {
    try {
      const res = await axios.get("https://dog.ceo/api/breeds/image/random");
      setDogImage(res.data.message);
    } catch (error) {
      alert("Failed to fetch dog image");
      console.error(error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Random Dog Image</h1>
      <button onClick={getDogImage} style={{ padding: "8px 16px" }}>
        Get Dog
      </button>

      {dogImage && (
        <div style={{ marginTop: "20px" }}>
          <img
            src={dogImage}
            alt="Random Dog"
            style={{ maxWidth: "300px", borderRadius: "10px" }}
          />
        </div>
      )}
    </div>
  );
};

export default Dog;
