import React from "react";
import { Button } from "react-bootstrap";

const water1 = {
  width: "1200px",
  margin: "0px 80px",
};

const image = {
  width: "400px",
  height: "200px",
  alignItems: "center",
};

const PostDetail = (props) => {
  return (
    <div style={water1}>
      <h4>{props.title}</h4>
      <br />
      <p>{props.content_1}</p>
      <br />
      <img src={props.img_1} style={image} />
      <p>{props.content_2}</p>
      <br />
      <img src={props.img_2} style={image} />
      <br />
      <br />
      <br />
      <h6>
        <i>
          Chung tôi biết rằng iết rằng còn rất nhiều hoàn cảnh khó khăn trên
          khắp đất nước của chúng ta cần được bảo trợ. Bạn hay các công ty hãy
          liên hệ với chúng tôi để cùng tài trợ, giúp đỡ tạo nên một cộng đồng
          Việt Nam nhân ái nhé!
        </i>
      </h6>
      <br />
      <br />
      <br />
      <h5> Những người đã tham gia quyên góp:</h5>
      <table>
        <tr>
          <th>Họ tên</th>
          <th>Số ĐT</th>
        </tr>
        <tr>
          <td>{props.fullName}</td>
          <td>{props.phone}</td>
        </tr>
      </table>
      <br />
      <br />
      <br />
      <br />
      <Button href="/message">Đóng Góp </Button>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default PostDetail;
