import config from 'config:table-rich-text';

export default {
  title: 'Table Row',
  name: config.rowType,
  type: 'object',
  fields: [
    {
      name: 'cells',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
};
