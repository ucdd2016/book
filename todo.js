var firebaseRef = new Firebase('https://firetodo.firebaseio.com/');

$(function() {

// Setup the login button; illustrates making a call to your super secret
// enterprise LDAP database mainframe supercomputer using zero-factor auth.
// This example is designed to show the use of server-side signed tokens; not
// the best practices in authenticating users. The examples makes it easy to
// switch between users by simply swapping out the username in the 'login'
// field.
$('#login').on('click', function() {
  // XXX: If you want to use your own node server, change the URL!
  var url = 'http://misc.firebase.com:22222/?user=' + $('#username').val();
  $.getJSON(url, function(data) {
    if (data != null && data.firebaseAuthToken != null) {
      firebaseRef.unauth();
      firebaseRef.auth(data.firebaseAuthToken);
      // Display the token payload for debug purposes.
      var payload = atob(data.firebaseAuthToken.split('.')[1]);
      $('#token').text('Logged in: ' + payload);
    }
  });
});

// Setup the todo lists.
var names = ['alice', 'bob', 'carol' ];
for (var i = 0; i < names.length; i++) {
  var name = names[i];

  // Register for additions to each user's todo lists.
  firebaseRef.child(name).on('child_added', function(name){
    // Remember, we're in a loop so we need a closure to make sure name is
    // the right value.
    return function(snapshot) {
      var todo = snapshot.val();
      var item = $('<li>').text(todo.todo + ' (' + todo.from + ')');
      item.attr("id", name + '-' + snapshot.name())
      $('#' + name + '-list').append(item);
    }
  }(name));

  // We need to handle remove events when Firebase security rules rollbacks
  // an addition.
  firebaseRef.child(name).on('child_removed', function(name){
    return function(snapshot) {
      $('#' + name + '-' + snapshot.name()).remove();
    }
  }(name));

  // Setup additions to the todo lists. We read from the #username field - this
  // allows us to spoof the 'from' to test the validation rules for Alice and
  // Bob and ensure that the rules we've specified are enforced.
  $('#' + name + '-add').on('click', function(name){
    return function() {
      var item = {
        from: $('#username').val(),
        todo: $('#' + name + '-todo').val()
      };
      firebaseRef.child(name).push(item);
      $('#' + name + '-todo').val('');
    }
  }(name));
}

});
