import React from 'react';
import { Container } from 'react-bootstrap';
import './NotFound.css'

const NotFound = () => {
    return (
        <div>
            <Container className="text-center">
                <div className="not-found">
                    <h1>OOPS</h1>
                    <br />
                    <h3>Page Not Found</h3>
                    <br />
                    <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                </div>
            </Container>
        </div>
    );
};

export default NotFound;