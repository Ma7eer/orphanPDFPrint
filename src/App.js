import React from "react";
import Background from "./background1.jpg";
import Axios from "axios";
// import "./styles.css";
import ReactToPrint from "react-to-print";

var getParams = function(url) {
  var params = {};
  var parser = document.createElement("a");
  parser.href = url;
  var query = parser.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    params[pair[0]] = decodeURIComponent(pair[1]);
  }
  return params;
};
console.log(getParams(window.location.href));

class PrintPage extends React.Component {
  state = {
    orphanId: getParams(window.location.href).orphanId,
    orphanName: "",
    orphanSex: "",
    orphanNationality: "",
    orphanDateOfBirth: getParams(window.location.href).orphanDateOfBirth,
    placeOfBirth: getParams(window.location.href).placeOfBirth,
    orphanHealth: getParams(window.location.href).orphanHealth,
    notes: getParams(window.location.href).notes,
    fatherDeathDate: getParams(window.location.href).fatherDeathDate,
    orphanFamilyId: getParams(window.location.href).orphanFamilyId,
    motherName: getParams(window.location.href).motherName,
    motherJob: getParams(window.location.href).motherJob,
    motherPhone: getParams(window.location.href).motherPhone,
    numberOfFamilyMembers: getParams(window.location.href)
      .numberOfFamilyMembers,
    males: getParams(window.location.href).males,
    females: getParams(window.location.href).females,
    state: getParams(window.location.href).state,
    region: getParams(window.location.href).region,
    sponsorId: getParams(window.location.href).sponsorId,
    sponsorName: getParams(window.location.href).sponsorName,
    numberOfSponsored: getParams(window.location.href).numberOfSponsored,
    sponsorPhone: getParams(window.location.href).sponsorPhone,
    sponsorAmount: getParams(window.location.href).sponsorAmount,
    sponsorNationality: getParams(window.location.href).sponsorNationality,
    paymentMethod: getParams(window.location.href).paymentMethod,
    startDate: getParams(window.location.href).startDate
  };

  async componentWillMount() {
    await Axios.get(
      `https://dashboard.alrahma-baraka.com:5001/orphanSponsors/${this.state.sponsorId}`,
      {
        headers: { Authorization: "Bearer " + localStorage.getItem("jwtToken") }
      }
    )
      .then(res => {
        // console.log(res);
        this.setState({
          numberOfSponsored: res.data.data[0].numberOfSponsored,
          paymentMethod: res.data.data[0].paymentMethod,
          sponsorAmount: res.data.data[0].sponsorAmount,
          sponsorName: res.data.data[0].sponsorName,
          sponsorNationality: res.data.data[0].sponsorNationality,
          sponsorPhone: res.data.data[0].sponsorPhone,
          startDate: res.data.data[0].startDate
        });
      })
      .catch(err => console.log(err));

    await Axios.get(
      `https://dashboard.alrahma-baraka.com:5001/orphans/${this.state.orphanId}`,
      {
        headers: { Authorization: "Bearer " + localStorage.getItem("jwtToken") }
      }
    ).then(res => {
      console.log(res);
      this.setState({
        orphanName: res.data.data[0] ? res.data.data[0].orphanName : "",
        orphanSex: res.data.data[0] ? res.data.data[0].orphanSex : "",
        orphanNationality: res.data.data[0]
          ? res.data.data[0].orphanNationality
          : "",
        orphanDateOfBirth: res.data.data[0]
          ? res.data.data[0].orphanDateOfBirth
          : "",
        placeOfBirth: res.data.data[0] ? res.data.data[0].placeOfBirth : "",
        orphanHealth: res.data.data[0] ? res.data.data[0].orphanHealth : "",
        notes: res.data.data[0] ? res.data.data[0].notes : "",
        fatherDeathDate: res.data.data[0]
          ? res.data.data[0].fatherDeathDate
          : "",
        orphanFamilyId: res.data.data[0] ? res.data.data[0].orphanFamilyId : ""
      });
    });

    await Axios.get(
      `https://dashboard.alrahma-baraka.com:5001/orphanFamily/getOne/${this.state.orphanFamilyId}`,
      {
        headers: { Authorization: "Bearer " + localStorage.getItem("jwtToken") }
      }
    ).then(res => {
      // console.log(res);
      this.setState({
        motherName: res.data.data[0].motherName,
        motherJob: res.data.data[0].motherJob,
        motherPhone: res.data.data[0].motherPhone,
        numberOfFamilyMembers: res.data.data[0].numberOfFamilyMembers,
        males: res.data.data[0].males,
        females: res.data.data[0].females,
        state: res.data.data[0].state,
        region: res.data.data[0].region
      });
    });
  }

  render() {
    return (
      <div dir="rtl">
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <style
          type="text/css"
          dangerouslySetInnerHTML={{
            __html:
              '\n<!--\nspan.cls_002{font-family:Arial,serif;font-size:14.1px;color:rgb(0,0,0);font-weight:bold;font-style:normal;text-decoration: none}\ndiv.cls_002{font-family:Arial,serif;font-size:14.1px;color:rgb(0,0,0);font-weight:bold;font-style:normal;text-decoration: none}\nspan.cls_003{font-family:Arial,serif;font-size:18.0px;color:rgb(0,0,0);font-weight:bold;font-style:normal;text-decoration: none}\ndiv.cls_003{font-family:Arial,serif;font-size:18.0px;color:rgb(0,0,0);font-weight:bold;font-style:normal;text-decoration: none}\nspan.cls_004{font-family:"Calibri Bold",serif;font-size:15.0px;color:rgb(185,19,24);font-weight:bold;font-style:normal;text-decoration: none}\ndiv.cls_004{font-family:"Calibri Bold",serif;font-size:15.0px;color:rgb(185,19,24);font-weight:bold;font-style:normal;text-decoration: none}\nspan.cls_005{font-family:"Calibri",serif;font-size:15.0px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}\ndiv.cls_005{font-family:"Calibri",serif;font-size:15.0px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}\nspan.cls_006{font-family:Arial,serif;font-size:15.0px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}\ndiv.cls_006{font-family:Arial,serif;font-size:15.0px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}\nspan.cls_007{font-family:"Calibri Bold",serif;font-size:16.0px;color:rgb(23,54,93);font-weight:bold;font-style:normal;text-decoration: none}\ndiv.cls_007{font-family:"Calibri Bold",serif;font-size:16.0px;color:rgb(23,54,93);font-weight:bold;font-style:normal;text-decoration: none}\nspan.cls_008{font-family:Arial,serif;font-size:16.0px;color:rgb(23,54,93);font-weight:bold;font-style:normal;text-decoration: none}\ndiv.cls_008{font-family:Arial,serif;font-size:16.0px;color:rgb(23,54,93);font-weight:bold;font-style:normal;text-decoration: none}\nspan.cls_009{font-family:Arial,serif;font-size:18.0px;color:rgb(255,255,255);font-weight:bold;font-style:normal;text-decoration: none}\ndiv.cls_009{font-family:Arial,serif;font-size:18.0px;color:rgb(255,255,255);font-weight:bold;font-style:normal;text-decoration: none}\nspan.cls_010{font-family:Arial,serif;font-size:14.0px;color:rgb(55,99,159);font-weight:bold;font-style:normal;text-decoration: none}\ndiv.cls_010{font-family:Arial,serif;font-size:14.0px;color:rgb(55,99,159);font-weight:bold;font-style:normal;text-decoration: none}\nspan.cls_011{font-family:"Calibri Bold",serif;font-size:14.0px;color:rgb(0,0,0);font-weight:bold;font-style:normal;text-decoration: none}\ndiv.cls_011{font-family:"Calibri Bold",serif;font-size:14.0px;color:rgb(0,0,0);font-weight:bold;font-style:normal;text-decoration: none}\nspan.cls_012{font-family:Arial,serif;font-size:14.0px;color:rgb(0,0,0);font-weight:bold;font-style:normal;text-decoration: none}\ndiv.cls_012{font-family:Arial,serif;font-size:14.0px;color:rgb(0,0,0);font-weight:bold;font-style:normal;text-decoration: none}\nspan.cls_013{font-family:"Calibri Bold",serif;font-size:14.0px;color:rgb(55,99,159);font-weight:bold;font-style:normal;text-decoration: none}\ndiv.cls_013{font-family:"Calibri Bold",serif;font-size:14.0px;color:rgb(55,99,159);font-weight:bold;font-style:normal;text-decoration: none}\nspan.cls_014{font-family:"Calibri Bold",serif;font-size:14.0px;color:rgb(85,118,157);font-weight:bold;font-style:normal;text-decoration: none}\ndiv.cls_014{font-family:"Calibri Bold",serif;font-size:14.0px;color:rgb(85,118,157);font-weight:bold;font-style:normal;text-decoration: none}\nspan.cls_015{font-family:"Calibri Bold",serif;font-size:14.0px;color:rgb(31,72,124);font-weight:bold;font-style:normal;text-decoration: none}\ndiv.cls_015{font-family:"Calibri Bold",serif;font-size:14.0px;color:rgb(31,72,124);font-weight:bold;font-style:normal;text-decoration: none}\nspan.cls_016{font-family:Arial,serif;font-size:14.0px;color:rgb(31,72,124);font-weight:bold;font-style:normal;text-decoration: none}\ndiv.cls_016{font-family:Arial,serif;font-size:14.0px;color:rgb(31,72,124);font-weight:bold;font-style:normal;text-decoration: none}\nspan.cls_017{font-family:Arial,serif;font-size:14.0px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}\ndiv.cls_017{font-family:Arial,serif;font-size:14.0px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}\nspan.cls_018{font-family:"Calibri",serif;font-size:14.0px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}\ndiv.cls_018{font-family:"Calibri",serif;font-size:14.0px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}\nspan.cls_019{font-family:"Calibri Bold",serif;font-size:11.1px;color:rgb(255,255,255);font-weight:bold;font-style:normal;text-decoration: none}\ndiv.cls_019{font-family:"Calibri Bold",serif;font-size:11.1px;color:rgb(255,255,255);font-weight:bold;font-style:normal;text-decoration: none}\nspan.cls_020{font-family:Arial,serif;font-size:11.1px;color:rgb(255,255,255);font-weight:bold;font-style:normal;text-decoration: none}\ndiv.cls_020{font-family:Arial,serif;font-size:11.1px;color:rgb(255,255,255);font-weight:bold;font-style:normal;text-decoration: none}\n-->\n'
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "50%",
            marginLeft: "-297px",
            top: "0px",
            width: "595px",
            height: "842px",
            borderStyle: "outset",
            overflow: "hidden"
          }}
        >
          <div style={{ position: "absolute", left: "0px", top: "0px" }}>
            <img src={Background} width={595} height={842} alt="background" />
          </div>
          <div
            style={{ position: "absolute", left: "464.32px", top: "46.42px" }}
            className="cls_002"
          >
            <span className="cls_002">عمان</span>
          </div>
          <div
            style={{ position: "absolute", left: "492.52px", top: "46.42px" }}
            className="cls_002"
          >
            <span className="cls_002">سلطنة</span>
          </div>
          <div
            style={{ position: "absolute", left: "460.72px", top: "63.50px" }}
            className="cls_002"
          >
            <span className="cls_002">محافظة مسقط</span>
          </div>
          <div
            style={{ position: "absolute", left: "446.15px", top: "80.54px" }}
            className="cls_002"
          >
            <span className="cls_002">جمعية الرحمة لرعاية</span>
          </div>
          <div
            style={{ position: "absolute", left: "453.85px", top: "97.60px" }}
            className="cls_002"
          >
            <span className="cls_002">الأمومة والطفولة</span>
          </div>
          <div
            style={{ position: "absolute", left: "310.30px", top: "119.53px" }}
            className="cls_003"
          >
            <span className="cls_003">كفالة يتيم</span>
          </div>
          <div
            style={{ position: "absolute", left: "318.43px", top: "148.57px" }}
            className="cls_004"
          >
            <span className="cls_006">رقم اليتيم</span>
            <span className="cls_005"> :</span>
            <span className="cls_004">{this.state.orphanId}</span>
          </div>
          <div
            style={{ position: "absolute", left: "148.81px", top: "184.31px" }}
            className="cls_007"
          >
            <span className="cls_007">͘ </span>
            <span className="cls_008"> قال رسول الله صلي الله عليه وسلم</span>
            <span className="cls_007"> ((</span>
            <span className="cls_008"> أنا و كافل اليتيم كهاتين في الجنة</span>
          </div>
          <div
            style={{ position: "absolute", left: "213.73px", top: "203.84px" }}
            className="cls_007"
          >
            <span className="cls_007">((</span>
            <span className="cls_008">
              {" "}
              و أشار بالسبابة و الوسطى و فرق بينهما قليلا
            </span>
          </div>
          <div
            style={{ position: "absolute", left: "256.04px", top: "235.04px" }}
            className="cls_009"
          >
            <span className="cls_009">بيانات اليتيم</span>
          </div>
          <div
            style={{ position: "absolute", left: "25px", top: "262.30px" }}
            className="cls_010"
          >
            <input
              type="text"
              value={this.state.orphanNationality}
              className="cls_010"
              style={{ width: "65px", border: "none", color: "blue" }}
            />
          </div>
          <div
            style={{ position: "absolute", left: "94.60px", top: "261.56px" }}
            className="cls_010"
          >
            <span className="cls_012"> الجنسية</span>
            <span className="cls_011">:</span>
            {/* <input
              type="text"
              value={this.state.orphanNationality}
              className="cls_010"
              // style={{ right: "2000px", top: "0px" }}
            /> */}
          </div>
          <div
            style={{ position: "absolute", left: "190.49px", top: "262.30px" }}
            className="cls_010"
          >
            <input
              type="text"
              value={this.state.orphanSex}
              className="cls_010"
              style={{ width: "90px", border: "none", color: "blue" }}
            />
          </div>
          <div
            style={{ position: "absolute", left: "294.43px", top: "262.30px" }}
            className="cls_011"
          >
            <span className="cls_012"> الجنس</span>
            <span className="cls_011">:</span>
          </div>
          <div
            style={{ position: "absolute", left: "340px", top: "261px" }}
            className="cls_010"
          >
            <span className="cls_012"> اسم اليتيم</span>
            <span className="cls_011">:</span>
            <input
              className="cls_010"
              type="text"
              style={{ color: "blue", border: "none" }}
              value={this.state.orphanName}
            />
          </div>
          <div
            style={{ position: "absolute", left: "16px", top: "281.26px" }}
            className="cls_010"
          >
            <input
              type="text"
              value={this.state.orphanHealth}
              className="cls_010"
              style={{ width: "65px", border: "none", color: "blue" }}
            />
          </div>
          <div
            style={{ position: "absolute", left: "83.25px", top: "281.26px" }}
            className="cls_010"
          >
            <span className="cls_012"> الحالة الصحية</span>
            <span className="cls_011"> :</span>
            {/* <input type="text" value={this.state.orphanHealth} className="cls_010"/> */}
          </div>
          <div
            style={{ position: "absolute", left: "160px", top: "282.56px" }}
            className="cls_010"
          >
            <input
              type="text"
              value={this.state.placeOfBirth}
              className="cls_010"
              style={{ width: "100px", border: "none", color: "blue" }}
            />
          </div>
          <div
            style={{ position: "absolute", left: "265.13px", top: "282.56px" }}
            className="cls_010"
          >
            <span className="cls_012"> مكان الميلاد</span>
            <span className="cls_011"> :</span>
            {/* <input type="text" value={this.state.orphanDateOfBirth} className="cls_010" /> */}
          </div>
          <div
            style={{ position: "absolute", left: "355px", top: "282.56px" }}
            className="cls_010"
          >
            <input
              type="text"
              value={this.state.orphanDateOfBirth}
              className="cls_010"
              style={{ width: "130px", border: "none", color: "blue" }}
            />
          </div>
          <div
            style={{ position: "absolute", left: "490px", top: "282.56px" }}
            className="cls_013"
          >
            {/* <span className="cls_013">1997/1/1</span> */}
            <span className="cls_012"> تاريخ الميلاد</span>
            <span className="cls_011"> :</span>
          </div>
          <div
            style={{ position: "absolute", left: "120px", top: "305.04px" }}
            className="cls_010"
          >
            <input
              type="text"
              value={this.state.sponsorAmount}
              className="cls_010"
              style={{ width: "148px", border: "none", color: "blue" }}
            />
          </div>
          <div
            style={{ position: "absolute", left: "272.13px", top: "305.04px" }}
            className="cls_011"
          >
            <span className="cls_012"> مبلغ الكفالة</span>
            <span className="cls_011">:</span>
          </div>
          <div
            style={{ position: "absolute", left: "360px", top: "305.04px" }}
            className="cls_010"
          >
            <input
              type="text"
              value={this.state.fatherDeathDate}
              className="cls_010"
              style={{ width: "120px", border: "none", color: "blue" }}
            />
          </div>
          <div
            style={{ position: "absolute", left: "480.31px", top: "303.56px" }}
            className="cls_013"
          >
            {/* <span className="cls_013">1997/5/17</span> */}

            <span className="cls_012"> تاريخ وفاة الاب</span>
            <span className="cls_011"> :</span>
          </div>
          <div
            style={{ position: "absolute", left: "252.68px", top: "325.06px" }}
            className="cls_009"
          >
            <span className="cls_009">بيانات الاسرة</span>
          </div>
          <div
            style={{ position: "absolute", left: "20px", top: "352.66px" }}
            className="cls_013"
          >
            {/* <span className="cls_013">2</span> */}
            <input
              type="text"
              value={this.state.females}
              className="cls_010"
              style={{ width: "40px", border: "none", color: "blue" }}
            />
          </div>
          <div
            style={{ position: "absolute", left: "67.96px", top: "352.30px" }}
            className="cls_011"
          >
            <span className="cls_012"> إناث</span>
            <span className="cls_011">:</span>
          </div>
          <div
            style={{ position: "absolute", left: "100px", top: "352.66px" }}
            className="cls_013"
          >
            {/* <span className="cls_013">2</span> */}
            <input
              type="text"
              value={this.state.males}
              className="cls_010"
              style={{ width: "30px", border: "none", color: "blue" }}
            />
          </div>
          <div
            style={{ position: "absolute", left: "137.62px", top: "352.30px" }}
            className="cls_013"
          >
            {/* <span className="cls_013">2</span> */}

            <span className="cls_012"> ذكور</span>
            <span className="cls_011"> :</span>
          </div>
          <div
            style={{ position: "absolute", left: "175px", top: "352.66px" }}
            className="cls_013"
          >
            {/* <span className="cls_013">2</span> */}
            <input
              type="text"
              value={this.state.numberOfFamilyMembers}
              className="cls_010"
              style={{ width: "30px", border: "none", color: "blue" }}
            />
          </div>
          <div
            style={{ position: "absolute", left: "210.87px", top: "352.66px" }}
            className="cls_013"
          >
            {/* <span className="cls_013">5</span> */}

            <span className="cls_012"> افراد الاسرة</span>
            <span className="cls_011"> :</span>
          </div>
          <div
            style={{ position: "absolute", left: "300px", top: "350.50px" }}
            className="cls_010"
          >
            <input
              type="text"
              value={this.state.motherName}
              className="cls_010"
              style={{ width: "100px", border: "none", color: "blue" }}
            />
          </div>
          <div
            style={{ position: "absolute", left: "407.39px", top: "349.76px" }}
            className="cls_011"
          >
            <span className="cls_012"> اسم الام</span>
            <span className="cls_011">:</span>
          </div>
          <div
            style={{ position: "absolute", left: "460px", top: "352.66px" }}
            className="cls_014"
          >
            <input
              type="text"
              value={this.state.orphanFamilyId}
              className="cls_010"
              style={{ width: "40px", border: "none", color: "blue" }}
            />
          </div>
          <div
            style={{ position: "absolute", left: "501.97px", top: "352.30px" }}
            className="cls_011"
          >
            <span className="cls_012"> رقم الاسرة</span>
            <span className="cls_011">:</span>
          </div>
          <div
            style={{ position: "absolute", left: "150px", top: "371.81px" }}
            className="cls_014"
          >
            <input
              type="text"
              value={this.state.motherPhone}
              className="cls_010"
              style={{ width: "100px", border: "none", color: "blue" }}
            />
          </div>
          <div
            style={{ position: "absolute", left: "257.93px", top: "371.81px" }}
            className="cls_013"
          >
            {/* <span className="cls_013">99698829</span> */}

            <span className="cls_012"> رقم الهاتف</span>
            <span className="cls_011"> :</span>
          </div>
          <div
            style={{ position: "absolute", left: "390px", top: "371.81px" }}
            className="cls_014"
          >
            <input
              type="text"
              value={this.state.motherJob}
              className="cls_010"
              style={{ width: "120px", border: "none", color: "blue" }}
            />
          </div>
          <div
            style={{ position: "absolute", left: "518px", top: "372.22px" }}
            className="cls_010"
          >
            <span className="cls_012"> المهنة</span>
            <span className="cls_011"> :</span>
            {/* <span className="cls_010">ربة بيت</span> */}
          </div>
          <div
            style={{ position: "absolute", left: "114px", top: "394.66px" }}
            className="cls_010"
          >
            <input
              type="text"
              value={this.state.region}
              className="cls_010"
              style={{ width: "160px", border: "none", color: "blue" }}
            />
          </div>
          <div
            style={{ position: "absolute", left: "277px", top: "394.32px" }}
            className="cls_011"
          >
            <span className="cls_012"> المنطقة</span>
            <span className="cls_011">:</span>
          </div>
          <div
            style={{ position: "absolute", left: "392px", top: "394.66px" }}
            className="cls_010"
          >
            <input
              type="text"
              value={this.state.state}
              className="cls_010"
              style={{ width: "120px", border: "none", color: "blue" }}
            />
          </div>
          <div
            style={{ position: "absolute", left: "517.07px", top: "394.66px" }}
            className="cls_011"
          >
            <span className="cls_012"> الولاية</span>
            <span className="cls_011">:</span>
          </div>
          <div
            style={{ position: "absolute", left: "255.44px", top: "415.05px" }}
            className="cls_009"
          >
            <span className="cls_009">بيانات الكفيل</span>
          </div>
          <div
            style={{ position: "absolute", left: "380px", top: "442.68px" }}
            className="cls_015"
          >
            <input
              type="text"
              value={this.state.sponsorId}
              className="cls_010"
              style={{ width: "120px", border: "none", color: "blue" }}
            />
          </div>
          <div
            style={{ position: "absolute", left: "506.72px", top: "440.06px" }}
            className="cls_011"
          >
            <span className="cls_012"> رقم الكفيل</span>
            <span className="cls_011">:</span>
          </div>
          <div
            style={{ position: "absolute", left: "70px", top: "462px" }}
            className="cls_015"
          >
            <input
              type="text"
              value={this.state.numberOfSponsored}
              className="cls_010"
              style={{ width: "90px", border: "none", color: "blue" }}
            />
          </div>
          <div
            style={{ position: "absolute", left: "165.88px", top: "461.06px" }}
            className="cls_011"
          >
            <span className="cls_012"> عدد الاطفال المكفولين</span>
            <span className="cls_011">:</span>
          </div>
          <div
            style={{ position: "absolute", left: "318px", top: "463.32px" }}
            className="cls_015"
          >
            <input
              type="text"
              value={this.state.sponsorName}
              className="cls_010"
              style={{ width: "180px", border: "none", color: "blue" }}
            />
          </div>
          <div
            style={{ position: "absolute", left: "502px", top: "463.32px" }}
            className="cls_015"
          >
            <span className="cls_012">اسم الكفيل</span>
            <span className="cls_011"> :</span>

            {/* <span className="cls_016">يتيم تم إلغاء الكفالة عنه</span> */}
          </div>
          <div
            style={{ position: "absolute", left: "55px", top: "483.21px" }}
            className="cls_015"
          >
            <input
              type="text"
              value={this.state.sponsorAmount}
              className="cls_010"
              style={{ width: "150px", border: "none", color: "blue" }}
            />
          </div>
          <div
            style={{ position: "absolute", left: "211.14px", top: "483.21px" }}
            className="cls_011"
          >
            <span className="cls_012"> مبلغ الكفالة</span>
            <span className="cls_011">:</span>
          </div>
          <div
            style={{ position: "absolute", left: "345px", top: "483.57px" }}
            className="cls_015"
          >
            <input
              type="text"
              value={this.state.sponsorPhone}
              className="cls_010"
              style={{ width: "150px", border: "none", color: "blue" }}
            />
          </div>
          <div
            style={{ position: "absolute", left: "503.91px", top: "483.57px" }}
            className="cls_011"
          >
            <span className="cls_012"> رقم الهاتف</span>
            <span className="cls_011">:</span>
          </div>
          <div
            style={{ position: "absolute", left: "55px", top: "504.57px" }}
            className="cls_015"
          >
            <input
              type="text"
              value={this.state.paymentMethod}
              className="cls_010"
              style={{ width: "150px", border: "none", color: "blue" }}
            />
          </div>
          <div
            style={{ position: "absolute", left: "209.82px", top: "504.57px" }}
            className="cls_011"
          >
            <span className="cls_012"> طريقة الدفع</span>
            <span className="cls_011">:</span>
          </div>
          <div
            style={{ position: "absolute", left: "360px", top: "505.32px" }}
            className="cls_015"
          >
            <input
              type="text"
              value={this.state.sponsorNationality}
              className="cls_010"
              style={{ width: "150px", border: "none", color: "blue" }}
            />
          </div>
          <div
            style={{ position: "absolute", left: "518.82px", top: "505.32px" }}
            className="cls_011"
          >
            <span className="cls_012"> الجنسية</span>
            <span className="cls_011">:</span>
          </div>
          <div
            style={{ position: "absolute", left: "62px", top: "527.08px" }}
            className="cls_015"
          >
            <input
              type="text"
              value={this.state.startDate}
              className="cls_010"
              style={{ width: "120px", border: "none", color: "blue" }}
            />
          </div>
          <div
            style={{ position: "absolute", left: "187.43px", top: "527.08px" }}
            className="cls_011"
          >
            <span className="cls_012"> تاريخ بدء الكفالة</span>
            <span className="cls_011">:</span>
          </div>
          {/* <div
            style={{ position: "absolute", left: "83.47px", top: "590.44px" }}
            className="cls_017"
          >
            <span className="cls_017">
              و ان أقوم بإبلاغ القائمين على المشروع كفالة اليتيم عن أي ظرف مستجد
              يمنع من استمراري في هذا الالتزام
            </span>
          </div> */}
          <div
            style={{ position: "absolute", left: "40px", top: "611.44px" }}
            className="cls_017"
          >
            <input
              type="text"
              value={this.state.notes}
              className="cls_010"
              style={{ width: "520px", border: "none", color: "blue" }}
            />

            {/* <span className="cls_018"> :</span> */}
            {/* <span className="cls_017"> Δظحϼم</span> */}
          </div>
          {/* <div
            style={{ position: "absolute", left: "420.30px", top: "628.48px" }}
            className="cls_018"
          > */}
          {/* <span className="cls_018">͘</span> */}
          {/* <span className="cls_017"> للإحراج الذي قد يحدث للاسرة .</span> */}
          {/* </div> */}
          <div
            style={{ position: "absolute", left: "202.33px", top: "653.08px" }}
            className="cls_011"
          >
            <span className="cls_012"> التاريخ</span>
            <span className="cls_011">:</span>
          </div>
          <div
            style={{ position: "absolute", left: "525.82px", top: "653.08px" }}
            className="cls_011"
          >
            <span className="cls_012"> الاسم</span>
            <span className="cls_011">:</span>
          </div>
          <div
            style={{ position: "absolute", left: "519.51px", top: "674.85px" }}
            className="cls_011"
          >
            <span className="cls_012"> التوقيع</span>
            <span className="cls_011">:</span>
          </div>
          <div
            style={{ position: "absolute", left: "47.25px", top: "743.99px" }}
            className="cls_019"
          >
            <span className="cls_020"> حساب كفالة الايتام</span>
            <span className="cls_019"> (</span>
            <span className="cls_020"> بنك مسقط) </span>
            <span className="cls_019">0301018630570017 </span>
          </div>
          <div
            style={{ position: "absolute", left: "270.12px", top: "743.99px" }}
            className="cls_019"
          >
            <span className="cls_020"> سلطنة عمان</span>
            <span className="cls_019"> -</span>
            <span className="cls_020"> ولاية السيب</span>
            <span className="cls_019"> -</span>
            <span className="cls_020"> فاكس</span>
            <span className="cls_019"> -24546688</span>
            <span className="cls_020"> كفالة الايتام</span>
            <span className="cls_019"> 96096900</span>
          </div>
        </div>
      </div>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <>
        <ReactToPrint
          trigger={() => <a href="#">طباعة</a>}
          content={() => this.componentRef}
        />
        <PrintPage ref={el => (this.componentRef = el)} />
      </>
    );
  }
}
