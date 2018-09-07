module.exports={
    // create: (req, res, next) => {
    //     const db = req.app.get('db');
    //     db.create_user()
    // },
    getAll: (req, res, next) => {
        const db = req.app.get('db');
        // const {user_id} = req.params
        db.get_memes_by_user_id(1).then(memes => {
            res.status(200).send(memes)
        }).catch(err => {
            console.log('error in get all controller', err)
            res.status(500).send('unexpected error occured')})
    }
}