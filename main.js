
const images = [ 
    "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2255&q=80",
    "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
    "https://images.unsplash.com/photo-1485160497022-3e09382fb310?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
    "https://images.unsplash.com/photo-1475694867812-f82b8696d610?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80",
    "https://images.unsplash.com/photo-1526080676457-4544bf0ebba9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
    "https://images.unsplash.com/photo-1444927714506-8492d94b4e3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2255&q=80",
    "https://images.unsplash.com/photo-1486728297118-82a07bc48a28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2301&q=80",
    "https://images.unsplash.com/photo-1456066775592-f14f4ea694a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2300&q=80",
    "https://images.unsplash.com/photo-1444090542259-0af8fa96557e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80",
    "https://images.unsplash.com/photo-1516690553959-71a414d6b9b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
    "https://images.unsplash.com/photo-1535224206242-487f7090b5bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80",
    "https://images.unsplash.com/46/iYvDeqVGRbebiQv2PIJi_DSC_8407.JPG?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2253&q=80"

]


// const container = document.getElementById('image_container');
const containerTwo = document.getElementById('image_containertwo')


// const sliderONe = () => {
//     images.forEach((image,index, collection) => {

//         container.innerHTML += `
//         <li class="splide__slide">
//             <div id="${index}" class="splide__slide__container">
//                 <img src="${image}" alt="">
//             </div>
//             one love 
//         </li>
//         `
//     })
    
// }

// sliderONe()

const sliderTwo = () => {
    images.forEach((image,index, collection) => {

        image_containertwo.innerHTML += `
        <li class="splide__slide">
            <div id="${index}" class="splide__slide__container">
                <img src="${image}" alt="">
            </div>
            one love 
        </li>
        `
    })
    
}

sliderTwo()
var splide = new Splide( '.splide', {
	type      : 'loop',
    perPage   : 3,
    height    : '15rem',
    gap: 10,
	cover     : true,
	breakpoints: {
		740: {
			perPage: 1,
		},
    },
    
} )

splide.on( 'moved', function () {
	console.log(splide.index)
} );

splide.mount();
