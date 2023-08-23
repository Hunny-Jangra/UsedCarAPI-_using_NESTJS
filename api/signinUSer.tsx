const SigninAPI = `http://localhost:3000/cars/signin`;

interface Signin {
    email: string,
    password: string,
}

const signinUser = async (signindata: Signin) => {
    fetch(`${SigninAPI}`, {
        method: 'POST',
        body: JSON.stringify(signindata),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((res) => {
        console.log('res', res);
        return res.status;
    })
}

export default signinUser;