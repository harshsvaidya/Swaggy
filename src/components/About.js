import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
    constructor(props) {
        super(props);
        console.log("Parent Constructor");
    }

    render() {
        console.log("Parent Rendering...");
        return (
            <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg mt-8">
                <h1 className="text-4xl font-bold text-gray-800 text-center mb-4">About Us</h1>
                <h2 className="text-xl text-gray-600 text-center mb-6">We are the fastest goods delivery service in Vadodara</h2>
                
                <div className="mt-4">
                    <h3 className="text-2xl font-semibold text-gray-700 mb-2">Team Members</h3>
                    <div className="space-y-4">
                        <User name={""} />
                        <UserClass name={"Harsh Vaidya(Class2)"} />
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
