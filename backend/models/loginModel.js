import mongoose from 'mongoose'

const loginSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
},{
    timestamps: true
})

// loginSchema.methods.matchPassword = async function(enteredPassword){
//     return await bcrypt.compare(enteredPassword, this.password)
// }


const Login = mongoose.model('login', loginSchema)
export default Login