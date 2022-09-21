import React, { useEffect } from 'react';
import { useDispatch,useSelector  } from 'react-redux';
import { getData } from '../../redux/actions/getProduct';
import './styles.scss';

function HomePage() {
  
  const todos = useSelector((state) => state.getProduct);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData())
  }, []);

  return (
       <div className='content'><h1>{todos.isLoading.toString()}</h1></div>
       
  );
}

export default HomePage;
