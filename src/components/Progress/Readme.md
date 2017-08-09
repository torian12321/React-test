#### Basic
```
<div>
	<Progress />
	<Progress val={80} />
	<Progress val={20} />
</div>
```

#### States
```
initialState = {val: 50};

<div>
	<Range 
		value    = {state.val}
		onChange = {(e) => setState({val: e})}
		texted
	/>

	<Progress val={state.val} state='main'/>
	<Progress val={state.val} state='sec'/>
	<Progress val={state.val} state='success'/>
	<Progress val={state.val} state='danger'/>
	<Progress val={state.val} state='warning'/>
</div>
```

#### Sizes
```
initialState = {val: 50};

<div>
	<Range 
		value    = {state.val}
		onChange = {(e) => setState({val: e})}
		texted
	/>

	<Progress val={state.val} size='xs'/>
	<Progress val={state.val} size='sm'/>
	<Progress val={state.val} size='md'/>
	<Progress val={state.val} size='lg'/>
</div>
```


### Progress - Circular
------------
Check the reference [here](https://codepen.io/mavrK/pen/pRGPNO?editors=1000)

#### Basic
```
<Progress type='circular'/>
```

#### States
```
initialState = {val: 50};

<div>
	<Range 
		value    = {state.val}
		onChange = {(e) => setState({val: e})}
		texted
	/>

	<Progress val={state.val} type='circular' state='main'/>
	<Progress val={state.val} type='circular' state='sec'/>
	<Progress val={state.val} type='circular' state='success'/>
	<Progress val={state.val} type='circular' state='danger'/>
	<Progress val={state.val} type='circular' state='warning'/>
</div>
```

#### Sizes
```
<div>
	<Progress type='circular' size='xs'/>
	<Progress type='circular' size='sm'/>
	<Progress type='circular' size='md'/>
	<Progress type='circular' size='lg'/>
</div>
```