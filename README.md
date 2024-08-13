# AngularTask

## Goal

The goal of this assignment is to showcase your skills in building an enterprise level Angular application and show off your coding style. We expect this assignment to take no more than 2 hours with the first priority of getting a working application that meets the requirements set forth below. Once you have it working you can add some extra flare with unit testing, e2e testing with playwright, updated styles to make it snazzy, or whatever else you feel shows off your skills.

## Getting Started

**DO NOT FORK THIS REPO** Instead click the [Download Zip](https://github.com/crexi-dev/angular-task/archive/refs/heads/main.zip).

Install packages using `npm i` and you're off to the races!

To serve the application locally use `npx nx run angular-task:serve`

## User Management Application

1. Home page should show a card view of users from [JSONplaceholder](https://jsonplaceholder.typicode.com/). The home page should allow you to click on a users card to navigate to their profile page.
2. The profile page should use the angular router and exist at `/users/:id` and display all of the user information for the id in the route path.
3. Add filter(s) to the home page to allow the user to filter the list
4. Add a context action menu to delete or favorite users to both the card view and detail page
5. Add at least 1 unit test for a component or method of your choosing (can be very basic)
6. Add at least 1 playwright e2e test (again - can be very basic)

