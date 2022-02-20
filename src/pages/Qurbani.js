import React, { Component } from "react";
import DonatePostApi from '../api/DonatePostApi';
import PostDetail from "./PostDetail";




class Qurbani extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.match.params.id)
    this.state = {
      donators: []
    }
  }

  getViewDetailPost = async (id) => {
    try {
      //call api
      const donators = await DonatePostApi.getPostById(id);

      console.log(donators);
      this.setState({
        donators: donators
      })
    } catch (error) {
      console.log(error)
    }
  }

  componentDidMount() {
    let titleId = this.props.match.params.id;
    console.log(titleId)

    let iyear = parseInt(titleId, 10);
    console.log(iyear);
    this.getViewDetailPost(iyear);

  }

  render() {
    const a = this.state.donators.donator?.map(
      (todo) => (
        <p key={todo.id}> {todo.fullName} </p>
        
      ));
    console.log(this.state.donators.donator)
    const ab = this.state.donators.donator?.map(
      (todo) => (
        <p key={todo.id}> {todo.phone} </p>
        
      ));
    return (

      <PostDetail
        title = {this.state.donators.title}
        content_1 = {this.state.donators.content_1}
        img_1={this.state.donators.img_1}
        content_2 = {this.state.donators.content_2}
        img_2 = {this.state.donators.img_2}

        fullName = {a}
        phone = {ab}
      />

    );
  }
}



export default Qurbani;
