import React, { Component } from 'react';

function data() {

    return fetch("http://localhost:8080/api/getAll", {
        // credentials: 'include',
        // withCredentials: true, 
        // headers: {
        // 'Authorization': `Bearer ${bearer}`
        // }
    })
}