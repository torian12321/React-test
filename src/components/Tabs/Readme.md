Code from [Toddmoto](https://toddmotto.com/creating-a-tabs-component-with-react/#component-design)

#### Basic
```
<Tabs>
  <Tabs.Panel label="Tab 1">
    This is my tab 1 contents!!!!
  </Tabs.Panel>
  <Tabs.Panel label="Tab 2">
    <div>This is my tab 2 contents!</div>
  </Tabs.Panel>
  <Tabs.Panel label="Tab 3">
    <h1>Content 3</h1>
  </Tabs.Panel>
</Tabs>
```


#### Custom tab open
```
<Tabs selected={1}>
  <Tabs.Panel label="Tab 1">
    This is my tab 1 contents!!!!
  </Tabs.Panel>
  <Tabs.Panel label="Tab 2">
    <div>This is my tab 2 contents!</div>
  </Tabs.Panel>
  <Tabs.Panel label="Tab 3">
    <h1>Content 3</h1>
  </Tabs.Panel>
</Tabs>
```
