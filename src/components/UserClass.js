import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "",
        location: "",
        avatar_url: "",
        followers: 0,
        following: 0,
        public_repos: 0
      },
    };
    console.log("Child constructor");
  }

  async componentDidMount() {
    // In react, when we make API calls, we need to render the component once, make the API call, and fill the component with data
    const data = await fetch("https://api.github.com/users/harsh432004");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
      console.log("Component updated");
  
    }
  

  componentWillUnmount() {
    // clearInterval(this.timer)
    console.log("Component will unmount");
  }

  render() {
    const { name, location, avatar_url, followers, following, public_repos } = this.state.userInfo;
    console.log("Child Render");
    return (
      <div>
        <h2>Name: {name}</h2>
        <p>Location: {location ? location : "Not Provided"}</p>
        <img src={avatar_url} alt="User Avatar" style={{ width: "150px", borderRadius: "50%" }} />
        <h3>Followers: {followers}</h3>

      </div>
    );
  }
}

export default UserClass;

//  we need to unmount intervals after component did mount to prevent from being called again and again
// to clear the interval use clear interval in componentWillUnmount