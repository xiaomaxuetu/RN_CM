//
//  RNAnnotation.h
//  RN_CM
//
//  Created by CMiOS on 2017/9/1.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import <MapGIS_Mobile/Annotation.h>
#import "PartrolScanTaskPointModel.h"

@interface RNAnnotation : Annotation
@property(nonatomic,strong)PartrolScanTaskPointModel *TaskPointModel;
@end
