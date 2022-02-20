import React from "react";

import { Button, Card, CardBody, FormGroup, Input, Label } from "reactstrap";
import { ReactstrapInput } from "reactstrap-formik";
import { Field, Formik, FastField, Form } from "formik";
import * as Yup from "yup";
import DonatePostApi from "../api/DonatePostApi";
import donatorApi from "../api/DonatorApi";
import showList from "../layouts/showList";

// const showNotification = (title, message) => {
//   const options = {
//     timeOut: 3000,
//     showCloseButton: false,
//     progressBar: false,
//     position: "top-right"
//   };

//   // show notification
//   toastr.error(title, message, options);
// }

class DongGop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listDetail: [],
    };
  }

  getListTile = async () => {
    try {
      const listTitle = await DonatePostApi.getListPost();
      this.setState({
        listDetail: listTitle,
      });
    } catch (error) {}
  };

  componentDidMount() {
    this.getListTile();
  }

  render() {
    const list = this.state.listDetail.map((a) => (
      <option key={a.id} value={a.id}>
        {a.title}
      </option>
    ));
    // const list_id = this.state.listDetail.map((a) => (
    //   <option key={a.id}>{a.id}</option>
    // ));
    console.log(list);
    // console.log(list_id);
    return (
      <>
        <div>
          <h1 style={{ margin: "30px 0px 0px 40px" }} className="h2">
            ĐÓNG GÓP
          </h1>
        </div>

        <Formik
          initialValues={{
            fullName: "",
            email: "",
            address: "",
            phone: "",
            post: [],
            moneyDonation: "",
            message: "",
          }}
          validationSchema={Yup.object({
            fullName: Yup.string()
              .min(5, "Must be between 6 to 50 characters")
              .max(50, "Must be less than 50 characters or equal")
              .required("Required"),

            email: Yup.string()
              .required("Required")
              .max(50, "Must be between 6 to 50 characters")
              .min(5, "Must be between 6 to 50 characters")
              .email("Invalid email address"),
            // .test('checkUniqueEmail', 'This email is already registered.', async email => {
            //   // call api
            //   const isExists = await UserApi.existsByEmail(email);
            //   return !isExists;
            // }),

            address: Yup.string()
              .required("Required")
              .max(100, "Max 100 numbers"),

            phone: Yup.string().required("Required").max(20, "Max 20 numbers"),

            moneyDonation: Yup.string().required("Required"),
            //.min(100, 'Min 100 đồng'),
          })}
          onSubmit={async (values) => {
            console.log(
              values.fullName,
              values.email,
              values.address,
              values.phone,

              values.moneyDonation,
              values.post,
              values.message
            );
            try {
              // call api
              await donatorApi.create(
                values.fullName,
                values.email,
                values.address,
                values.phone,
                values.moneyDonation,
                values.post,
                values.message
              );
              alert("Quyên góp thành công");
              // open model
              // setOpenModal(true);
              // setEmail(values.email);
            } catch (error) {
              // redireact page error server
              console.log(error);
            }
          }}
          validateOnChange={false}
          validateOnBlur={false}
        >
          {({ isSubmitting }) => (
            <Card>
              <CardBody>
                <div className="m-sm-4" style={{ width: "700px" }}>
                  <Form>
                    {/* Fullname */}
                    <FormGroup>
                      <FastField
                        label="Họ và tên người đóng góp"
                        type="text"
                        name="fullName"
                        placeholder="Nhập họ tên"
                        component={ReactstrapInput}
                      />
                    </FormGroup>

                    {/* Email */}
                    <FormGroup>
                      <FastField
                        label="Email"
                        type="email"
                        name="email"
                        placeholder="Nhập email"
                        component={ReactstrapInput}
                      />
                    </FormGroup>

                    <FormGroup>
                      <FastField
                        label="Địa chỉ"
                        type="text"
                        name="address"
                        placeholder="Nhập địa chỉ"
                        component={ReactstrapInput}
                      />
                    </FormGroup>

                    {/* điện thoại */}
                    <FormGroup>
                      <FastField
                        label="Điện thoại"
                        type="number"
                        name="phone"
                        placeholder="Nhập số điện thoại"
                        component={ReactstrapInput}
                      />
                    </FormGroup>

                    {/* Hình thức đóng góp */}
                    <FormGroup>
                      <Label>Hình thức đóng góp:</Label>
                      <br />
                      Chuyển tiền online
                    </FormGroup>

                    {/* số tiền quyên góp */}
                    <FormGroup>
                      <FastField
                        label="Số tiền quên góp"
                        type="number"
                        name="moneyDonation"
                        placeholder="Ví dụ: 20 USD"
                        component={ReactstrapInput}
                      />
                    </FormGroup>

                    {/* Yêu cầu sử dụng vào */}
                    <FormGroup>
                      <Label>Yêu cầu sử dụng vào</Label>

                      <Field as="select" name="post">
                        {/* {list} */}
                        <option value="1">
                          Chung tay đóng góp để hoàn thiện nội thất “Nhà Bầu
                          Trăng Khuyết” chăm sóc những mẹ bầu đơn thân và em bé
                          sơ sinh
                        </option>
                        <option value="2">
                          Cùng chung tay nâng cấp điểm trường cho 100 trẻ mầm
                          non dân tộc Chăm
                        </option>
                        <option value="3">
                          Chung tay phục hồi mảng xanh, phủ xanh đất trống đồi
                          trọc miền Trung, Quảng Trị
                        </option>
                        <option value="4">
                          Dự án Xanh Hà Nội trồng 500 cây xanh đô thị vì một Hà
                          Nội không nóng bức
                        </option>
                        <option value="5">
                          Chung tay gỡ bỏ 19 năm đeo tã cho cô bé nghèo hiếu học
                        </option>
                        <option value="6">
                          Cùng Tuổi Trẻ “Đồng hành cùng người Thầy”
                        </option>
                        <option value="7">
                          Gây quỹ 4 ca phẫu thuật kỷ niệm hành trình 40 năm chữa
                          lành nụ cười của Operation Smile
                        </option>
                      </Field>

                      {/* <Input type="select">{list}</Input> */}
                    </FormGroup>

                    {/* Lời nhắn */}
                    <FormGroup>
                      <FastField
                        label="Lời nhắn"
                        type="text"
                        name="message"
                        placeholder="Nhập lời nhắn của bạn"
                        component={ReactstrapInput}
                      />
                    </FormGroup>

                    {/* submit */}
                    <div className="mt-3">
                      <Button
                        type="submit"
                        color="primary"
                        size="lg"
                        disabled={isSubmitting}
                      >
                        Đóng góp
                      </Button>
                    </div>
                  </Form>
                </div>
              </CardBody>
            </Card>
          )}
        </Formik>
      </>
    );
  }
}

export default DongGop;
