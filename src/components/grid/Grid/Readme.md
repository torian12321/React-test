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

## Grids - Nesting
```
<Grid>

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