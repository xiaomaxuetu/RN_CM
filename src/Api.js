
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
export function PattrolTaskFeedbackDetail() {
    return`http://192.168.12.6:8091/cityinterface/Services/Zondy_MapGISCitySvr_CaseManage/REST/CaseManageREST.svc/GetFeedbackTableInfo?layerName=${layerName}&flowName=${flowName}&nodeName=${nodeName}&feedbackID=${feedbackID}&defaultParam=GIS%E5%9B%BE%E5%B1%82%3A%E5%BA%AD%E9%99%A2%E7%82%B9%3BGIS%E7%BC%96%E5%8F%B7%3ATYD00000107%3BGIS%E5%9D%90%E6%A0%87%3A372897.974270%2C543477.375009`
}