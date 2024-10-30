const asyncHandler = () => async (req , res , next )=>{
    try {
        await fn (req , res , next)  // this will call the next middleware or controller
        
    } catch (error) {
        res.status(500).json({msg: "Server Error"})
        console.error("ERROR: ", error)
        next(error)
        
    }
}




export {asyncHandler}