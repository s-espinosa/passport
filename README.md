# Passport

Log in functionality exploration for a static site.

## Up and Running

* Clone this repo.
* `cd passport`
* `python -m SimpleHTTPServer`
* Visit `127.0.0.1:8000` in your browser.

## Strategy

When someone visits a site with this script installed, Passport checks localstorage to see if a `loggedIn` value has been set to true. If not, it redirects them to `/login.html`.

Once a user correctly enters their credentials, Passport sets the value of `loggedIn` to `true` in localstorage and redirects them to `/`. On each page, there is a Log Out button, which will set the value of `loggedIn` to false.

## Next Steps

* Hash the login and password using MD5 so that they are not contained in plaintext in the script.
