import User from "./User";
import UserClass from "./UserClass";
const About = () => {
    return (
        <div className="about">
            <h1>About Us</h1>
            <h2>We are fastest goods delivery service in Vadodara</h2>
            <User name={"Harsh Vaidya(function)"} />
            <UserClass name={"Harsh Vaidya(Class)"}/>
        </div>
    );
};
export default About;