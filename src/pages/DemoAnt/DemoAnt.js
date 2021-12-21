import React from "react";
import { DatePicker } from "antd";
import { Button } from "antd";
import DemoCarousel from "../../components/DemoCarousel/DemoCarousel";

export default function DemoAnt(props) {
  return (
    <div className="container">
      <h3>Demo Ant Design UI</h3>
      <DatePicker />
      <Button type="primary" className="ml-3">
        Add user
      </Button>
      <DemoCarousel />
    </div>
  );
}
