const axios = require('axios');
const updateNotifier = require('update-notifier');
const pkg = require('./package.json');

updateNotifier({pkg}).notify();

let baseUrl = 'http://api.quotable.io';

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
        const apiResponse = await axios.get(baseUrl+'/random',{params});
        if(callback){
            callback({return: true, ...apiResponse.data});
            return;
        }
        return {return: true, ...apiResponse.data};
    }
    catch(error){
        console.error(error);
        return {return: false, error: error};
    }
}

/**
 * 
 * @param {Object} params The Query Parameters for the request to the API
 * @param {String} params.authorId Filter quotes by author ID.
 * @param {String} params.author Filter quotes by author name.
 * @param {Number} params.limit Min: 1 Max: 100 Default: 20 - The number of quotes to return per request. (for pagination).
 * @param {Number} params.skip Min: 0 Default: 0 - The number of items to skip (for pagination).
 * @param {Number} params.maxLength The maximum Length in characters ( can be combined with minLength )
 * @param {Number} params.minLength The minimum Length in characters ( can be combined with maxLength )
 * @param {String} params.tags Filter quotes by tag(s). Takes a list of one or more tag names, separated by a comma (meaning AND) or a pipe (meaning OR). A comma separated list will match quotes that have all of the given tags. While a pipe (|) separated list will match quotes that have either of the provided tags.
 * @param {Object} callback The callback for the Asynchronous API Call Completion
 */
const getQuotes = async function quotes(params = undefined, callback = undefined){
    try{
        const apiResponse = await axios.get(baseUrl+'/quotes', {params});
        if(callback){
            callback({return: true, ...apiResponse.data});
            return;
        }
        return {return: true, ...apiResponse.data};
    }
    catch(error){
        console.error(error);
        return {return: false, error: error}
    }
}

module.exports = {
    getRandomQuote,
    getQuotes
}

