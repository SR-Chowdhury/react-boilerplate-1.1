import React from 'react';
import { Container } from 'react-bootstrap';

const ErrorPage = () => {
    return (
        <Container className='d-flex align-items-center justify-content-center' style={{ height: '500px'}}>
            <div>
                <h1 className='text-danger'>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
            </div>
        </Container>
    );
};

export default ErrorPage;