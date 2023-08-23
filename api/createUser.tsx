import axios from "axios";

const API = `http://localhost:3000/cars/signup`;


interface Tasks {
    firstname: string,
    lastname: string,
    gender: string,
    email: string,
    password: string,
    confirmpassword: string
}


const createUser = async (tasks : Tasks) => {
    fetch(`${API}`, {
        method: 'POST',
        body: JSON.stringify(tasks),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}



export default createUser;