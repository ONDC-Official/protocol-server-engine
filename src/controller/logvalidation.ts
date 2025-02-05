import { Request, Response } from "express";
import LogProcessor from "../core/logValidation";
import { getSession } from "../core/session";

export  const validateLogs = async(req : Request,res : Response)=>{
    const transaction_id = req.params.transaction_id
    if(!transaction_id){
        return res.status(400).send("No transaction_id provided")
        
    }
    const session : any = await  getSession(transaction_id)
    if(!session){
        return res.status(400).send("No session found for given transaction_id please create session first")
        
    }
    const logValidationType = session["logValidationType"]
    if(!logValidationType){
        return res.status(400).send("Please add log logValidationType in session config")
    }
    LogProcessor.processLogs(logValidationType,session)
}