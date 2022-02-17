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
    const cardColorList = [
      "card medium teal lighten-2 hoverable",
      "card medium red lighten-2 hoverable",
      "card medium purple lighten-2 hoverable",
      "card medium blue lighten-2 hoverable",
      "card medium green lighten-2 hoverable",
      "card medium brown lighten-2 hoverable",
    ];

    const buttonColorList = [
      "waves-effect waves-light teal lighten-1 btn-large",
      "waves-effect waves-light red lighten-1 btn-large",
      "waves-effect waves-light purple lighten-1 btn-large",
      "waves-effect waves-light blue lighten-1 btn-large",
      "waves-effect waves-light green lighten-1 btn-large",
      "waves-effect waves-light brown lighten-1 btn-large",
    ];

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
          <button className="waves-effect waves-light pulse btn-large modal-trigger hide-on-small-only">
            Xem thêm
          </button>
        </div>

      </div>
    );
  }
}

export default CardBlock;
