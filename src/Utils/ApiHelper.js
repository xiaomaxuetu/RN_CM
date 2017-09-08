/**
 * Created by cmios on 2017/7/14.
 */
export const getFetch = (url)=>{

        return fetch(url,{
            method:'GET',
            headers:{
                Accept:'*/*',
                'Content-Type':'application/json'
            }
        }).then(convertRespToJson).catch(defaultAnalyse)
}
export const postFetch = url=> jsonData =>{
    return fetch(url,{
        method:'POST',
        headers:{
            Accept:'*/*',
            'Content-Type':'application/json'
        },
        body:jsonData
    }).then(convertRespToJson).catch(defaultAnalyse)
}
const convertRespToJson = response => {
    const json =response.json();
    return json;
};

const defaultAnalyse =response=>{

}
