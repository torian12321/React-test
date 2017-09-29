We require the use of src and alt, only enforced by react in dev mode

#### Basic
Use this just for wireframing
```
<Img alt="desc" />
```

#### Custom src
Use a local image or from a url
```
const imgExample = require ('./example.jpg');

<div>
  <Img alt="img 1" src='http://placeimg.com/200/150/nature' />
  <Img alt="img 2" src={imgExample} />
</div>
```
