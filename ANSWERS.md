- [ ] Why would you use class component over function components (removing hooks from the question)?

One would use class components (removing hooks from the question) in order to have access to component level state (through this.state in the constructor) and lifecycle methods in that component. Now, with hooks we can use useState() for component level state in functional components and useEffect for the three main lifecycle methods (componentDidMount, componentDidUpdate, and componentDidUnmount) in functional components.

- [ ] Name three lifecycle methods and their purposes.

componentDidMount: Runs right after the component renders for the first time. This is a great place to make a network request such as a get request to get information that will be displayed by the component from an API.

componentDidUpdate: Takes previousProps and previousState as arguments and runs everytime the component's props or state are changed. It is important to wrap statements here in if-statements in order to prevent infinite loops.

componentDidUnmount: Runs after component unmounts and is the place to do any code cleanup that one needs to do once the component is removed. This is a bad place to do any change of state as the component will not be rerendering again.

- [ ] What is the purpose of a custom hook?

Custom hooks are a way to write DRY code by writing reuseable stateful logic in a seperate file. The hook can then be imported into any file in the application where it will be used and work using a similar format to the useState hook where you assign the returned value(s) to local variable(s) inside of the component where the hook is being used.

- [ ] Why is it important to test our apps?

It is important to test our apps, so that we can be sure that we get the desired behavior from our apps as a simulated user engages with the application. This is especially useful to make sure that we don't break any of correctly functioning parts of our code when we add to our projects.