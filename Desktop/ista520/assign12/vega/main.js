function pop_le_spec() {
    var h1 = vh()
        .width(600)
        .height(600)
        .data([{ "name": "country",
                 "url": "data/pop_life.json"}]);
                 
    function nice(o) { return o.zero(false).round(true).nice(true); };
    
    h1.scale().name("x").domain({"data": "country", "field": "Population"})
        .range("width").call(nice);
        
    h1.scale().name("y").domain({"data": "country", "field": "LifeExpectancy"})
        .range("height").call(nice);
        
       
    h1.axes("x").orient("bottom").scale("x").title("Population");
    
    h1.axes("y").orient("left").scale("y").title("Life Expectancy");
    
    h1.mark().type("line")
        .from({"data": "country"})
        .enter({
          "interpolate": {"value": "cardinal"},
          "x": {"scale": "x", "field": "Population"},
          "y": {"scale": "y", "field": "LifeExpectancy"},
          "stroke": {"value": "Blue"},
          "strokeWidth": {"value": 1}
        });
        
    h1.mark().type("symbol")
        .from({"data": "country"})
        .enter({
          "x": {"scale": "x", "field": "Population"},
          "y": {"scale": "y", "field": "LifeExpectancy"},
          "fill": {"value": "#fff"},
          "stroke": {"value": "#000"},
          "strokeWidth": {"value": 1},
          "size": {"value": 100}})
          .update({"fill": {"value": "steelblue"}})
          .hover({"fill": {"value": "red"}});
         
        
    return h1;
}

function continent_SA_spec() {
    var h2 = vh()
        .width(1200)
        .height(600)
        .data([{ "name": "pop",
                 "url": "data/continent_SA.json"}]);
                 
    function nice(o) { return o.zero(false).round(true).nice(true); };
    
    h2.scale().name("x").domain({"data": "pop", "field": "Continent"})
        .range("width").call(nice);
        
    h2.scale().name("y").domain({"data": "pop", "field": "SurfaceArea"})
        .range("height").call(nice);
        
       
    h2.axes("x").orient("bottom").scale("x").title("Continent");
    
    h2.axes("y").orient("left").scale("y").title("Surface Area");
    
    h2.mark().type("line")
        .from({"data": "pop"})
        .enter({
          "interpolate": {"value": "cardinal"},
          "x": {"scale": "x", "field": "Continent"},
          "y": {"scale": "y", "field": "SurfaceArea"},
          "stroke": {"value": "Blue"},
          "strokeWidth": {"value": 1}
        });
        
    h2.mark().type("symbol")
        .from({"data": "pop"})
        .enter({
          "x": {"scale": "x", "field": "Continent"},
          "y": {"scale": "y", "field": "SurfaceArea"},
          "fill": {"value": "#fff"},
          "stroke": {"value": "#000"},
          "strokeWidth": {"value": 1},
          "size": {"value": 100}})
          .update({"fill": {"value": "steelblue"}})
          .hover({"fill": {"value": "red"}});
         
        
    return h2;
}

function gnp_pop_spec() {
    var h3 = vh()
        .width(1200)
        .height(600)
        .data([{ "name": "sap",
                 "url": "data/gnp_pop.json"}]);
                 
    function nice(o) { return o.zero(false).round(true).nice(true); };
    
    h3.scale().name("x").domain({"data": "sap", "field": "GNP"})
        .range("width").call(nice);
        
    h3.scale().name("y").domain({"data": "sap", "field": "Population"})
        .range("height").call(nice);
        
       
    h3.axes("x").orient("bottom").scale("x").title("GNP");
    
    h3.axes("y").orient("left").scale("y").title("Population");
    
    h3.mark().type("line")
        .from({"data": "sap"})
        .enter({
          "interpolate": {"value": "cardinal"},
          "x": {"scale": "x", "field": "GNP"},
          "y": {"scale": "y", "field": "Population"},
          "stroke": {"value": "Blue"},
          "strokeWidth": {"value": 1}
        });
        
    h3.mark().type("symbol")
        .from({"data": "sap"})
        .enter({
          "x": {"scale": "x", "field": "GNP"},
          "y": {"scale": "y", "field": "Population"},
          "fill": {"value": "#fff"},
          "stroke": {"value": "#000"},
          "strokeWidth": {"value": 1},
          "size": {"value": 100}})
          .update({"fill": {"value": "steelblue"}})
          .hover({"fill": {"value": "red"}});
         
        
    return h3;
}

