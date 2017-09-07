package com.gis_map.PartrolScan;

import android.os.Parcel;
import android.os.Parcelable;
import android.text.Annotation;

import java.util.ArrayList;
import java.util.HashMap;

/**
 * Created by cmios on 2017/9/5.
 */

public class TaskModel implements Parcelable {
    public Double TaskID;
    public String Position;
    public Double Lenth;
    public String LayerName;
    public String Remark;
    public String KClass;
    public Double IsArrive;
    public Double Index;
    public String GisLayer;
    public Double FeedbackID;
    public String FieldValue;
    public Double Type;
    public Double IsFeedback;
    public String ArriveTime;
    public String ArriveManName;
    public String FeedbackManName;
    public String FeedbackTime;
    public Double ArriveMan;
    public String FieldName;
    public Double ID;
    public Double FeedbackMan;
    public String Geom;



    public  static TaskModel parseRespond(HashMap<String ,Object> hashMap){
        TaskModel model = new TaskModel();
        model.TaskID = (Double) hashMap.get("TaskID");
        model.Position = (String)hashMap.get("Position");
        model.Lenth = (Double)hashMap.get("Lenth");
        model.LayerName = (String)hashMap.get("LayerName");
        model.Remark = (String)hashMap.get("Remark");
        model.KClass = (String)hashMap.get("KClass");
        model.IsArrive = (Double)hashMap.get("IsArrive");
        model.Index = (Double)hashMap.get("Index");
        model.GisLayer = (String)hashMap.get("GisLayer");
        model.FeedbackID = (Double)hashMap.get("FeedbackID");
        model.FieldValue = (String)hashMap.get("FieldValue");
        model.Type = (Double) hashMap.get("Type");
        model.IsFeedback = (Double)hashMap.get("IsFeedback");
        model.ArriveTime = (String)hashMap.get("ArriveTime");
        model.ArriveManName = (String)hashMap.get("ArriveManName");
        model.FeedbackManName = (String)hashMap.get("FeedbackManName");
        model.FeedbackTime = (String)hashMap.get("FeedbackTime");
        model.ArriveMan = (Double)hashMap.get("ArriveMan");
        model.FieldName = (String)hashMap.get("FieldName");
        model.ID = (Double)hashMap.get("ID");
        model.FeedbackMan = (Double)hashMap.get("FeedbackMan");
        model.Geom = (String)hashMap.get("Geom");

        return model;
    }

    @Override
    public int describeContents() {
        return 0;
    }

    @Override
    public void writeToParcel(Parcel dest, int flags) {
        dest.writeValue(this.TaskID);
        dest.writeString(this.Position);
        dest.writeValue(this.Lenth);
        dest.writeString(this.LayerName);
        dest.writeString(this.Remark);
        dest.writeString(this.KClass);
        dest.writeValue(this.IsArrive);
        dest.writeValue(this.Index);
        dest.writeString(this.GisLayer);
        dest.writeValue(this.FeedbackID);
        dest.writeString(this.FieldValue);
        dest.writeValue(this.Type);
        dest.writeValue(this.IsFeedback);
        dest.writeString(this.ArriveTime);
        dest.writeString(this.ArriveManName);
        dest.writeString(this.FeedbackManName);
        dest.writeString(this.FeedbackTime);
        dest.writeValue(this.ArriveMan);
        dest.writeString(this.FieldName);
        dest.writeValue(this.ID);
        dest.writeValue(this.FeedbackMan);
        dest.writeString(this.Geom);
    }

    public TaskModel() {
    }

    protected TaskModel(Parcel in) {
        this.TaskID = (Double) in.readValue(Double.class.getClassLoader());
        this.Position = in.readString();
        this.Lenth = (Double) in.readValue(Double.class.getClassLoader());
        this.LayerName = in.readString();
        this.Remark = in.readString();
        this.KClass = in.readString();
        this.IsArrive = (Double) in.readValue(Double.class.getClassLoader());
        this.Index = (Double) in.readValue(Double.class.getClassLoader());
        this.GisLayer = in.readString();
        this.FeedbackID = (Double) in.readValue(Double.class.getClassLoader());
        this.FieldValue = in.readString();
        this.Type = (Double)in.readValue(Double.class.getClassLoader());
        this.IsFeedback = (Double) in.readValue(Double.class.getClassLoader());
        this.ArriveTime = in.readString();
        this.ArriveManName = in.readString();
        this.FeedbackManName = in.readString();
        this.FeedbackTime = in.readString();
        this.ArriveMan = (Double) in.readValue(Double.class.getClassLoader());
        this.FieldName = in.readString();
        this.ID = (Double) in.readValue(Double.class.getClassLoader());
        this.FeedbackMan = (Double) in.readValue(Double.class.getClassLoader());
        this.Geom = in.readString();
    }

    public static final Creator<TaskModel> CREATOR = new Creator<TaskModel>() {
        @Override
        public TaskModel createFromParcel(Parcel source) {
            return new TaskModel(source);
        }

        @Override
        public TaskModel[] newArray(int size) {
            return new TaskModel[size];
        }
    };
}
