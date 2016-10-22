<section id='usage'
  className='pb4'>
  <h2>Usage</h2>
  <p>
    Create a Root.jsx template.
    This file should <b>not</b> include any wrapping JavaScript.
  </p>
  <Pre>{`<html>
  <h1>Hello</h1>
</html>`}</Pre>
  <p>
    Run the ejsx command on the folder that contains the Root.jsx file, and write the output to an HTML file.
  </p>
  <Pre>{`ejsx components > index.html`}</Pre>
  <h3>Create Components</h3>
  <p>
    To create reusable components, add files to the folder that begin with a capital letter and have the <code>.jsx</code> file extension.
    Components have access to the <code>props</code> passed in from their parent.
  </p>
  <Pre children={`<header>
  <h1>{props.title}</h1>
</header>`} />
  <Pre>{`<html>
  <Header title='Hello' />
</html>`}</Pre>
</section>
