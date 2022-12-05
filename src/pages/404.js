import React from 'react';

function PageNotFound() {
    return (
        <div className='page_error text-center'>
            <div className='error_card'>
                <div className='error_desc'>
                    <h2 className='fw-bolder'>404</h2>
                    <h2>Page Not Found</h2>
                    <p>Halaman yang anda cari tidak ditemukan</p>
                </div>
            </div>
        </div>
    );
}

export default PageNotFound;