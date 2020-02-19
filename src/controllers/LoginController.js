import Car from '../models/Car';

class LoginController {

    async login(req, res) {
        console.log('CHEGOU!');
        
        const { username } = req.body;
        //const user = await Car.findById(id);
        // username: username });
        return res.json({ ok: true });
    }

}

export default new LoginController();