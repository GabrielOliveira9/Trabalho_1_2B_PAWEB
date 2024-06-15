/** @type{import('fastify').FastifyPluginAsync<>} */
import { USER_NOT_FOUND } from '../libs/error.js';

export default async function auth(app, options) {
    const users = app.mongo.db.collection('users');
    
    app.post('/auth', {
        schema: {
            body: {
                type: 'object',
                properties: {
                    _id: { type: 'string' },
                    username: { type: 'string' },   
                    password: {type: 'string'}
                },
                required: ['username', 'password']
            }
        }
    }, async (req, rep) => {
        let user = req.body;
        req.log.info(`Login for user ${user.username}`);
        let result = await users.count({name:user.username})    
        if(result <= 0) throw new USER_NOT_FOUND()
        delete user.password;
        return {
            'x-access-token': app.jwt.sign(user)
        }
    });
}