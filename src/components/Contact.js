const Contact = () => {
    return (
        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md mt-12">
            <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">Contact Us</h1>
            <p className="text-gray-600 text-center text-lg">
                Contact us via email at{" "}
                <a
                    href="mailto:info@quickr.com"
                    className="text-blue-600 font-medium hover:underline"
                >
                    info@quickr.com
                </a>
            </p>
        </div>
    );
};

export default Contact;
