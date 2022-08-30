

import Layout from "../../components/Layout"

export async function getStaticPaths() {
    return {
        paths: [{
            params: { id: '1' }
        }, {
            params: { id: '2' }
        }],
        fallback: 'blocking'
    }
}

export async function getStaticProps(context) {
    await sleep(7000);
    const idPagina = context.params.id;
    return {
        props: {
            id: idPagina
        }
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default function detailRegistration(props) {

    return (<div>
        <Layout titulo="Detalhes do Registro">
            <div>
                <p>Detalhes do Registro:{props.id}</p>
            </div>
        </Layout>
    </div>
    )
}
