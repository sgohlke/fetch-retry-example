import fetchOriginal from 'isomorphic-fetch';
import fetchRetry from 'fetch-retry'

// Since version 2 this worked without problems
/*
import fetch from "fetch-retry"
fetch('https://my-broken-api-service.somethingwentwrong.com', {retries: 0})
    .then(res => res.json())
    .then(resJson => console.log('Response is: ', resJson))
    .catch( (e) => {console.error('An error occurred', e)})
*/

// This does not work with version 3 onwards
const fetch = fetchRetry(fetchOriginal, {retries: 10,
    retryOn: function(attempt, error, response) {
        // retry on any network error, or 4xx or 5xx status codes
          console.log(`retrying, attempt number ${attempt + 1}`);
          return attempt > 9 ? false : true;
    }
})

fetch('https://my-broken-api-service.somethingwentwrong.com')
    .then(res => res.json())
    .then(resJson => console.log('Response is: ', resJson))     
    .catch( (e) => {console.error('An error occurred', e)})