//
//  RNMapView.h
//  RN_CM
//
//  Created by CMiOS on 2017/8/30.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import <UIKit/UIKit.h>

#import <MapGIS_Mobile/MapView.h>
#import <MapGIS_Mobile/Annotation.h>
#import <MapGIS_Mobile/AnnotationView.h>
#import <MapGIS_Mobile/GraphicPolylin.h>
#import <MapGIS_Mobile/GraphicPoint.h>
#import <MapGIS_Mobile/GraphicPolygon.h>

#import <React/RCTEventDispatcher.h>
#import <React/RCTComponent.h>
#import "RNAnnotationView.h"
@class RNMapView;
@class RNAnnotationView;

@protocol RNMapViewDelegate <NSObject>
-(void)mapView:(RNMapView *)mapView didSelectRNAnnotationView:(RNAnnotationView *)annView;


@end

@interface RNMapView : UIView<MapViewDelegate>
@property(nonatomic,assign)id <RNMapViewDelegate> delegate;

@property(nonatomic,strong) RCTBubblingEventBlock onClickAnnViewCallback;
@property(nonatomic,strong) RCTBubblingEventBlock onClickMapCallback;
@property(nonatomic,strong) RCTBubblingEventBlock onCenterChangeCallback;
@property(nonatomic,assign) BOOL showLogo;
@property(nonatomic,strong) NSDictionary *offlineMapUrl;
@property(nonatomic,strong) NSDictionary *annArray;
@property(nonatomic,strong) NSDictionary *polylinArray;
@property(nonatomic,strong) NSDictionary *polypointArray;


@end
