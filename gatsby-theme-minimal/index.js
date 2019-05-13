import React from 'react';

const Layout = ({children}) => {
    return (
        <React.Fragment>
        <h1>Hi</h1>
        {children}
        </React.Fragment>
    );
};


export {
    Layout,
};
