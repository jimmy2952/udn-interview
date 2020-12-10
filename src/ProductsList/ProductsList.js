import React, { useState } from "react";
import { AutoComplete, Button, Table } from "antd";
import "./ProductsList.css";
import data from "../data.json";

const productsIdData = data.data.map((item) => {
  return item.id;
});

const productsNameData = data.data.map((item) => {
  return item.name;
});

const columns = [
  {
    title: '品牌',
    dataIndex: 'brand',
  },
  {
    title: '商品名稱',
    dataIndex: 'name',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.name.split("")[0] > b.name.split("")[0] ? -1 : 1,
  },
  {
    title: '商品編號',
    dataIndex: 'id',
    sorter: (a, b) => a.id.split("")[0] - b.id.split("")[0] ? -1 : 1,
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: '商品價格',
    dataIndex: 'price',
    sorter: (a, b) => a.price - b.price,
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: '規格一',
    dataIndex: 'color',
    sorter: (a, b) => a.color.length - b.color.length,
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: '規格二',
    dataIndex: 'size',
    sorter: (a, b) => a.size.split("US")[1] - b.size.split("US")[1],
    sortDirections: ['descend', 'ascend'],
  },
];

const dataExample = data.data

const ProductsList = (props) => {
  const [idData, setIdData] = useState({
    value: "",
    dataSource: [],
  });
  const [nameData, setNameData] = useState({
    value: "",
    dataSource: [],
  })

  const onSearchId = (searchText) => {
    setIdData((prevStat) => {
      return {
        ...prevStat,
        dataSource: !searchText
        ? []
        : productsIdData.filter((item) => item.match(searchText)).slice(0, 3),
      }
      
    });
  };

  const onSearchName = (searchText) => {
    setNameData((prevStat) => {
      return {
        ...prevStat,
        dataSource: !searchText
        ? []
        : productsNameData.filter((item) => item.match(searchText)).slice(0, 3),
      }
    });
  };

  const idChangeHandler = (value) => {
    setIdData({ value });
  };

  const nameChangeHandler = value => {
    setNameData({ value })
  }

  const resetHandler = () => {
    setIdData({ value: "" });
    setNameData({ value: "" })
  };
  return (
    <section>
      <div class="searchContainer">
        <div class="searchInputContainer">
          <span>商品編號</span>
          <AutoComplete
            value={idData.value}
            dataSource={idData.dataSource}
            style={{ width: "40vw" }}
            onSearch={onSearchId}
            placeholder="請輸入"
            onChange={idChangeHandler}
          />
          <span>商品名稱</span>
          <AutoComplete
            value={nameData.value}
            dataSource={nameData.dataSource}
            style={{ width: "40vw" }}
            onSearch={onSearchName}
            placeholder="請輸入"
            onChange={nameChangeHandler}
          />
        </div>
        <div class="buttonContainer">
          <Button onClick={resetHandler}>重設</Button>
          <Button type="primary" icon="search">
            搜尋
          </Button>
        </div>
      </div>
      <div className="dataContainer">
        <div className="description">
          <p>{`總資料筆數共 ${dataExample.length} 筆`}</p>
        </div>
        <div className="tableContainer">
        <Table 
          columns={columns} 
          dataSource={dataExample}
          pagination={{ showSizeChanger: true, pageSizeOptions: ["10", "20", "40", "100"], showQuickJumper: true, position: "top" }}
        />
        </div>
      </div>
    </section>
  );
};

export default ProductsList;
