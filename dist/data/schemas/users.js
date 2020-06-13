"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postUserResponseSchema = exports.getUserByIdResponseSchema = exports.getAllUsersResponseSchema = void 0;
exports.getAllUsersResponseSchema = {
    type: 'array',
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
exports.getUserByIdResponseSchema = {
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
exports.postUserResponseSchema = {
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
//# sourceMappingURL=users.js.map