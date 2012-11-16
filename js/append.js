function appendTweets(tweetsToAppend){
    var newTweets = tweetsToAppend["new-tweets"], html;

    try {
    
       tweetsToAppend = JSON.parse(newTweets);
    
    } catch(error) {
    
        console.log("JSON Error");
        return;
    
    }
    
    for(var i = 0; i < tweetsToAppend.length; i++) {

        html += '<div class="tweet">' +
                  '<div class="left-image pull-left">' +
                    '<img src="' + tweetsToAppend[i].image + '">' +
                  '</div>' +
                  '<div class="individual-tweet pull-left">' +
                    '<div class="user">' + tweetsToAppend[i].from + '</div>' +
                    '<div class="tweet-content">' + tweetsToAppend[i].text + '</div>' +
                  '</div>' +
                  '<div class="approve-tweet pull-right">' +
                    '<button class="btn btn-success approve-btn">Approve</button>' +
                  '</div>' +
                '</div>';
    }
    
    $('#tweets-content').prepend($(html));
}

function appendApproved(tweetToAppend, appendTo) {
    var html;
    
    html = '<div class="tweet">'+
             '<div class="approved-tweet">' +
               '<div class="left-image pull-left">' +
                 '<img src="' + tweetToAppend.image +'">' +
               '</div>' +
             '</div>' +
             '<div class="approved-information">' +
               '<div class="user">' + tweetToAppend.username + '</div>' +
               '<div class="individual-tweet">' + tweetToAppend.tweet + '</div>'+
             '</div>' +
           '</div>';

    appendTo.prepend(html);
}

function displayTweets(tweetToAppend) {

    var html = '<div class="tweet">' +
                 '<div class="approved-tweet">' +
                   '<div class="approved-information">' +
                     '<div class="user">@' + tweetToAppend.from + '</div>' +
                     '<div class="individual-tweet">' + tweetToAppend.text + '</div>' +
                   '</div>' +
                 '</div>' +
               '</div>';

    $('#tweets-content').html(html);
}