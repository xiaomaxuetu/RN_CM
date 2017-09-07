//
//  RNMapView.m
//  RN_CM
//
//  Created by CMiOS on 2017/8/30.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "RNMapView.h"
#import "MapTool.h"


@implementation RNMapView
{
  MapView *_mapView;
  NSDictionary *_partrolScanDictionary;
  NSString *_moduleName;
}
//@"/Users/cmios/Desktop/MapGIS_Mobile_iOS_SDK/demos/data/MapGIS/map/wuhan/wuhan.xml"
-(instancetype)initWithFrame:(CGRect)frame{
  
  self = [super initWithFrame:frame];
  
  if (self) {
    
    _mapView = [[MapView alloc]initWithFrame:CGRectMake(0, 0, 375, 600)];
    _mapView.delegate = self;
    
    [self addSubview:_mapView];
    
  }
  return self;
}
-(void)setShowLogo:(BOOL)showLogo{
  
  _mapView.showLogo = showLogo;
  
}
-(void)setOfflineMapUrl:(NSDictionary *)offlineMapUrl{
  
  NSString *mapUrl = [offlineMapUrl objectForKey:@"offline"];
  
  [_mapView loadFromFile:mapUrl];
  
}
-(void)setAnnArray:(NSDictionary *)annArray{
  
}
-(void)setPolylinArray:(NSDictionary *)polylinArray{
  
  if (polylinArray.allKeys.count<1 ) {
    
    return;
    
  }
  if ([polylinArray.allKeys indexOfObject:@"partrolScan"]!= NSNotFound) {
    
    NSDictionary *data = [polylinArray objectForKey:@"partrolScan"];
    
    
    [MapTool drawPartrolScanAreaLineWithMapView:_mapView Data:data];
    
  }
  
}
-(void)setPolypointArray:(NSDictionary *)polypointArray{
  
  if (polypointArray.allKeys.count<1 ) {
    
    return;
    
  }
  if ([polypointArray.allKeys indexOfObject:@"partrolScan"]!= NSNotFound) {
    _moduleName = @"partrolScan";
    NSDictionary *data = [polypointArray objectForKey:@"partrolScan"];
    _partrolScanDictionary = data;
    [MapTool drawpartrolScanAreaPointsWithMapView:_mapView Data:data isAnn:false];
    
  }

}
//-(void)setOnClickAnnViewCallback:(RCTBubblingEventBlock)onClickAnnViewCallback{
//  
//}
#pragma mark -- MapViewDelegate

-(void)tapWithPoint:(CGPoint)viewPoint mapView:(MapView *)mapView{
  
}
-(void)clickAnnotation:(Annotation *)annotation mapView:(MapView *)mapView{
  
}
-(void)clickAnnotationView:(AnnotationView *)annView mapView:(MapView *)mapView{
  if ([_delegate respondsToSelector:@selector(mapView:didSelectRNAnnotationView:)]) {
    
    [_delegate mapView:self didSelectRNAnnotationView:(RNAnnotationView *)annView];
    
  }

  
}
-(void)zoomChangedWithMapView:(MapView *)mapView FromZoom:(float)fromZoom toZoom:(float)toZoom{
  
  if(toZoom == 6&&fromZoom<toZoom){
    [MapTool drawpartrolScanAreaPointsWithMapView:mapView Data:_partrolScanDictionary isAnn:true];
  }
  if (toZoom == 5&&fromZoom>toZoom) {
    [MapTool drawpartrolScanAreaPointsWithMapView:mapView Data:_partrolScanDictionary isAnn:false];
  }
  
}
-(void)centerChangedWithMapView:(MapView *)mapView oldCenter:(CGDPoint)oldCenter newCenter:(CGDPoint)newCenter{
  
}
-(AnnotationView *)viewForAnnotation:(Annotation *)annotation mapView:(MapView *)mapView{
  AnnotationView *annView = [[AnnotationView alloc] initWithAnnotation:annotation];
  annView.offset = CGPointMake(0, -64);
  return annView;
  
}



@end
