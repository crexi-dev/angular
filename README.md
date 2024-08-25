# AngularTask

## Goal

The goal of this assignment is to showcase your skills and coding style while building an enterprise grade Angular application. We expect this assignment to take no more than 2 hours with the first priority of getting a working application that meets the requirements set forth below. Once you have it working you can add some extra flare with unit testing, e2e testing with playwright, updated styles to make it snazzy, or whatever else you feel like. 

> [!TIP] 
> **State Management** - We have included all of the `@ngrx` packages but you're welcome to use any state management library you see fit or just stateful services.

> [!TIP] 
> **Component Library** - We have included [@angular/material](https://material.angular.io/components/categories) but you're welcome to use any component library that suites your needs. Ex: [PrimeNG](https://primeng.org/installation)

## Getting Started

> [!CAUTION]
> **DO NOT FORK THIS REPO** - Instead click the [Download Zip](https://github.com/crexi-dev/angular/archive/refs/heads/main.zip).

* Install packages with `npm i`
* Serve the application using `npx nx run angular-task:serve`
* You're off to the races coding! Good luck!

## User Management Application

1. Home page should show a card view of users from [JSONplaceholder](https://jsonplaceholder.typicode.com/). The home page should allow you to click on a users card to navigate to their profile page.
2. The profile page should use the angular router and exist at `/users/:id` and display all of the user information for the id in the route path.
3. Add filter(s) to the home page to allow the user to filter the list
4. Add a context action menu to delete or favorite users in both the card view and detail page

## Submitting your Assessment

Please submit a link to your public github repo and approximately how long it took you to complete this task. We will have a panel to discuss your desicions and design patterns.