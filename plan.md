#Full Stack Review WPX7

#Server

##Packages
 * axios
 * body-parser
 * express-session
 * redux
 * dotenv
 * axios
 * express

 ##File structure
  * server folder
  * controllers
   * memes
  * index file
  * add a `main` to `package.json`
   * proxy
    * remember special proxy for auth0
  * middlewares

#Routes
* /auth/callback
* /logout
* /user-data
* /api/memes

#Client
 * axios
 * redux
 * react-router-dom
 * react-redux

 #Components
 * Header
 * Dashboard
 * Home
 * Memes
 * Login?
 * Meme

 #Redux
  * Reducer
  * Store
  * Provider Wrapper
  * action creators
   * payload
   * type
* Action types/ names
  * initial state
   * User
   * memes list
#Routes
 * Home /
 * Dashboard /dashboard
 * Memes list /memes


#Database

#Schema
* memes
 * id
 * url
 * title
 * text caption?
 * who posted it (user_id)
 * date
 * type
* users
 * id
 * auth0_id
 * name
 * email
 * picture
 * address?

* get_memes_by_user_id
* get_user
* create_user
* delete_meme?
* update_meme?


