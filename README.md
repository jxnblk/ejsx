
# &lt;Ejsx /&gt;

Experimental Node.js module and CLI to use JSX as a templating language for static HTML

## Usage

Be sure you have Node v6 installed https://nodejs.org

```sh
npm install -g ejsx
```

Create a folder that will contain JSX template files.

Create a Root JSX template file.
These “JSX template” files should *not* contain any wrapping JavaScript – only JSX syntax.

**Root.jsx**
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

**Header.jsx**
```jsx
<header>
  <h1>{props.title}</h1>
</header>
```

**Root.jsx**
```jsx
<html>
  <Header title='Hello component' />
</html>
```

## Passing Props

To pass props to the Root component, create a JSON file and pass the name of that file as an argument to the CLI.

**data.json**
```json
{
  "title": "Hello"
}
```

```sh
ejsx components --props data.json > index.html
```

## Loops

Looping over arrays is done using the array `map()` method.
Each child in an array must also have a `key` prop to be properly tracked.

```jsx
<ul>
  {props.items.map((item, i) => (
    <li key={i}>
      {item}
    </li>
  ))}
<ul>
```

## Conditionals

If statements will not work in JSX, but [ternary operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) can be used instead.

```jsx
<div>
  {props.foo % 2 ? <span>Odd</span> : <span>Even</span>}
</div>
```

You can also skip rendering is a value is falsy.

```jsx
<div>
  {true && <div>Visible</div>}
  {false && <div>Hidden</div>}
  {props.foo && <div>Hidden when props.foo is falsy</div>}
</div>
```

See the [`docs`](docs) folder for a complete example.

## Motivations

React is a very powerful tool that can completely replace the need for traditional templating systems,
but can be daunting to designers or others who aren't as familiar with JavaScript or Node.js.
This is meant to be an extremely simple way to use JSX and basic components to render static HTML,
without the need to use JavaScript.

This might be good as a soft introduction to some of the concepts in React,
especially related to code reuse, component encapsulation, and styling in React.


## About JSX

- https://facebook.github.io/react/docs/jsx-in-depth.html
- https://facebook.github.io/jsx/

MIT License

