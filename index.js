const axios = require('axios');
const updateNotifier = require('update-notifier');
const pkg = require('./package.json');

updateNotifier({pkg}).notify();

let baseUrl = 'http://api.quotable.io';
let method = 'GET'

/**
 * 
 * @param {Object} params - The Query Parameters for the request to the API
 * @param {Number} params.maxLength - The maximum Length in characters ( can be combined with minLength )
 * @param {Number} params.minLength - The minimum Length in characters ( can be combined with maxLength )
 * @param {String} params.tags - Filter random quote by tag(s). Takes a list of one or more tag names, separated by a comma (meaning AND) or a pipe (meaning OR). A comma separated list will match quotes that have all of the given tags. While a pipe (|) separated list will match quotes that have either of the provided tags.
 * @param {String} params.authorId - Filter random quote by authorId(s). Takes a list of one or more authorId, separated by a pipe (meaning OR). A pipe (|) separated list will match quotes that have either of the provided authorId.
 * @param {String} params.author - Filter random quote by author(s). Takes a list of one or more author names, separated by a pipe (meaning OR). A pipe (|) separated list will match quotes that have either of the provided author name.
 * @param {function} callback - The Callback for the Asynchronous API call Completion 
 */
const getRandomQuote = async function random(params = undefined, callback=undefined){
    try{
        const apiResponse = await axios.get(baseUrl+'/random',{params})
        if(callback){
            callback({return: true, ...apiResponse.data})
            return;
        }
        return {return: true, ...(apiResponse.data)}
    }
    catch(error){
        console.error(error)
        return {return: false, error: 'Unknown Error'}
    }
}

module.exports = {
    getRandomQuote
}

