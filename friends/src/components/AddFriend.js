import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class AddFriend extends React.Component {
  constructor() {
    super();
    this.state = {
      billy: {
        id: "",
        name: "",
        age: "",
        email: "",
      },
    };
  }

  handleChange = (e) => {
    this.setState({
      billy: {
        ...this.state.billy,
        [e.target.name]: e.target.value,
      },
    });
  };

  addNewFriend = () => {
    axiosWithAuth()
      .post("/api/friends", this.state.billy)
      .then((res) => {
        this.setState({
          billy: res.data,
        });
      })
      .catch((err) => console.log({ err }));
    const newFriend = {
      billy: {
        id: "",
        name: "",
        age: "",
        email: "",
      },
    };
    this.setState({
      billy: {
        ...this.state.billy,
        newFriend,
      },
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.addNewFriend}>
          <label htmlFor="newFriendName">
            Name:
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
            />
          </label>
          <label htmlFor="newFriendAge">
            Age:
            <input
              type="number"
              name="age"
              onChange={this.handleChange}
              value={this.state.age}
            />
          </label>
          <label htmlFor="newFriendEmail">
            Email:
            <input
              type="email"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
          </label>
          <button className="add-btn">Add New Friend</button>
        </form>
      </div>
    );
  }
}

export default AddFriend;
