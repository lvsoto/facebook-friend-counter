/*
 * Facebook Friends Counter
 */

// your code goes here
var facebookProfile = {
    name: "Leslie",
    friends: 0,
    messages: [],
    postMessage: function(message) { this.messages.push(message); },
    deleteMessage: function(index) { this.messages.splice(index, 1); },
    addFriend: function() { this.friends++; },
    removeFriend: function() { this.friends--; } 
};

console.log(facebookProfile.friends); // 0
console.log(facebookProfile.messages); // []

facebookProfile.addFriend();
console.log(facebookProfile.friends); // 1
facebookProfile.removeFriend();
console.log(facebookProfile.friends); // 0

facebookProfile.postMessage("Hello");
facebookProfile.postMessage("World");
console.log(facebookProfile.messages); // [ 'Hello', 'World' ]
facebookProfile.deleteMessage(0);
console.log(facebookProfile.messages); // [ 'World' ]
