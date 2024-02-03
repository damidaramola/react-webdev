/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/desola-lanre-ologun-kwzWjTnDPLk-unsplash (1).jpg";

const imageAltText = "woman teaching man code on a computer screen";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "CanvasCorner",
    description:
      "CanvasCorner is a photo-sharing content platform for artists who love to paint. They can share their artwork with many artists and gain inspiration for their future creations of art.",
    url: "https://canvas-corner-b9b6c14b7bc7.herokuapp.com/",
  },
  {
    title: "Festive Fun",
    description:
      "FestiveFun is a blog which provides readers with exposure to some of the top music and transformative events from around the world, as well as helpful festival tips and plenty of festival fashion ideas and advice.",
    url: "https://festivefun.herokuapp.com/",
  },
  {
    title: "Queens and Diamonds",
    description:
      "Queens and diamonds is a simple card guessing game in which th player must guess and pick the right card (Queen of Diamonds). Each of the 4 cards is shuffled and then faced on its back to the player.If the play guesses the right card, they are awarded with points. There are 4 rounds in total.",
    url: "https://github.com/damidaramola/Memory-Card-Game",
  },
  {
    title: "To-do List App",
    description:
      "This simple TODO app allows the user to plan out their tasks for the day. It is feasible and easy to use for people such as students, teachers and those who really enjoy organised productivity.",
    url: "https://github.com/damidaramola/new-to-do-list",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
