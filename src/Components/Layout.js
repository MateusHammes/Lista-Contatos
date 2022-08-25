
import Link from "next/link"
import style from "../styles/layout.module.css"

export default function layout(props) {

    return (
        <div>
            <header className={style.header}>
                <h1>{props.titulo}</h1>
                <p> <Link href="/">Home</Link></p>
                <p><Link href="/Registration">Registro</Link></p>
            </header>
            <div>
                {props.children}
            </div>
        </div>)
}