<%@ WebHandler Language="C#" Class="baidu" %>

using System;
using System.Web;
using System.Collections.Generic;

public class baidu : IHttpHandler {
    
    public void ProcessRequest (HttpContext context) {
        context.Response.ContentType = "text/plain";
        context.Response.Write(GetWd(context.Request.QueryString["wd"]));
    }

    private string GetWd(string wd)
    {
        //所有数据
        List<string> list = new System.Collections.Generic.List<string>() { "\"abc\"", "\"abb\"", "\"阿宝\"", "\"abcc式的词语\"", "\"阿碧\"", "\"abac式的\"", "\"acfun\"", "\"angelababy\"", "\"akb48\"", "\"a67\"", "\"apple\"", "\"a67手机电影mp4下载\"", "\"app\"", "\"adobe reader\"", "\"all star\"", "\"adobe flash player\"" };

        wd = wd.Replace("\"", "");
        //查找以wd开头的字符串
        List<string> newList = new List<string>();
        foreach (string item in list)
        {
            string ss = item.Replace("\"", "");
            if (ss.Length > wd.Length)
            {

                string s = ss.Substring(0, wd.Length);
                if (s.ToLower() == wd.ToLower())
                {
                    newList.Add(item);
                }
            }
        }
        //拼成  ["a","b","c"]的样子
        string result = "[";
        foreach (string item in newList)
        {
            result = result + item + ",";
        }
        //去掉最后一个,
        result = result.TrimEnd(',');
        result += "]";
        return result;
    }
    public bool IsReusable {
        get {
            return false;
        }
    }

}