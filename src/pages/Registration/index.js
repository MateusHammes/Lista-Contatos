
import Layout from "../Components/Layout"
import Link from "next/link"
import Contato from "../../core/Contato.js"



export default function Registration() {

    // const contatos = [
    //     { "nome": "jose", "telefone": "992943392", "endereco": "Avenida central" },
    //     { "nome": "maria", "telefone": "998673411", "endereco": "centro" },
    //     { "nome": "carlos", "telefone": "8832423322", "endereco": "Bairro Leste" },
    // ];
    const lsContato = [
        new Contato("jose", "99874651", "Avenida central"),
        new Contato("Maria", "0558978631", "Avenida Santa Rosa"),
        new Contato("Carlinhos", "999874311", "Centro")
    ];
    console.log(lsContato);




    return (<div>

        <Layout titulo="Pagina de Registro">
            <div>
                <div>
                    <p>Conteudo da pagina de registro</p>
                </div>
                <Link href="/Registration/form">Cadastro</Link>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Nome</th><th>Telefone</th><th>Endereço</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            <tr>
                                <td>Alfreds Futterkiste</td>
                                <td>Maria Anders</td>
                                <td>Germany</td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>
        </Layout>
    </div>
    )
}