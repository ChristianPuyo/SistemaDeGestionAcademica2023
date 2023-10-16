import style from "./Student.module.css"

const Student = ({id, firstName, lastName, gender, email, age})=>{
    return(
        <div>
            <h1>{firstName}</h1>
            <h2>{lastName}</h2>
            <h3>{id}</h3>
            <h3>{age}</h3>
            <h4>{gender}</h4>
            <h5>{email}</h5>


            

        </div>
    )
}

export default Student;