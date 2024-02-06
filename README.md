This repository is basically about how the Redux works in React 
Redux is an open-source JavaScript library used to manage application state. React uses Redux for building the user interface. It was first introduced by Dan Abramov and Andrew Clark in 2015.





Why use React Redux?
The main reason to use React Redux are:

React Redux is the official UI bindings for react Application. It is kept up-to-date with any API changes to ensure that your React components behave as expected.
It encourages good 'React' architecture.
It implements many performance optimizations internally, which allows to components re-render only when it actually needs.




Here in this repository I have created a simple Increement-Decrement counter which will give us the glimpse of how the Redux actually works in React 





React Redux
Official React bindings for Redux. Performant and flexible.

GitHub Workflow Status npm version npm downloads #redux channel on Discord

Installation
Create a React Redux App
The recommended way to start new apps with React and Redux is by using our official Redux+TS template for Vite, or by creating a new Next.js project using Next's with-redux template.

Both of these already have Redux Toolkit and React-Redux configured appropriately for that build tool, and come with a small example app that demonstrates how to use several of Redux Toolkit's features.

# Vite with our Redux+TS template
# (using the `degit` tool to clone and extract the template)
npx degit reduxjs/redux-templates/packages/vite-template-redux my-app

# Next.js using the `with-redux` template
npx create-next-app --example with-redux my-app
An Existing React App
React Redux 8.0 requires React 16.8.3 or later (or React Native 0.59 or later).

To use React Redux with your React app, install it as a dependency:

# If you use npm:
npm install react-redux

# Or if you use Yarn:
yarn add react-redux
You'll also need to install Redux and set up a Redux store in your app.

This assumes that you’re using npm package manager with a module bundler like Webpack or Browserify to consume CommonJS modules.

If you don’t yet use npm or a modern module bundler, and would rather prefer a single-file UMD build that makes ReactRedux available as a global object, you can grab a pre-built version from cdnjs. We don’t recommend this approach for any serious application, as most of the libraries complementary to Redux are only available on npm.

Documentation
The React Redux docs are published at https://react-redux.js.org .

How Does It Work?
The post The History and Implementation of React-Redux explains what it does, how it works, and how the API and implementation have evolved over time.

There's also a Deep Dive into React-Redux talk that covers some of the same material at a higher level.
