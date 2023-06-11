const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    eamail: { // 중복이 된다고 했을때,
        type: String,
        required: true,
        unique: true, // 동일한 정보가 존재할 수 없다,
    },
    nickname: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        rtpe: String,
        required: true,
    },
});

// userId을 넣어서 virtual값을 사용할 수 있게 해줌 - 가져올때 넣어줌
UserSchema.virtual("userId").get(function() {
    // _id : mongoose에 있는 기본키
    return this._id.toHexString();
});

// userId를 언제쓸거냐? toJSON으로 바꾸려고 할때 만들어줄거다
UserSchema.set("toJSON", {
    virtuals: true, // JSON 형태로 가공할 때, userId를 출력 시켜준다.
});

// mongoose에 있는 모델을 설정 : 모델의 이름은 User, 스키마는 UserSchema
module.exports = mongoose.model("User", UserSchema);