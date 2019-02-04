//Include the node module
var Twitter = require('twitter-node-client').Twitter;

//Get this data from your twitter apps dashboard
var config = {
    "consumerKey": "YOUR_CONSUMER_KEY",
    "consumerSecret": "YOUR_CONSUMER_SECRET",
    "accessToken": "YOUR_ACCESS_TOKEN",
    "accessTokenSecret": "YOUR_ACCESS_TOKEN_SECRET",
    "callBackUrl": "http://localhost:3000/"
}

//Init the twitter api client with the api key
var twitter = new Twitter(config);

//Callback functions
var error = function (err, response, body) {
    console.log(err)
};
var success = function (data) {
    console.log(data); 
   
};

if ("add" === process.argv[2]) {
    //Add members to list via slug/list handle (this is not the user visible name).
    twitter.listAddMembers({
        owner_screen_name:"YOUR_HANDLE",
        slug:process.argv[4],
        screen_name:process.argv[3]
    },error,success);	
} else if ("remove" === process.argv[2]) {
    //Remove members from list via slug/list handle (this is not the user visible name). 
    twitter.listRemoveMembers({
        owner_screen_name:"YOUR_HANDLE",
        slug:process.argv[4],
        screen_name:process.argv[3]
    },error,success);
}
