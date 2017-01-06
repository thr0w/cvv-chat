/**
 * CVV
 * #### permite que o voluntário atenda chamadas da OP As chamadas podem ser de chat, audio e vídeo. 
 *
 * OpenAPI spec version: 1.0.0
 * Contact: fernando@hoda5.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const BASE_PATH = "http://cvv.hoda5.com/api".replace(/\/+$/, '');

export type Canal = "texto" | "audio" | "video";

export interface Atendimento {
    tokenOP: string
    fila_texto: number
    fila_audio: number
    fila_video: number
    connection?: {
        idVoluntario: string
        tokenVoluntario: string
        canal: string
    }
}

export interface Disponibilidade {
    id: string
    nome: string,
    token: string,
    can_texto: boolean
    can_audio: boolean
    can_video: boolean
    enable: boolean
    logado(): boolean
}

export interface Status {
    /**
     * quantidade de voluntários conectados
     */
    "on"?: number;
    /**
     * quantidade de voluntários conectados na fila de chat
     */
    "onTexto"?: number;
    /**
     * quantidade de voluntários conectados na fila de audio
     */
    "onAudio"?: number;
    /**
     * quantidade de voluntários conectados na fila de video
     */
    "onVideo"?: number;
    /**
     * quantidade de voluntários disponíveis
     */
    "idle"?: number;
    /**
     * quantidade de voluntários disponíveis na fila de chat
     */
    "idleTexto"?: number;
    /**
     * quantidade de voluntários disponíveis na fila de audio
     */
    "idleAudio"?: number;
    /**
     * quantidade de voluntários disponíveis na fila de video
     */
    "idleVideo"?: number;
    /**
     * tamanho da fila de chat
     */
    "filaTexto": number;
    /**
     * tamanho da fila de audio
     */
    "filaAudio": number;
    /**
     * tamanho da fila de video
     */
    "filaVideo": number;
}

/**
 * DefaultApi - fetch parameter creator
 */
// export const api = {
    /** 
     * @param canal identificação do voluntário
     */
    // chamarCanalPost(params: {  canal: string; }): FetchArgs {
    //     // verify required parameter "canal" is set
    //     if (params["canal"] == null) {
    //         throw new Error("Missing required parameter canal when calling chamarCanalPost");
    //     }
    //     const baseUrl = `/chamar/{canal}`
    //         .replace(`{${"canal"}}`, `${ params.canal }`);
    //     let urlObj = url.parse(baseUrl, true);
    //     let fetchOptions: RequestInit = { method: "POST" };

    //     let contentTypeHeader: Dictionary<string>;
    //     if (contentTypeHeader) {
    //         fetchOptions.headers = contentTypeHeader;
    //     }
    //     return {
    //         url: url.format(urlObj),
    //         options: fetchOptions,
    //     };
    // },
//     /**  
//      */
//     statusPost(): FetchArgs {
//         const baseUrl = `/status`;
//         let urlObj = url.parse(baseUrl, true);
//         let fetchOptions: RequestInit = { method: "POST" };

//         let contentTypeHeader: Dictionary<string>;
//         if (contentTypeHeader) {
//             fetchOptions.headers = contentTypeHeader;
//         }
//         return {
//             url: url.format(urlObj),
//             options: fetchOptions,
//         };
//     },
//     /** 
//      * @param voluntarioId identificação do voluntário
//      * @param chat O voluntário poderá atender por chat
//      * @param audio O voluntário poderá atender por audio
//      * @param video O voluntário poderá atender por video
//      */
//     voluntarioConectarPost(params: {  voluntarioId?: string; chat?: boolean; audio?: boolean; video?: boolean; }): FetchArgs {
//         const baseUrl = `/voluntario/conectar`;
//         let urlObj = url.parse(baseUrl, true);
//         let fetchOptions: RequestInit = { method: "POST" };

//         let contentTypeHeader: Dictionary<string>;
//         contentTypeHeader = { "Content-Type": "application/x-www-form-urlencoded" };
//         fetchOptions.body = querystring.stringify({ 
//             "voluntarioId": params.voluntarioId,
//             "chat": params.chat,
//             "audio": params.audio,
//             "video": params.video,
//         });
//         if (contentTypeHeader) {
//             fetchOptions.headers = contentTypeHeader;
//         }
//         return {
//             url: url.format(urlObj),
//             options: fetchOptions,
//         };
//     },
//     /** 
//      * @param voluntarioId identificação do voluntário
//      */
//     voluntarioDespausarVoluntarioIdPost(params: {  voluntarioId: string; }): FetchArgs {
//         // verify required parameter "voluntarioId" is set
//         if (params["voluntarioId"] == null) {
//             throw new Error("Missing required parameter voluntarioId when calling voluntarioDespausarVoluntarioIdPost");
//         }
//         const baseUrl = `/voluntario/despausar/{voluntarioId}`
//             .replace(`{${"voluntarioId"}}`, `${ params.voluntarioId }`);
//         let urlObj = url.parse(baseUrl, true);
//         let fetchOptions: RequestInit = { method: "POST" };

//         let contentTypeHeader: Dictionary<string>;
//         if (contentTypeHeader) {
//             fetchOptions.headers = contentTypeHeader;
//         }
//         return {
//             url: url.format(urlObj),
//             options: fetchOptions,
//         };
//     },
//     /** 
//      * @param voluntarioId identificação do voluntário
//      */
//     voluntarioPausarVoluntarioIdPost(params: {  voluntarioId: string; }): FetchArgs {
//         // verify required parameter "voluntarioId" is set
//         if (params["voluntarioId"] == null) {
//             throw new Error("Missing required parameter voluntarioId when calling voluntarioPausarVoluntarioIdPost");
//         }
//         const baseUrl = `/voluntario/pausar/{voluntarioId}`
//             .replace(`{${"voluntarioId"}}`, `${ params.voluntarioId }`);
//         let urlObj = url.parse(baseUrl, true);
//         let fetchOptions: RequestInit = { method: "POST" };

//         let contentTypeHeader: Dictionary<string>;
//         if (contentTypeHeader) {
//             fetchOptions.headers = contentTypeHeader;
//         }
//         return {
//             url: url.format(urlObj),
//             options: fetchOptions,
//         };
//     },
//     /** 
//      * @param voluntarioId identificação do voluntário
//      */
//     voluntarioSairVoluntarioIdPost(params: {  voluntarioId: string; }): FetchArgs {
//         // verify required parameter "voluntarioId" is set
//         if (params["voluntarioId"] == null) {
//             throw new Error("Missing required parameter voluntarioId when calling voluntarioSairVoluntarioIdPost");
//         }
//         const baseUrl = `/voluntario/sair/{voluntarioId}`
//             .replace(`{${"voluntarioId"}}`, `${ params.voluntarioId }`);
//         let urlObj = url.parse(baseUrl, true);
//         let fetchOptions: RequestInit = { method: "POST" };

//         let contentTypeHeader: Dictionary<string>;
//         if (contentTypeHeader) {
//             fetchOptions.headers = contentTypeHeader;
//         }
//         return {
//             url: url.format(urlObj),
//             options: fetchOptions,
//         };
//     },
// }

// /**
//  * DefaultApi - functional programming interface
//  */
// export const DefaultApiFp = {
//     /** 
//      * @param canal identificação do voluntário
//      */
//     chamarCanalPost(params: { canal: string;  }): (fetch: FetchAPI, basePath?: string) => Promise<Atendimento> {
//         const fetchArgs = DefaultApiFetchParamCreactor.chamarCanalPost(params);
//         return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
//             return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
//                 if (response.status >= 200 && response.status < 300) {
//                     return response.json();
//                 } else {
//                     throw response;
//                 }
//             });
//         };
//     },
//     /** 
//      */
//     statusPost(): (fetch: FetchAPI, basePath?: string) => Promise<Status> {
//         const fetchArgs = DefaultApiFetchParamCreactor.statusPost();
//         return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
//             return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
//                 if (response.status >= 200 && response.status < 300) {
//                     return response.json();
//                 } else {
//                     throw response;
//                 }
//             });
//         };
//     },
//     /** 
//      * @param voluntarioId identificação do voluntário
//      * @param chat O voluntário poderá atender por chat
//      * @param audio O voluntário poderá atender por audio
//      * @param video O voluntário poderá atender por video
//      */
//     voluntarioConectarPost(params: { voluntarioId?: string; chat?: boolean; audio?: boolean; video?: boolean;  }): (fetch: FetchAPI, basePath?: string) => Promise<any> {
//         const fetchArgs = DefaultApiFetchParamCreactor.voluntarioConectarPost(params);
//         return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
//             return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
//                 if (response.status >= 200 && response.status < 300) {
//                     return response;
//                 } else {
//                     throw response;
//                 }
//             });
//         };
//     },
//     /** 
//      * @param voluntarioId identificação do voluntário
//      */
//     voluntarioDespausarVoluntarioIdPost(params: { voluntarioId: string;  }): (fetch: FetchAPI, basePath?: string) => Promise<any> {
//         const fetchArgs = DefaultApiFetchParamCreactor.voluntarioDespausarVoluntarioIdPost(params);
//         return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
//             return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
//                 if (response.status >= 200 && response.status < 300) {
//                     return response;
//                 } else {
//                     throw response;
//                 }
//             });
//         };
//     },
//     /** 
//      * @param voluntarioId identificação do voluntário
//      */
//     voluntarioPausarVoluntarioIdPost(params: { voluntarioId: string;  }): (fetch: FetchAPI, basePath?: string) => Promise<any> {
//         const fetchArgs = DefaultApiFetchParamCreactor.voluntarioPausarVoluntarioIdPost(params);
//         return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
//             return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
//                 if (response.status >= 200 && response.status < 300) {
//                     return response;
//                 } else {
//                     throw response;
//                 }
//             });
//         };
//     },
//     /** 
//      * @param voluntarioId identificação do voluntário
//      */
//     voluntarioSairVoluntarioIdPost(params: { voluntarioId: string;  }): (fetch: FetchAPI, basePath?: string) => Promise<any> {
//         const fetchArgs = DefaultApiFetchParamCreactor.voluntarioSairVoluntarioIdPost(params);
//         return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
//             return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
//                 if (response.status >= 200 && response.status < 300) {
//                     return response;
//                 } else {
//                     throw response;
//                 }
//             });
//         };
//     },
// };

// /**
//  * DefaultApi - object-oriented interface
//  */
// export class DefaultApi extends BaseAPI {
//     /** 
//      * @param canal identificação do voluntário
//      */
//     chamarCanalPost(params: {  canal: string; }) {
//         return DefaultApiFp.chamarCanalPost(params)(this.fetch, this.basePath);
//     }
//     /** 
//      */
//     statusPost() {
//         return DefaultApiFp.statusPost()(this.fetch, this.basePath);
//     }
//     /** 
//      * @param voluntarioId identificação do voluntário
//      * @param chat O voluntário poderá atender por chat
//      * @param audio O voluntário poderá atender por audio
//      * @param video O voluntário poderá atender por video
//      */
//     voluntarioConectarPost(params: {  voluntarioId?: string; chat?: boolean; audio?: boolean; video?: boolean; }) {
//         return DefaultApiFp.voluntarioConectarPost(params)(this.fetch, this.basePath);
//     }
//     /** 
//      * @param voluntarioId identificação do voluntário
//      */
//     voluntarioDespausarVoluntarioIdPost(params: {  voluntarioId: string; }) {
//         return DefaultApiFp.voluntarioDespausarVoluntarioIdPost(params)(this.fetch, this.basePath);
//     }
//     /** 
//      * @param voluntarioId identificação do voluntário
//      */
//     voluntarioPausarVoluntarioIdPost(params: {  voluntarioId: string; }) {
//         return DefaultApiFp.voluntarioPausarVoluntarioIdPost(params)(this.fetch, this.basePath);
//     }
//     /** 
//      * @param voluntarioId identificação do voluntário
//      */
//     voluntarioSairVoluntarioIdPost(params: {  voluntarioId: string; }) {
//         return DefaultApiFp.voluntarioSairVoluntarioIdPost(params)(this.fetch, this.basePath);
//     }
// };

// /**
//  * DefaultApi - factory interface
//  */
// export const DefaultApiFactory = function (fetch?: FetchAPI, basePath?: string) {
//     return {
//         /** 
//          * @param canal identificação do voluntário
//          */
//         chamarCanalPost(params: {  canal: string; }) {
//             return DefaultApiFp.chamarCanalPost(params)(fetch, basePath);
//         },
//         /** 
//          */
//         statusPost() {
//             return DefaultApiFp.statusPost()(fetch, basePath);
//         },
//         /** 
//          * @param voluntarioId identificação do voluntário
//          * @param chat O voluntário poderá atender por chat
//          * @param audio O voluntário poderá atender por audio
//          * @param video O voluntário poderá atender por video
//          */
//         voluntarioConectarPost(params: {  voluntarioId?: string; chat?: boolean; audio?: boolean; video?: boolean; }) {
//             return DefaultApiFp.voluntarioConectarPost(params)(fetch, basePath);
//         },
//         /** 
//          * @param voluntarioId identificação do voluntário
//          */
//         voluntarioDespausarVoluntarioIdPost(params: {  voluntarioId: string; }) {
//             return DefaultApiFp.voluntarioDespausarVoluntarioIdPost(params)(fetch, basePath);
//         },
//         /** 
//          * @param voluntarioId identificação do voluntário
//          */
//         voluntarioPausarVoluntarioIdPost(params: {  voluntarioId: string; }) {
//             return DefaultApiFp.voluntarioPausarVoluntarioIdPost(params)(fetch, basePath);
//         },
//         /** 
//          * @param voluntarioId identificação do voluntário
//          */
//         voluntarioSairVoluntarioIdPost(params: {  voluntarioId: string; }) {
//             return DefaultApiFp.voluntarioSairVoluntarioIdPost(params)(fetch, basePath);
//         },
//     }
// };
