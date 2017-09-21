We require the use of src and alt, only enforced by react in dev mode

#### Basic
Use this just for wireframing
```
<Img />
```

#### Custom src
Use a local image or from a url
```
const imgExample = require ('./example.jpg');

<div>
    <Img src='http://placeimg.com/200/150/nature' />
    <Img src={imgExample} />
</div>
```

#### Alt text
```
<Img src='http://placeimg.com/200/150/nature' alt='Some text'/>
```