import Style from "../styles/input.module.css"

export default function Input({ label, name, ...rest }) {

    return (
        <div className={Style.field}>
            <label className={Style.label}>{label}</label>
            <input className={Style.input} name={name} {...rest}></input>
        </div>
    )
}
