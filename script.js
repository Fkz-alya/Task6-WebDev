function calculateTotal() {
    const components = [
        { id: 'motherboard', name: 'Motherboard' },
        { id: 'cpu', name: 'CPU' },
        { id: 'gpu', name: 'GPU' },
        { id: 'ram', name: 'RAM' },
        { id: 'storage', name: 'Storage device' }
    ];

    let total = 0;
    const selectedComponents = [];

    components.forEach(component => {
        const selectElement = document.getElementById(component.id);
        const selectedOption = selectElement.options[selectElement.selectedIndex];
        const price = parseFloat(selectedOption.value);
        if (price > 0) {
            total += price;
            selectedComponents.push(`${component.name}: ${selectedOption.text}`);
        }
    });

    document.getElementById('total-price').innerText = total.toFixed(2);

    const goodsElement = document.getElementById('goods');
    goodsElement.innerHTML = '';
    selectedComponents.forEach(component => {
        const div = document.createElement('div');
        div.textContent = component;
        goodsElement.appendChild(div);
    });
}