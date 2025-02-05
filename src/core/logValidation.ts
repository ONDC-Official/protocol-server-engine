import {insertSession,getSession} from "./session"
import axios from "axios";
const logs_storage_key_name = "logs"
const logger = require("../utils/logger").init();

interface Transformer {
    validateLog(data: any,session:any): any;
    transformData(data: any): any;
    storeLogs(data:any, transaction_id: string):any
  }
  
  // Step 2: Implement Concrete Transformers
  class IgmTransformer implements Transformer {
    async validateLog(transformedData: any,session: any) {
      const body = {
        domain: session.domain,
        version: session.version,
        bap_id: session.bap_id,
        bpp_id: session.bpp_id,
        payload: transformedData
      }
      const igmLogValidationUtilityUrl = ""
     await  axios.post(igmLogValidationUtilityUrl,body)
      
     logger.info("Validating IGM log");
      return true; // Custom validation logic
    }
  
    transformData(data: any): any {
     const transformedData : any = {}
     Object.keys(data).forEach((action)=>{
        const element = data[action]
        for(let i = 0 ; i < element.length ; i ++){
            transformedData[`ret_${action}_${i}`]=element[i]
        }
     })
     return transformedData
      // transformation logic 
      
    }
    
    async storeLogs (data: any, transaction_id: string){
        const action = data.context.action
        if(!action){
            console.log(`no action found for transaction id ${transaction_id}`)
            return
        }
        const session : any = await getSession(transaction_id)
        if(!session){
            console.log(`no session found for transaction id ${transaction_id}`)
            return
        }
        // storing data in the session
        if(!session[logs_storage_key_name][action]){
            session[logs_storage_key_name][action] = []
        }
        session[logs_storage_key_name][action].push(data);
        // set data in the session back
        insertSession(session)
    }
  }
  
  
  // Step 3: Factory to Get the Right Transformer
  class TransformerFactory {
    private static transformers: { [key: string]: Transformer } = {
      igm: new IgmTransformer(),
    };
  
    static getTransformer(condition: string): Transformer | null {
      return this.transformers[condition] || null;
    }
  }
  

  // Step 5: Deferred Log Processing
  class LogProcessor {
    private static instance: LogProcessor
    static processLogs(condition: string,data: any) {
      try{
      const transformer = TransformerFactory.getTransformer(condition);

      if (!transformer) {
        console.error("No transformer found for condition:", condition);
        return;
      }

      const transformData = transformer.transformData(data[logs_storage_key_name])
      transformer.validateLog(transformData,data)
    }
    catch(err){
      logger.error(err)
    }
    }

    static storeLogs(condition: string,data: any){
  try{
        const transformer = TransformerFactory.getTransformer(condition);
        const transaction_id = data?.context?.transaction_id
        if (!transformer ) {
          console.error("No transformer found for condition:", condition);
          return;
        }
        if (!transaction_id ) {
            console.error("No transaction_id found in the given data", );
            return;
          }
        transformer.storeLogs(data,transaction_id)
    }
    catch(err){
      logger.error(err)
    }
  }

  }



  
export default LogProcessor
  