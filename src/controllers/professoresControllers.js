import professores from "../models/Professores";

class professoresControllers {
    async index(req, res) {
        try {
            // const {id} = req.params;
            const professor = await professores.find()
           
            return res.json(professor)
        } catch (error) {
            return res.status(500).json({ message: 'Error' })
        }
    }

    async listarProfessor(req,res){

        try {
            const {id} = req.params

            const prof = await professores.findById(id)
    
            if(!prof){
                return res.status(404).json('Professor não cadastrado')
            }
    
            return res.status(201).json(prof)
    
        } catch (error) {
         
            return res.status(500).json({message:"Internal server error"})            
        }
    }

    async createProfessor(req, res) {
        try {
            const {professor,materia,cpf,idade} =  req.body;

            const profes = await professores.findOne({cpf});

            if(profes){
                return res.status(404).json('Usuário cadastrado')
            }

            const newProfs = await professores.create({
                professor,
                materia,
                cpf,
                idade
            })

            return res.status(200).json(newProfs)


        } catch (error) {
            return res.status(500).json({ message: 'Error' })
            
        }
    }

    async alterProf(req,res){
        try {
            const {id} = req.params;
            const {professor, materia, cpf, idade} = req.body;
            const prof = await professores.findOne({id})

            if(!prof){
                return res.status(404).json('Professor não cadastrado')
            }

            await professores.updateOne( {professor, materia, cpf, idade})
            return res.json(prof)
        } catch (error) {
            
            return res.status(500).json({ message: 'Error' })
        }

    }


    async delProf(req,res){
     try {
        const {id} = req.params;
      //  const {professor, cpf, materia, idade} = req.body;
        const prof = await professores.findById(id);

        if(!prof){
            return res.status(404).json({message:'Professor não encontrado'})
        }

        const delProf = await professores.deleteOne({id})

        return res.json(delProf)
    
    } catch (error) {
        return res.status(500).json('Internal server error')
     }       
    }
}

export default new professoresControllers()