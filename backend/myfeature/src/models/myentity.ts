
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const myentitySchema = new Schema({
   Enter_Name: String,
   Enter_Num: Number
})

const myentityModel = mongoose.model('myentity', myentitySchema, 'myentity');
export default myentityModel;
