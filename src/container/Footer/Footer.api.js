import axios from "axios"



const createFooterNewsletter = async (data) => {


    try {
        console.log("footer newsletter requiest send ")
        const response = await axios.post("https://jawadmughaldevbackend-jawadmughal0079s-projects.vercel.app/api/v1/mewsletter/createnewsletter", data)

        return response;
    } catch (error) {

    }
}

export { createFooterNewsletter }