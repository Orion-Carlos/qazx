import http from "@/core/http.service";

export function getbankInfoListOne(query:any={}) {
    return http.post('/bankInfo/query',query)
}
