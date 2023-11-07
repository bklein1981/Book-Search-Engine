### Front-End Specifications

You'll need to create the following front-end files:

* `queries.js`: This will hold the query `GET_ME`, which will execute the `me` query set up using Apollo Server.

* `mutations.js`:

  * `LOGIN_USER` will execute the `loginUser` mutation set up using Apollo Server.

  * `ADD_USER` will execute the `addUser` mutation.

  * `SAVE_BOOK` will execute the `saveBook` mutation.

  * `REMOVE_BOOK` will execute the `removeBook` mutation.

Additionally, you’ll need to complete the following tasks in each of these front-end files:

* `App.jsx`: Create an Apollo Provider to make every request work with the Apollo Server.
 
* `SearchBooks.jsx`:

  * Use the Apollo `useMutation()` Hook to execute the `SAVE_BOOK` mutation in the `handleSaveBook()` function instead of the `saveBook()` function imported from the `API` file.

  * Make sure you keep the logic for saving the book's ID to state in the `try...catch` block!

* `SavedBooks.jsx`:

  * Remove the `useEffect()` Hook that sets the state for `UserData`.

  * Instead, use the `useQuery()` Hook to execute the `GET_ME` query on load and save it to a variable named `userData`.

  * Use the `useMutation()` Hook to execute the `REMOVE_BOOK` mutation in the `handleDeleteBook()` function instead of the `deleteBook()` function that's imported from `API` file. (Make sure you keep the `removeBookId()` function in place!)

* `SignupForm.jsx`: Replace the `addUser()` functionality imported from the `API` file with the `ADD_USER` mutation functionality.

* `LoginForm.jsx`: Replace the `loginUser()` functionality imported from the `API` file with the `LOGIN_USER` mutation functionality.