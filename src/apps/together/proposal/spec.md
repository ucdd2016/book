---
layout: layout.hbs
---

# Specification

# Data

Our app uses the following structure for the database backend:

* actions on text
  * user
  * position
  * action (insert, delete)
  * currently existing text
* messages
  * user
  * content
  * timestamp

# Actions

The major actions of our app are:
Posting message
Editing text
Video chatting

## Action: Post message

### case: I want my teammates to know some information
```
messages = []
message = {
            content: "please help me with react",
            user: "another_githubber",
            timestamp: 1457368289
}

messages = messages.push(message)
```

## Action: Edit text
### case: change a typo in a document
```
<script type="text/javascript" src="https://apis.google.com/js/api.js"></script>

// https://developers.google.com/google-apps/realtime/application#step_2_load_the_realtime_library
function initializeModel(model) {
  var string = model.createString("Hello Realtime World!");
  model.getRoot().set("text", string);
}
function onStringChanged(evt) {
  // Log the event to the console.
  console.log(evt);
}

function onFileLoaded(doc) {
  // Get the field named "text" in the root map.
  var text = doc.getModel().getRoot().get("text");
  // Connect the event to the listener.
  text.addEventListener(gapi.drive.realtime.EventType.TEXT_INSERTED, onStringChanged);
}
```


## Action: Start video chat
### case: I'm blocked and I want help from an experienced user
```
user = "nicot"
project = "CodeTogether"
startVideo(project, user) // https://bitbucket.org/webrtc/codelab
```
