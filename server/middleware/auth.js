import jwt from "jsonwebtoken";
// wants to like a post
// click the like button => use middle ware to auth it

// how to define middleware
const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const isCustomAuth = token.length < 500;

        let decodedData;

        if(token && isCustomAuth) {
            decodedData = jwt.verify(token, 'test');

            req.userId = decodedData?.id;
        }else{
            decodedData = jwt.decode(token);// for google

            req.userId = decodedData?.sub; //this change will be sent to the controller
        }

        next(); //go to next level
    } catch (error) {
        console.log(error);
    }
}

export default auth;