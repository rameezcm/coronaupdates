class RameezDashboard extends HTMLElement {
    constructor() {
        super()
        setInterval(() => this.fetchfromServer(), 1000); // (5)

    }

    connectedCallback() {
        this.fetchfromServer();
        console.log(this.answer);
        this.innerHTML = `<div class="checkout-panel">
        <div class="panel-body">
            <h2 class="title">Rameez Dashboard</h2>

            <div id="step4-content" class=" ">
               
                <table class="table table-bordered table-hover table-condensed">
                <thead>
                <tr>
                <th id="Field #1">country</th>
                <th id="Field #8">cases</th>
                <th id="Field #9">todayCases</th>
                <th id="Field #10">deaths</th>
                <th id="Field #11">todayDeaths</th>
                <th id="Field #12">recovered</th>
                <th id="Field #13">active</th>
                <th id="Field #14">critical</th>
                <th id="Field #16">deathsPerOneMillion</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                <td>Norway</td>
                <td  id="cases" align="right"></td>
                <td id="todayCases" align="right"></td>
                <td id="deaths" align="right"></td>
                <td id="todayDeaths"></td>
                <td id="recovered" align="right"></td>
                <td id="active" align="right"></td>
                <td id="critical" align="right"></td>
                <td id="deathsPerOneMillion" align="right"></td>
                </tr>
                </tbody></table>
                </label>   
            </div>
        </div>
    </div>`;
    }



    async fetchfromServer() {
        const response = await fetch("https://corona.lmao.ninja/countries/Norway", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'https://corona.lmao.ninja'
            }
        });
        const json = await response.json();
        this.answer = json;
        this.querySelector("#cases").innerText = this.answer.cases
        this.querySelector("#todayCases").innerText = this.answer.todayCases
        this.querySelector("#deaths").innerText = this.answer.deaths
        this.querySelector("#todayDeaths").innerText = this.answer.todayDeaths
        this.querySelector("#recovered").innerText = this.answer.recovered
        this.querySelector("#active").innerText = this.answer.active
        this.querySelector("#critical").innerText = this.answer.critical
        this.querySelector("#deathsPerOneMillion").innerText = this.answer.deathsPerOneMillion
        console.log(this.answer);
    }
}
customElements.define("rameez-page", RameezDashboard)