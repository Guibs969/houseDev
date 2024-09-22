// Metodos : index, show, update, store , destroy
//index = Listagem de Seções 
//store= Criar Sessao
//show = lista uma unica sessao
// update = alterar uma sessao
// detroy = excluir

const User = require('../models/User');


class SessionController {

    async store(req, res) {
        const { email } = req.body;

        let user = await User.findOne({ email });

            if(!user){
                let user = await User.create({ email });
            }

         

        return res.json(user);

    }
  }
  
  module.exports = new SessionController();
  
