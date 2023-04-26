import React from 'react';
import Loader from '../ui/loader/Loader';

const NotFoundPage = () => {
    return (
        <div><h2>. . .</h2> 
{/* <Loader show={loading} /> */}
            <h1>There Is Nothing here...</h1>
            <p><em>More information only available to registered users</em></p>
            {/* add timer 3s and link to home */}
        </div>
    );
}

export default NotFoundPage;
