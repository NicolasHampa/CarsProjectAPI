import Car from '../models/Car';

class CarController{

    async index(req, res) {
        const cars = await Car.find();
        return res.json({ cars });
    }

}

export default new CarController();