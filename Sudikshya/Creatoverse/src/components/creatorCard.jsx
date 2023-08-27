import React from "react";
import { Link } from "react-router-dom";
import { FiEdit, GoInfo, FaYoutube, FaTwitter, FaLinkedin } from "react-icons/fa";
import "./CreatorCard.css"; 

const CreatorCard = ({ creator }) => {
  const openYouTube = () => {
    window.open(`https://www.youtube.com/${creator.youtube}`, "_blank");
  };

  const openLinkedin = () => {
    window.open(`https://www.linkedin.com/in/${creator.linkedin}`, "_blank");
  };

  const openTwitter = () => {
    window.open(`https://www.twitter.com/${creator.twitter}`, "_blank");
  };

  return (
    <div className="Card" style={{ backgroundImage: `url(${creator.imageURL})`, color: "#fafafa" }}>
      <article>
        <div className="card-header">
          <h2 className="name">{creator.name}</h2>

          {creator.youtube && (
            <FaYoutube onClick={openYouTube} />
          )}

          {creator.twitter && (
            <FaTwitter onClick={openTwitter} />
          )}

          {creator.linkedin && (
            <FaLinkedin onClick={openLinkedin} />
          )}
        </div>

        <div className="card-header-edit">
          <Link
            to={`/${creator.id}`}
            onClick={() => window.scrollTo({ top: 600, behavior: "smooth" })}
          >
            <GoInfo />
          </Link>
          <Link
            to={`/edit/${creator.id}`}
            onClick={() => window.scrollTo({ top: 600, behavior: "smooth" })}
          >
            <FiEdit />
          </Link>
        </div>

        <div className="card-description">
          <p>{creator.description}</p>
        </div>
      </article>
    </div>
  );
};

export default CreatorCard;
