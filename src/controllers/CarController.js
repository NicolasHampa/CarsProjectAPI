import Car from '../models/Car';

class CarController{

    async storefip(req, res) {
        console.log(req.body);
        const { Valor, Marca, Modelo, AnoModelo, Combustivel } = req.body;

        let car = await Car.create({
            vehicle: Modelo,
            brand: Marca,
            year: AnoModelo,
            price: Valor,
            description: Combustivel
        });
        return res.json(car);
    }

    async store(req, res) {
        const { username, password, firstName, lastName, age } = req.body;

        let car = await Car.create({
            vehicle: username,
            brand: password,
            year: firstName,
            price: lastName,
            description: age
        });

        return res.json(car);
    }

    async index(req, res) {
        const { id } = req.params;
        const car = await Car.findById(id);
        return res.json(car);
    }

    async update(req, res) {
        const { _id, vehicle, brand, year, price, description } = req.body;

        await Car.updateOne({ _id }, {
            vehicle,
            brand,
            year,
            price,
            description
        });

        return res.status(200).json({ status: 200 });
    }

    async destroy(req, res) {
        const { id } = req.params;

        await Car.findByIdAndDelete({ _id: id });

        return res.json({ message: 'Registro excluido com sucesso!' })
    }

}

export default new CarController();