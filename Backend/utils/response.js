export const sendResponse = (res,statusCode,message,data = null)=>{
    let success  = statusCode >= 200 && statusCode < 300;
    return res.status(statusCode).json({
        success,
        message,
        ...(data && { data }) 
    });
}