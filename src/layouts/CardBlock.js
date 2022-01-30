import React from "react";
import CardBlockItem from "./CardBlockItem.js";

import SocialWelfare from "../data/img/whatwedo/socialWelfare.jpg";
import School from "../data/img/whatwedo/school.jpg";
import Food from "../data/img/whatwedo/food.jpg";
import Water from "../data/img/whatwedo/water.jpg";
import WomanEmpowerment from "../data/img/whatwedo/womanEmpowerment.jpg";
import Qurbani from "../data/img/whatwedo/qurbani.jpg";

const CardBlock = () => {
  return (
    <div className="container">
      <h1 className="center">What We Do</h1>
      <br />
      <div className="row">
        <CardBlockItem
          card="card medium red lighten-2 hoverable"
          button="waves-effect waves-light red lighten-1 btn-large"
          title="Education"
          image={School}
          html="/education"
          content="The Ilahi Foundation has partnered with ISHRAQ Schooling System (ISS) to ensure children from poor backgrounds are receiving proper education in a safe environment. ISS is a non-profit and non-commercial institution which focuses on educating children with less privileges in a competitive standard to make them excel in knowledge, character, and positive action."
        />
        <CardBlockItem
          card="card medium purple lighten-2 hoverable"
          button="waves-effect waves-light purple lighten-1 btn-large"
          title="Food Bank"
          image={Food}
          html="/foodbank"
          content="TIFC is committed to help those in need of food. Our goal is to provide food and supplies to less-fortunate families across the globe. We aim to collect and provide at least $50 a month to ensure the needs of poor families."
        />
        <CardBlockItem
          card="card medium teal lighten-2 hoverable"
          button="waves-effect waves-light teal lighten-1 btn-large"
          title="Social Welfare"
          image={SocialWelfare}
          html="/socialwelfare"
          content="Our recent and ongoing projects include building wells and providing clean drinking water in poor communities across the globe. TIFC has initiated a water supply system, Sabeel-e-Rehmat (SER), to ensure that clean drinking water is being provided to poor communities around the world"
        />
      </div>
      <div className="row">
        <CardBlockItem
          card="card medium blue lighten-2 hoverable"
          button="waves-effect waves-light blue lighten-1 btn-large"
          title="Water"
          image={Water}
          html="/water"
          content=""
        />
        <CardBlockItem
          card="card medium green lighten-2 hoverable"
          button="waves-effect waves-light green lighten-1 btn-large"
          title="Woman Empowerment"
          image={WomanEmpowerment}
          html="/womanempowerment"
          content=""
        />
        <CardBlockItem
          card="card medium brown lighten-2 hoverable"
          button="waves-effect waves-light brown lighten-1 btn-large"
          title="Qurbani"
          image={Qurbani}
          html="/qurbani"
          content=""
        />
      </div>
    </div>
  );
};

export default CardBlock;
