<footer className='pl3 pr3 pt4 pb4'>
  <p className='h5 bold'>
    {props.links.map(({ href, text }, i) => (
      <a
        className='mr2'
        href={href}>
        {text}
      </a>
    ))}
  </p>
</footer>
