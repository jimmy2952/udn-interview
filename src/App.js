import React, { useState } from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";

import LoginPage from "./Login/LoginPage";
import ProductsList from "./ProductsList/ProductsList";
import ProductDetail from "./ProductDetail/ProductDetail";
import { DataContext } from "./context/data-context";
import "./App.css";

const App = () => {
  const [data, setData] = useState({
    "id": "72922a04-4ca2-4e2d-a345-e1511b6d8b83",
    "status": "SUCCESS",
    "data": [
      { 
        "productId": "1",
        "brand": "nike",
        "name": "Air Jordan 1 Retro High OG",
        "id": "555088-070",
        "price": "6300",
        "color": "red/black/white",
        "size": "US4.0"
      },
      {
        "productId": "2",
        "brand": "nike",
        "name": "Air Jordan 1 Retro High OG",
        "id": "555088-070",
        "price": "6300",
        "color": "red/black/white",
        "size": "US4.5"
      },
      {
        "productId": "3",
        "brand": "nike",
        "name": "Air Jordan 1 Retro High OG",
        "id": "555088-070",
        "price": "6300",
        "color": "red/black/white",
        "size": "US5.0"
      },
      {
        "productId": "4",
        "brand": "nike",
        "name": "Air Jordan 1 Retro High OG",
        "id": "555088-070",
        "price": "6300",
        "color": "red/black/white",
        "size": "US5.5"
      },
      {
        "productId": "5",
        "brand": "nike",
        "name": "Air Jordan 1 Retro High OG",
        "id": "555088-070",
        "price": "6300",
        "color": "red/black/white",
        "size": "US6.0"
      },
      {
        "productId": "6",
        "brand": "nike",
        "name": "Air Jordan 1 Retro High OG",
        "id": "555088-070",
        "price": "6300",
        "color": "red/black/white",
        "size": "US6.5"
      },
      {
        "productId": "7",
        "brand": "nike",
        "name": "Air Jordan 1 Retro High OG",
        "id": "555088-070",
        "price": "6300",
        "color": "red/black/white",
        "size": "US7.0"
      },
      {
        "productId": "8",
        "brand": "nike",
        "name": "Air Jordan 1 Retro High OG",
        "id": "555088-070",
        "price": "6300",
        "color": "red/black/white",
        "size": "US7.5"
      },
      {
        "productId": "9",
        "brand": "nike",
        "name": "Air Jordan 1 Retro High OG",
        "id": "555088-070",
        "price": "6300",
        "color": "red/black/white",
        "size": "US8.0"
      },
      {
        "productId": "10",
        "brand": "nike",
        "name": "Air Jordan 1 Retro High OG",
        "id": "555088-070",
        "price": "6300",
        "color": "red/black/white",
        "size": "US8.5"
      },
      {
        "productId": "11",
        "brand": "nike",
        "name": "Air Jordan 1 Retro High OG",
        "id": "555088-070",
        "price": "6300",
        "color": "red/black/white",
        "size": "US9.0"
      },
      {
        "productId": "12",
        "brand": "nike",
        "name": "Air Jordan 1 Retro High OG",
        "id": "555088-070",
        "price": "6300",
        "color": "red/black/white",
        "size": "US9.5"
      },
      {
        "productId": "13",
        "brand": "nike",
        "name": "Air Jordan 1 Retro High OG",
        "id": "555088-070",
        "price": "6300",
        "color": "red/black/white",
        "size": "US10.0"
      },
      {
        "productId": "14",
        "brand": "nike",
        "name": "Air Jordan 1 Retro High OG",
        "id": "555088-070",
        "price": "6300",
        "color": "red/black/white",
        "size": "US10.5"
      },
      {
        "productId": "15",
        "brand": "nike",
        "name": "Air Jordan 1 Retro High OG",
        "id": "555088-070",
        "price": "6300",
        "color": "red/black/white",
        "size": "US11.0"
      },
      {
        "productId": "16",
        "brand": "nike",
        "name": "Air Jordan 1 Retro High OG Origin Story",
        "id": "555088-602",
        "price": "6300",
        "color": "red/black/white",
        "size": "US4.0"
      },
      {
        "productId": "17",
        "brand": "nike",
        "name": "Air Jordan 1 Retro High OG Origin Story",
        "id": "555088-602",
        "price": "6300",
        "color": "red/black/white",
        "size": "US4.5"
      },
      {
        "productId": "18",
        "brand": "nike",
        "name": "Air Jordan 1 Retro High OG Origin Story",
        "id": "555088-602",
        "price": "6300",
        "color": "red/black/white",
        "size": "US5.0"
      },
      {
        "productId": "19",
        "brand": "nike",
        "name": "Air Jordan 1 Retro High OG Origin Story",
        "id": "555088-602",
        "price": "6300",
        "color": "red/black/white",
        "size": "US5.5"
      },
      {
        "productId": "20",
        "brand": "nike",
        "name": "Air Jordan 1 Retro High OG Origin Story",
        "id": "555088-602",
        "price": "6300",
        "color": "red/black/white",
        "size": "US6.0"
      },
      {
        "productId": "21",
        "brand": "nike",
        "name": "Air Jordan 1 Retro High OG Origin Story",
        "id": "555088-602",
        "price": "6300",
        "color": "red/black/white",
        "size": "US6.5"
      },
      {
        "productId": "22",
        "brand": "nike",
        "name": "Air Jordan 1 Retro High OG Origin Story",
        "id": "555088-602",
        "price": "6300",
        "color": "red/black/white",
        "size": "US7.0"
      },
      {
        "productId": "23",
        "brand": "nike",
        "name": "Air Jordan 1 Retro High OG Origin Story",
        "id": "555088-602",
        "price": "6300",
        "color": "red/black/white",
        "size": "US7.5"
      },
      {
        "productId": "24",
        "brand": "nike",
        "name": "Air Jordan 1 Retro High OG Origin Story",
        "id": "555088-602",
        "price": "6300",
        "color": "red/black/white",
        "size": "US8.0"
      },
      {
        "productId": "25",
        "brand": "nike",
        "name": "Air Jordan 1 Retro High OG Origin Story",
        "id": "555088-602",
        "price": "6300",
        "color": "red/black/white",
        "size": "US8.5"
      },
      {
        "productId": "26",
        "brand": "nike",
        "name": "Air Jordan 1 Retro High OG Origin Story",
        "id": "555088-602",
        "price": "6300",
        "color": "red/black/white",
        "size": "US9.0"
      },
      {
        "productId": "27",
        "brand": "nike",
        "name": "Air Jordan 1 Retro High OG Origin Story",
        "id": "555088-602",
        "price": "6300",
        "color": "red/black/white",
        "size": "US9.5"
      },
      {
        "productId": "28",
        "brand": "nike",
        "name": "Air Jordan 1 Retro High OG Origin Story",
        "id": "555088-602",
        "price": "6300",
        "color": "red/black/white",
        "size": "US10.0"
      },
      {
        "productId": "29",
        "brand": "nike",
        "name": "Air Jordan 1 Retro High OG Origin Story",
        "id": "555088-602",
        "price": "6300",
        "color": "red/black/white",
        "size": "US10.5"
      },
      {
        "productId": "30",
        "brand": "nike",
        "name": "Air Jordan 1 Retro High OG Origin Story",
        "id": "555088-602",
        "price": "6300",
        "color": "red/black/white",
        "size": "US11.0"
      },
      {
        "productId": "31",
        "brand": "nike",
        "name": "DIOR x Air Jordan 1 Retro High OG",
        "id": "CN8607-002",
        "price": "60000",
        "color": "gray/white",
        "size": "US4.0"
      },
      {
        "productId": "32",
        "brand": "nike",
        "name": "DIOR x Air Jordan 1 Retro High OG",
        "id": "CN8607-002",
        "price": "60000",
        "color": "gray/white",
        "size": "US4.5"
      },
      {
        "productId": "33",
        "brand": "nike",
        "name": "DIOR x Air Jordan 1 Retro High OG",
        "id": "CN8607-002",
        "price": "60000",
        "color": "gray/white",
        "size": "US5.0"
      },
      {
        "productId": "34",
        "brand": "nike",
        "name": "DIOR x Air Jordan 1 Retro High OG",
        "id": "CN8607-002",
        "price": "60000",
        "color": "gray/white",
        "size": "US5.5"
      },
      {
        "productId": "35",
        "brand": "nike",
        "name": "DIOR x Air Jordan 1 Retro High OG",
        "id": "CN8607-002",
        "price": "60000",
        "color": "gray/white",
        "size": "US6.0"
      },
      {
        "productId": "36",
        "brand": "nike",
        "name": "DIOR x Air Jordan 1 Retro High OG",
        "id": "CN8607-002",
        "price": "60000",
        "color": "gray/white",
        "size": "US6.5"
      },
      {
        "productId": "37",
        "brand": "nike",
        "name": "DIOR x Air Jordan 1 Retro High OG",
        "id": "CN8607-002",
        "price": "60000",
        "color": "gray/white",
        "size": "US7.0"
      },
      {
        "productId": "38",
        "brand": "nike",
        "name": "DIOR x Air Jordan 1 Retro High OG",
        "id": "CN8607-002",
        "price": "60000",
        "color": "gray/white",
        "size": "US7.5"
      },
      {
        "productId": "39",
        "brand": "nike",
        "name": "DIOR x Air Jordan 1 Retro High OG",
        "id": "CN8607-002",
        "price": "60000",
        "color": "gray/white",
        "size": "US8.0"
      },
      {
        "productId": "40",
        "brand": "nike",
        "name": "DIOR x Air Jordan 1 Retro High OG",
        "id": "CN8607-002",
        "price": "60000",
        "color": "gray/white",
        "size": "US8.5"
      },
      {
        "productId": "41",
        "brand": "nike",
        "name": "DIOR x Air Jordan 1 Retro High OG",
        "id": "CN8607-002",
        "price": "60000",
        "color": "gray/white",
        "size": "US9.0"
      },
      {
        "productId": "42",
        "brand": "nike",
        "name": "DIOR x Air Jordan 1 Retro High OG",
        "id": "CN8607-002",
        "price": "60000",
        "color": "gray/white",
        "size": "US9.5"
      },
      {
        "productId": "43",
        "brand": "nike",
        "name": "DIOR x Air Jordan 1 Retro High OG",
        "id": "CN8607-002",
        "price": "60000",
        "color": "gray/white",
        "size": "US10.0"
      },
      {
        "productId": "44",
        "brand": "nike",
        "name": "DIOR x Air Jordan 1 Retro High OG",
        "id": "CN8607-002",
        "price": "60000",
        "color": "gray/white",
        "size": "US10.5"
      },
      {
        "productId": "45",
        "brand": "nike",
        "name": "DIOR x Air Jordan 1 Retro High OG",
        "id": "5CN8607-002",
        "price": "60000",
        "color": "gray/white",
        "size": "US11.0"
      },
      {
        "productId": "46",
        "brand": "nike",
        "name": "WMNS Off-White x Air Jordan 4 Retro「Sail」",
        "id": "CV9388-100",
        "price": "6000",
        "color": "SAIL/MUSLIN-WHITE-BLACK",
        "size": "US4.0"
      },
      {
        "productId": "47",
        "brand": "nike",
        "name": "WMNS Off-White x Air Jordan 4 Retro「Sail」",
        "id": "CV9388-100",
        "price": "6000",
        "color": "SAIL/MUSLIN-WHITE-BLACK",
        "size": "US4.5"
      },
      {
        "productId": "48",
        "brand": "nike",
        "name": "WMNS Off-White x Air Jordan 4 Retro「Sail」",
        "id": "CV9388-100",
        "price": "6000",
        "color": "SAIL/MUSLIN-WHITE-BLACK",
        "size": "US5.0"
      },
      {
        "productId": "49",
        "brand": "nike",
        "name": "WMNS Off-White x Air Jordan 4 Retro「Sail」",
        "id": "CV9388-100",
        "price": "6000",
        "color": "SAIL/MUSLIN-WHITE-BLACK",
        "size": "US5.5"
      },
      {
        "productId": "50",
        "brand": "nike",
        "name": "WMNS Off-White x Air Jordan 4 Retro「Sail」",
        "id": "CV9388-100",
        "price": "6000",
        "color": "SAIL/MUSLIN-WHITE-BLACK",
        "size": "US6.0"
      },
      {
        "productId": "51",
        "brand": "nike",
        "name": "WMNS Off-White x Air Jordan 4 Retro「Sail」",
        "id": "CV9388-100",
        "price": "6000",
        "color": "SAIL/MUSLIN-WHITE-BLACK",
        "size": "US6.5"
      },
      {
        "productId": "52",
        "brand": "nike",
        "name": "WMNS Off-White x Air Jordan 4 Retro「Sail」",
        "id": "CV9388-100",
        "price": "6000",
        "color": "SAIL/MUSLIN-WHITE-BLACK",
        "size": "US7.0"
      },
      {
        "productId": "53",
        "brand": "nike",
        "name": "WMNS Off-White x Air Jordan 4 Retro「Sail」",
        "id": "CV9388-100",
        "price": "6000",
        "color": "SAIL/MUSLIN-WHITE-BLACK",
        "size": "US7.5"
      },
      {
        "productId": "54",
        "brand": "nike",
        "name": "WMNS Off-White x Air Jordan 4 Retro「Sail」",
        "id": "CV9388-100",
        "price": "6000",
        "color": "SAIL/MUSLIN-WHITE-BLACK",
        "size": "US8.0"
      },
      {
        "productId": "55",
        "brand": "nike",
        "name": "WMNS Off-White x Air Jordan 4 Retro「Sail」",
        "id": "CV9388-100",
        "price": "6000",
        "color": "SAIL/MUSLIN-WHITE-BLACK",
        "size": "US8.5"
      },
      {
        "productId": "56",
        "brand": "nike",
        "name": "WMNS Off-White x Air Jordan 4 Retro「Sail」",
        "id": "CV9388-100",
        "price": "6000",
        "color": "SAIL/MUSLIN-WHITE-BLACK",
        "size": "US9.0"
      },
      {
        "productId": "57",
        "brand": "nike",
        "name": "WMNS Off-White x Air Jordan 4 Retro「Sail」",
        "id": "CV9388-100",
        "price": "6000",
        "color": "SAIL/MUSLIN-WHITE-BLACK",
        "size": "US9.5"
      },
      {
        "productId": "58",
        "brand": "nike",
        "name": "WMNS Off-White x Air Jordan 4 Retro「Sail」",
        "id": "CV9388-100",
        "price": "6000",
        "color": "SAIL/MUSLIN-WHITE-BLACK",
        "size": "US10.0"
      },
      {
        "productId": "59",
        "brand": "nike",
        "name": "WMNS Off-White x Air Jordan 4 Retro「Sail」",
        "id": "CV9388-100",
        "price": "6000",
        "color": "SAIL/MUSLIN-WHITE-BLACK",
        "size": "US10.5"
      },
      {
        "productId": "60",
        "brand": "nike",
        "name": "WMNS Off-White x Air Jordan 4 Retro「Sail」",
        "id": "CV9388-100",
        "price": "6000",
        "color": "SAIL/MUSLIN-WHITE-BLACK",
        "size": "US11.0"
      }
    ]
  })
  return (
    <DataContext.Provider
      value={{
        data: data.data,
        setData: setData
      }}
    >
      <BrowserRouter>
        <Switch>
          <Route path="/products-list/:productId" component={ProductDetail} />
          <Route exact path="/products-list" component={ProductsList} />
          <Route exact path="/" component={LoginPage} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </DataContext.Provider>
  );
};

export default App;
