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
<div>
	<ProgressBar type='circular' state='main'/>
	<ProgressBar type='circular' state='sec'/>
	<ProgressBar type='circular' state='success'/>
	<ProgressBar type='circular' state='danger'/>
	<ProgressBar type='circular' state='warning'/>
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