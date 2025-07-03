
import Grid from '@mui/material/Grid';
import { Divider } from '@mui/material';



const Home = () => {

  // checked, completion receipt for exercises 2.4 and 2.5
  
  return (
    <>
      
    <h1>Jackie Fang</h1>
    <h2>Aspiring Software Engineering</h2>
    <Divider sx={{ width: '500px', borderColor: 'white', mx: 'auto', my: 4 }} />

      <h3>
        Github to all the projects:{' '}
        <a href="https://github.com/TunaPigeon" target="_blank" rel="noopener noreferrer">
          TunaPigeon
        </a>
      </h3>
    <Divider sx={{ width: '500px', borderColor: 'white', mx: 'auto', my: 4 }} />


    </>
  );
};

export default Home;
