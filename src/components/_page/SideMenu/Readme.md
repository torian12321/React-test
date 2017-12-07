#### Basic
```
initialState = {menuShow: false};

<div>
  Click to show: <Switch onChange={(e) => setState({menuShow: e})} />
  { state.menuShow &&
    <SideMenu />
  }
</div>
```