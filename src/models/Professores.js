import mongoose from "mongoose";


const profSchema = new mongoose.Schema(
    {
        professor:{
            type: String,
            required:true
        },
        materia:{
            type: String,
            required:true
        },
        cpf:{
            type: String,
            required:true,
            index:{
                unique: true
            }
        },
        idade:{
            type: Number,
            required:true
        },
    },
    {
        timestamps:true,
      }
)

export default mongoose.model('Professor', profSchema)