---
layout: layout.hbs
---

# Specification

# Data

Our app uses the following structure for the database backend:

* Wetravel
  * schedule
    * Day1
      * Time1
        * place 
        * address
        * ...
      * Time2
        * ...
    * Day2
      * ...
  * messages
    * userName1
      * Time1: message1
      * Time2: message2
      * ....
    * userName2
      * Time1: message1
      * ...
  * group member (log in with FB)
    * User1Name
      * Name: 
      * current status:
  * canvas
    * images:
    * drawing:
  * Activation key

# Actions

The major actions of our app are:
* (TODO: action name)
* (TODO: action name)
* (TODO: action name)
* (TODO: action name)
* (TODO: action name)

## Action: (TODO: name)

(TODO: cases)

## Action: (TODO: name)

(TODO: cases)

## Action: (TODO: name)

(TODO: cases)

## Action: (TODO: name)

(TODO: cases)




(remove the example below before submission)

## Action: Post A Message (Example)

### case: post a message 'd'

``` javascript
// given
foo.bar.messages is
{
  '-cadsace': 'a',
  '-cadsacf': 'b',
  '-cadsacg': 'c'
}

// when
post_a_message(text = 'd')

// then
foo.bar.messages should be
{
  '-cadsace': 'a',
  '-cadsacf': 'b',
  '-cadsacg': 'c',
  '-cadsach': 'd',
}
```

### case: delete a message

``` javascript
// given
foo.bar.messages is
{
  '-cadsace': 'a',
  '-cadsacf': 'b',
  '-cadsacg': 'c'
}

// when
delete_a_message(id = '-cadsacg')

// then
foo.bar.messages should be
{
  '-cadsace': 'a',
  '-cadsacf': 'b'
}
```
