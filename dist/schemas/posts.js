"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putPostsResponseSchema = exports.getPostByIdResponseSchema = exports.postPostsResponseSchema = exports.getAllPostsResponseSchema = void 0;
exports.getAllPostsResponseSchema = {
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
exports.postPostsResponseSchema = {
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
exports.getPostByIdResponseSchema = {
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
exports.putPostsResponseSchema = {
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
//# sourceMappingURL=posts.js.map