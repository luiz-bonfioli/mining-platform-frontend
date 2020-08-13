import { environment } from "src/environments/environment";

export const Settings = {
    API_ENDPOINT: environment.production ? 'http://67.205.183.59:8080/intellimining-web/' : 'http://localhost:5100/organization-service/api/'
 }
