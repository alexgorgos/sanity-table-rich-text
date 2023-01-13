import config from 'config:table';

export default {
  title: 'Table Row',
  name: config.rowType,
  type: 'object',
  fields: [
    {
      name: 'cells',
      type: 'array',
      of: [{ type: 'object', name: 'cell', fields: [{
      title: Math.random(),
      name: 'valueType',
      type: 'string',
      options: {
        list: [
          { title: 'URL', value: 'url' },
          { title: 'Text', value: 'text' },
        ],
        layout: 'dropdown',
      },
    },
    {
      title: 'Text',
      name: 'stringOutput',
      type: 'string',
      hidden: ({ parent }) => parent?.valueType !== 'text',
    },
    {
      title: 'URL',
      name: 'urlOutput',
      type: 'url',
      hidden: ({ parent }) => parent?.valueType !== 'url',
    },] }],
    },
  ],
};
