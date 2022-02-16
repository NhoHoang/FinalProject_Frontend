import React from "react";
import CardBlockItem from "./CardBlockItem.js";

import SocialWelfare from "../data/img/whatwedo/socialWelfare.jpg";
import School from "../data/img/whatwedo/school.jpg";
import Food from "../data/img/whatwedo/food.jpg";
import Water from "../data/img/whatwedo/water.jpg";
import WomanEmpowerment from "../data/img/whatwedo/womanEmpowerment.jpg";
import Qurbani from "../data/img/whatwedo/qurbani.jpg";
import DonatePostApi from "../api/DonatePostApi";

class CardBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      donators: [],
      listPost: [],
    };
  }

  getListDonatePost = async () => {
    try {
      const donators = await DonatePostApi.getListPost();
      console.log(donators);
      this.setState({
        donators: donators,
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getListDonatePost();
  }

  render() {
    const donatorhihi = this.state.donators.map((donator) => (
      <CardBlockItem
        card="card medium teal lighten-2 hoverable"
        button="waves-effect waves-light teal lighten-1 btn-large"
        title={donator.title}
        image={School}
        html="/education"
        content="The Ilahi Foundation has partnered with ISHRAQ Schooling System (ISS) to ensure children from poor backgrounds are receiving proper education in a safe environment. ISS is a non-profit and non-commercial institution which focuses on educating children with less privileges in a competitive standard to make them excel in knowledge, character, and positive action."
      />
    ));
    return (
      <div className="container">
        <h1 className="center">CÁC CHƯƠNG TRÌNH TỪ THIỆN</h1>
        <br />
        <div className="row">
          {donatorhihi}
          {/* <CardBlockItem
            card="card medium red lighten-2 hoverable"
            button="waves-effect waves-light red lighten-1 btn-large"
            title={donatorhihi.title}
            image={School}
            html="/education"
            content="The Ilahi Foundation has partnered with ISHRAQ Schooling System (ISS) to ensure children from poor backgrounds are receiving proper education in a safe environment. ISS is a non-profit and non-commercial institution which focuses on educating children with less privileges in a competitive standard to make them excel in knowledge, character, and positive action."
          /> */}
          {/* <CardBlockItem
            card="card medium purple lighten-2 hoverable"
            button="waves-effect waves-light purple lighten-1 btn-large"
            title="Trợ giúp đồng bào miền Trung mùa lũ"
            image={Food}
            html="/foodbank"
            content="TIFC is committed to help those in need of food. Our goal is to provide food and supplies to less-fortunate families across the globe. We aim to collect and provide at least $50 a month to ensure the needs of poor families."
          />
          <CardBlockItem
            card="card medium teal lighten-2 hoverable"
            button="waves-effect waves-light teal lighten-1 btn-large"
            title="Quyên góp xây dựng nhà ở cho trẻ em vùng lũ"
            image={SocialWelfare}
            html="/socialwelfare"
            content="Our recent and ongoing projects include building wells and providing clean drinking water in poor communities across the globe. TIFC has initiated a water supply system, Sabeel-e-Rehmat (SER), to ensure that clean drinking water is being provided to poor communities around the world"
          />
        </div>
        <div className="row">
          <CardBlockItem
            card="card medium blue lighten-2 hoverable"
            button="waves-effect waves-light blue lighten-1 btn-large"
            title="Quyên góp xây dựng nhà ở cho trẻ em vùng lũ"
            image={Water}
            html="/water"
            content=""
          />
          <CardBlockItem
            card="card medium green lighten-2 hoverable"
            button="waves-effect waves-light green lighten-1 btn-large"
            title="Quyên góp xây dựng nhà ở cho trẻ em vùng lũ"
            image={WomanEmpowerment}
            html="/womanempowerment"
            content=""
          />
          <CardBlockItem
            card="card medium brown lighten-2 hoverable"
            button="waves-effect waves-light brown lighten-1 btn-large"
            title="Quyên góp xây dựng nhà ở cho trẻ em vùng lũ"
            image={Qurbani}
            html="/qurbani"
            content=""
          /> */}
          <button className="waves-effect waves-light pulse btn-large modal-trigger hide-on-small-only">
            Xem thêm
          </button>
        </div>
      </div>
    );
  }
}

export default CardBlock;
