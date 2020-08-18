import { environment } from "src/environments/environment";

export const Settings = {
    API_ENDPOINT: environment.production ? 'http://67.205.183.59:8080/intellimining-web/' : 'http://localhost:5010/mining-platform-organization/api/'
 }
