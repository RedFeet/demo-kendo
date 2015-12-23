export class CustomVisuals {
  seriesDefaults = {
    type: "column",
    stack: true,
    highlight: {
        toggle: function (e) {
            // Don't create a highlight overlay,
            // we'll modify the existing visual instead
            e.preventDefault();

            var visual = e.visual;
            var opacity = e.show ? 0.8 : 1;

            visual.opacity(opacity);
        }
    },
    visual: (e) => {
        return this.createColumn(e.rect, e.options.color);
    }
  };

  series = [{
      name: "Total Visits",
      data: [56000, 63000, 74000, 91000, 117000, 138000, 128000, 115000, 102000, 98000, 123000, 113000]
  }, {
      name: "Unique visitors",
      data: [52000, 34000, 23000, 48000, 67000, 83000, 40000, 50000, 64000, 72000, 75000, 81000]
  }];



  panes= [{
      clip: false
  }];

  valueAxis = {
      line: {
          visible: false
      }
  };

  categoryAxis = {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      majorGridLines: {
          visible: false
      },
      line: {
          visible: false
      }
  };

  tooltip = {
      visible: true,
      item: {
          visual: () => this.createLegendItem()
      }
  }

  createColumn(rect, color) {
    var origin = rect.origin;
    var center = rect.center();
    var bottomRight = rect.bottomRight();
    var radiusX = rect.width() / 2;
    var radiusY = radiusX / 3;
    var gradient = new kendo.drawing.LinearGradient({
        stops: [{
            offset: 0,
            color: color
        }, {
            offset: 0.5,
            color: color,
            opacity: 0.9
        }, {
            offset: 0.5,
            color: color,
            opacity: 0.9
        }, {
            offset: 1,
            color: color
        }]
    });

    var path = new kendo.drawing.Path({
            fill: gradient,
            stroke: {
                color: "none"
            }
        }).moveTo(origin.x, origin.y)
        .lineTo(origin.x, bottomRight.y)
        .arc(180, 0, radiusX, radiusY, true)
        .lineTo(bottomRight.x, origin.y)
        .arc(0, 180, radiusX, radiusY);

    var topArcGeometry = new kendo.geometry.Arc([center.x, origin.y], {
        startAngle: 0,
        endAngle: 360,
        radiusX: radiusX,
        radiusY: radiusY
    });

    var topArc = new kendo.drawing.Arc(topArcGeometry, {
        fill: {
            color: color
        },
        stroke: {
            color: "#ebebeb"
        }
    });
    var group = new kendo.drawing.Group();
    group.append(path, topArc);
    return group;
  }

  createLegendItem(e) {
      var color = e.options.markers.background;
      var labelColor = e.options.labels.color;
      var rect = new kendo.geometry.Rect([0, 0], [120, 50]);
      var layout = new kendo.drawing.Layout(rect, {
          spacing: 5,
          alignItems: "center"
      });

      var overlay = drawing.Path.fromRect(rect, {
          fill: {
              color: "#fff",
              opacity: 0
          },
          stroke: {
              color: "none"
          },
          cursor: "pointer"
      });

      var column = createColumn(new kendo.geometry.Rect([0, 0], [15, 10]), color);
      var label = new kendo.drawing.Text(e.series.name, [0, 0], {
          fill: {
              color: labelColor
          }
      })

      layout.append(column, label);
      layout.reflow();

      var group = new kendo.drawing.Group().append(layout, overlay);

      return group;
  }
}
