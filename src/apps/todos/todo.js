var Firebase = require("firebase");
var myFirebaseRef = new Firebase("https://todofirebaseteamkeymasters.firebaseio.com/");
function add() {
  myFirebaseRef.set({
    todo: "Hello World!",
    }
  })
}
