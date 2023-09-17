import mongoose from "mongoose";

const schema = mongoose.Schema;
const quizSchema = new schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    question_list: [
      {
        question_number: {
            type:Number,
            required:true
        },
        question: String,
        options: {},
      },
    ],
    answers: {},
    created_By:{
        type:mongoose.Types.ObjectId,
        required:true
    },
    is_published:{
      type:Boolean,
      default:false
    }
  },
  { timestamps: true }
);

const quiz = mongoose.model("quiz", quizSchema);

export default quiz;
