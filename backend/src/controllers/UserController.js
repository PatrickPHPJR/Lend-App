const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async create(req, res){
        const { name } = req.body;

        if(name == ''){
            return res.status(401).json({ error: "Name is empty!"});
        }

        const user_id = crypto.randomBytes(4).toString('HEX');

        await connection('users').insert({
            user_id,
            name
        });
    
        return res.status(201).json({user_id});
    },

    async index(req, res){
        const user_id = req.authorization;

        const users = await connection('users').select('*')
        .where('user_id', user_id);

        res.status(200).json({users});
    }
}