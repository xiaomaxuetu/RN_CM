/**
 * Created by cmios on 2017/7/14.
 */
const getFetch = (url)=>{
    const fetchFunc = () =>{
        return fetch(url,{
            method:'GET',
            headers:{
                Accept:'*/*',
                'Content-Type':'application/json'
            }
        }).then(convertRespToJson)
    };
    return fetchFunc;
}
const convertRespToJson = response => {
    return response.json();
};

export const getFet = getFetch()
