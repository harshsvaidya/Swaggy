import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";
class About extends Component {
    constructor(props) {
        super(props);
        console.log("Parent Constructor")
    }
    render() {
        console.log("Parent Rendering...")
        return (
            <div className="about">
                <h1>About Us</h1>
                <h2>We are fastest goods delivery service in Vadodara</h2>
                <User name={"Harsh Vaidya(function)"} />
                <UserClass name={"Harsh Vaidya(Class2)"}/>
            </div>
        );
    }
}
export default About;