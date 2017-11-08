Styled version of [figure](https://www.w3schools.com/tags/tag_figure.asp)

#### Basic
Use this just for wireframing
```
<ImgCard />
```

#### With alt and caption text
```
<ImgCard alt='Alt text' caption='Caption text' />
```

#### With alt text
Caption will be equal to caption text
```
<ImgCard alt='Alt text' />
```

#### Custom src
Use a local image or from a url
```
const imgExample = require ('../Img/example.jpg');

<div>
  <ImgCard alt="img 1" src='http://placeimg.com/200/150/nature' />
  <ImgCard alt="img 2" src={imgExample} />
</div>
```
