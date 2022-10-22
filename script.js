let $usersContainer = document.getElementById('users-container');


for (let i = 0; i < data.length; i++) {
    $usersContainer.innerHTML += `
    <div id="user-item" class="user-item">
    <div class="user-item-content">
    <div class="user-avatar">
        <img src="${data[i].avatar}" alt="">
    </div>
    <div class="user-info">
        <h2 class="Merriweather">${data[i].name}</h2>
        <p id="user-address">${data[i].address}</p>
        <div class="favourite">
            <p class="favourite-item">${data[i].favourite1}</p>
            <p class="favourite-item">${data[i].favourite2}</p>
        </div>
    </div>
    </div>
    </div>`
}