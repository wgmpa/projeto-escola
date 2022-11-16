import mongoose from "mongoose";

const AlunosSchema = new mongoose.Schema({
    cpf: {
        type: String,
        required: true,
        index:{
            unique: true // unico

        }
    },
    nome: {
        type: String,
        required: true,
    },


    email: {
        type: String,
        required: true,
 
    },
    idade: {
        type: Number,
        required:true
    },
},
    {
        timestamps:true,
      }
)

export default mongoose.model('Alunos', AlunosSchema)