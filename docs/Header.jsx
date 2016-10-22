<header className='pl3 pr3 pt4 pb4 white bg-black'>
  <h1 className='h1 xh0 blue'>{props.title}</h1>
  <p className='h3 bold'>{props.description}</p>
  <Flex justify='space-between'>
    <TweetButton
      className='mt2 mb2'
      text='Ejsx: Pure JSX templates for rendering static HTML' />
    <GithubButton
      className='mt2 mb2'
      user='jxnblk'
      repo='ejsx' />
    <CarbonAd />
  </Flex>
</header>
