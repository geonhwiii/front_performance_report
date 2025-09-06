function showTopBar(){
    let country = "France";
    let vat = 20;
    // Remove setTimeout to prevent CLS - show immediately after DOM load
    document.querySelector("section.country-bar")
    .innerHTML = `<p>Orders to <b>${country}</b> are subject to <b>${vat}%</b> VAT</p>`
    document.querySelector("section.country-bar")
    .classList.remove('hidden')
}



showTopBar();




