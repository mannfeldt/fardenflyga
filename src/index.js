
let app = new Vue({
  el: '#app',
  data: {
    search: '',
    settings: {
      sortBy: 'id',
      descending: false,
      page: 1,
      rowsPerPage: 10
    },
    measurement: {},
    headers: [
      {
        text: 'Flygbolag',
        align: 'left',
        value: 'name'
      },
      { text: 'Vikt (kg)', value: 'weight', align: 'right' },
      { text: 'Höjd (cm)', value: 'height', align: 'right' },
      { text: 'Bredd (cm)', value: 'width', align: 'right' },
      { text: 'Djup (cm)', value: 'depth', align: 'right' },
    ],
    airlines: [
      { id: 0, name: 'Norwegian', weight: 8, height: 55, width: 40, depth: 23, },
      { id: 1, name: 'SAS', weight: 8, height: 55, width: 40, depth: 23, },
      { id: 2, name: 'Lufthansa', weight: 8, height: 55, width: 40, depth: 23, },
      { id: 3, name: 'KLM', weight: 12, height: 55, width: 35, depth: 25, },
      { id: 4, name: 'Ryanair', weight: 10, height: 55, width: 40, depth: 20 },
      { id: 5, name: 'British Airways', weight: 23, height: 56, width: 45, depth: 25, },
      { id: 6, name: 'Easyjet', height: 56, width: 45, depth: 25, },
      { id: 7, name: 'Finnair', weight: 8, height: 56, width: 45, depth: 25, },
      { id: 8, name: 'Nextjet', weight: 5, height: 45, width: 35, depth: 20, },
      { id: 9, name: 'BRA', weight: 8, height: 50, width: 40, depth: 25, },
      { id: 10, name: 'Scandinavian airlines', weight: 8, height: 55, width: 40, depth: 23, },
      { id: 11, name: 'Wizzair', weight: 10, height: 55, width: 40, depth: 23, },
      { id: 12, name: 'AirFrance', weight: 12, height: 55, width: 35, depth: 25, },
      { id: 13, name: 'Emirates', weight: 7, height: 55, width: 38, depth: 20, },
      { id: 14, name: 'China airlines', weight: 7, height: 56, width: 36, depth: 23, },
      { id: 15, name: 'Pegasus', weight: 8, height: 55, width: 40, depth: 20, },
      { id: 16, name: 'Vueling', weight: 10, height: 55, width: 40, depth: 20, },
      { id: 17, name: 'Turkish Airlines', weight: 8, height: 55, width: 40, depth: 23, },
      { id: 18, name: 'Hop!', weight: 12, height: 55, width: 35, depth: 25, },
      { id: 19, name: 'United airlines', height: 56, width: 35, depth: 22, },
      { id: 20, name: 'US airways', height: 56, width: 36, depth: 23, },
      { id: 21, name: 'Jet airways', weight: 7, height: 55, width: 35, depth: 25, },
      { id: 22, name: 'Delta airlines', height: 56, width: 35, depth: 23, },
      { id: 23, name: 'Tui fly', weight: 10, height: 55, width: 40, depth: 25, },
      { id: 24, name: 'Thai airways', weight: 7, height: 56, width: 45, depth: 25, },
      { id: 25, name: 'Air India', weight: 8, height: 55, width: 40, depth: 20, },
      { id: 26, name: 'TUI', weight: 6, height: 55, width: 35, depth: 25, },
      { id: 27, name: 'Qatar airways', weight: 7, height: 50, width: 37, depth: 25, },
      { id: 28, name: 'American airlines', height: 56, width: 36, depth: 23, },
      { id: 29, name: 'Aeromexico', weight: 10, height: 56, width: 36, depth: 23, },
      { id: 30, name: 'Virgin atlantic', weight: 10, height: 56, width: 36, depth: 23, },
      { id: 31, name: 'Jet2', weight: 10, height: 56, width: 45, depth: 25, },
      { id: 32, name: 'Aer lingus', weight: 10, height: 55, width: 40, depth: 24, },
      { id: 33, name: 'Aeroflot', weight: 10, height: 55, width: 40, depth: 25, },
      { id: 34, name: 'Air transat', weight: 10, height: 51, width: 40, depth: 23, },
      { id: 35, name: 'Czech airlines', weight: 8, height: 55, width: 45, depth: 25, },
      { id: 36, name: 'Etihad airways', weight: 7, height: 50, width: 40, depth: 21, },
      { id: 37, name: 'Japan airlines', weight: 10, height: 55, width: 40, depth: 25, },
      { id: 38, name: 'Flybe', weight: 10, height: 55, width: 35, depth: 20, },
      { id: 39, name: 'Qantas', weight: 7, height: 56, width: 36, depth: 23, },
      { id: 40, name: 'Asiana airlines', weight: 10, height: 55, width: 40, depth: 20, },
      { id: 41, name: 'Condor', weight: 6, height: 55, width: 40, depth: 20, },
      { id: 42, name: 'El Al', weight: 8, height: 56, width: 45, depth: 25, },
      { id: 43, name: 'Air europa', weight: 10, height: 55, width: 35, depth: 25, },
    ]
  },
  methods: {
    setselectedmeasurement(selection) {
      this.measurement = selection;
    }
  },
  components: {
    "airline-groups": {
      props: ['airlines'],
      data: function () {
        const classification = {
          xs: { height: 55, width: 35, depth: 25 },
          s: { height: 55, width: 40, depth: 20 },
          m: { height: 55, width: 40, depth: 23 },
          l: { height: 56, width: 36, depth: 23 },
          xl: { height: 56, width: 45, depth: 25 }
        };
        let airlinesGroups = [];
        let xs = this.airlines.filter(a => a.height === classification.xs.height && a.width === classification.xs.width && a.depth === classification.xs.depth);
        let s = this.airlines.filter(a => a.height === classification.s.height && a.width === classification.s.width && a.depth === classification.s.depth);
        let m = this.airlines.filter(a => a.height === classification.m.height && a.width === classification.m.width && a.depth === classification.m.depth);
        let l = this.airlines.filter(a => a.height === classification.l.height && a.width === classification.l.width && a.depth === classification.l.depth);
        let xl = this.airlines.filter(a => a.height === classification.xl.height && a.width === classification.xl.width && a.depth === classification.xl.depth);
        let breakpoint = this.$vuetify.breakpoint.name;
        if (breakpoint === "sm") {
          let maxLength = Math.max(xs.length, s.length);
          xs.length = maxLength;
          s.length = maxLength;

          maxLength = Math.max(m.length, l.length);
          m.length = maxLength;
          l.length = maxLength;

        } else if (breakpoint !== "xs") {
          let maxLength = Math.max(xs.length, s.length, m.length);
          xs.length = maxLength;
          s.length = maxLength;
          m.length = maxLength;

          maxLength = Math.max(l.length, xl.length);
          l.length = maxLength;
          xl.length = maxLength;
        }
        //let allSizes = xs.concat(s).concat(m).concat(l).concat(xl);
        //let other = this.airlines.filter(a => !allSizes.some(b => a.id === b.id));
        airlinesGroups.push({ name: '55x35x25', color: '#2e7d32', airlines: xs });
        airlinesGroups.push({ name: '55x40x20', color: '#1565c0', airlines: s });
        airlinesGroups.push({ name: '55x40x23', color: '#424242', airlines: m });
        airlinesGroups.push({ name: '56x36x23', color: '#b71c1c', airlines: l });
        airlinesGroups.push({ name: '56x45x25', color: '#ef6c00', airlines: xl });
        //airlinesGroups.push({ name: 'andra', color: 'orange', airlines: other });

        return {
          airlinegroups: airlinesGroups,
        }
      },
      template: `
      <v-layout row wrap>
      <v-flex
        xs12
        sm6
        md4
        lg2
        v-for="(airlinegroup, index) in airlinegroups" :key="airlinegroup.name"
      >
        <v-card :color="airlinegroup.color" class="white--text">
          <v-card-title style="fontSize: 20px">{{ airlinegroup.name }} <v-btn target='_blank' :href="'https://www.samsonite.se/allt-bagage/?prefn1=customAirlineReferences&prefv1='+ airlinegroup.name +'cm'">Köp</v-btn></v-card-title>
          <v-divider></v-divider>
          <v-list :style="{ backgroundColor: airlinegroup.color}">
            <v-list-tile dense v-for="(airline, index) in airlinegroup.airlines" :key="index" class="white--text">
              <v-list-tile-content>{{ airline ? airline.name : '' }}</v-list-tile-content>
              <v-list-tile-content class="align-end">{{ airline ? (airline.weight ? airline.weight +'kg': '-'): ''}}</v-list-tile-content>
              </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
      </v-layout>
        `
    },
    "airline-table": {
      props: ['airlines', 'headers', 'search', 'settings'],
      data: function () {
        return {
          localSettings: this.settings,
          localSearch: this.search
        }
      },
      template: `
        <v-card>
        <v-card-title>
          <v-spacer></v-spacer>
          <v-text-field
            v-model="localSearch"
            append-icon="search"
            label="Sök"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="airlines"
          rows-per-page-text="rader per sida"
          :search="localSearch"
          :pagination.sync="localSettings"
        >
          <template slot="items" slot-scope="props">
            <td>{{ props.item.name }}</td>
            <td class="text-xs-right">{{ props.item.weight }}</td>
            <td class="text-xs-right">{{ props.item.height }}</td>
            <td class="text-xs-right">{{ props.item.width }}</td>
            <td class="text-xs-right">{{ props.item.depth }}</td>
          </template>
          <v-alert slot="no-results" :value="true" color="error" icon="warning">
            Your search for "{{ localSearch }}" found no results.
          </v-alert>
        </v-data-table>
      </v-card>
        `
    },
    'airline-selector': {
      props: ['measurement', 'setselectedmeasurement', 'allairlines'],
      computed: {
        getMatchingAirlines() {
          const matchingAirlines = this.allairlines.filter(a =>
            a.height >= this.stateMeasurement.height[0] && a.height <= this.stateMeasurement.height[1] &&
            a.width >= this.stateMeasurement.width[0] && a.width <= this.stateMeasurement.width[1] &&
            a.depth >= this.stateMeasurement.depth[0] && a.depth <= this.stateMeasurement.depth[1] &&
            a.weight >= this.stateMeasurement.weight[0] && a.weight <= this.stateMeasurement.weight[1]
          );
          return matchingAirlines;
        }
      },
      data: function () {
        const stateMeasurement = { height: [this.getMinHeight(), this.getMaxHeight()], width: [this.getMinWidth(), this.getMaxWidth()], depth: [this.getMinDepth(), this.getMaxDepth()], weight: [this.getMinWeight(), this.getMaxWeight()] };
        const matchingAirlines = this.allairlines.filter(a =>
          a.height >= stateMeasurement.height[0] && a.height <= stateMeasurement.height[1] &&
          a.width >= stateMeasurement.width[0] && a.width <= stateMeasurement.width[1] &&
          a.depth >= stateMeasurement.depth[0] && a.depth <= stateMeasurement.depth[1] &&
          a.weight >= stateMeasurement.weight[0] && a.weight <= stateMeasurement.weight[1]
        );
        return {
          stateMeasurement: stateMeasurement,
          minHeight: stateMeasurement.height[0],
          maxHeight: stateMeasurement.height[1],
          minWidth: stateMeasurement.width[0],
          maxWidth: stateMeasurement.width[1],
          minDepth: stateMeasurement.depth[0],
          maxDepth: stateMeasurement.depth[1],
          minWeight: stateMeasurement.weight[0],
          maxWeight: stateMeasurement.weight[1],
          matchingAirlines: matchingAirlines,
        }
      },
      mounted: function () {
        this.$nextTick(function () {
          this.draw(Date.now(), this.stateMeasurement);

        })
      },
      methods: {
        updatemeasurement() {
          this.$emit('setselectedmeasurement', this.stateMeasurement);
          this.draw(Date.now(), this.stateMeasurement);
        },
        draw(startTime, measurement) {
          const breakpoints = {
            xs: { pixelratio: 3, xPos: 100, yPos: 240, canvasHeight: 250, canvasWidth: 280 },
            sm: { pixelratio: 4, xPos: 140, yPos: 320, canvasHeight: 500, canvasWidth: 300 },
            md: { pixelratio: 4, xPos: 200, yPos: 340, canvasHeight: 500, canvasWidth: 400 },
            lg: { pixelratio: 5, xPos: 240, yPos: 380, canvasHeight: 500, canvasWidth: 500 },
            xl: { pixelratio: 5, xPos: 340, yPos: 380, canvasHeight: 500, canvasWidth: 600 }
          }
          let breakpoint = this.$vuetify.breakpoint.name;
          var animationTime = 1;
          var stoptime = animationTime * 1000;
          var time = (Date.now() - startTime);
          var canvas = document.getElementById('my-canvas');
          var ctx = canvas.getContext('2d');
          canvas.width = breakpoints[breakpoint].canvasWidth;
          canvas.height = breakpoints[breakpoint].canvasHeight;

          ctx.clearRect(0, 0, breakpoints[breakpoint].canvasWidth, breakpoints[breakpoint].canvasHeight);
          let pixelratio = breakpoints[breakpoint].pixelratio;
          /*animation
          let drawRatio = time / (stoptime / 3);
          let depthPathLength = (measurement.depth[0] * pixelratio) * (Math.min(1, drawRatio));
          let widthPathLength = (measurement.width[0] * pixelratio) * (Math.min(1, Math.max(0, drawRatio - 1)));
          let heightPathLength = (measurement.height[0] * pixelratio) * (Math.min(1, Math.max(0, drawRatio - 2)));
          let depthPathLengthMax = (measurement.depth[1] * pixelratio) * (Math.min(1, drawRatio));
          let widthPathLengthMax = (measurement.width[1] * pixelratio) * (Math.min(1, Math.max(0, drawRatio - 1)));
          let heightPathLengthMax = (measurement.height[1] * pixelratio) * (Math.min(1, Math.max(0, drawRatio - 2)));
          */
          //no animation
          let depthPathLength = measurement.depth[0] * pixelratio;
          let widthPathLength = measurement.width[0] * pixelratio;
          let heightPathLength = measurement.height[0] * pixelratio;
          let depthPathLengthMax = measurement.depth[1] * pixelratio;
          let widthPathLengthMax = measurement.width[1] * pixelratio;
          let heightPathLengthMax = measurement.height[1] * pixelratio;
          this.drawCube(
            breakpoints[breakpoint].xPos,
            breakpoints[breakpoint].yPos,
            depthPathLength,
            widthPathLength,
            heightPathLength,
            '#1976d2',
            ctx,
          );

          this.drawCube(
            breakpoints[breakpoint].xPos,
            breakpoints[breakpoint].yPos,
            depthPathLengthMax,
            widthPathLengthMax,
            heightPathLengthMax,
            '#1976d2',
            ctx,
          );
          const that = this;
          if (time < stoptime) {
            window.requestAnimationFrame(function () {
              that.draw(startTime, measurement);
            });
          }
        },
        drawCube(x, y, wx, wy, h, color, ctx) {
          ctx.globalAlpha = 0.7;
          ctx.globalCompositeOperation = "multiply"
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x - wx, y - wx * 0.2);
          ctx.lineTo(x - wx, y - h - wx * 0.2);
          ctx.lineTo(x, y - h * 1);
          ctx.strokeStyle = color;
          ctx.stroke();
          ctx.fillStyle = this.shadeColor(color, -10);
          ctx.fill();

          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x + wy, y - wy * 0.2);
          ctx.lineTo(x + wy, y - h - wy * 0.2);
          ctx.lineTo(x, y - h * 1);
          ctx.closePath();
          ctx.strokeStyle = this.shadeColor(color, 50);
          ctx.stroke();
          ctx.fillStyle = this.shadeColor(color, -10);
          ctx.fill();

          ctx.beginPath();
          ctx.moveTo(x, y - h);
          ctx.lineTo(x - wx, y - h - wx * 0.2);
          ctx.lineTo(x - wx + wy, y - h - (wx * 0.2 + wy * 0.2));
          ctx.lineTo(x + wy, y - h - wy * 0.2);
          ctx.closePath();
          ctx.strokeStyle = this.shadeColor(color, 60);
          ctx.stroke();
          ctx.fillStyle = this.shadeColor(color, 20);
          ctx.fill();

        },
        shadeColor(color, percent) {
          color = color.substr(1);
          var num = parseInt(color, 16),
            amt = Math.round(2.55 * percent),
            R = (num >> 16) + amt,
            G = (num >> 8 & 0x00FF) + amt,
            B = (num & 0x0000FF) + amt;
          return '#' + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 + (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 + (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
        },
        getMinHeight() {
          const airline = this.allairlines.reduce((prev, current) => (prev.height < current.height) ? prev : current);
          return airline.height;
        },
        getMaxHeight() {
          const airline = this.allairlines.reduce((prev, current) => (prev.height > current.height) ? prev : current);
          return airline.height;
        },
        getMinWidth() {
          const airline = this.allairlines.reduce((prev, current) => (prev.width < current.width) ? prev : current);
          return airline.width;
        },
        getMaxWidth() {
          const airline = this.allairlines.reduce((prev, current) => (prev.width > current.width) ? prev : current);
          return airline.width;
        },
        getMinDepth() {
          const airline = this.allairlines.reduce((prev, current) => (prev.depth < current.depth) ? prev : current);
          return airline.depth;
        },
        getMaxDepth() {
          const airline = this.allairlines.reduce((prev, current) => (prev.depth > current.depth) ? prev : current);
          return airline.depth;
        },
        getMinWeight() {
          const airlinesWithWeight = this.allairlines.filter(a => a.weight > 0);
          const airline = airlinesWithWeight.reduce((prev, current) => (prev.weight < current.weight) ? prev : current);
          return airline.weight;
        },
        getMaxWeight() {
          const airlinesWithWeight = this.allairlines.filter(a => a.weight > 0);
          const airline = airlinesWithWeight.reduce((prev, current) => (prev.weight > current.weight) ? prev : current);
          return airline.weight;
        }
      },
      template: `
      <div>
      <v-layout row wrap>
      <v-flex xs12 sm6>
      <div>
      <v-card-text>
      <v-subheader class="pl-0">Vikt</v-subheader>
      <v-range-slider
        v-model="stateMeasurement.weight"
        :max="maxWeight"
        :min="minWeight"
        v-on:change="updatemeasurement" 
        thumb-label="always"
      ></v-range-slider>
      </v-card-text>
      <v-card-text>
      <v-subheader class="pl-0">Höjd</v-subheader>
      <v-range-slider
        v-model="stateMeasurement.height"
        :max="maxHeight"
        :min="minHeight"
        v-on:change="updatemeasurement"
        thumb-label="always"
      ></v-range-slider>
    </v-card-text>
    <v-card-text>
    <v-subheader class="pl-0">Bredd</v-subheader>
    <v-range-slider
      v-model="stateMeasurement.width"
      :max="maxWidth"
      :min="minWidth"
      v-on:change="updatemeasurement"
      thumb-label="always"
    ></v-range-slider>
    </v-card-text>
    <v-card-text>
    <v-subheader class="pl-0">Djup</v-subheader>
    <v-range-slider
      v-model="stateMeasurement.depth"
      :max="maxDepth"
      :min="minDepth"
      v-on:change="updatemeasurement"
      thumb-label="always"
    ></v-range-slider>
  </v-card-text>
    </div>
    </v-flex>
    <v-flex xs12 sm6>
    <v-subheader class="pl-0">Illustration</v-subheader>
      <canvas id="my-canvas"></canvas>
      </v-flex>
      </v-layout>
      <v-layout justify-center>
      <v-flex xs12 md6 xl4 >
      <v-subheader v-if="getMatchingAirlines.length>0">Din filtrering matchar följande flygbolag</v-subheader>
      <v-subheader v-else>Din filtrering matchar inget flygbolag</v-subheader>
        <v-list v-for="(airline, index) in getMatchingAirlines" :key="index">
        <v-list-tile dense >
          <v-list-tile-content>{{ airline.name}}</v-list-tile-content>
          <v-list-tile-content class="align-end">{{airline.height + 'x' + airline.width + 'x' + airline.depth + ' ' + (airline.weight ? airline.weight +'kg': '')}}</v-list-tile-content>
          </v-list-tile>
          <v-divider :key="index"></v-divider>
      </v-list>
      </v-flex>
      </v-layout>
      </div>
      `
    },
  }
})