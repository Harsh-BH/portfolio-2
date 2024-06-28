import React from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";

const Card = ({ index, text, status, onClick, onPlace }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (status === "down") {
      onClick(index);
    }
  };

  const handleRedirect = (e) => {
    e.stopPropagation(); // Prevent the card from flipping when clicking this button
    navigate(`/section/${index}`);
  };

  const handlePlace = (e) => {
    e.stopPropagation(); // Prevent the card from flipping when clicking this button
    onPlace(index);
  };

  return (
    <div
      className={`card ${status}`}
      style={{
        transform: `rotateX(60deg) rotateY(0deg) rotateZ(-45deg) translateZ(${
          index * 3
        }px)`,
      }}
      onClick={handleClick}
    >
      <div className="card-content">
        <div className="card-text">{text}</div>
        {status !== "down" && (
          <>
            <button className="btn open-button" onClick={handleRedirect}>
              Open
            </button>
            <button className="btn place-button" onClick={handlePlace}>
              Place Card
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
