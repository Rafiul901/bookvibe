
import { useLoaderData } from 'react-router-dom';
import Books from './Books';
import Banner from '../components/Banner';


const Home = () => {

const data = useLoaderData();
console.log(data);
 
    return (
      <div>
        <Banner></Banner>
        <Books data={data}></Books>
      </div>
    );
};

export default Home;