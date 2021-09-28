import React from 'react'
import { Helmet } from 'react-helmet-async';
const HelmetComponent = ({title}) => {
    return (
        <Helmet>
            <title>{title} | AC-Blog</title>
        </Helmet>
    );
}
 
export default HelmetComponent;