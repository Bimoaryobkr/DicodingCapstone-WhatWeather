import React from 'react';

function PageNotFound() {
    return (
        <div className='page_error container text-center'>
            <div className='error_warning'>
            <h2>Error Code: 404</h2>
            <h2>Page Not Found</h2>
            <p>Halaman yang anda cari tidak ada</p>
            </div>
        </div>
    );
}

export default PageNotFound;