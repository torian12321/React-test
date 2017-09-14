## Grids - Estandar
```
const imgExample = require ('./_style_styleguide.less');

<Grid>
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
</Grid>
```

## Grids - Offset
```
<Grid>
  <Col xs={6} xsOffset={3}><p>xs=6 xsOffset=3</p></Col>
  <Col xs={6}><p>xs=6</p></Col>
  <Col xs={6}><p>xs=6</p></Col>
</Grid>
```

## Grids - Pull and Push
```
<Grid>
  <Col xs={6} xsPush={6}><p>First item </p></Col>
  <Col xs={6} xsPull={6}><p>Second item</p></Col>
</Grid>
```

## Grids - Rows
```

<Grid>
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
</Grid>
```