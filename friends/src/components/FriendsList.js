import React from "react";
// import Loader from "react-loader-spinner";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import AddFriend from "./AddFriend";
import { Route } from "react-router-dom";

class FriendsList extends React.Component {
  state = {
    friends: [],
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
      .get("/api/friends/")
      .then((res) => {
        this.setState({
          friends: res.data,
        });
      })
      .catch((err) => console.log({ err }));
  };

  render() {
    return (
      <div>
        <Route component={AddFriend} />
        {this.state.friends.map((friend) => {
          return (
            <div className="friendsList">
              <h3>Name: {friend.name}</h3>
              <h3>Age: {friend.age}</h3>
              <h3>Email: {friend.email}</h3>
            </div>
          );
        })}
      </div>
    );
  }
}

export default FriendsList;
