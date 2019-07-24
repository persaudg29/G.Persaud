// @TODO: YOUR CODE HERE!
//We need to create a d3 visualization which reads the .csv file, selects the relevant data, and binds this data to the .html file

console.log("Initiated the app.js")

//The first step is to define the artboard (the blank svg space where the graph will go)
var artboard_width = 900 //units are measured in pixels
var artboard_height = 500

//The margins need to be defined because the graph itself will not occupy the entire 900x500 area
//We are defining an array (var margin) because we can use margin.top/.bottom/etc. to easily call these values later on
var margin = {
    top: 20,
    right: 100,
    bottom: 70,
    left: 100
};

//The actual chart is going to occupy an area inside the svg which will be shifted to the center based on what the top/bottom/right/left margins are
//Visualization height and width are the physical dimensions that the chart will occupy within the svg object
var viz_width = artboard_width - margin.left - margin.right; //fits the visualization horizontally
var viz_height = artboard_height - margin.top - margin.bottom; //fits the visualization vertically

//We need to create the container (the lines of code that will be inserted and bound into the HTML)
//We also need to utilize the attributes transform/translate to get the chart properly centered
var svg = d3
    .select('#scatter') //The scatter tag is within the html and this is where we will bind our data
    .append('svg') //Adding an svg tag into the html code
    .attr('width', artboard_width) //attribute which references the width of the artboard defined in line 7
    .attr('height', artboard_height) //attribute containing the height of the artboard defined in line 8
    .append('g') //binding all of this code to the html
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')'); //centering the chart based on margins defined in lines 12-17

var ar2 = [];

var containerchart = svg.append("g") //This variable is going to contain all the entire chart and all of its parameters -- The <g> SVG element is a container used to group other SVG elements
d3.csv("/assets/data/CHDB_data_city_all v6_0.csv") //Because D3 Version 5.5 defines one singular function we do not need to add the function for errors until later
    .then(function (raw_data) { //.then transforms the data from objects to js array 
        console.log(raw_data)
        //we need to loop through the data using i as the index 
        for (var i = 0; i < raw_data.length; i++) { //defining the function: i is initially set to 0 and cannot exceed the amount of entries in the raw data, the value of i increases as the function loops 
            console.log(i, raw_data[i].state_abbr, raw_data[i].city_name, raw_data[i].metric_name); //prints these entries from the array to console
            console.log(i, raw_data[i].group_name, raw_data[i].est, raw_data[i].data_yr_type); //prints these entries from the array to console 
            var arr = [
                raw_data[i].state_abbr,
                raw_data[i].city_name,
                raw_data[i].metric_name,
                raw_data[i].group_name,
                raw_data[i].est,
                raw_data[i].data_yr_type
            ]
            ar2.push(arr)
        }
        console.log(ar2);
    // var absent = ar2.filter( d => d(2) ==== "Absenteeism")
    // console.log(absent);

        // ar2.filter( d => d[2] === "Absenteeism" && d[3] !== "total population")











        // //We need to create two separate arrays in which we store the values taken from the .csv file
        // raw_data.forEach(function(data) { //Looping through all of the data -- forEach() calls a function once for each element in an array, in order
        //     data.metric = +data.metric_name; //Every time the forEach() is applied to an item in the "obesity" column, it adds the value to the array data.obesity
        //     data.state_abbr = +data.state_abbr;
        //     data.group_name = +data.group_name;
        //     data.city = +data.city_name;
        //     data.est = +data.est; //same as above except we are adding each item from the "income" column to the income array
        //     console.log(data.state_abbr, data.city_name, data.metric_name, data.group_name, data.est) //logs these values to the console
        //   })

        // var life_exp = raw_data.filter(function (life) {
        //     return life.metric_name == “life expectancy”;
        // });




        // if (ar2[i][2]=="A"){

        // }

    //     //Now that we have our data, we need to create the scatter plot using the data
    //     //We need to set: height/width/axis/domain scaling and tooltips before generating the actual plot

    //     //We need to set the y scale so that it is evenly scaled up to the maximum chart height
    //     var y_scale = d3.scaleLinear().range([viz_height, 0]);
    //     //We need to set the x scale so that it is evenly scaled up to the maximum chart width
    //     //We need to scale the domain 
    //     var x_scale = d3.scaleLinear().range([0, viz_width]);

    //     x_scale.domain([20, //The first argument in xlinearscale.domain ([20, ] sets the minimum value on the x-axis 
    //         d3.max(raw_data, function (data) {
    //             return +data.state_abbr * 1.02;
    //         }),
    //     ]);


    //     //We need to define the axes 
    //     var x_axis = d3.axisBottom(x_scale); //.axisBottom defines the x-axis and scales it according to the scaling defined in line 55
    //     var y_axis = d3.axisLeft(y_scale); //.axisLeft defines the y-axis and scales it according to the scaling defined in line 57


    //     //Scaling the range
    //     y_scale.domain([0, //This first argument [0, ] sets the minimum of y_scale, where the y_axis begins
    //         d3.max(raw_data, function (data) {
    //             return +data.est * 1.1;
    //         }),
    //     ]);

    //     //We need to create the tool tips
    //     var Ttip = d3
    //         .tip()
    //         .attr('class', 'tooltip')
    //         // .offset([40, 25]) 
    //         .offset([0, 0]) //offset arguments ([y up/down, x left/right])
    //         .html(function (data) { //This function converts the data from string values to numeric values
    //             var state = data.state_abbr;
    //             var metric = +data.metric;
    //             var est = +data.est;
    //             return (
    //                 state + '<br> Average BMI Value: ' + obesity + '<br> Average Income: $' + income
    //             );
    //         });
    //     containerchart.call(Ttip) //.call is the final call to the svg to actually draw it

    //     //We need to now create the chart itself
    //     containerchart
    //         .selectAll('circle') //when you use .selectAll it will create the element (in this case the circle) even if the tag does not exist in the html (DOM)
    //         .data(raw_data) //we are taking all of the raw data and binding it to the DOM
    //         .enter()
    //         .append('circle') //we are adding a circle on the visualization for each set of data points
    //         .attr('cx', function (data, index) {
    //             return x_scale(data.state_abbr); //the x_scale will be scaled relative to the values in obesity
    //         })
    //         .attr('cy', function (data, index) {
    //             return y_scale(data.est); //the y_scale will be scaled relative to the values in income
    //         })
    //         .attr('r', '16')
    //         .attr('fill', 'green')
    //         .attr('fill-opacity', 0.6)
    //         .on("mouseover", function (data) {
    //             Ttip.show(data, this);
    //         });  //remember to remove ;
    //     // .on("mouseout", function(data, index) { //on mouseout, creating a function that parses the data that is bound to the DOM
    //     //     Ttip.hide(data);
    //     // });

    //     containerchart
    //         .append('g')
    //         .attr('transform', `translate(0, ${viz_height})`)
    //         .call(x_axis);

    //     containerchart.append('g').call(y_axis); //.call is actually drawing the axis

    //     svg.selectAll(".dot")
    //         .data(raw_data)
    //         .enter()
    //         .append("text")
    //         .text(function (data) { return data.abbr; }) //This will make it so that the state abbreviation will show up inside of each of the circles
    //         .attr('x', function (data) {
    //             return x_scale(data.obesity);
    //         })
    //         .attr('y', function (data) {
    //             return y_scale(data.income);
    //         })
    //         .attr("font-size", "10px")
    //         .attr("fill", "black")
    //         .style("text-anchor", "middle");

    //     containerchart
    //         .append('text')
    //         .attr('transform', 'rotate(-90)')
    //         .attr('y', 0 - margin.left + 10)
    //         .attr('x', 0 - viz_height / 2)
    //         .attr('dy', '1em')
    //         .attr('class', 'axisText')
    //         .text('Average Income by State');

    //     containerchart
    //         .append("text")
    //         .attr("transform", `translate(${viz_width / 2}, ${viz_height + margin.top + 30})`)
    //         .attr("class", "axisText")
    //         .text("Average BMI");
    })
