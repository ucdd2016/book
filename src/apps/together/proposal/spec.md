---
layout: layout.hbs
---

# Specification

# Data

Our app uses the following structure for the database backend:

* Group
  * Name
    * groupName
    * Activation key
    * schedule
      * Day1
        * Time1
          * place 
          * address
          * ...
    * messages
      * time:
        * userName:message
    * member (log in with FB)
      * User1Name
        * Name 
        * current status
    * canvas
      * drawing
        * x:y
        * curTool
        * curColor
        * curSize
* User
  * Name
    * userName
    * status
    * groups
      * groupName 


# Actions

The major actions of our app are:
* Login/Logout
* Make Group
* Join Group
* Add Schedule
* Click on Map
* Draw on Canvas
* Post Message

## Action: Draw on Canvas

### case: Start drawing
```javascript
//given
WeTravel.Group.drawing is
{
    null
}

//when
draw_a_line(loc='x1',loc='y1',curSize='small',curColor='#fff',curTool='marker')

//then
WeTravel.Group.drawing is
{
  'x1:y1':
    'curSize':'small',
    'curTool':'#fff',
    'curColor':'marker'
}
```

### case: Erase a line

``` javascript
// given
WeTravel.Group.drawing is
{
  'x1:y1':
    'curSize':'small',
    'curTool':'#fff',
    'curColor':'marker',
  'x2:y2':
    'curSize':'medium',
    'curTool':'#ffcf33',
    'curColor':'crayon'
}

// when
draw_a_line( loc_x='x3', loc_='y3', curSize='large', curColor='#ffffff', curTool='eraser' )

// then
WeTravel.Group.drawing should be
{
  'x1:y1':
    'curSize':'small',
    'curTool':'#fff',
    'curColor':'marker',
  'x2:y2':
    'curSize':'medium',
    'curTool':'#ffcf33',
    'curColor':'crayon',
  'x3:y3':
    'curSize':'large',
    'curTool':'#ffffff',
    'curColor':'eraser',
}
```

### case: draw a line together

``` javascript
// given
WeTravel.Group.drawing is
{
  'x1:y1':
    'curSize':'small',
    'curTool':'#fff',
    'curColor':'marker',
  'x2:y2':
    'curSize':'medium',
    'curTool':'#ffcf33',
    'curColor':'crayon',
  'x3:y3':
    'curSize':'large',
    'curTool':'#ffffff',
    'curColor':'eraser'
}

// when
draw_a_line( loc_x='a', loc_='b', curSize='small', curColor='#659b41', curTool='marker' )

// then
WeTravel.Group.drawing should be
{
  'x1:y1':
    'curSize':'small',
    'curTool':'#fff',
    'curColor':'marker',
  'x2:y2':
    'curSize':'medium',
    'curTool':'#ffcf33',
    'curColor':'crayon',
  'x3:y3':
    'curSize':'large',
    'curTool':'#ffffff',
    'curColor':'eraser',
  'a:b':
    'curSize':'small',
    'curTool':'#659b41',
    'curColor':'marker'
}
```

### case: clear the canvas
```
//given
WeTravel.Group.drawing is
{
  'a:b':
    'curSize':'small',
    'curTool':'#fff',
    'curColor':'marker'
}

//when
refresh()

//then
WeTravel.Group.drawing should be
{
    null
}
```

## Action: Login/Logout
```javascript
//given
//when
//then
```

## Action: Make Group 
``` javascript
// given
WeTravel.Group is
{
  Group1:
    ...
}
WeTravel.User.Tommy is
{
  userName: Tommy
  status: online
}
//when
MakeGroup(Name='CS Grad Trip', Activation Code='123456')

//then
WeTravel.Group should be
{
  Group1:
    ...
  CS Grad Trip:
    GroupName: CS Grad Trip
    Activation key: 123456
    Message:
      currentTime: "Welcome to CS Grad Trip"
    member:
      username: Tommy (the person who make group)
      current status: online
    canvas
       bgimage
       drawing
         x:y
         curTool
         curColor
         curSize
}
WeTravel.User.Tommy should be
{
  userName: Tommy
  status: online
  groups:
    CS Grad Trip 
}
```

## Action: Join Group
``` javascript
// given
WeTravel.Group.CS Grad Trip is
{
  GroupName: CS Grad Trip
    Activation key: 123456
    Message:
      currentTime: "Welcome to CS Grad Trip"
    member:
      Tommy:
        username: Tommy 
        current status: online
    canvas
       bgimage
       drawing
         x:y
         curTool
         curColor
         curSize
}
WeTravel.User.David is
{
  userName: David (the person who want to join group)
  status: online
}
//when
Join Group(Name: 'CS Grad Trip', Activation key: '123456')

//then
WeTravel.Group.CS Grad Trip should be
{
  GroupName: CS Grad Trip
    Activation key: 123456
    Message:
      currentTime: "Welcome to CS Grad Trip"
    member:
      Tommy:
        username: Tommy 
        current status: online
      David(new member join group):
        username: David
        current status: online
    canvas
       bgimage
       drawing
         x:y
         curTool
         curColor
         curSize
}
WeTravel.User.David should be
{ 
  userName: David
  status: online
  groups:
    CS Grad Trip  
}
```
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
