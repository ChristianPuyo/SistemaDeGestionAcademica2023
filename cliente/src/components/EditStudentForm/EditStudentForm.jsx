import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import StudentForm from '../StudentForm/StudentForm';
import { setCurrentStudent,cleanCurrentStudent, getStudenById, cleanMessage } from '../../redux/actions';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const EditStudentForm = () => {
  const dispatch = useDispatch();
  const {id} = useParams();
  const message = useSelector(state=>state.messageOperation)

  useEffect(() => {
    // Simulación de obtener datos del estudiante desde la API
     dispatch(setCurrentStudent(id));
      
    return()=>{
    dispatch(cleanCurrentStudent())     
    }
    
  }, [dispatch]);

 

  return (
    <div>
      
      <StudentForm />
    </div>
  );
};

export default EditStudentForm;