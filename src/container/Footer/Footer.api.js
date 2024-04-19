import axios from "axios"



const createFooterNewsletter = async (data) => {


    try {
        console.log("footer newsletter requiest send ")
        const response = await axios.post("http://localhost:8080/api/v1/mewsletter/createnewsletter", data)
   
        return response;
    } catch (error) {

    }
}

export { createFooterNewsletter }