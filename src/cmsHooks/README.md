# StaticQuery hooks in the AirtableCMSData format

These hooks are a special case of `useStaticQuery()` because they should all conform to the following type definition:

```ts
export interface AirtableCMSData {
  nodes: [
    {
      data: {
        Name: string
        Text: string
        Image: {
          localFiles: ImageDataLike[]
        }
      }
    }
  ]
}
```

This means they can supply the `data` prop for `<AirtableCMSText/>` and `<AirtableCMSImage>`.
