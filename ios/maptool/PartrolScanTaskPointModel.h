//
//  PartrolScanTaskPointModel.h
//  CityMobileIOS
//
//  Created by wenbaolin on 16/6/14.
//  Copyright © 2016年 lijia. All rights reserved.
//

#import <Foundation/Foundation.h>
/*
 "ArriveMan": 0,
 "ArriveManName": "",
 "ArriveTime": "",
 "FeedbackID": 0,
 "FeedbackMan": 0,
 "FeedbackManName": "",
 "FeedbackTime": "",
 "FieldName": "编号",
 "FieldValue": "FM00002769",
 "Geom": "",
 "GisLayer": "阀门",
 "ID": 188268,
 "Index": 0,
 "IsArrive": 0,
 "IsFeedback": 0,
 "LayerName": "阀门",
 "Lenth": 0,
 "Position": "369300.690000,528400.250000",
 "TaskID": 0,
 "Type": 1
 */
@interface PartrolScanTaskPointModel : NSObject

@property(nonatomic)NSString *ArriveMan;
@property(nonatomic)NSString *ArriveManName;
@property(nonatomic)NSString *ArriveTime;
@property(nonatomic)NSString *FeedbackID;
@property(nonatomic)NSString *FeedbackMan;
@property(nonatomic)NSString *FeedbackManName;
@property(nonatomic)NSString *FeedbackTime;
@property(nonatomic)NSString *FieldName;
@property(nonatomic)NSString *FieldValue;
@property(nonatomic)NSString *Geom;
@property(nonatomic)NSString *GisLayer;
@property(nonatomic)NSString *ID;
@property(nonatomic)NSString *Index;
@property(nonatomic)NSNumber *IsArrive;
@property(nonatomic)NSNumber *IsFeedback;
@property(nonatomic)NSString *LayerName;
@property(nonatomic)NSString *Lenth;
@property(nonatomic)NSString *Position;
@property(nonatomic)NSString *TaskID;
@property(nonatomic)NSString *Type;

+(NSArray *)parseFromRespondData:(id)respondData;



@end
