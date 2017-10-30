/* Download GitHub Avatars  */

var request = require('request');

console.log('Welcome to the GitHub Avatar Downloader!');

const GITHUB_USER = "jCortina";
const GITHUB_TOKEN = "d18f82cdf18f2911dc07803e51294696877c2b08";

function getRepoContributors(repoOwner, repoName, cb)   {
    
    var requestURL = requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';

    console.log("Errors:", err);
    console.log("Result:", result);
}