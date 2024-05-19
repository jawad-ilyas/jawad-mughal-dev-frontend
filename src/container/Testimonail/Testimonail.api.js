import axios from "axios";

const fetchReview = async () => {
    try {
        const response = await axios.get("https://jawadmughaldevbackend-pqzrzm5js-jawadmughal0079s-projects.vercel.app/api/v1/review/fetchReview");
        // console.log("Fetch Review into api  Testimonail ", response.data.data); // Log the data from the response
        return response.data.data; // Return the data from the response
    } catch (error) {
        console.error("Fetch Review Error", error); // Log the error
        throw error; // Throw the error to handle it further if needed
    }
};

export { fetchReview };
