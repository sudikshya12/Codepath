import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../client"; 
import "./EditCreator.css";
const EditCreator = ({ data }) => {
  const { id } = useParams();
  const [creator, setCreator] = useState({
    id: "",
    name: "",
    youtube: "",
    twitter: "",
    linkedin: "",
    description: "",
    imageURL: "",
  });

  useEffect(() => {
    const result = data.find((item) => String(item.id) === id);
    if (result) {
      setCreator({
        name: result.name,
        youtube: result.youtube,
        twitter: result.twitter,
        linkedin: result.linkedin,
        description: result.description,
        imageURL: result.imageURL,
        id: result.id,
      });
    }
  }, [data, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreator((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const updateCreator = async (e) => {
    e.preventDefault();
    const { error } = await supabase
      .from("creator")
      .update({
        name: creator.name,
        youtube: creator.youtube,
        linkedin: creator.linkedin,
        twitter: creator.twitter,
        description: creator.description,
        imageURL: creator.imageURL,
      })
      .eq("id", id);

    if (error) {
      console.log(error);
    }

    window.location = "/";
  };

  const deleteCreator = async (e, id) => {
    e.preventDefault();
    const { error } = await supabase.from("creator").delete().eq("id", id);

    if (error) {
      console.error("Error deleting creator:", error);
    } else {
      console.log("Creator deleted successfully!");
      window.location = "/";
    }
  };

  return (
    <div className="AddEditCreator">
      <form>
        
        <div className="submit-box">
          <button className="submit-update" type="submit" onClick={updateCreator}>
            Submit
          </button>
          <button className="delete-button" onClick={(e) => deleteCreator(e, creator.id)}>
            Delete
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditCreator;
