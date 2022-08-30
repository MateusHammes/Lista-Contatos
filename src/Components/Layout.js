
import Image from "next/image"
import Link from "next/link"
import style from "../styles/layout.module.css"

export default function Layout(props) {

    return (
        <div className={style.divMain}>
            <header className={style.header}>
                <h1>{props.titulo}</h1>
                <div className={style.ContentHeader}>
                    {/* <Image src="/images/img_user_perfil.jpg" height={60} width={60}></Image> */}
                    <Link href="/">Home</Link>
                </div>
            </header>
            <div>
                {props.children}
            </div>
        </div>)
}
// <p><Link href="/Registration">Registro</Link></p>