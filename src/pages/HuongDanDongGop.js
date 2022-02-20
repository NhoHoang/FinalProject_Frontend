import React from 'react';
import { Table } from 'reactstrap';

const table1 = {
  textAlign: 'center',
  width: '200px',
  // border: '1px solid black'
}

const HuongDanDongGop = () => {
  return (
    <>
      <div>
        <h1 style={{ margin: '30px 0px 0px 70px' }} className='h2'>HƯỚNG DẪN ĐÓNG GÓP</h1>
      </div>
      <br/>

      <div style={{ margin: '10px 70px', fontSize: "larger"}}>
        <p>Cảm ơn các nhà hảo tâm đã đồng hành cùng Quỹ Từ Thiện Trái Tim Cho Em. Chúng tôi xin lưu ý đến các nhà hảo tâm về các <br />
          hình thức để tiếp nhận tiền đóng góp và xác nhận đóng gó</p>

        <p><b>1. Tiếp nhận đóng góp: </b> <br />
          <b>a. <u>Đóng góp qua chuyển khoản trong nước:</u></b> <br />
          Đóng góp đến Quỹ Từ Thiện Trái Tim Cho Em
        </p>

        <Table bordered  Collapse style={{ width: '800px' }}>
          <thead >
            <tr>
              <th style={table1}>Tên Tài Khoản</th>
              <th style={table1}>Số Tài Khoản</th>
              <th style={table1}>Ngân hàng</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Quỹ Từ Thiện Trái Tim Cho Em</td>
              <td>6420201012822</td>
              <td>Ngân hàng nông nghiệp và phát triển nông thôn (Agribank) – Chi nhánh 10</td>
            </tr>
            <tr>
              <td>Quỹ Từ Thiện Trái Tim Cho Em</td>
              <td>0371000481127</td>
              <td>Ngân hàng thương mại cổ phần ngoại thương Việt Nam (Vietcombank) – Chi nhánh Tân Định</td>
            </tr>
            <tr>
              <td>Quỹ Từ Thiện Trái Tim Cho Em</td>
              <td>508317</td>
              <td>Ngân hàng Thương mại Cổ phần Á Châu (ACB) – Chi Nhánh Sài Gòn</td>
            </tr>
            <tr>
              <td>Quỹ Từ Thiện Trái Tim Cho Em</td>
              <td>18610000165426</td>
              <td>Ngân hàng Đầu tư và Phát triển Việt Nam (BIDV) – Chi nhánh Hàm Nghi</td>
            </tr>
          </tbody>
        </Table>

        <br />

        <p>Đóng góp trực tiếp qua Quán Nụ Cười và Quán Yên Vui</p>

        <Table bordered style={{ width: '800px' }}>
          <thead>
            <tr>
              <th style={table1}>Quán</th>
              <th style={table1}>Tên Tài Khoản</th>
              <th style={table1}>Số Tài Khoản</th>
              <th style={table1}>Ngân hàng</th>
            </tr>

          </thead>

          <tbody>
            <tr>
              <td>Quán Nụ Cười 1</td>
              <td>Quỹ Từ Thiện Trái Tim Cho Em</td>
              <td>508338</td>
              <td>Ngân hàng thương mại cổ phần Á Châu (ACB) – Chi nhánh Sài Gòn</td>
            </tr>
            <tr>
              <td>Quán Nụ Cười 2</td>
              <td>Quỹ Từ Thiện Trái Tim Cho Em</td>
              <td>508368</td>
              <td>Ngân hàng thương mại cổ phần Á Châu (ACB) – Chi nhánh Sài Gòn</td>
            </tr>
            <tr>
              <td>Quán Yên Vui Đống Đa – Hà Nội</td>
              <td>Quỹ Từ Thiện Trái Tim Cho Em</td>
              <td>221080689000081</td>
              <td>Ngân Hàng Thương Mại Cổ Phần Xuất Nhập Khẩu Việt Nam (EXIMBANK) – Phòng giao dịch Đa Kao</td>
            </tr>
            <tr>
              <td>Quán Yên Vui Ninh Kiều – Cần Thơ</td>
              <td>Quỹ Từ Thiện Trái Tim Cho Em</td>
              <td>221080689000080</td>
              <td>Ngân Hàng Thương Mại Cổ Phần Xuất Nhập Khẩu Việt Nam (EXIMBANK) – Phòng giao dịch Đa Kao</td>
            </tr>
            <tr>
              <td>Quán Yên Vui Vinh – Nghệ An</td>
              <td>Quỹ Từ Thiện Trái Tim Cho Em</td>
              <td>221080689000079</td>
              <td>Ngân Hàng Thương Mại Cổ Phần Xuất Nhập Khẩu Việt Nam (EXIMBANK) – Phòng giao dịch Đa Kao</td>
            </tr>

          </tbody>
        </Table>
        <br/>

        <p><b>b. <u>Đóng góp qua chuyển khoản từ nước ngoài:</u></b> <br />
          Nếu ở nước ngoài Việt Nam, Bạn có thể dùng các cách sau để chuyển tiền về cho Quỹ ạ:<br />
          <b>+ Tài khoản nhận ngoại tệ</b><br />

          <p>
            Tên tài khoản: Quỹ Từ Thiện Trái Tim Cho Em<br />
            Số tài khoản: 0371000481127 – Ngân hàng thương mại cổ phần ngoại thương Việt Nam (Vietcombank) Chi nhánh Tân Định <br />
            Địa chỉ: Lầu 5 số 7- 9 -11 Mai Thị Lựu, P.Đa Kao, Q1, TP.HCM <br />
          </p>

          <p>
            Account: Quỹ Từ Thiện Trái Tim Cho Em <br />
            Acc No: 0371000481127<br />
            Bank<br />
            Joint Stock Commercial Bank for Foreign Trade of Vietnam – Tan Dinh Branch<br />
            Swiffcode BFTVVNVX037
            Address: Floor 5th, 7-9-11 Mai Thi Luu, Dakao ward, District 1, Hochiminh City<br />
          </p>
        </p>
        <br/>

        <p><b>c. <u>Đóng góp bằng tiền mặt và hiện vật:</u></b><br />

          <Table bordered style={{ width: '800px' }}>
            <thead >
              <tr>
                <th style={table1}>Nơi tiếp nhận</th>
                <th style={table1}>Địa chỉ</th>
                <th style={table1}>Người liên hệ</th>
                <th style={table1}>Giờ tiếp nhận</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Văn phòng Quỹ Từ Thiện Trái Tim Cho Em</td>
                <td>Lầu 5, Tòa nhà Huy Sơn, Số 11 Mai Thị Lựu P. Đa Kao Q.1 Tp.HCM</td>
                <td>Ms. Ngọc Phương
                  (0909.609.385) hoặc
                  Ms. Nhã Trúc (0966.909.403)
                </td>
                <td>8h15 – 17h (T2-T6)</td>
              </tr>
              <tr>
                <td>Quán Nụ Cười 1</td>
                <td>Số 596 Trần Hưng Đạo, P.14, Q.5</td>
                <td>Mr.Khánh
                  (0775.08.01.83)
                </td>
                <td>8h15 – 16h (T2-T7)</td>
              </tr>
              <tr>
                <td>Quán Nụ Cười 2</td>
                <td>Số 170 Tân Sơn Nhì, P.Tân Sơn Nhì, Q.Tân Phú</td>
                <td>Ms. Thu Vân
                  (0348.652.508)
                </td>
                <td>8h15 – 16h (T2-T7)</td>
              </tr>
              <tr>
                <td>Quán Yên Vui Đống Đa – Hà Nội</td>
                <td>Số 136 ngõ 88 Trần Quý Cáp, P. Văn Chương, Q. Đống Đa, Hà Nội</td>
                <td>Mr. Sơn (097 207 1234)
                </td>
                <td>8h15 – 16h (T2 – T4 – T6)</td>
              </tr>
              <tr>
                <td>Quán Yên Vui Vinh – Nghệ An</td>
                <td>75 Phùng Khắc Khoan, P. Hưng Dũng, Tp.Vinh, Nghệ An</td>
                <td>Ms. Thương (0375657589) hoặc
                  Ms.Hoàng (0931 382 256)
                </td>
                <td>8h15 – 16h (T2 – T4 – T6)</td>
              </tr>
              <tr>
                <td>Quán Yên Vui Ninh Kiều – Cần Thơ</td>
                <td>73 Võ Văn Kiệt, P.An Hòa, Q.Ninh Kiều, Tp.Cần Thơ</td>
                <td>Ms.Linh (0932 834 559) hoặc
                  Ms. Quyên (0706 625 757)
                </td>
                <td>8h15 – 16h (T2 – T4 – T6)</td>
              </tr>
            </tbody>
          </Table>
        </p>
        <br />

        <p>
          <b>2. Xác thực đóng góp: </b>
          <Table bordered style={{ width: '800px' }}>
            <thead>
              <tr>
                <th rowSpan={2}>Cách thức đóng Góp</th>
                <th colSpan={3} style={table1}>Cách thức xác nhận
                  <tr>
                    <th style={table1}>Bước 1</th>
                    <th style={table1}>Bước 2</th>
                    <th style={table1}>Bước 3</th>
                  </tr>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Chuyển khoản</td>
                <td>
                  <tr>
                    <td style={table1}>
                      Gửi Phiếu thu kiêm thư cảm ơn của Quỹ từ thiện Trái Tim Cho Em (có dấu đỏ) đến người đóng góp: <br />
                      + 1 bản sao gửi vào địa chỉ thư điện tử (nếu có) <br />

                      + 1 bản chính gửi qua đường bưu điện (nếu có) <br />
                    </td>
                    <td style={table1}>Cập nhật đóng góp tại Facebook: 
                              <b> Quỹ Trái Tim Cho Em – Cập nhật đóng góp 24h</b></td>
                    <td style={table1}>Người đóng góp theo dõi khoản đóng góp và thông báo ngay cho 
                      Quỹ nếu chưa được cập nhật hoặc có nhầm lẫn, sai sót.</td>
                  </tr>
                </td>
              </tr>
              <tr>
                <td>Tiền mặt hiện vật</td>
                <td>
                  <tr>
                    <td style={table1}>
                      Gửi Phiếu thu kiêm thư cảm ơn của Quỹ từ thiện Trái Tim Cho Em (có dấu đỏ)
                      cho người đóng góp ngay tại nơi tiếp nhận đóng góp.<br />
                    </td>
                    <td style={table1}></td>
                    <td style={table1}></td>
                  </tr>
                </td>
              </tr>
            </tbody>
          </Table>
        </p>
      </div>

    </>

  );
};

export default HuongDanDongGop 
 
