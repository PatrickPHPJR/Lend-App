const connection = require('../database/connection');

module.exports = {
    async create(req, res){
        const { user_id } = req.body;

        const user = await connection('users').select('user_id')
        .where('user_id', user_id);

        if(!user.length > 0){
            return res.status(401).json({error: `user not found`});
        }

        return res.status(200).json(user);
    },

    async index(req, res){
        const user_id = req.headers.authorization;

        const user = await connection('users').select(['name', 'created_at'])
        .where('user_id', user_id);

        return res.status(200).json(user);
    }
}