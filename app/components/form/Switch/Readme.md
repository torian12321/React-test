Basic switch
```
<div>
	<Switch />
	<Switch checked />
	<Switch checked={false} />
	
</div>
```

Disabled switch
```
<div>
	<Switch disabled />
	<Switch checked disabled />
</div>
```

Texted version
```
	<Switch texted />
```

On change events
```
	<Switch onChange={(v) => alert('The checkbox value is: ' + v)} />
```