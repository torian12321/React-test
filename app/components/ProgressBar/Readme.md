Basic
```
<ProgressBar />
```

Colors
```
<div>
	<ProgressBar val={40} color='main'>Main</ProgressBar>
	<ProgressBar val={50} color='sec'>Sec</ProgressBar>
	<ProgressBar val={60} color='info'>Info</ProgressBar>
	<ProgressBar val={50} color='success'>Success</ProgressBar>
	<ProgressBar val={40} color='danger'>Danger</ProgressBar>
	<ProgressBar val={50} color='warning'>Warning</ProgressBar>
</div>
```

------------
ProgressBar - Circular
------------
Check the reference [here](https://codepen.io/mavrK/pen/pRGPNO?editors=1000)

Basic
```
<ProgressBar type='circular'/>
```

States
```
initialState = {val: 50};

<div>
	<Range 
		value    = {state.val}
		onChange = {(e) => setState({val: e})}
		texted
	/>

	<ProgressBar val={state.val} type='circular' state='main'/>
	<ProgressBar val={state.val} type='circular' state='sec'/>
	<ProgressBar val={state.val} type='circular' state='success'/>
	<ProgressBar val={state.val} type='circular' state='danger'/>
	<ProgressBar val={state.val} type='circular' state='warning'/>
</div>
```

Sizes
```
<div>
	<ProgressBar type='circular' size='xs'/>
	<ProgressBar type='circular' size='sm'/>
	<ProgressBar type='circular' size='md'/>
	<ProgressBar type='circular' size='lg'/>
</div>
```