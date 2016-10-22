
# <Ejsx />

WIP Experimental Node.js module and CLI to use JSX as a templating language for static HTML

## Usage

```sh
npm install -g ejsx
```

Create a folder that will contain JSX template files.

Create a Root JSX template file.
These “JSX template” files should *not* contain any wrapping JavaScript – just JSX syntax.

Root.jsx
```jsx
<html>
  <h1>Hello</h1>
</html>
```

Run the ejsx command and write the output to an HTML file.

```sh
ejsx components > index.html
```

## Create Components

To create reusable components, add files to the folder that begin with a capital letter and have the `.jsx` file extension.

This is an example `Header` component. Components have access to the `props` passed in from their parent.

```jsx
<header>
  <h1>{props.title}</h1>
</header>
```

Root.jsx
```jsx
<html>
  <Header title='Hello component' />
</html>
```

See the [`docs`](docs) folder for a complete example.

## Motivations

React is a very powerful tool that can completely replace the need for traditional templating systems,
but can be daunting to designers or others who aren't as familiar with JavaScript or Node.js.
This is meant to be an extremely simple way to use JSX and basic components to render static HTML,
without the need to use JavaScript.

This might be good as a soft introduction to some of the concepts in React,
especially related to code reuse, component encapsulation, and styling in React.

MIT License

