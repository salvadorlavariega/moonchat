import React from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
  
     donutchartTrack:{
        fill: 'transparent',
        stroke: '#DAE2E5',
        strokeWidth: 26
      },
      
      donutchartIndicator: {
        fill: 'transparent',
        stroke: '#009688',
        strokeWidth: 26,
        strokeDasharray: '0 10000',
        transition: 'stroke-dasharray .3s ease'
      },
      donutchartIndicator2: {
        fill: 'transparent',
        strokeWidth: 26,
        strokeDasharray: '0 10000',
        transition: 'stroke-dasharray .3s ease'
      },
      
      donutchart :{
        margin: '0 auto',
        borderRadius: '50%',
        display: 'block'
      },
      
      donutchartText:{
        fontFamily: 'sans-serif',
        fill: '#a9a9a9'
      },

      donutchartTextVal:{
        fontSize:'22px'
      },

      donutcharTextPercent:{
        fontSize:'18px',
        fill: '#000'
      },

      donutchartTextLabel:{
        fontSize:'15px',
        fontWeight:'700'
      },
      donutchartTextLabelTotal:{
        fontSize:'20px',
        fill: '#000'
      }, 
      body:{
        padding:'40px',
        fontFamily:'Roboto',
        textAlign:'center'
      },
      
      input:{
        padding:'8px 10px',
        borderRadius:'4px',
        border:'1px solid #ddd',
        width:'154px'
      }
});

class DonutChart extends React.Component {
     
    constructor(props) {
        super(props); 
        this.state =  {
            arrValues:[],
            value:0,
            valuelabel:'REVENUE',
            size:200,
            strokewidth:10
        };
    }
   
    render() {
      let start = 270;
      const { classes } = this.props;
      const halfsize = (this.state.size * 0.5); 
      const radius = halfsize - (this.state.strokewidth * 0.5);
      const circumference = 2 * Math.PI * radius;
      const trackstyle = {strokeWidth: this.state.strokewidth};
      const rotateval = 'rotate('+start+','+halfsize+','+halfsize+')';
      const total = this.props.value.reduce((a, b) => a + b, 0);
      const percentages = this.props.value.map((a) => (a*100)/total, 0);
       
      const circles = percentages.map((percentage, index) => {
        
        
        const rotateval = 'rotate('+start+','+halfsize+','+halfsize+')';
        start = start + 360*(percentage/100);
        const strokeval = ((percentage * circumference) / 100);
        const dashval = (strokeval + ' ' + circumference);
        const indicatorstyle = {stroke:this.props.colors[index],strokeWidth: this.state.strokewidth, strokeDasharray: dashval}
        return <circle 
          key={index+1}
          r={radius} 
          cx={halfsize} 
          cy={halfsize} 
          transform={rotateval} 
          style={indicatorstyle} 
          className={classes.donutchartIndicator2}
        />
      }
    );
    
      return (
        <svg width={this.state.size} height={this.state.size} className={classes.donutchart}>
          <circle r={radius} cx={halfsize} cy={halfsize} transform={rotateval} style={trackstyle} className={classes.donutchartTrack}/>
          {circles}

          <text className={classes.donutchartText} x={halfsize} y={halfsize} style={{textAnchor:'middle', backgroundColor:'red'}} >
              <tspan className={classes.donutchartTextLabel} x={halfsize} y={halfsize-10}>
                {this.props.name}
              </tspan>
               
          </text>
          <text className={classes.donutchartText} x={halfsize+10} y={halfsize} style={{textAnchor:'middle', backgroundColor:'red'}} >
              <tspan className={classes.donutchartTextLabelTotal} x={halfsize} y={halfsize+10}>
                {total.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}
              </tspan>
              <tspan className={classes.donutcharTextPercent}>{this.props.simbol}</tspan>
          </text>
           
        </svg>
      );
    }
  }

DonutChart.propTypes = {
    value: PropTypes.array,        // value the chart should show
    valuelabel:  PropTypes.string,   // label for the chart
    size: PropTypes.number,         // diameter of chart
    strokewidth: PropTypes.number,   // width of chart line
    name: PropTypes.string,
    simbol: PropTypes.string
};


export default withStyles(styles)(DonutChart);