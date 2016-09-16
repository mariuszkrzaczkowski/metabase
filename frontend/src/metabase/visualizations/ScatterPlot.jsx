import React, { Component, PropTypes } from "react";

import LineAreaBarChart from "./components/LineAreaBarChart.jsx";

export default class ScatterPlot extends LineAreaBarChart {
    static displayName = "Scatter";
    static identifier = "scatter";
    static iconName = "line";
    static noun = "scatter plot";
}
