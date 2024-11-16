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
        public_repos: 0,
      },
    };
    console.log("Child constructor");
  }

  async componentDidMount() {
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
    console.log("Component will unmount");
  }

  render() {
    const { name, location, avatar_url, followers, following, public_repos } = this.state.userInfo;
    console.log("Child Render");
    return (
      <div className="bg-white shadow-lg rounded-lg p-6 w-96 mx-auto text-center">
        <img
          src={avatar_url}
          alt="User Avatar"
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Name: {name || "Not Available"}</h2>
        <p className="text-gray-600 text-md mb-2">
          Location: {location || "Not Provided"}
        </p>
        <h3 className="text-gray-500 text-sm mb-2">Followers: {followers}</h3>
        <h3 className="text-gray-500 text-sm">Following: {following}</h3>
        <h3 className="text-gray-500 text-sm">Repos: {public_repos}</h3>
      </div>
    );
  }
}

export default UserClass;
