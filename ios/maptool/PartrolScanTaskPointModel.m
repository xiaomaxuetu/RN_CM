//
//  PartrolScanTaskPointModel.m
//  CityMobileIOS
//
//  Created by wenbaolin on 16/6/14.
//  Copyright © 2016年 lijia. All rights reserved.
//

#import "PartrolScanTaskPointModel.h"

@implementation PartrolScanTaskPointModel

+(NSArray *)parseFromRespondData:(id)respondData{
    NSMutableArray *ModelArr = [NSMutableArray array];
    NSArray *DicArr = respondData[@"getMe"];
    for (NSDictionary *dic in DicArr) {
        PartrolScanTaskPointModel *model = [PartrolScanTaskPointModel new];
        [model setValuesForKeysWithDictionary:dic];
        [ModelArr addObject:model];
    }
    return ModelArr;
}
-(void)setValue:(id)value forUndefinedKey:(nonnull NSString *)key{
    
}

@end
