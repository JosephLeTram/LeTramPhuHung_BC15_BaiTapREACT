// import logo from "./logo.svg";
// import Nav from "./components/Nav";
// import Card from "./components/Card";
// import Profile from "./components/Profile";
// import BaiTapComponent from "./components/BaiTapComponent/BaiTapComponent";
import "./App.css";
import Homework from "./Homework/BaiTapReact_Buoi1/Homework";
import Databinding from "./databinding/Databinding";
import HandleEvent from "./handleEvent/HandleEvent";
import StateDemo from "./state/StateDemo";
import Style from "./Style/Style";
import Example from "./state/Example";
import BaiTapChonXe from "./Homework/BaiTapReact_Buoi2/BaiTapChonXe";
import RenderWithMap from "./RenderWithMap/RenderWithMap";
import DemoProps from "./Props/DemoProps/DemoProps";
import BaiTapThuKinh from "./Homework/BaiTapReact_Glasses/BaiTapThuKinh";
import DanhSachSanPham from "./Props/DanhSachSanPham/DanhSachSanPham";
import BaiTapGioHangRedux from "./DemoRedux/BaiTapGioHangRedux/BaiTapGioHangRedux";
import BaiTapGameXucXac from "./Homework/BaiTapRedux_Dice/BaiTapGameXucXac";
import BaiTapQuanLyNguoiDung from "./ReactForm/BaiTapQuanLyNguoiDung";
import LifeCycle from "./LifeCycle/LifeCycle";
import BaiTapGameOanTuTi from "./Homework/BaiTapRedux_OanTuTi/BaiTapGameOanTuTi";
import BaiTapDatVePhim from "./Homework/BaiTapRedux_DatVePhim/BaiTapDatVePhim";

import { BrowserRouter, Route, Switch, Router } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import HeaderHome from "./components/HeaderHome/HeaderHome";
import DemoUseState from "./pages/Hooks/DemoUseState";
import BaiTapUseState from "./pages/Hooks/BaiTapUseState";
import DemoUseEffect from "./pages/Hooks/DemoUseEffect";
import DemoUseMemo from "./pages/Hooks/DemoUseMemo/DemoUseMemo";
import DemoUseRef from "./pages/Hooks/UseRef/DemoUseRef";
import DemoHookRedux from "./pages/Hooks/DemoHookRedux/DemoHookRedux";
import ClassApi from "./pages/DemoApi/ClassApi";
import FuncApi from "./pages/DemoApi/FuncApi";
import MiddleWareRedux from "./pages/DemoApi/MiddleWareRedux";
import Login from "./pages/Hooks/Login";
import Register from "./pages/Hooks/Register";
import Detail from "./pages/Detail";

// Cấu hình history
import { createBrowserHistory } from "history";
export const history = createBrowserHistory();

function App() {
  return (
    <BrowserRouter>
      {/* <div> */}
      {/* <Nav />
        <Card />
        <Profile /> */}
      {/* <BaiTapComponent /> */}
      {/* <Homework /> */}
      {/* <Databinding />
        <HandleEvent /> */}
      {/* <StateDemo /> */}
      {/* <Style /> */}
      {/* <Example /> */}
      {/* React Buổi 2 - Bài tập chọn màu xe hơi */}
      {/* <BaiTapChonXe /> */}
      {/* <RenderWithMap /> */}
      {/* <DemoProps /> */}
      {/* React Buổi 5 - Bài Tập Thử Kính online */}
      {/* <BaiTapThuKinh /> */}
      {/* <DanhSachSanPham /> */}
      {/* <BaiTapGioHangRedux /> */}
      {/* <BaiTapGameXucXac /> */}
      {/* React Buổi 8 */}
      {/* <BaiTapQuanLyNguoiDung /> */}
      {/* <LifeCycle /> */}
      {/* <BaiTapGameOanTuTi /> */}
      {/* <BaiTapDatVePhim /> */}
      {/* </div> */}

      {/* React - Router - Hooks */}
      {/*  Cách 2 để render ra nội dung trên trang */}
      {/* <Route path="/demo" render ={(propsRoute) =>{
        return <div>

        </div>
      }}/> */}

      {/* Cách 1 */}
      <HeaderHome />
      <Switch>
        {/* Trang chủ được load mặc định */}
        <Route exact path="/" component={HomePage} />
        {/* Những trang khác */}
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/usestate" component={DemoUseState} />
        <Route exact path="/baitapusestate" component={BaiTapUseState} />
        <Route exact path="/demouseeffect" component={DemoUseEffect} />
        <Route exact path="/demousememo" component={DemoUseMemo} />
        <Route exact path="/demouseref" component={DemoUseRef} />
        <Route exact path="/demohookredux" component={DemoHookRedux} />
        <Route exact path="/democlassapi" component={ClassApi} />
        <Route exact path="/demofuncapi" component={FuncApi} />
        <Route exact path="/middleware" component={MiddleWareRedux} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/detail/:maPhim" component={Detail} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
