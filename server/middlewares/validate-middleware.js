const validate = (schema) => async( req , res , next) => {
    try {
        const parseBody = await schema.parseAsync(req.body) ;
        require.body = parseBody ;
        next() ;
    } catch (err) {
        const status = 422 ;
        // console.log(error) ;
        const extraDetails = err.errors[0].message ; 
        const message = "fill all the required fields"
        const error = {
            status , 
            message , 
            extraDetails
        }
        console.log(error)
        next(message)
 }
 }
module.exports = validate ;