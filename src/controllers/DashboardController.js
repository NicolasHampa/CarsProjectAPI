import Car from '../models/Car';

class CarController{

    async index(req, res) {
        const cars = await Car.find();

        res.setHeader("Access-Control-Allow-Origin", "*");
        return res.json({ cars });
    }

}

export default new CarController();