#### Basic

Check the top right corner to see the result
```
initialState = {cornerShow: false};

<div>
  Click to show: <Switch onChange={(e) => setState({cornerShow: e})} />
  { state.cornerShow &&
    <GithubCorner url='https://github.com/torian12321/React-test' />
  }
</div>
```