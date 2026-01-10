class ApiError extends Error{
    constructor(
        statusCode,
        messagge="Something went wrong",
        errors=[]
    ){
        super(messagge)
        this.statusCode=statusCode,
        this.data=null,
        this.message=messagge,
        this.success=false,
        this.errors=errors
    }
}

export {ApiError}