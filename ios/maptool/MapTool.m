//
//  MapTool.m
//  RN_CM
//
//  Created by CMiOS on 2017/9/1.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "MapTool.h"
#import "MJExtension.h"
#import "PartrolScanTaskPointModel.h"
#import "RNAnnotation.h"
#import <MapGIS_Mobile/GraphicPoint.h>



@implementation MapTool


+(void)drawPartrolScanAreaLineWithMapView:(MapView *)mapView Data:(NSDictionary *)data{
  
  NSMutableArray *mapPointArray = [NSMutableArray array];//将AreaPolyGon 字符串转化为点数组
  
  NSString *ringsString = data[@"getMe"][0][@"Area"][@"AreaPolygon"];

  if (ringsString.length >0) {
    
    NSDictionary *ringDictionary = [ringsString mj_JSONObject];
    
    if (ringDictionary[@"rings"]) {
      
      NSArray *ringsArr = ringDictionary[@"rings"];
      
      NSArray *arr1 = ringsArr[0];
      
      for (NSArray *pointArr in arr1) {
        
        MapPoint *point = [[MapPoint alloc]init];
        
        point.x = [pointArr.firstObject doubleValue];
        
        point.y = [pointArr.lastObject doubleValue];
        
        [mapPointArray addObject:point];
      }

    }
    
  }
  
  [MapTool drawLineWithMapView:mapView points:mapPointArray lineWidth:5 lineColor:[UIColor blueColor]];//绘制区域线
  
}
+(void)drawpartrolScanAreaPointsWithMapView:(MapView *)mapView Data:(NSDictionary *)data isAnn:(bool)isAnn{
  if (isAnn) {
    
    [MapTool drawpartrolScanAreaAnnsWithMapView:mapView Data:data];
    
  }
  else{
    
    [MapTool drawpartrolScanAreaPointsWithMapView:mapView Data:data];
    
  }
  
}
+(void)drawpartrolScanAreaAnnsWithMapView:(MapView *)mapView Data:(NSDictionary *)data{
  
  NSArray *dataArr = [PartrolScanTaskPointModel parseFromRespondData:data];
  
  NSMutableArray *annArr = [NSMutableArray array];
  
  for (PartrolScanTaskPointModel *model in dataArr) {
    
    RNAnnotation *ann = [[RNAnnotation alloc] init];
    
    CGDPoint point;
    
    NSArray *arr = [model.Position componentsSeparatedByString:@","];
    
    NSString *XStr = arr.firstObject;
    
    NSString *YStr = arr.lastObject;
    
    point.x = [XStr doubleValue];
    
    point.y = [YStr doubleValue];
    
    ann.point = point;
    
    ann.title = model.FieldName;
    
    ann.description = model.FieldValue;
    
    if ([model.IsFeedback isEqual:@1]) {
      
      ann.image = [UIImage imageNamed:@"map_patrol_feedbacked"];
      
    }else if ([model.IsArrive isEqual:@1]){
      
      ann.image = [UIImage imageNamed:@"map_patrol_arrived"];
      
    }else if ([model.IsArrive isEqual:@0]&&[model.IsFeedback isEqual:@0]){
      
      ann.image = [UIImage imageNamed:@"map_patrol_unarrived"];
      
    }
    ann.TaskPointModel = model;
    
    [annArr addObject:ann];
    
    }
 
  [mapView.annotationLayer addAnnotations:annArr];
  
  
  [mapView refresh];
  
}

+(void)drawpartrolScanAreaPointsWithMapView:(MapView *)mapView Data:(NSDictionary *)data{
  NSArray *dataArr = [PartrolScanTaskPointModel parseFromRespondData:data];
  
  NSMutableArray *graphicArr = [NSMutableArray array];
  
  for (PartrolScanTaskPointModel *model in dataArr) {
    
    GraphicPoint *ann = [[GraphicPoint alloc] init];
    
    CGDPoint point;
    
    NSArray *arr = [model.Position componentsSeparatedByString:@","];
    
    NSString *XStr = arr.firstObject;
    
    NSString *YStr = arr.lastObject;
    
    point.x = [XStr doubleValue];
    
    point.y = [YStr doubleValue];
    
    [ann setPoint:point];
    [ann setSize:3];
    
    
    if ([model.IsFeedback isEqual:@1]) {
      
      [ann setColor:[UIColor blueColor]];
      
    }else if ([model.IsArrive isEqual:@1]){
      
      [ann setColor:[UIColor yellowColor]];
      
    }else if ([model.IsArrive isEqual:@0]&&[model.IsFeedback isEqual:@0]){
      
      [ann setColor:[UIColor greenColor]];
      
    }
    
    
    [graphicArr addObject:ann];
    
  }
  [mapView.annotationLayer removeAllAnnotations];
  [mapView.graphicLayer addGraphics:graphicArr];
  
  [mapView refresh];

}




/**
 绘制线的统一封装方法

 @param mapView 地图
 @param points 点数
 @param lineWith 线宽
 @param color 线颜色
 @param isClean 是否清理地图
 */
+(void)drawLineWithMapView:(MapView *)mapView points:(NSArray *)points lineWidth:(int)lineWith lineColor:(UIColor *)color isClean:(bool)isClean{
  
  if (isClean) {
    
    [MapTool cleanMap:mapView];
    
  }
  
  [MapTool drawLineWithMapView:mapView points:points lineWidth:lineWith lineColor:color];
}

/**
 绘制线的统一封装方法

 @param mapView 地图
 @param points 线点数组
 @param lineWith 线宽
 @param color 线颜色
 */
+(void)drawLineWithMapView:(MapView *)mapView points:(NSArray *)points lineWidth:(int)lineWith lineColor:(UIColor *)color{
  
  CGDPoint* cgdpoints = (CGDPoint *)malloc(points.count *sizeof(CGDPoint));
  
  for (int i = 0; i < points.count; i++) {
    
    MapPoint *point = points[i];
    
    cgdpoints[i].x = point.x;
    
    cgdpoints[i].y = point.y;
    
  }
  GraphicPolylin *gon = [[GraphicPolylin alloc]initWithPoints:cgdpoints andCount:points.count];
  
  [gon setLineWidth:lineWith];
  
  [gon setColor:color];
  
  [mapView.graphicLayer addGraphic:gon];
  
  free(cgdpoints);
  
  [mapView zoomToCenter:gon.centerPoint ZoomLevel:3 animate:YES];
  
}
+(void)cleanMap:(MapView *)mapView{
  [mapView.graphicLayer removeAllGraphics];
  [mapView.annotationLayer removeAllAnnotations];
  [mapView refresh];
}

@end
