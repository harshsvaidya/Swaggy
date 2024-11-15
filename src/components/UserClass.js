import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "",
        location: "",
        avatar_url: "",
      },
      count: 0, // Added count to the state
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/harsh432004");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    // Any additional updates can go here
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div>
        <h2>Name: {name}</h2>
        <p>Location: {location ? location : "Not Provided"}</p>
        <img src={avatar_url} alt="User Avatar" />
      </div>
    );
  }
}

export default UserClass;
