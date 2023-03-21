import {Link} from 'react-router-dom';

 const NotFound =() => {
    return (
        <> 
         <p>Sorry, page not found</p>
         <img src="https://cutt.ly/x4imRWt" alt="Not found hage" />
         <Link to='/'>To Home page</Link>
        </>   
    )
};
 export default NotFound;