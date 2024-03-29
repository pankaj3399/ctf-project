
import AdminJS from 'adminjs'
import * as AdminJSMongoose from '@adminjs/mongoose'
import User from '../app/models/userSchema.js';
import { buildAuthenticatedRouter } from '@adminjs/express';
import Category from '../app/models/categorySchema.js';
import Challanges from '../app/models/challangesSchema.js';

const DEFAULT_ADMIN = {
    email: process.env.ADMIN_EMAIL || 'admin@example.com',
    password: process.env.ADMIN_PASSWORD || 'admin',
};

const authenticate = async (email, password) => {
    if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
        return Promise.resolve(DEFAULT_ADMIN);
    }
    return null;
};

AdminJS.registerAdapter({
    Resource: AdminJSMongoose.Resource,
    Database: AdminJSMongoose.Database,
})

const adminOptions = {
    resources: [
        {
            resource: User,
            options: {
                properties: {
                    password: {
                        isVisible: false,
                    },
                },
            },

        },
        {
            resource: Category,
        },
        {
            resource: Challanges,
            options:{
                properties: {
                    description:{
                        type: 'richtext',
                    },
                    image:{
                        type: 'file',
                    }
                }
            }
        },
    ],
    
    branding: {
        logo: '',
        companyName: 'Admin',
        favicon: '',
        withMadeWithLove: false,
    },
};

export const admin = new AdminJS({
    ...adminOptions,
})



export const adminRouter = buildAuthenticatedRouter(
    admin,
    {

        authenticate,
        cookiePassword: 'test',

    },
    null,
    {
        secret: 'test',
        resave: true,
        saveUninitialized: true,
    
    }
);

export default {
    admin,
    adminRouter
}