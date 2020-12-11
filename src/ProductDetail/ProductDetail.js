import React, { useState, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import {
  Form,
  Input,
  Button,
  PageHeader
} from "antd";

import { DataContext } from "../context/data-context"
import "./ProductDetail.css"

const ProductDetail = (props) => {
  const [editMode, setEditMode] = useState(props.location.state.edit && true);
  const data = useContext(DataContext)
  const { productId } = useParams();
  const dataDetail = data.data.filter(
    (item) => item.productId === productId
  )[0];
  const history = useHistory();
  const [formData, setFormData] = useState({
    brand: dataDetail.brand,
    name: dataDetail.name,
    id: dataDetail.id,
    price: dataDetail.price,
    color: dataDetail.color,
    size: dataDetail.size
  })
  const layout = {
    labelCol: { span: 10 },
    wrapperCol: { span: 6 },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 10,
      span: 10,
    },
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setEditMode(!editMode);
    if (editMode) {
      data.setData(prevStat => {

        return {
          ...prevStat,
          data: data.data.map(item => {
            if (item.productId === productId) {
              return {
                productId: productId,
                brand: formData.brand,
                name: formData.name,
                id: formData.id,
                price: formData.price,
                color: formData.color,
                size: formData.size
              }
            } else {
              return item
            }
          })
        }
      })
    } 
  };

  const onChangeHandler = (e) => {
    setFormData(prevStat => {
      return {
        ...prevStat,
        [e.target.name]: e.target.value
      }
    })
    
  }
  return (
    <section className="productDetailSection">
      <div className="productDetailContainer">
        <PageHeader
          title="基本資料"
          onBack={() => history.goBack()}
        ></PageHeader>
        <div className="productDataContainer">
          <Form onSubmit={handleSubmit} {...layout}>
            <Form.Item label="品牌" name="brand">
              {!editMode ? (
                <span>{dataDetail.brand}</span>
              ) : (
                <Input value={formData.brand} name="brand" onChange={onChangeHandler} />
              )}
            </Form.Item>
            <Form.Item label="商品名稱" name="name">
              {!editMode ? (
                <span>{dataDetail.name}</span>
              ) : (
                <Input value={formData.name} name="name" onChange={onChangeHandler} />
              )}
            </Form.Item>
            <Form.Item label="商品編號" name="id">
              {!editMode ? (
                <span>{dataDetail.id}</span>
              ) : (
                <Input value={formData.id} name="id" onChange={onChangeHandler} />
              )}
            </Form.Item>
            <Form.Item label="商品價格" name="price">
              {!editMode ? (
                <span>{dataDetail.price}</span>
              ) : (
                <Input value={formData.price} type="number" name="price" onChange={onChangeHandler} />
              )}
            </Form.Item>
            <Form.Item label="規格一" name="color">
              {!editMode ? (
                <span>{dataDetail.color}</span>
              ) : (
                <Input value={formData.color} name="color" onChange={onChangeHandler} />
              )}
            </Form.Item>
            <Form.Item label="規格二" name="size">
              {!editMode ? (
                <span>{dataDetail.size}</span>
              ) : (
                <Input value={formData.size} name="size" onChange={onChangeHandler} />
              )}
            </Form.Item>
            <Form.Item {...tailLayout}>
              {!editMode && <Button onClick={() => history.goBack()} style={{marginRight: "1rem"}}>返回</Button>}
              <Button htmlType="submit" type="primary">
                {!editMode ? "編輯" : "儲存"}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
