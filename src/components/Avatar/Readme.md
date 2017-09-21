#### Basic
```
<Avatar />
```

#### Custom src
Use a local image or from a url
```
const imgExample = require ('./example.jpg');

<div>
  <Avatar src='http://placeimg.com/200/200/people' />
  <Avatar src={imgExample} />
</div>
```

#### States
May be used for 'online', 'in a meeting' etc.
```
<div>
	<Avatar state='main'/>
  <Avatar state='sec'/>
  <Avatar state='success'/>
  <Avatar state='danger'/>
  <Avatar state='warning'/>
  <Avatar state='disable'/>
</div>
```

#### Sizes
```
<div>
	<Avatar size='xs'/>
	<Avatar size='sm'/>
	<Avatar size='md'/>
	<Avatar size='lg'/>
</div>
```