#### Basic
```
<div>
	<Switch />
	<Switch checked />
	<Switch checked={false} />
</div>
```

#### Texted
```
<Switch texted />
```

#### On change events
```
<Switch onChange={(v) => alert('The checkbox value is: ' + v)} />
```

#### Disabled
```
<div>
	<Switch disabled />
	<Switch checked disabled />
</div>
```