package com.gis_map;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Color;

import com.facebook.react.bridge.ReadableMap;
import com.gis_map.PartrolScan.TaskAnn;
import com.gis_map.PartrolScan.TaskModel;
import com.google.gson.Gson;
import com.rn_cm.R;
import com.zondy.mapgis.android.graphic.Graphic;
import com.zondy.mapgis.android.graphic.GraphicPoint;
import com.zondy.mapgis.android.graphic.GraphicPolygon;
import com.zondy.mapgis.android.graphic.GraphicPolylin;
import com.zondy.mapgis.android.internal.zxing.qrcode.decoder.Mode;
import com.zondy.mapgis.core.geometry.Dot;
import com.zondy.mapgis.android.mapview.MapView;
import com.zondy.mapgis.android.annotation.Annotation;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

/**
 * Created by cmios on 2017/9/4.
 */

public class MapTool {

    private List<List<List<Double>>> rings;

    public static void drawPatrolScanAreaLine(GISMapView mapView, ReadableMap map) {



        MapTool.cleanMap(mapView.mapView);
        HashMap<String,Object> hashMap = map.toHashMap();

        if (hashMap.containsKey("partrolScan")){

            HashMap<String,ArrayList> partrolScan = (HashMap<String, ArrayList>) hashMap.get("partrolScan");

            ArrayList<HashMap<String,Object>> getMe = partrolScan.get("getMe");

            HashMap<String,Object> Item0 = getMe.get(0);

            HashMap<String,String> Area = (HashMap<String, String>) Item0.get("Area");

            String AreaPolygonStr = Area.get("AreaPolygon");

            Gson gson = new Gson();

            Rings rings = gson.fromJson(AreaPolygonStr,Rings.class);

            List arrayList1 = rings.getRings();

            ArrayList arrList2 = (ArrayList) arrayList1.get(0);


            Dot[] dotarr = new Dot[arrList2.size()];

            for (int i = 0; i < arrList2.size() ; i++) {

                ArrayList dotArr = (ArrayList) arrList2.get(i);

                Dot dot = new Dot();

                dot.x = (double) dotArr.get(0);

                dot.y = (double) dotArr.get(1);

                dotarr[i] = dot;
            }
            MapTool.drawLine(mapView.mapView,dotarr,15,Color.BLUE);
        }
    }

    public static void drawLine(MapView mapView,Dot[] dotarr,int lineWidth,int color){

        GraphicPolylin polyline = new GraphicPolylin(dotarr);

        polyline.setLineWidth(lineWidth);

        polyline.setColor(color);

        mapView.getGraphicsOverlay().addGraphic(polyline);

        mapView.zoomToCenter(polyline.getCenterPoint(),10,true);

        mapView.refresh();
    }

    public static void drawPartrolScanPoints(MapView mapView,ReadableMap map,boolean isAnns){
        if (isAnns){
            MapTool.drawpartrolScanAreaAnns(mapView,map);
        }else {
            MapTool.drawpartrolScanAreaPoints(mapView,map);
        }
    }

    public static void drawpartrolScanAreaAnns(MapView mapView,ReadableMap map){
        HashMap<String,Object> hashMap = map.toHashMap();

        if (hashMap.containsKey("partrolScan")){

            HashMap<String,ArrayList> partrolScan = (HashMap<String, ArrayList>) hashMap.get("partrolScan");

            ArrayList<HashMap<String,Object>>getMe = partrolScan.get("getMe");

            List<Annotation> annList = new ArrayList<Annotation>();

            for (int i = 0; i < getMe.size(); i++) {

                HashMap<String,Object> taskPointHash = getMe.get(i);

                TaskModel model = TaskModel.parseRespond(taskPointHash);

                String[] positionList = model.Position.split(",");

                Dot dot = new Dot(Double.parseDouble(positionList[0]),Double.parseDouble(positionList[1]));

                Bitmap bitmap;

                if (model.IsFeedback.equals(1)){

                    bitmap = BitmapFactory.decodeResource(mapView.getResources(),R.mipmap.map_patrol_feedbacked);

                }else if (model.IsArrive.equals(1)){

                    bitmap = BitmapFactory.decodeResource(mapView.getResources(),R.mipmap.map_patrol_arrived);

                }else {

                    bitmap = BitmapFactory.decodeResource(mapView.getResources(),R.mipmap.map_patrol_unarrived);

                }

//                TaskAnn ann = new TaskAnn("测试","测试","测试",dot, bitmap);
                Annotation ann = new Annotation("测试","测试","测试",dot, bitmap);

//                ann.taskModel = model;

                annList.add(ann);

            }

            mapView.getAnnotationsOverlay().addAnnotations(annList);

            mapView.refresh();

        }
    }
    public static void drawpartrolScanAreaPoints(MapView mapView,ReadableMap map){

        HashMap<String,Object> hashMap = map.toHashMap();

        if (hashMap.containsKey("partrolScan")){

            HashMap<String,ArrayList> partrolScan = (HashMap<String, ArrayList>) hashMap.get("partrolScan");

            ArrayList<HashMap<String,Object>>getMe = partrolScan.get("getMe");

            List<Graphic> annList = new ArrayList<Graphic>();

            for (int i = 0; i < getMe.size(); i++) {

                HashMap<String,Object> taskPointHash = getMe.get(i);

                TaskModel model = TaskModel.parseRespond(taskPointHash);

                String[] positionList = model.Position.split(",");

                Dot dot = new Dot(Double.parseDouble(positionList[0]),Double.parseDouble(positionList[1]));

                Bitmap bitmap;

                int color;
                if (model.IsFeedback.equals(1)){

                    color = Color.BLUE;

                }else if (model.IsArrive.equals(1)){

                    color = Color.YELLOW;

                }else {

                    color = Color.BLACK;

                }

                GraphicPoint point = new GraphicPoint(dot,5);
                point.setColor(color);

                annList.add(point);

            }

            mapView.getGraphicsOverlay().addGraphics(annList);

            mapView.getAnnotationsOverlay().removeAllAnnotations();

            mapView.refresh();

        }

    }
    public static void cleanMap(MapView mapView){
        mapView.getGraphicsOverlay().removeAllGraphics();
        mapView.getAnnotationsOverlay().removeAllAnnotations();
        mapView.refresh();
    }
}


