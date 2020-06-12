export const getAllPostsResponseSchema = {
  type: 'array',
  items: [
    {
      type: 'object',
      required: ['id', 'user_id', 'title', 'body'],
      properties: {
        id: {
          type: 'string',
          minLength: 2,
        },
        user_id: {
          type: 'string',
          minLength: 2,
        },
        title: {
          type: 'string',
          minLength: 2,
        },
        body: {
          type: 'string',
          minLength: 2,
        },
      },
    },
  ],
};

export const postPostsResponseSchema = {
  type: 'object',
  required: ['id', 'user_id', 'title', 'body'],
  properties: {
    id: {
      type: 'string',
      minLength: 2,
    },
    user_id: {
      type: 'string',
      minLength: 2,
    },
    title: {
      type: 'string',
      minLength: 2,
    },
    body: {
      type: 'string',
      minLength: 2,
    },
  },
};

export const getPostByIdResponseSchema = {
  type: 'object',
  required: ['id', 'user_id', 'title', 'body'],
  properties: {
    id: {
      type: 'string',
      minLength: 2,
    },
    user_id: {
      type: 'string',
      minLength: 2,
    },
    title: {
      type: 'string',
      minLength: 2,
    },
    body: {
      type: 'string',
      minLength: 2,
    },
  },
};

export const putPostsResponseSchema = {
  type: 'object',
  required: ['id', 'user_id', 'title', 'body'],
  properties: {
    id: {
      type: 'string',
      minLength: 2,
    },
    user_id: {
      type: 'string',
      minLength: 2,
    },
    title: {
      type: 'string',
      minLength: 2,
    },
    body: {
      type: 'string',
      minLength: 2,
    },
  },
};
