// our imports come from the -commonjs libs
import { SPFetchClient } from "@pnp/nodejs-commonjs";
import { sp } from "@pnp/sp-commonjs";

// we call setup to use the node client
sp.setup({
    sp: {
        fetchClientFactory: () => {
            return new SPFetchClient("{ site url }", "{ client id }", "{ client secret }");
        },
    },
});

async function makeRequest() {

    // make a request to get the web's details
    const w = await sp.web();
    console.log(JSON.stringify(w, null, 2));
}

// get past no await at root of app
makeRequest();

/////Connect to SharePoint using PnPjs
//sp.web
 // .select('Title')
 // .get<{Title: string;}>()
 // .then(web => {
  //  console.log(web.Title);
 // });