import Alunos from '../models/Alunos'
class alunosControllers {
    async mostrarAlunos(req, res) {
        try {
            const alunos = await Alunos.find()

            return res.json(alunos)
        } catch (error) {
            res.status(500).json('Internal server error')
        }

    }

    async mostrarAluno(req, res) {
        try {
            const { id } = req.params;
            const aluno = await Alunos.findById(id);

            if (!aluno) {

                return res.status(404).json({ message: 'Aluno não econtrado' })
            }

            return res.json(aluno)
        } catch (error) {
            return res.status(500).json('Internal server error')

        }
    }

    async mostrarAlunoCpf(req, res) {
        try {
            const { cpf } = req.params;
            const aluno = await Alunos.findOne({cpf});

            if (!aluno) {

                return res.status(404).json({ message: 'Aluno não econtrado' })
            }

            return res.json(aluno)
        } catch (error) {
            return res.status(500).json('Internal server error')

        }
    }


    async createAluno(req, res) {
        try {
            const { nome, cpf, email, idade } = req.body;

            const aluno = await Alunos.findOne({ cpf });

            if (aluno) {
                return res.json('aluno já cadastrado')
            }

            const newAluno = await Alunos.create(
                {
                    email, nome, cpf, idade
                }
            )

            return res.json(newAluno)

        } catch (error) {
            return res.status(500).json('Internal server error')

        }
    }

    async alteraAluno(req, res) {
     try {
        const { id } = req.params;
        const {cpf, nome, email,idade} = req.body
        const alunoCad = await Alunos.findOne({id,cpf})

        if (!alunoCad) {
            return res.status(404).json('Aluno não encontrado')
        }

        await alunoCad.updateOne({
            cpf,
            email,
            nome,
            idade
        })
        return res.status(200).json(alunoCad)
     } catch (error) {
        
        return res.status(500).json('Internal server error')
        
     }
    }

    async delAluno (req,res){
        try {
            const {id} = req.params;
            const { cpf, email,nome, idade} = req.body;
            const aluno = await Alunos.findById(id);

            if(!aluno) {
                return res.status(404).json({message:'Aluno não encontrado'})
            }

            const delAluno = await Alunos.deleteOne({id})

            return res.status(200).json(delAluno)

        } catch (error) {
            
            return res.status(500).json('Internal server error')
        }
    }


}

export default new alunosControllers()