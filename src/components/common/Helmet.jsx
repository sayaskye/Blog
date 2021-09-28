import React from 'react'
import {Helmet} from "react-helmet";
const HelmetComponent = ({title}) => {
    return (
        <Helmet>
            <title>{title} | AC-Blog</title>
        </Helmet>
    );
}
 
export default HelmetComponent;