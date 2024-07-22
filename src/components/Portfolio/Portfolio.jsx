import React, { useContext } from "react";
//import "./Portfolio.css";
import "./style.css";

import img1 from "./Images/foodorder.JPG";
import img2 from "./Images/chat.JPG";
import img3 from "./Images/github.JPG";
import img4 from "./Images/Design.JPG";
import { themeContext } from "../../Context";

const Portfolio = (data) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  console.log(data);

  const portfolioData = [
    {
        "name": "FoodOrder-App",
        "poster": img1,
        "summary": "Created and implemented a food ordering app that help users to order their favourite food through our website. Frontend Technologies - HTML , CSS, React , DB - MongoDB , Backend - Node.js",
        "Github FE": "https://github.com/subashree3456/FOOD_FRONTENDD",
        "Github BE": "https://github.com/subashree3456/FOOD_BACKEND",
        "Deployed Link": "https://dulcet-sopapillas-ed086c.netlify.app/",


    },
    {
        "name": "Chat-App",
        "poster": img2,
        "summary": "Created MERN chat app with Authentication & Authorization using JWT , real time messaging with Socket.io functionality. Frontend Technologies - HTML , CSS, React , DB - MongoDB , Backend - Node.js",
        "Github FE": "https://github.com/subashree3456/CHAT-APP-YT/tree/master/frontend",
        "Github BE": "https://github.com/subashree3456/CHAT-APP-YT/tree/master/backend",
        "Deployed Link": "https://chat-app-yt-fqoi.onrender.com/",
    },
    {
        "name": "GitHub-App",
        "poster": img3,
        "summary": "Created Github app with Authentication & Authorization using Passport.js , fetches Github User Profiles and Repos . Technologies - MERN + TailwindCSS + Github API",
        "Github FE": "https://github.com/subashree3456/mern-github-app/tree/main/frontend",
        "Github BE": "https://github.com/subashree3456/mern-github-app/tree/main/backend",
        "Deployed Link": "https://mern-github-app-ir02.onrender.com/",
    },
    {
        "name": "Design-App",
        "poster": img4,
        "summary": "Created and implemented Login & Register website for users with full CRUD Functionalities with responive web design . Here users can login with their username and password  and if it is new user they can also register ",
        "Github FE": "https://github.com/subashree3456/DESIGN_FRONTEND",
        "Github BE": "https://github.com/subashree3456/DESIGN_BACKEND",
        "Deployed Link": "https://astounding-raindrop-b7658a.netlify.app/",
    },

]

const Frontend = (e) =>{
window.open(e, "_blank")
}

const Backend = (e) =>{
  window.open(e, "_blank")
  }

  const DeployedLink = (e) =>{
    window.open(e, "_blank")
    }


  return (
    <div className="portfolio" id="portfolio">
    <div className="movie-list">
    {
      (portfolioData).map((movie)=>{

       

          return(
              <>
              <div className="movie-container">                    
                   <img src={movie.poster} alt="" className="movie-poster"/> 

               <div className="movie-specs">
                <h3 className="movie-name"> {movie.name}</h3>                  
             
                </div>     

             <p className="movie-summary">{movie.summary}</p>
              <div style={{display:"flex" , marginTop:"20px" , gap: "10px" }}>
              <button onClick={()=>Frontend(movie["Github FE"])} style={{padding: "10px 20px" , borderRadius : "5px"}}>Frontend</button>
            <button onClick={()=>Backend(movie["Github BE"])} style={{padding: "10px 20px" , borderRadius : "5px"}}>Backend</button>
              <button onClick={()=>DeployedLink(movie["Deployed Link"])} style={{padding: "10px 20px" , borderRadius : "5px"}}>Deployed Link</button>
              </div>
             </div>

              </>
          )
      })
    }
  </div>

</div>


  );
};

export default Portfolio;
