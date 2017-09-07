package com.gis_map.PartrolScan;

import android.graphics.Bitmap;

import com.zondy.mapgis.android.annotation.Annotation;
import com.zondy.mapgis.core.geometry.Dot;

/**
 * Created by cmios on 2017/9/5.
 */

public class TaskAnn extends Annotation {
    public TaskModel taskModel;
    public TaskAnn(String s, String s1, String s2, Dot dot, Bitmap bitmap) {
        super(s, s1, s2, dot, bitmap);
    }
}
