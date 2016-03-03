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
        * place 
        * budget
        * transpotation
    * messages
      * key:
        * time
        * username
        * message
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
    * map_markers
        * key
            * lat
            * lon
            * marker_message

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
* Post a Message

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

### case: Draw a line together

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

### case: Clear the canvas
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

### case: New User Login
```javascript
//given
WeTravel.User is
{
    'Zoey':
        'UserName': 'Zoey',
        'Status': 'offline'
}

//when
login_via_FB(Username='Naruto', Status='online')

//then
WeTravel.User is
{
    'Zoey':
        'UserName': 'Zoey',
        'Status': 'offline',
    'Naruto':
        'UserName': 'Naruto',
        'Status': 'online'
}
```

### case: Existed User Login
```javascript
//given
WeTravel.User.Zoey is
{
    'UserName': 'Zoey',
    'Status': 'offline'
}

Wetravel.Group.Name.member
{
    'UserName': 'Zoey',
    'Status': 'offline'
}

//when
login_via_FB(Username='Zoey', Status='online')

//then
WeTravel.User.Zoey is
{
    'UserName': 'Zoey',
    'Status': 'online'
}

Wetravel.Group.Name.member
{
    'UserName': 'Zoey',
    'Status': 'online'
}
```

### case: Existed User Logout
```javascript
//given
WeTravel.User.Zoey is
{
    'UserName': 'Zoey',
    'Status': 'online'
}
Wetravel.Group.Name.member
{
    'UserName': 'Zoey',
    'Status': 'online'
}

//when
login_via_FB(Username='Zoey', Status='offline')

//then
WeTravel.User.Zoey is
{
    'UserName': 'Zoey',
    'Status': 'offline'
}
Wetravel.Group.Name.member
{
    'UserName': 'Zoey',
    'Status': 'offline'
}
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
MakeGroup(Name='CS_Grad_Trip', Activation Code='123456')

//then
WeTravel.Group should be
{
  Group1:
    ...
  CS_Grad_Trip:
    GroupName: CS_Grad_Trip
    Activation_key: 123456
    Message:
      currentTime: "Welcome to CS Grad Trip"
    member:
      username: Tommy (the person who make group)
      current_status: online
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
    CS_Grad_Trip 
}
```

## Action: Join Group
``` javascript
// given
WeTravel.Group.CS_Grad_Trip is
{
  GroupName: CS_Grad_Trip
    Activation_key: 123456
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
WeTravel.Group.CS_Grad_Trip should be
{
  GroupName: CS_Grad_Trip
    Activation_key: 123456
    Message:
      currentTime: "Welcome to CS Grad Trip"
    member:
      Tommy:
        username: Tommy 
        current_status: online
      David(new member join group):
        username: David
        current_status: online
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
    CS_Grad_Trip  
}
```

## Action: Add Schedule

### case: add a schedule for Day2='2016/3/12'

``` javascript
// given
WeTravel.CS_Grad_Trip.schedule is
{
    Day1:"2016/3/11" 
      place: "Paris"
        location: 48.8567° N, 2.3508° E
      budget: "$200"
      transpotation: "bus"
}
//when
Add_Schedule(Day2:'2016/3/12', place:"Rome", budget="$150", transpotation: "subway")

//then
WeTravel.CS_Grad_Trip.schedule should be
{
    Day1:"2016/3/11" 
      place: "Paris" 
        location: 48.8567° N, 2.3508° E      
      budget: "$200"
      transpotation: "bus"
    Day2:"2016/3/12" 
      place: "Rome"
        location: 41.9000° N, 12.5000° E
      budget: "$150"
      transpotation: "subway"        

}
```

### case: delete a schedule for Day2='2016/3/12'

``` javascript
// given
WeTravel.CS_Grad_Trip.schedule is
{
    Day1:"2016/3/11" 
      place: "Paris" 
        location: 48.8567° N, 2.3508° E      
      budget: "$200"
      transpotation: "bus"
    Day2:"2016/3/12" 
      place: "Rome"
        location: 41.9000° N, 12.5000° E
      budget: "$150"
      transpotation: "subway" 
}
//when
Delete_Schedule(Day2:'2016/3/12')

//then
WeTravel.CS_Grad_Trip.schedule should be
{
    Day1:"2016/3/11" 
      place: "Paris" 
        location: 48.8567° N, 2.3508° E      
      budget: "$200"
      transpotation: "bus"      
}
```

## Action: Click on Map

``` javascript
// given
WeTravel.Group.CS_Grad_Trip.map is
{
    map_markers:
        key: 0
            lat: 123,
            lon: 456,
            marker_message: "This is where we should go!"
}

//when
add_marker(lat: 789, lon: 101112, marker_message: "What about here?")

//then
WeTravel.Group.CS_Grad_Trip.map should be
{
    map_markers:
        key: 0
            lat: 123,
            lon: 456,
            marker_message: "This is where we should go!"
        key: 1
            lat: 789,
            lon: 101112,
            marker_message: "What about here?"
}
```

## Action: Post a message
``` javascript
// given
WeTravel.Group.CS_Grad_Trip.messages is
{
    messages:
         key: 0
            time: "1 March 2016 5:00pm",
            username: rkom,
            message: "Hello!"
}

//when
post_message(time: "1 March 2016 5:01pm", username: rkom2, message: "Hi!")

//then
WeTravel.Group.CS_Grad_Trip.map should be
{
    messages:
        key: 0
            time: "1 March 2016 5:00pm",
            username: rkom,
            message: "Hello!"
        key: 1
            time: "1 March 2016 5:01pm",
            username: rkom2,
            message: "Hi!"

}
```
