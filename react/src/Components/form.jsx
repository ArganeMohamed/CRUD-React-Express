import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Form() {
    const [user, setUser] = useState({
        nom: null,
        email: null,
        telephone: null,
    });

    const nav = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); 

        const data = {
            nom: user.nom,
            email: user.email,
            telephone: user.telephone,
        };

        axios.post("http://localhost:8000/adduser", data).then(() => {nav("/");})
    };

    return (
        <div className="container">
            <form className="w-75 m-auto" onSubmit={(e) => handleSubmit(e)}>
                <label className="form-label">Nom</label>
                <input className="form-control text-center" type="text" onChange={(e) => setUser({ ...user, nom: e.target.value })} />

                <label className="form-label">E-mail</label>
                <input className="form-control text-center" type="email" onChange={(e) => setUser({ ...user, email: e.target.value })} />

                <label className="form-label">Telephone</label>
                <input className="form-control text-center" type="text" onChange={(e) => setUser({ ...user, telephone: e.target.value })} />

                <input type="submit" className="mt-2 btn btn-primary" />
            </form>
        </div>
    );
}

export default Form;
