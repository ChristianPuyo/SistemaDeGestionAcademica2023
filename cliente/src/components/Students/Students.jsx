import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';
import { getStudents } from '../../redux/actions';
import Student from '../Student/Student';

const Students = ()=>{
    const dispatch = useDispatch();
    const students = useSelector(state => state.students)

    useEffect(()=>{
        dispatch(getStudents())
    },[])

    return(
        <div>
            <h1>Soy el componente Students</h1>
            {
                students.map(element =>{
                    return(
                        <Student
                            key={element.id}
                            id={element.id}
                            firstName={element.firstName}
                            lastName={element.lastName}
                            email={element.email}
                            age={element.age}
                            gender={element.gender}
                        />
                    )
                })
            }

        </div>
    )
}

export default Students;