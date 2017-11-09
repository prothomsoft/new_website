import React from 'react';
import Cookies from 'universal-cookie';

export default class CookieManager extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        const cookies = new Cookies();
        cookies.set('resolution', Math.max(window.innerWidth, window.innerHeight), { path: '/' });        
    }

    render() {
        return (null);
    }
};