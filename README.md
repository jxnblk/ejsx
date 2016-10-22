
# ejsx

WIP Experimental Node.js module and CLI to use JSX as a templating language for static HTML

## Usage

```sh
npm install -g ejsx
```

Create a folder that will contain JSX template files.

Create a Root JSX template file.
These “JSX template” files should *not* contain any normal JavaScript – just JSX code.

Root.jsx
```jsx
<html>
  <h1>Hello</h1>
</html>
```

Run the ejsx command and pipe the output to an HTML file.

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

MIT License
