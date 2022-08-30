
import Layout from "../components/Layout";
import React, { useState } from 'react';
import Input from "../components/Input";
import Style from "../../styles/form.module.css"


export default function Form() {

    // const [name, setname] = useState("");
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
    }


    return (
        <Layout titulo="Cadastro do Contato">
            <form className={Style.form} onSubmit={handleSubmit}>
                <Input label="Nome" name="nome" value={inputs.nome || ""} required onChange={handleChange}></Input>
                <Input label="Telefone" type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" name="telefone" value={inputs.telefone || ""} required onChange={handleChange}></Input>
                <Input label="Endereço" type="Address" name="endereco" value={inputs.endereco || ""} onChange={handleChange}></Input>
                <input type="submit"></input>
            </form>
        </Layout>
    );
}