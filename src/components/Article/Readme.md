[Reference](https://codepen.io/joshua_ward/pen/zdMNpY?editors=1000)

#### Basic
```
<Article />
```

#### Custom BG
```
<Article
  title='Nature'
  src  ='http://placeimg.com/400/400/nature'
/>
```

#### Important
Add relevance to one or more of your articles
```
<Container>
  <Row>
    <Col sm={4}><Article title="Article 1" /></Col>
    <Col sm={4}><Article title="Article 2" important/></Col>
    <Col sm={4}><Article title="Article 3" /></Col>
    <Col sm={4}><Article title="Article 4" /></Col>
    <Col sm={4}><Article title="Article 5" /></Col>
  </Row>
</Container>
```
