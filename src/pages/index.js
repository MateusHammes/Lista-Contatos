
import Link from "next/link"
import Layout from "../components/Layout"

export default function Home() {
    return (
        <Layout titulo="Pagina Principal">

            <div>
                <div>
                    <p>Itens da pagina Principal</p>
                </div>
                <div>
                    <Link href="/Registration"> Registro</Link>
                </div>
            </div>

        </Layout>





    )
}