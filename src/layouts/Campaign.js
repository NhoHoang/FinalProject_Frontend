import React from "react";
import { Link } from "react-router-dom";

import CampaignModel from "./CampaignModal";
const Campaign = () => {
  return (

    <div className="container teal center white-text">
      <div className="container">
        <h1>Đóng góp</h1>
        <h3>Trái Tim Cho Em</h3>
        <p>
          Chương trình “Trái tim cho em” được sáng lập và điều hành bởi Tập đoàn
          Công nghiệp-Viễn thông Quân đội (Viettel) và Quỹ Tấm lòng Việt-Đài
          Truyền hình Việt Nam.
        </p>
        <p>
          Qua nhiều năm triển khai chương trình “Trái tim cho em” đã trở nên
          thân thuộc với trẻ em nghèo trên khắp các tỉnh thành, giúp hồi sinh sự
          sống cho gần 6.000 bệnh nhi có hoàn cảnh khó khăn, tổ chức được hơn 70
          chương trình khám sàng lọc bệnh tim bẩm sinh miễn phí cho hơn 130.000
          trẻ em trên toàn quốc.
        </p>
        <p>
          Hãy chung tay đóng góp để góp phần xây dựng tương lai cho trẻ em Việt
          Nam!

        </p>
        <Link
          className="waves-effect waves-light pulse btn-large modal-trigger hide-on-small-only"
          to="/message"
        >

          <i className="material-icons right">mood</i>ĐÓNG GÓP

        </Link>
        {/* <Link
          className='waves-effect waves-light pulse btn-small modal-trigger hide-on-med-and-up'
          to='/donateprop'
        >
          <i className='material-icons right'>mood</i>Contribute
        </Link> */}
        <CampaignModel />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Campaign;
