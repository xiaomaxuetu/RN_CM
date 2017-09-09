
export function DoingBox(currentPage) {
    return `https://pipenet.enn.cn:8000/dongguan/CityInterface/Services/Zondy_MapGISCitySvr_CaseManage/REST/CaseManageREST.svc/CaseBox/1/StardEventDoingBox?pageIndex=${currentPage}&pageSize=10&sortFields=ID0&direction=desc`
}
export function PartrolTaskApi(currentPage){
    return `https://pipenet.enn.cn:8000/dongguan/CityInterface/Services/MapGISCitySvr_Patrol_Standard/REST/PatrolStandardRest.svc/FetchTasklist?_mid=4440&pageIndex=${currentPage}&pageSize=20&sortFields=createTime&direction=desc&name=&type=&regName=&filter=&dateFrom=&dateTo=&station=&description=&creator=&patroler=&checkState=&myUser=&fresh=0.8834879877977073&userName=`
}

export function PartrolTaskAreaApi(userid){
    return `https://pipenet.enn.cn:8000/dongguan/cityinterface/Services/MapGISCitySvr_Patrol_Standard/REST/PatrolStandardRest.svc/GetTempPlanInfo?id=${userid}&time=`
}
export function PartrolTaskAreaPoints(userid){
    return `https://pipenet.enn.cn:8000/dongguan/cityinterface/Services/MapGISCitySvr_Patrol_Standard/REST/PatrolStandardRest.svc/GetTaskPointAttr?id=${userid}&time=`
}
export function PattrolTaskFeedbackDetail(layerName,flowName,nodeName,feedbackID,defaultParams) {
    const url =`https://pipenet.enn.cn:8000/dongguan/cityinterface/Services/Zondy_MapGISCitySvr_CaseManage/REST/CaseManageREST.svc/GetFeedbackTableInfo?layerName=${layerName}&flowName=${flowName}&nodeName=${nodeName}&feedbackID=${feedbackID}&defaultParam=${defaultParams}`
    return url;
}