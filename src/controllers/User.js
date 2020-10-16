import UserModel from '../models/User';

class User {
  async store(req, res) {
    const { email } = req.body;
    const isDuplicated = await UserModel.findOne({ where: { email } });

    if (isDuplicated) {
      return res.status(400).json({ error_msg: 'Duplicated email!' });
    }

    const user = await UserModel.create(req.body);

    return res.json(user);
  }
}

export default new User();
