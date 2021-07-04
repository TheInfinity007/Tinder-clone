import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import axios from './axios';
function TinderCards() {
  const [people, setPeople] = useState([]);

//  Component Did Mount
  useEffect(() => {
      async function fetchData(){
        const req = await axios.get('/tinder/cards');
        setPeople(req.data);
      }

      fetchData();
  }, [])

//   2:21:39
// https://www.youtube.com/watch?v=ktjafK4SgWM

    const swiped = (direction, nameToDelete) => {
        console.log("removing:", nameToDelete, direction);
    //   setLastDirection(direction);
    } 

    const outOfFrame = (name) => {
        console.log(name, "left the screen!!");
    }

    return(
      <div className="tinderCards">
           <div className="tinderCards_cardContainer"> 
            {people.map((person) => (
                <TinderCard 
                    className="swipe"
                    key={person.name}
                    preventSwipe={['up', 'down']}
                    onSwipe={(dir) => swiped(dir, person.name)}
                    onCardLeftScreen={(dir) => outOfFrame(person.name)}
                >
                    <div
                        style={{ backgroundImage: `url(${person.imgUrl})` }}
                        className="card">
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}   
           </div>
        
    </div>
  )
}

export default TinderCards;
