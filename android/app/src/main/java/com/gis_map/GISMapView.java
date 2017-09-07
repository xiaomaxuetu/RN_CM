package com.gis_map;

import android.content.Context;
import android.graphics.Color;
import android.graphics.Point;
import android.os.Environment;
import android.provider.CalendarContract;
import android.util.AttributeSet;
import android.util.Log;
import android.widget.FrameLayout;
import android.widget.Toast;

import com.facebook.react.bridge.ReadableMap;
import com.zondy.mapgis.android.annotation.Annotation;
import com.zondy.mapgis.android.annotation.AnnotationView;
import com.zondy.mapgis.android.authorize.AuthResult;
import com.zondy.mapgis.android.authorize.Authorize;
import com.zondy.mapgis.android.authorize.License;
import com.zondy.mapgis.android.mapview.MapView;
import com.zondy.mapgis.core.geometry.*;
import com.zondy.mapgis.core.geometry.Dot;
import com.zondy.mapgis.core.map.Map;


/**
 * Created by cmios on 2017/7/20.
 */

public class GISMapView extends FrameLayout implements MapView.MapViewMapLoadListener,MapView.MapViewAnnotationListener,MapView.MapViewCenterChangedListener,MapView.MapViewZoomChangedListener {
    public MapView mapView;
    private Map map;
    public boolean isShowLogo;
    public ReadableMap partrolScanMap;

    public GISMapView(Context context){
        this(context,null);
    }
    public GISMapView(Context context, AttributeSet attrs){
        this(context,attrs,0);
    }
    public GISMapView(Context context,AttributeSet attrs,int defStyleAttr){
        super(context,attrs,defStyleAttr);
        initWithView();
    }
    private void initWithView(){
        Toast.makeText(getContext(),"开始",Toast.LENGTH_SHORT);

        mapView = new MapView(getContext());

        mapView.setMapLoadListener(this);

        mapView.setAnnotationListener(this);

        mapView.setCenterChangedListener(this);

        mapView.setZoomChangedListener(this);

        com.zondy.mapgis.android.environment.Environment.requestAuthorization(getContext(), new com.zondy.mapgis.android.environment.Environment.AuthorizeCallback() {
            @Override
            public void onComplete() {

                mapView.loadFromFileAsync(Environment.getExternalStorageDirectory().getPath()+"/MapGIS Sample/Map/wuhan/wuhan.xml");

            }
        });

        map = mapView.getMap();

        addView(mapView);


    }

    @Override
    public void mapViewWillStartLoadingMap(MapView mapView, String s) {

        Toast.makeText(getContext(), "开始",Toast.LENGTH_SHORT);

    }

    @Override
    public void mapViewDidFinishLoadingMap(MapView mapView, String s) {

        Toast.makeText(getContext(), "加载结束",Toast.LENGTH_SHORT);

    }

    @Override
    public void mapViewDidFailLoadingMap(MapView mapView, String s) {

        Toast.makeText(getContext(), "加载失败",Toast.LENGTH_SHORT);

    }

    @Override
    public AnnotationView mapViewViewForAnnotation(MapView mapView, Annotation annotation) {
        AnnotationView ann = new AnnotationView(annotation,getContext());
        ann.getCalloutTitleTextView().setTextColor(Color.BLUE);
        ann.getCalloutDescriptionTextView().setTextColor(Color.BLACK);

        // 设置 callout 相对于标注或视图点的偏移量
         ann.setCalloutOffset(new Point(0, 15));
         ann.getCalloutDescriptionTextView().setSingleLine(false);
// 将      annotationview 平移到视图中心
        ann.setPanToMapViewCenter(true);
        return ann;
    }

    @Override
    public boolean mapViewWillHideAnnotationView(MapView mapView, AnnotationView annotationView) {
        return false;
    }

    @Override
    public boolean mapViewWillShowAnnotationView(MapView mapView, AnnotationView annotationView) {
        return true;
    }

    @Override
    public void mapViewClickAnnotation(MapView mapView, Annotation annotation) {

    }

    @Override
    public void mapViewClickAnnotationView(MapView mapView, AnnotationView annotationView) {

    }

    @Override
    public void mapViewCenterChanged(MapView mapView, Dot dot, Dot dot1) {

    }

    @Override
    public void mapViewZoomChanged(MapView mapView, double v, double v1) {

        if (v1==3&&v>v1){

        }

    }
}
