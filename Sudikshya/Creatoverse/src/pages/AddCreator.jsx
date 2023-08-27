import React, { useState } from "react";
import { supabase } from "../client"; 

const AddCreator = () => {
  const [creator, setCreator] = useState({
    name: "",
    youtube: "",
    twitter: "",
    linkedin: "",
    description: "",
    imageURL: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreator((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const randomId = Math.floor(Math.random() * 1000);

  const addCreator = async (e) => {
    e.preventDefault();

    const { error } = await supabase
      .from("creator")
      .insert({
        name: creator.name,
        youtube: creator.youtube,
        twitter: creator.twitter,
        linkedin: creator.linkedin,
        description: creator.description,
        imageURL: creator.imageURL,
        id: randomId.toString(),
      });

    if (error) {
      console.log(error);
    }

    window.location = "/";
  };

  return (
    <div className="AddEditCreator">
      <form id="addCreatorForm">
        
        <button type="submit" onClick={addCreator} className="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddCreator;
