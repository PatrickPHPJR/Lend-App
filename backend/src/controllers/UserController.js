const connection = require('../database/connection');

module.exports = {
    async create(req, res){
        const { name } = req.body;

        if(name == ''){
            return res.status(401).json({ error: "Name is empty!"});
        }

        await connection('users').insert({
            name
        });

        return res.status(201).json({ success: "User created Successful" });
    },

    async index(req, res){
        
        const users = await connection('users').select('*');

        res.status(200).json(users);
    }
}