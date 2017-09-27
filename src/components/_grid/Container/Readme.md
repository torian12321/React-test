Use a grid system the same as [Bootstrap](https://v4-alpha.getbootstrap.com/layout/grid/) does

## Container - Estandar
```
const imgExample = require ('./_style_styleguide.less');

<Container className="styleguideExample">
  <Col xs={6} sm={4} md={3} lg={2}><p>xs=6 sm=4 md=3 lg=2</p></Col>
  <Col xs={6} sm={4} md={3} lg={2}><p>xs=6 sm=4 md=3 lg=2</p></Col>
  <Col xs={6} sm={4} md={3} lg={2}><p>xs=6 sm=4 md=3 lg=2</p></Col>
  <Col xs={6} sm={4} md={3} lg={2}><p>xs=6 sm=4 md=3 lg=2</p></Col>
  <Col xs={6} sm={4} md={3} lg={2}><p>xs=6 sm=4 md=3 lg=2</p></Col>
  <Col xs={6} sm={4} md={3} lg={2}><p>xs=6 sm=4 md=3 lg=2</p></Col>
  <Col xs={12} sm={6}><p>xs=12 sm=6</p></Col>
  <Col xs={12} sm={6}><p>xs=12 sm=6</p></Col>
  <Col xs={6} sm={4} md={3} lg={2}><p>xs=6 sm=4 md=3 lg=2</p></Col>
  <Col xs={6} sm={4} md={3} lg={2}><p>xs=6 sm=4 md=3 lg=2</p></Col>
  <Col xs={6} sm={4} md={3} lg={2}><p>xs=6 sm=4 md=3 lg=2</p></Col>
  <Col xs={6} sm={4} md={3} lg={2}><p>xs=6 sm=4 md=3 lg=2</p></Col>
  <Col xs={6} sm={4} md={3} lg={2}><p>xs=6 sm=4 md=3 lg=2</p></Col>
  <Col xs={6} sm={4} md={3} lg={2}><p>xs=6 sm=4 md=3 lg=2</p></Col>
</Container>
```

## Cols - Nesting
```
<Container className="styleguideExample">
  <Col xs={4}>
    <Col xs={6}><p>Left</p></Col>
    <Col xs={6}><p>Left</p></Col>
    <Col xs={12}><p>Left</p></Col>
    <Col xs={6}><p>Left</p></Col>
    <Col xs={6}><p>Left</p></Col>
  </Col>
  <Col xs={2}>
    <Col xs={12}><p>Center</p></Col>
    <Col xs={12}><p>Center</p></Col>
    <Col xs={12}><p>Center</p></Col>
    <Col xs={12}><p>Center</p></Col>
    <Col xs={12}><p>Center</p></Col>
  </Col>
  <Col xs={6}>
    <Col xs={6}><p>Right</p></Col>
    <Col xs={2}><p>Right</p></Col>
    <Col xs={4}><p>Right</p></Col>
    <Col xs={2}><p>Right</p></Col>
    <Col xs={2}><p>Right</p></Col>
    <Col xs={6}><p>Right</p></Col>
  </Col>
</Container>
```

## Cols - Offset
Move the position of the Col component.
```
<Container className="styleguideExample">
  <Col xs={6} xsOffset={3}><p>xs=6 xsOffset=3</p></Col>
  <Col xs={6}><p>xs=6</p></Col>
  <Col xs={6}><p>xs=6</p></Col>
</Container>
```

## Cols - Pull and Push
Move the position of the Col component, BUT NOT altering the position of other Cols arround
```
<Container className="styleguideExample">
  <Col xs={6} xsPush={6}><p>First item </p></Col>
  <Col xs={6} xsPull={6}><p>Second item</p></Col>
</Container>
```

## Rows
Forces the content to be in a new line.
```
<Container className="styleguideExample">
  <Row>
    <Col xs={6} sm={4}><p>xs=6 sm=4</p></Col>
    <Col xs={6} sm={4}><p>xs=6 sm=4</p></Col>
  </Row>
  <Row>
    <Col xs={6} sm={4}><p>xs=6 sm=4</p></Col>
    <Col xs={6} sm={4}><p>xs=6 sm=4</p></Col>
    <Col xs={6} sm={4}><p>xs=6 sm=4</p></Col>
    <Col xs={6} sm={4}><p>xs=6 sm=4</p></Col>
    <Col xs={6} sm={4}><p>xs=6 sm=4</p></Col>
  </Row>
  <Row>
    <Col xs={6} sm={4}><p>xs=6 sm=4</p></Col>
  </Row>
  <Row>
    <Col xs={6} sm={4}><p>xs=6 sm=4</p></Col>
    <Col xs={6} sm={4}><p>xs=6 sm=4</p></Col>
    <Col xs={6} sm={4}><p>xs=6 sm=4</p></Col>
  </Row>
</Container>
```