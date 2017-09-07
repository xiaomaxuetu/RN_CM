//
//  MapTool.h
//  RN_CM
//
//  Created by CMiOS on 2017/9/1.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <MapGIS_Mobile/MapView.h>
#import <MapGIS_Mobile/GraphicPolylin.h>
#import "MapPoint.h"

@interface MapTool : NSObject
/**
 巡检总览绘制区域
 
 @param mapView 地图视图
 @param data js传过来的JSON数据
 */

+(void)drawPartrolScanAreaLineWithMapView:(MapView *)mapView Data:(NSDictionary *)data;

/**
 巡检总览绘制标注

 @param mapView 地图视图
 @param data js传过来的JSON数据
 @param isAnn ann or GraphicPoint
 */
+(void)drawpartrolScanAreaPointsWithMapView:(MapView *)mapView Data:(NSDictionary *)data isAnn:(bool)isAnn;

@end
