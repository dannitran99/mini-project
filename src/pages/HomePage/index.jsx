import React, { useEffect } from 'react';
import { useDispatch,useSelector  } from 'react-redux';
import { getData } from '../../redux/actions/getProduct';
import Loading from '../../components/Loading';
import './styles.scss';

function HomePage() {
  
  const todos = useSelector((state) => state.getProduct);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData())
  }, []);

  return (
       <div className='content'>
         {todos.isLoading && <Loading/>}
       </div>
  );
}

export default HomePage;
