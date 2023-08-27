import React, { useState, useEffect } from "react";
import Card from "../components/creatorCard"; 

const ShowCreators = ({ data }) => {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    setCreators(data);
  }, [data]);

  return (
    <section className="showCreators">
      {creators && creators.length > 0 ? (
        creators.map((newCreator) => (
          <Card
            key={newCreator.id}
            creator={{
              id: newCreator.id,
              name: newCreator.name,
              youtube: newCreator.youtube,
              twitter: newCreator.twitter,
              linkedin: newCreator.linkedin,
              description: newCreator.description,
              imageURL: newCreator.imageURL,
            }}
          />
        ))
      ) : (
        <h3>{"No Creators Yet!!"}</h3>
      )}
    </section>
  );
};

export default ShowCreators;
