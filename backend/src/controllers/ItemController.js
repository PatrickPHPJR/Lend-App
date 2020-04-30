const connection = require('../database/connection');

module.exports = {
    async create(req, res){
        const user_id = req.headers.authorization;
        const { item_name, name, whatsapp } = req.body;

        if(item_name == ''){
            return res.status(401).json({error: "Item name is empty"});
        }

        if((whatsapp.length > 0 && whatsapp.length <= 10) || (whatsapp.length > 11 )){
            return res.status(401).json({error: "Contact number needs 11 caracteres"});
        }

        await connection('items').insert({
            item_name,
            name,
            whatsapp,
            user_id
        });
    
        return res.status(201).json({success: "Item Saved successful"}); 
    },

    // async index(req, res){
    //     const user_id = req.headers.authorization;

    //     const items = await connection('items')
    //     .select(['item_id', 'item_name','data','name','whatsapp'])
    //     .where('User_id', user_id);

    //     return res.status(200).json(items);
    // },

    async update(req, res){
        const { item_id } = req.params;
        const { item_name, name, whatsapp } = req.body;

        if(item_name == ''){
            return res.status(401).json({error: "Item name is empty"});
        }

        if((whatsapp.length > 0 && whatsapp.length <= 10) || (whatsapp.length > 11 )){
            return res.status(401).json({error: "Contact number needs 11 caracteres"});
        }

        await connection('items').update({
            item_name,
            name,
            whatsapp
        })
        .where('item_id', item_id);

        return res.status(202).json({success: "Item updated successful"});
    },

    async delete(req, res){
        const user_id = req.headers.authorization;
        const { item_id } = req.params;

        const item = await connection('items').select('User_id')
        .where('item_id', item_id)
        .first();

        if(item.User_id != user_id){
            return res.status(403).json({error: `Operation not Permited`});
        }

        await connection('items').delete()
        .where('item_id', item_id)
        .andWhere('User_id', user_id);

        return res.status(204).send();
    }
}