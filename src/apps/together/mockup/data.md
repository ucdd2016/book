---
layout: layout.hbs
---

# Data Models

We will use an event driven data model. We base this on operational transform
technology.

The state will be a string. This will be represented by an array of bytes. We
obtain this array of bytes by running a series of actions on the text (eg insert
"Hello Wofld", backspace.) These actions contain a summary of the actions that
have happened before, to allow for OT in constant time. Storing the list of
actions allows compaction and infinite undo, with respect to both the buffer or
the user.