import Car from '../models/Car';

class LoginController {

    async login(req, res) {
        console.log('CHEGOU!');
        
        const { username } = req.body;
        //const user = await Car.findById(id);

        //res.setHeader("Access-Control-Allow-Origin", "*");
        // return res.status(200).json({ token: "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbGV4MTIzIiwic2NvcGVzIjpbeyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn1dLCJpc3MiOiJodHRwOi8vZGV2Z2xhbi5jb20iLCJpYXQiOjE1NDEwNjIzOTMsImV4cCI6MTU0MTA4MDM5M30.DMoB5kv72X7Jf-U5APdjK3UUcGomA9NuJj6XGxmLyqE",
        // username: username });
        return res.json({ ok: true });
    }

}

export default new LoginController();