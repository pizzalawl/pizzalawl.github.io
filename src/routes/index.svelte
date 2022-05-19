<style lang="scss">
    $title-color: white;
    @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400&display=swap');

    :global(body) {
        background: black;
    }

    .title {
        color: $title-color;
        text-align: center;
    }

    #main-title {
        transform: translateX(-5%);
        font-size: 5rem;
        font-family: 'Oswald', sans-serif;
        font-weight: 400;
    }

    #title-subtext {
        font-size: 2rem;
        transform: translateY(-100%);
        font-family: 'Oswald', sans-serif;
        font-weight: 300;
    }

    #portfolio-box {
        font-family: 'Oswald', sans-serif;
        font-weight: 300;
        background-color: white;
        width: 60vw;
        height: 60vh;
        transform: translateX(30%);
    }

    #icon-navbar {
        display: grid;
        gap: 0.5rem;
        grid-template-columns: 1fr 1fr 1fr;
        width: 60vw;
        height: 10vh;
    }

    .grid-item {
        border-right: black solid 0.5rem;
    }
    .grid-item:hover {
        background-color: yellow;
    }

    #grid-item3 {
        border-right: white solid 0.5rem;
    }
</style>

<h1 class="title" id="main-title">pizzalawl</h1>
<h2 class="title" id="title-subtext">an awesome website with website with awesome projects</h2>

<div id="portfolio-box">
    <nav id="icon-navbar">
        <div class="grid-item"><img src="webdev-icon.png" alt="webdev-icon"></div>
        <div class="grid-item">COMING SOON</div>
        <div class="grid-item" id="grid-item3">COMING SOON</div>
    </nav>
    
    <div id="info-box">
        
    </div>    
</div>


