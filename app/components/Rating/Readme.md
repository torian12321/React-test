Basic
```
<Rating />
```

Custom values
```
<div>
	<Rating val={3} of={10} />
	<Rating val={7} of={15} />
</div>
```

Custom color
```
<div>
	<Rating val={3} color='#fb6400' />
	<Rating val={5} color='red' />
</div>
```

Differnet Icons
```
initialState = {val: 3};
<div>
	<Range 
		value    = {state.val}
		max      = {5}
		onChange = {(e) => setState({val: e})}
		texted
	/>

	<Rating val={state.val} icon='star' />
	<Rating val={state.val} icon='chat' />
	<Rating val={state.val} icon='cog' />
	<Rating val={state.val} icon='heart' />
	<Rating val={state.val} icon='dollar' />
</div>
```