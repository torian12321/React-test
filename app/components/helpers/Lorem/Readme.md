Genereate lorem ipsums with [LoremJs](https://github.com/f/loremjs).


Basic:
```
<Lorem />
```

Example inside components:
```
<div>
    <Accordion>
        <Lorem />
    </Accordion>

    <Message>
        <Lorem type="w" length={100} />
    </Message>

    <Accordion>
        <Lorem type="p" length={2} />
    </Accordion>
</div>
```