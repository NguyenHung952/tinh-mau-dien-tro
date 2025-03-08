const colorCodes = [
    { color: "Đen", value: 0, multiplier: 1, tolerance: "-" },
    { color: "Nâu", value: 1, multiplier: 10, tolerance: "±1%" },
    { color: "Đỏ", value: 2, multiplier: 100, tolerance: "±2%" },
    { color: "Cam", value: 3, multiplier: 1000, tolerance: "-" },
    { color: "Vàng", value: 4, multiplier: 10000, tolerance: "-" },
    { color: "Xanh lục", value: 5, multiplier: 100000, tolerance: "±0.5%" },
    { color: "Xanh dương", value: 6, multiplier: 1000000, tolerance: "±0.25%" },
    { color: "Tím", value: 7, multiplier: 10000000, tolerance: "±0.1%" },
    { color: "Xám", value: 8, multiplier: 100000000, tolerance: "±0.05%" },
    { color: "Trắng", value: 9, multiplier: 1000000000, tolerance: "-" },
    { color: "Vàng kim", value: "-", multiplier: 0.1, tolerance: "±5%" },
    { color: "Bạc", value: "-", multiplier: 0.01, tolerance: "±10%" }
];

function populateSelect(id) {
    let select = document.getElementById(id);
    colorCodes.forEach(color => {
        let option = document.createElement("option");
        option.value = color.value;
        option.textContent = color.color;
        select.appendChild(option);
    });
}

function calculateResistance() {
    let band1 = document.getElementById("band1").value;
    let band2 = document.getElementById("band2").value;
    let band3 = document.getElementById("band3").value;
    let multiplier = document.getElementById("multiplier").value;
    let tolerance = document.getElementById("tolerance").options[document.getElementById("tolerance").selectedIndex].text;

    let resistance = (parseInt(band1) * 100 + parseInt(band2) * 10 + parseInt(band3)) * parseFloat(multiplier);
    document.getElementById("result").innerText = `⚡ Giá trị điện trở: ${resistance}Ω ± ${tolerance}`;
}

["band1", "band2", "band3", "multiplier", "tolerance"].forEach(id => populateSelect(id));
