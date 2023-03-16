
import {Link} from 'react-router-dom';

export const NotFound =() => {
    return (
        <> 
         <p>Sorry, page not found</p>
         <Link to='/'>To Home page</Link>
         <img src="https://cutt.ly/x4imRWt" alt="Not found hage" />
        </>
      

    )
}