import mongoose from "mongoose";

const categorisedSchema = new mongoose.Schema({
    title: { type: String, required: true },
imageurl: { type: String },
    type: [{ type: String, required: true }],
    options: [{ type: String, required: true }]
});

const clozeSchema = new mongoose.Schema({
    title: { type: String, required: true },
imageurl: { type: String },
    type: [{ type: String, required: true }],
    answer: { type: String, required: true }
});

const comprehensionSchema = new mongoose.Schema({
    title: { type: String, required: true },
imageurl: { type: String},
    paragraph: { type: String, required: true },
    questions: [{
        question: { type: String, required: true },
        options: [{ type: String, required: true }]
    }]
});

const formSchema = new mongoose.Schema({
    // referenceId: { type: String, unique: true, required: true }, // Unique link ref
    email: { type: String, required: true },
    title: { type: String, required: true },
imageurl: { type: String },
    categorised: [categorisedSchema],
    cloze: [clozeSchema],
    comprehension: [comprehensionSchema],
});

export const Form = mongoose.model("Form", formSchema);
