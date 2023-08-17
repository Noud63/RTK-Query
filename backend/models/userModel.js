import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required:true,
        unique: true,
    },
    password: {
        type: String,
        required:  true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
},{
    timestamps: true
}
)

userSchema.pre('save', async function(next){
      if(!this.isModified('password')){
        next()
      }
      const salt = await bcrypt.genSalt(10)
      this.password = await bcrypt.hash(this.password, salt)
});

// When updating credentials use 'findoneandupdate' and this.getUpdate()
// otherwise password is not hashed
userSchema.pre('findOneAndUpdate', async function (next) {
     const update = this.getUpdate();
    try {
        if (update.password !== '' && update.password !== undefined) {
            const hashed = await bcrypt.hash(update.password, 10)
            update.password = hashed;
        }
        next();
    } catch (err) {
        return next(err);
    }
});

// userSchema.methods.matchPassword = async function(enteredPassword){
//     return await bcrypt.compare(enteredPassword, this.password)
// }

const User = mongoose.model('users', userSchema)
export default User