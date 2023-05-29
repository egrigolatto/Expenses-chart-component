

const datos = () =>{

    fetch('data.json')
        .then(response => response.json())
        .then(data => {

          const results = document.getElementById("results")

          const maxMonto = Math.max(...data.map(item => item.amount));

          data.forEach(element => {

            const dayContainer = document.createElement("div");
            dayContainer.className = "bar-cont";

            const bar = document.createElement("div");
            bar.className = "bar";
            bar.style.height = element.amount*3+"px";

            if (element.amount === maxMonto) {
              bar.classList.add('highest');
            }

            const day = document.createElement("div");
            day.style = "day";
            day.textContent = element.day;

            const barTooltip = document.createElement('p');
            barTooltip.className = 'bar-tooltip';
            barTooltip.textContent = '$' + element.amount;

            dayContainer.appendChild(bar);
            dayContainer.appendChild(day);
            bar.appendChild(barTooltip);

            results.appendChild(dayContainer)

           });


       })
       .catch(error =>{
       console.log(error);
       })
}

datos()


