import fetchOriginal from 'isomorphic-fetch';
import fetch from 'fetch-retry'(fetchOriginal)

// Since version 2 this worked without problems
/*
import fetch from "fetch-retry"
fetch('https://my-broken-api-service.somethingwentwrong.com', {retries: 0})
    .then(res => res.json())
    .then(resJson => console.log('Response is: ', resJson))
    .catch( (e) => {console.error('An error occurred', e)})
*/

// This does not work with version 3 onwards
fetch('https://my-broken-api-service.somethingwentwrong.com', {retries: 0})
    .then(res => res.json())
    .then(resJson => console.log('Response is: ', resJson))
    .catch( (e) => {console.error('An error occurred', e)})