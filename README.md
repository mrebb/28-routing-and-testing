![cf](http://i.imgur.com/7v5ASc8.png) 28: Routing-And-Testing
===

#### Documentation 

#### Notes App
This is a simple react app that creates notes using a user input form and adds it to DOM for rendering. User can click on any note to view and also can delete using 'delete' button displayed on the note details or 'x' mark provided right next to list of notes after you create atleast one note.
```
App
  Home
  Dashboard
``` 

###### App Component
* The App component manages the frontend routes and have a navbar
* the `/` route  displays the `Landing` component
* the `/dashboard` route displays the `Dashboard` component

###### Landing Component
* The Landing component displays a brief description of the notes app

###### Dashboard Component 
* The Dashboard component manages the entire **application state**
* The state contains a notes array
* It has a bound `addNote(note)` method that adds a note to `state.notes`
  * each note that gets added has the following data
    * `id`: always contains the result of `uuid.v1()`
    * `editing`: false by default
    * `completed`: false by default
    * `content`: user provided content
    * `title`: user provided title
* It also has a bound `removeNote(note)` method that removes a note from `state.notes` based on its `id`

###### NoteForm Component
* `onComplete` the NoteForm adds a note to the application state

###### NoteList Component 
* Displays an unordered list of NoteItem components

###### NoteItem
* Displays the notes content and title
* Displays a delete button
  * `onClick` the note should be removed from the application state

#### Test
* Test Landing page
  * Tested the initial state
* Test NoteCreateForm form
  * Tested the initial state and form input field manipulations

###### Technologies used
  * React & React component architecture
  * Node.js
  * Webpack
  * Enzyme & Jest test libraries