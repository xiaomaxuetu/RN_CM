//
//  RNTManager.m
//  RN_CM
//
//  Created by CMiOS on 2017/7/19.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "RNTManager.h"
#import <MapGIS_Mobile/MapView.h>
#import "RNMapView.h"
#import "RNAnnotation.h"
#import "MJExtension.h"

@implementation RNTManager
RCT_EXPORT_MODULE(RNTMap)

- (UIView *)view
{
//  MapView *mapView = [[MapView alloc]init];
//  [mapView loadFromFile:@"/Users/cmios/Desktop/MapGIS_Mobile_iOS_SDK/demos/data/MapGIS/map/wuhan/wuhan.xml"];
//  return mapView;
  RNMapView *mapView = [[RNMapView alloc]initWithFrame:CGRectMake(0, 0, 0, 0)];
  mapView.delegate = self;
  
  return mapView;
  
}
RCT_EXPORT_VIEW_PROPERTY(showLogo, BOOL)
RCT_EXPORT_VIEW_PROPERTY(offlineMapUrl, NSDictionary)
RCT_EXPORT_VIEW_PROPERTY(annArray, NSDictionary)
RCT_EXPORT_VIEW_PROPERTY(polylinArray, NSDictionary)
RCT_EXPORT_VIEW_PROPERTY(polypointArray, NSDictionary)
RCT_EXPORT_VIEW_PROPERTY(onClickAnnViewCallback, RCTBubblingEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onClickMapCallback, RCTBubblingEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onCenterChangeCallback, RCTBubblingEventBlock)

-(void)mapView:(RNMapView *)mapView didSelectRNAnnotationView:(RNAnnotationView *)annView{
  if (!mapView.onClickAnnViewCallback) {
    NSLog(@"无法执行回调");
    return;
  }
  RNAnnotation *ann = (RNAnnotation *)annView.annotation;
  NSDictionary *annDictionary = [ann.TaskPointModel mj_keyValues];
  mapView.onClickAnnViewCallback(@{@"partrolScan":annDictionary});
  
}



@end
