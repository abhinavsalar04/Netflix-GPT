import OpenAI from "openai";
import { OPENAI_API_KEY } from "./constants";

const openai = new OpenAI({
    apiKey: OPENAI_API_KEY, // defaults to process.env["OPENAI_API_KEY"]
    // as there re changes of API_KEY compromisation there openai blocks API calls from browser
    dangerouslyAllowBrowser: true, // this option allow us to make call from client
  });

  export default openai;