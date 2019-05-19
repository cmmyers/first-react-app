import React, {Component} from 'react';
import * as d3 from "d3";

class BarChart extends Component {
  componentDidMount() {
    this.drawChart();
  }

  drawChart() {
    const data = this.props.data;

    const svg = d3.select("body")
    .append("svg")
    .attr("width", this.props.width)
    .attr("height", this.props.height)
    .style("margin-left", 100);

    const g = svg.append("g")
    g.append("circle")
      .attr("r", 150)
      .attr("transform",
        "translate(155, 155)")
  }

  render(){
    return <div id={"#" + this.props.id}></div>
  }
}

export default BarChart;
