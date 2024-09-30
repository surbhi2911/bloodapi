import mongoose from 'mongoose';

const MongoDB = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/blood')
        .then(() => console.log('MongoDB Connected!'));
}

export default MongoDB;