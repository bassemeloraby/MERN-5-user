import { useEffect, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import GoalForm from '../components/GoalForm';

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  // const { goals, isLoading, isError, message } = useSelector(
  //   (state) => state.goals
  // )

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  // if (isLoading) {
  //   return <Spinner />
  // }

  return (
    <Fragment>
      <section className="heading">
        <h1>Welcome {user && user.name}</h1>
        <p>Goals Dashboard</p>
      </section>
      <GoalForm />
    </Fragment>
  );
}

export default Dashboard;
