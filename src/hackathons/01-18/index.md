---
layout: layout.hbs
---

# Hackathon: ToDos v2

Date: 01-18-2016

## Objective

Your clients liked the initial version of the ToDos app you built. They came
back with a list of new requirements. Build them!

## Due

Tuesday @ 11:59pm, 1/19/2016

## Requirements
* [ ] There should be three separate pages showing tasks with different priority values
  1. [high](/apps/todos/high.html)
  2. [medium](/apps/todos/medium.html)
  3. [low](/apps/todos/low.html)
* [ ] The landing page of the app ([index.html](/apps/todos/index.html)) should contain
a navigation bar with links to these three pages.
* [ ] When a task's priority value is modified (e.g., medium --> high), all four pages
 (index, low, medium, high) are automatically refreshed.

## Hints

### Priority

There are at least two approaches to showing tasks with different priorities on separate
pages:

1. Keep the current Firebase data structure. Each page retrieves the entire list
  of tasks and does its own filtering based on the priority value, or
2. Modify the Firebase data structure so that tasks are organized by three separate
  child data locations, such as `todos/low`, `todos/medium`, and `todos/high`.

Make your own decision which approach to take. You are not limited to these two
approaches. When we meet again next Monday. We will discuss the props
and cons of various approaches.

### Real-time Syncing

* Use [Firebase.on()](https://www.firebase.com/docs/web/api/query/on.html) instead of
[Firebase.once()](https://www.firebase.com/docs/web/api/query/once.html)
* Modification of a task's priority value can be simulated by changing the value in the Firebase
database browser GUI. Then, with all the four pages open in a browser, you should
expect their contents to refresh on their own automatically.
