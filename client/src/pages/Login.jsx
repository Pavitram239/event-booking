import { useLoaderData } from 'react-router-dom';
import customFetch from '../utils/customFetch';

export const loader = async () => {
  const res = await customFetch.get('/auth/login');
  const data = await res.json();
  return data;
};

const Login = () => {
  const data = useLoaderData();
  return <h1>{data}</h1>;
};
export default Login;
