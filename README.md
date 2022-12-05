# Sanity Table Plugin

There is an [official Sanity table plugin](https://github.com/sanity-io/table) for Sanity Studio v3.
If you're using Studio v3, please consider using the official plugin instead.

> Forked form [rdunk/sanity-plugin-table](https://github.com/rdunk/sanity-plugin-table).

![example](https://user-images.githubusercontent.com/8467307/48703530-e369be00-ebeb-11e8-8299-14812461aee8.gif)

## Install

Install using the [Sanity CLI](https://www.sanity.io/docs/cli).

```bash
$ npm i sanity-plugin-another-table
```

## Usage

Simply specify `table` as a field type in your schema.

```js
export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'sizeChart',
      title: 'Size Chart',
      type: 'table',
    },
  ],
};
```
