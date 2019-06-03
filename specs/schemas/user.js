export const getAllUsersResponseSchema = {
  type: 'array',
  maxItems: 20,
  items: [
    {
      type: 'object',
      required: [
        'id',
        'first_name',
        'gender',
        'dob',
        'email',
        'phone',
        'website',
        'address',
        'status',
      ],
    },
  ],
};

export const getUserByIdResponseSchema = {
  type: 'object',
  required: [
    'id',
    'first_name',
    'gender',
    'dob',
    'email',
    'phone',
    'website',
    'address',
    'status',
  ],
  properties: {
    id: {
      type: 'string',
      minLength: 2,
    },
    first_name: {
      type: 'string',
      minLength: 2,
    },
    last_name: {
      type: 'string',
      minLength: 2,
    },
    gender: {
      type: 'string',
      enum: ['male', 'female'],
    },
    dob: {
      type: 'string',
      format: 'date',
    },
    email: {
      type: 'string',
      format: 'email',
    },
    phone: {
      type: 'string',
    },
    website: {
      type: 'string',
      format: 'uri',
    },
    status: {
      type: 'string',
      enum: ['active', 'inactive'],
    },
  },
};
